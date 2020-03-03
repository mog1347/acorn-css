const
    fs = require('fs'),
    path = require('path'),
    postcss = require('postcss'),
    _ = require('lodash'),
    parser = require('postcss-selector-parser')

const
    pluginName = "kernel",
    kernelOutputFilePath = path.resolve(__dirname, './css/test.css'),
    kernelOutput = fs.readFileSync(kernelOutputFilePath)


function escapeClassName(className) {
    const node = parser.className()
    node.value = className
    return _.get(node, 'raws.value', node.value)
}

function prefixSelector(prefix, selector) {
    const getPrefix = _.isFunction(prefix) ? prefix : () => prefix

    return parser(selectors => {
        selectors.walkClasses(classSelector => {
            _.tap(classSelector.value, baseClass => {
                classSelector.value = `${getPrefix('.' + baseClass)}${baseClass}`
            })
        })
    }).processSync(selector)
}

function increaseSpecificity(importantVal, selector) {
    return `${importantVal} ${selector}`
}

function buildClassTable(css) {
    const classTable = {}
    css.walkRules(rule => {
        if (!_.has(classTable, rule.selector)) {
            classTable[rule.selector] = []
        }
        classTable[rule.selector].push(rule)
    })
    return classTable
}

function normalizeClassName(className) {
    return `.${escapeClassName(_.trimStart(className, '.'))}`
}

function findClass(classToApply, classTable, onError) {
    const matches = _.get(classTable, classToApply, [])

    if (_.isEmpty(matches)) {
        return []
    }

    if (matches.length > 1) {
        // prettier-ignore
        throw onError(`\`@apply\` cannot be used with ${classToApply} because ${classToApply} is included in multiple rulesets.`)
    }

    const [match] = matches

    if (match.parent.type !== 'root') {
        // prettier-ignore
        throw onError(`\`@apply\` cannot be used with ${classToApply} because ${classToApply} is nested inside of an at-rule (@${match.parent.name}).`)
    }

    return match.clone().nodes
}


function handleApply(atRule, classLookup, kernelLookup, config) {
    const classes = postcss.list.space(atRule.params)

    const decls = _(classes)
        .reject(cssClass => cssClass === '!important')
        .flatMap(cssClass => {
            const classToApply = normalizeClassName(cssClass)
            const onError = message => {
                return atRule.error(message)
            }

            return _.reduce(
                [
                    // Find exact class match in user's CSS
                    () => {
                        return findClass(classToApply, classLookup, onError)
                    },
                    // Find exact class match in shadow lookup
                    () => {
                        return findClass(classToApply, kernelLookup, onError)
                    },
                    // Find prefixed version of class in shadow lookup
                    () => {
                        return findClass(
                            prefixSelector(config.prefix, classToApply),
                            kernelLookup,
                            onError
                        )
                    },
                    // Find important-scoped version of class in shadow lookup
                    () => {
                        return findClass(
                            increaseSpecificity(config.important, classToApply),
                            kernelLookup,
                            onError
                        )
                    },
                    // Find important-scoped and prefixed version of class in shadow lookup
                    () => {
                        return findClass(
                            increaseSpecificity(
                                config.important,
                                prefixSelector(config.prefix, classToApply)
                            ),
                            kernelLookup,
                            onError
                        )
                    },
                    () => {
                        // prettier-ignore
                        throw onError(`\`@apply\` cannot be used with \`${classToApply}\` because \`${classToApply}\` either cannot be found, or its actual definition includes a pseudo-selector like :hover, :active, etc. If you're sure that \`${classToApply}\` exists, make sure that any \`@import\` statements are being properly processed *before* Tailwind CSS sees your CSS, as \`@apply\` can only be used for classes in the same CSS tree.`)
                    },
                ],
                (classDecls, candidate) => (!_.isEmpty(classDecls) ? classDecls : candidate()),
                []
            )
        })
        .value()

    _.tap(_.last(classes) === '!important', important => {
        decls.forEach(decl => (decl.important = important))
    })

    atRule.before(decls)
    atRule.remove()
}

module.exports = postcss.plugin(pluginName, function (config) {

    return function (css) {
        const classLookup = buildClassTable(css)
        const kernelLookup = buildClassTable(postcss.parse(kernelOutput, {from: kernelOutputFilePath}))
        css.walkAtRules('apply', atRule => {
            handleApply(atRule, classLookup, kernelLookup, config)
        })
    }
})