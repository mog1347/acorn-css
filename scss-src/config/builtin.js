/*!
 * Kernel CSS v1.0.0 (https://gitee.com/mog1347/kernel-css)
 * Copyright 2020 FishEleven
 * Licensed under MIT (https://gitee.com/mog1347/kernel-css/LICENSE)
 */

// only some useful pseudo class
const pseudoClassRestrictions = [
    "link",
    "visited",
    "any-link",
    "hover",
    "active",
    "focus",
    "focus-within",

    "checked",
    "disabled",
    "read-only",
    "invalid",
    "valid",

    "first-child",
    "last-child",
    "odd-child", //nth-child(odd)
    "even-child" //nth-child(even)
]
// only some useful pseudo element
const pseudoElementRestrictions = [
    "before",
    "after",
    "placeholder",
    "selection"
]

module.exports = function (theme) {
    return {
        //follow alphabet
        builtin: {
            alignContent: {
                property: "align-content",
                values: {
                    normal: "normal",
                    start: "flex-start",
                    end: "flex-end",
                    center: "center",
                    between: "space-between",
                    around: "space-around",
                    evenly: "space-evenly"
                }
            },
            alignItems: {
                property: "align-items",
                values: {
                    normal: "normal",
                    start: "flex-start",
                    end: "flex-end",
                    center: "center",
                    baseline: "baseline",
                    stretch: "stretch",
                }
            },
            alignSelf: {
                property: "align-self",
                values: {
                    auto: "auto",
                    start: "flex-start",
                    end: "flex-end",
                    center: "center",
                    baseline: "baseline",
                    stretch: "stretch",
                }
            },
            appearance: {
                property: 'appearance',
                values: {
                    none: 'none'
                }
            },

            //BackGround
            backgroundAttachment: {
                property: "background-attachment",
                class: "bg-attach",
                values: ["local", "fixed", "scroll"]
            },
            backgroundBlendMode: {
                disabled: true,
                property: "background-blend-mode",
                class: "bg-blend",
                values: [
                    "normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light",
                    "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"
                ]
            },
            backgroundClip: {
                disabled: true,
                property: "background-clip",
                class: "bg-clip",
                values: {
                    "border": "border-box",
                    "padding": "padding-box",
                    "content": "content-box",
                    "text": "text"
                }
            },
            backgroundColor: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "background-color",
                class: "bg",
                values: theme.colors
            },
            backgroundOrigin: {
                disabled: true,
                property: "background-origin",
                class: "bg-orig",
                values: {
                    "border": "border-box",
                    "padding": "padding-box",
                    "content": "content-box"
                }
            },
            backgroundPosition: {
                property: "background-position",
                class: "bg",
                values: {
                    "t": "top",
                    "r": "right",
                    "b": "bottom",
                    "l": "left",
                    "c": "center",
                    "lb": "left bottom",
                    "lt": "left top",
                    "rb": "right bottom",
                    "rt": "right top"
                }
            },
            backgroundRepeat: {
                property: "background-repeat",
                class: "bg",
                values: ["repeat", "no-repeat", "repeat-x", "repeat-y", "round", "space"]
            },
            backgroundSize:{
                property: "background-size",
                class: "bg",
                values: ["auto", "cover", "contain"]
            },

            //Border
            borderColor:{
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-color",
                class: "b",
                values: theme.colors
            },
            borderStyle:{
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-style",
                class: "b",
                values: ['none',]
            },


            borderWidth:{
                property: "background-size",
            },

            borderCollapse:{
                property:'border-collapse',
                class: "b",
                values: ["collapse", "separate"]
            },

            borderT: {},
            borderY: {
                class: "bx",
                property: ["border-left", "border-right"],
                values: {}
            },

            screenReader: {
                mixin: "screen-reader",
            }
            //
            // fontSize:{
            //
            // },
            //
            // width: {
            //     class: "w-",
            //     rp: true, pc: ["hover", ""], pe: [""],
            //     map: {
            //         0: "0",
            //         1: "1px",
            //         100: "100%",
            //         "100-vw": "100vw",
            //         auto: "auto"
            //     }
            // },
            //
            //
            // //mw-
            // maxWidth: {}
        }
    }
}