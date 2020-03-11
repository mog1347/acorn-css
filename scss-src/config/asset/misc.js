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

misc.useCustomProperty = function (variables, namespace, useCustomProperty) {
    let customProperties = {},
        transformedVariables = {}

    if (useCustomProperty) {
        transformedVariables = _.mapValues(variables, function (variableObj, variableKey) {
            let propertyObj = _.mapKeys(variableObj, function (value, key) {
                return !!namespace
                    ? namespace + "-" + _.kebabCase(variableKey) + "-" + _.kebabCase(key)
                    : _.kebabCase(variableKey) + "-" + _.kebabCase(key)
            })
            let retObject = _.mapValues(variableObj, function (value) {
                return "var( --" + _.findKey(propertyObj, function (v) {
                    return v == value
                }) + ")"
            })
            if (variableKey == "fontFamily" || variableKey == "boxShadow" || variableKey == "transitionProperty") {
                propertyObj = misc.bracketValues(propertyObj)
            }
            _.assign(customProperties, propertyObj)
            return retObject
        })
    } else {
        transformedVariables = _.mapValues(variables, function (variableObj, variableKey) {
            if (variableKey == "transitionProperty" || variableKey == "fontFamily" || variableKey == "boxShadow") {
                return misc.bracketValues(variableObj)
            } else {
                return variableObj
            }
        })
    }
    return [customProperties, transformedVariables]
}

misc.quote = function (val) {
    return JSON.stringify(val)
}
misc.quoteValues = function (obj) {
    return _.mapValues(obj, function (value) {
        return misc.quote(value)
    })
}

misc.bracket = function (val) {
    return `(${val})`
}
misc.bracketValues = function (obj) {
    return _.mapValues(obj, function (value) {
        return misc.bracket(value)
    })
}

misc.applyCustomization = function (ultimate, customization) {
    let ultimateKeys = _.keys(ultimate)
    let filteredCustomization =
        _(customization)
            .pickBy(function (value, key) {
                return _.includes(ultimateKeys, key)
            })
            .mapValues(function (value) {
                return _.pick(value, ["disabled", "responsive", "pseudoClass"])
            })
            .value()

    return _.merge(ultimate, filteredCustomization)
}

module.exports = misc