const
    _ = require("lodash"),
    Color = require("color")

const
    chromaticLightnessPreset = {
        1: 95,
        2: 95 - (95 - 50) / 4 * 1,
        3: 95 - (95 - 50) / 4 * 2,
        4: 95 - (95 - 50) / 4 * 3,
        5: 50,
        6: 15 + (50 - 15) / 4 * 3,
        7: 15 + (50 - 15) / 4 * 2,
        8: 15 + (50 - 15) / 4 * 1,
        9: 15
    },
    neutralLightnessPreset = {
        1: 95,
        2: 95 - (95 - 50) / 8 * 1,
        3: 95 - (95 - 50) / 8 * 2,
        4: 95 - (95 - 50) / 8 * 3,
        5: 95 - (95 - 50) / 8 * 4,
        6: 95 - (95 - 50) / 8 * 5,
        7: 95 - (95 - 50) / 8 * 6,
        8: 95 - (95 - 50) / 8 * 7,
        9: 50,
        10: 15 + (50 - 15) / 8 * 7,
        11: 15 + (50 - 15) / 8 * 6,
        12: 15 + (50 - 15) / 8 * 5,
        13: 15 + (50 - 15) / 8 * 4,
        14: 15 + (50 - 15) / 8 * 3,
        15: 15 + (50 - 15) / 8 * 2,
        16: 15 + (50 - 15) / 8 * 1,
        17: 15
    },
    translucentAlphaPreset = {
        1: 0.2,
        2: 0.3,
        3: 0.4,
        4: 0.5,
        5: 0.6,
        6: 0.7,
        7: 0.8,
    }

function generateLightness(name, colorString, chromatic) {
    let c = Color(colorString),
        ret = {},
        preset = chromatic ? chromaticLightnessPreset : neutralLightnessPreset

    _.keys(preset).forEach(function (key) {
        ret[name + "-" + key] = c.lightness(preset[key]).hex()
    })
    return ret
}

function generateAlpha(name, colorString) {
    let c = Color(colorString),
        ret = {},
        preset = translucentAlphaPreset
    _.keys(preset).forEach(function (key) {
        ret[name + "-" + key] = c.alpha(preset[key]).toString()
    })
    return ret
}

function buildColorChromatic(chromaticObj) {
    let chromatic = {}
    _.forEach(chromaticObj, function (val, key) {
        _.assign(chromatic, generateLightness(key, val, true))
    })
    return chromatic
}

function buildColorNeutral(neutralObj) {
    let neutral = {}
    _.forEach(neutralObj, function (val, key) {
        _.assign(neutral, generateLightness(key, val, false))
    })
    return neutral
}

function buildColorTranslucent(translucentObj) {
    let translucent = {}
    _.forEach(translucentObj, function (val, key) {
        _.assign(translucent, generateAlpha(key, val))
    })
    return translucent
}

function findColorKey(colorObj) {
    return _.mapValues(colorObj, function (val) {
        return Color(val).lightness(50).hex()
    })
}

function buildBoxShadow(color = "black", alpha = "0.5", offsetX = 0, offsetY = 0, blurRadius = 0, spreadRadius = 0, inset = false) {
    color = Color(color).alpha(alpha).toString()
    return `${inset ? "inset" : ""} ${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} ${color}`
}

module.exports = {
    buildColorChromatic: buildColorChromatic,
    buildColorNeutral: buildColorNeutral,
    buildColorTranslucent: buildColorTranslucent,
    findColorKey: findColorKey,
    buildBoxShadow: buildBoxShadow
}