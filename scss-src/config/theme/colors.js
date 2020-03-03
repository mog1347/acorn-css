const
    _ = require('lodash'),
    Color = require('color')

const
    colors = {
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
        mono:{
            white:'white',
            black:'black'
        }
    },
    colorfulPreset = {
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
    neutralPreset = {
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
    }

function generate(name, colorString, colorful) {
    let c = Color(colorString),
        ret = {},
        lightnessPreset = colorful ? colorfulPreset : neutralPreset

    Object.keys(lightnessPreset).forEach(function (key) {
        ret[name + '-' + key] = c.lightness(lightnessPreset[key]).hex()
    })
    return ret
}

let output = {}
_(colors.colorful).keys.forEach(function (key) {
    _.assign(output, generate(key, colors.colorful[key], true))
})
_(colors.neutral).keys.forEach(function (key) {
    _.assign(output, generate(key, colors.neutral[key], false))
})
// console.log(output)
module.exports = output