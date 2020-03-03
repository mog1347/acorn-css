/*!
 * Kernel CSS v1.0.0 (https://gitee.com/mog1347/kernel-css)
 * Copyright 2020 FishEleven
 * Licensed under MIT (https://gitee.com/mog1347/kernel-css/LICENSE)
 */
const _ = require('lodash');
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
                property: "appearance",
                values: {
                    none: "none"
                }
            },

            //background
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
                values: _.merge(theme.color.colorful, theme.color.neutral, {
                    black: "black",
                    white: "white",
                    transparent: "transparent"
                })
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
            backgroundSize: {
                property: "background-size",
                class: "bg",
                values: ["auto", "cover", "contain"]
            },

            //border
            borderCollapse: {
                property: "border-collapse",
                class: "b",
                values: ["collapse", "separate"]
            },
            borderColor: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-color",
                class: "b",
                values: _.assign(theme.colors, {transparent: "transparent"})
            },
            borderStyle: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-style",
                class: "b",
                values: ["none", "solid", "dotted", "dashed", "double"]
            },
            borderWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-width",
                class: "b",
                values: theme.borderWidth
            },
            borderTopWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-top-width",
                class: "bt",
                values: theme.borderWidth
            },
            borderRightWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-right-width",
                class: "br",
                values: theme.borderWidth
            },
            borderBottomWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-bottom-width",
                class: "bb",
                values: theme.borderWidth
            },
            borderLeftWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-left-width",
                class: "bl",
                values: theme.borderWidth
            },
            borderXWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: ["border-left-width", "border-right-width"],
                class: "bx",
                values: theme.borderWidth
            },
            borderYWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: ["border-top-width", "border-bottom-width"],
                class: "by",
                values: theme.borderWidth
            },

            //box-Shadow


            screenReader: {
                mixin: ["sr-only","not-sr-only"],
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