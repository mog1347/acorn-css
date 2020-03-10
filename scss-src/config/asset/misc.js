const _ = require("lodash")

const misc = {}

misc.withNegative = function (variableObj, negativeTag, useCustomProperty) {
    return _.assign({}, variableObj, _.transform(variableObj, function (result, value, key) {
        if (_.parseInt(value) != 0 && value != "auto" && value != "normal" && value != "none") {
            if (useCustomProperty) {
                //style-n0: calc(-1 * var(--px-1))
                result[negativeTag + key] = "calc( -1 * " + value + ")"
            } else {
                //style-n0: -1px
                result[negativeTag + key] = "-" + value
            }
        }
    }, {}))
}

misc.toCustomProperty = function (variables, namespace = null) {

    let customProperties = {}
    let transformedVariables = _.map(variables, function (variableObj, variableKey) {
        let propertyObj = _.mapKeys(variableObj, function (value, key) {
            return !!namespace
                ? "--" + namespace + "-" + _.kebabCase(variableKey) + "-" + _.kebabCase(key)
                : "--" + _.kebabCase(variableKey) + "-" + _.kebabCase(key)
        })
        _.assign(customProperties, propertyObj)

        return _.mapValues(variableObj, function (value) {
            return "var(" + _.findKey(propertyObj, value) + ")"
        })
    })

    return [customProperties, transformedVariables]
}

misc.quote = function (val) {
    return JSON.stringify(val)
}

misc.unquote = function (val) {
    return JSON.parse(val)
}

misc.applyCustomization = function (builtin, customization) {
    let builtinKeys = _.keys(builtin)
    let filteredCustomization =
        _(customization)
            .pickBy(function (value, key) {
                return _.includes(builtinKeys, key)
            })
            .mapValues(function (value) {
                return _.pick(value, ["disabled", "responsive", "pseudoClass"])
            })
            .value()

    return _.assign({}, builtin, filteredCustomization)
}

module.exports = misc