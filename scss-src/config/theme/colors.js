const
    _ = require('lodash'),
    Color = require('color')

const
    initColor = {
        colorful: {
            red: '#F5222D',
            volcano: '#FA541C',
            orange: '#FA8C16',
            gold: '#FAAD14',
            yellow: '#FADB14',
            lime: '#A0D911',
            green: '#52C41A',
            cyan: '#13C2C2',
            ocean: '#1890FF',
            blue: '#2F54EB',
            purple: '#722ED1',
            violet: '#B315EA',
            magenta: '#EB2F96'
        },
        neutral: {
            gray: '#666666',
            slate: '#434b5c'
        },
        lightDark: {
            light: 'white',
            dark: 'black'
        }
    },
    colorfulMainKey = '5',
    colorfulLightnessPreset = {
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
    neutralMainKey = '9',
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
    lightDarkAlphaPreset = {
        1: 0.8,
        2: 0.7,
        3: 0.6,
        4: 0.5,
        5: 0.4,
        6: 0.3,
        7: 0.2
    }


let colorful = {},
    colorfulMain = {},
    neutral = {},
    neutralMain = {},
    lightDark = {}

function generateLightness(name, colorString, colorful) {
    let c = Color(colorString),
        ret = {},
        preset = colorful ? colorfulLightnessPreset : neutralLightnessPreset

    _.keys(preset).forEach(function (key) {
        ret[name + '-' + key] = c.lightness(preset[key]).hex()
        if(colorful){
            if (key === colorfulMainKey) {
                colorfulMain[name] = ret[name + '-' + key]
            }
        }else{
            if (key === neutralMainKey) {
                neutralMain[name] = ret[name + '-' + key]
            }
        }

    })
    return ret
}

function generateAlpha(name, colorString) {
    let c = Color(colorString),
        ret = {},
        preset = lightDarkAlphaPreset
    _.keys(preset).forEach(function (key) {
        ret[name + '-' + key] = c.alpha(preset[key]).toString()
    })
    return ret
}

_(initColor.colorful).keys().forEach(function (key) {
    _.assign(colorful, generateLightness(key, initColor.colorful[key], true))
})
_(initColor.neutral).keys().forEach(function (key) {
    _.assign(neutral, generateLightness(key, initColor.neutral[key], false))
})

_(initColor.lightDark).keys().forEach(function (key) {
    _.assign(lightDark, generateAlpha(key, initColor.lightDark[key]))
})

module.exports = {
    colorful: colorful,
    neutral: neutral,
    colorfulMain:colorfulMain,
    neutralMain:neutralMain,
    lightDark: lightDark
}