/*!
 * Kernel CSS v1.0.0 (https://gitee.com/mog1347/kernel-css)
 * Copyright 2020 FishEleven
 * Licensed under MIT (https://gitee.com/mog1347/kernel-css/LICENSE)
 */
const _ = require('lodash');


const assignWithNative = function (obj) {
    return _.assign({}, obj, _.transform(obj, function (result, value, key) {
        if (key != 0) {
            result['n' + key] = '-' + value;
        }
    }, {}));
};

module.exports = function (theme) {
    return {
        namespace: theme.namespace,

        suffixes: theme.suffixes,

        responsive: theme.responsive,

        container: theme.container,

        layout: theme.layout,


        //follow alphabet
        atom: {
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
                values: _.assign({},
                    theme.variables.colors.colorful,
                    theme.variables.colors.neutral,
                    theme.variables.colors.lightDark, {
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
                values: _.assign({},
                    theme.variables.colors.colorful,
                    theme.variables.colors.neutral, {
                        black: "black",
                        white: "white"
                    })
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
                values: theme.variables.borderWidths
            },
            borderTopWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-top-width",
                class: "bt",
                values: theme.variables.borderWidths
            },
            borderRightWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-right-width",
                class: "br",
                values: theme.variables.borderWidths
            },
            borderBottomWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-bottom-width",
                class: "bb",
                values: theme.variables.borderWidths
            },
            borderLeftWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: "border-left-width",
                class: "bl",
                values: theme.variables.borderWidths
            },
            borderXWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: ["border-left-width", "border-right-width"],
                class: "bx",
                values: theme.variables.borderWidths
            },
            borderYWidth: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                pseudoElement: ["before", "after"],
                property: ["border-top-width", "border-bottom-width"],
                class: "by",
                values: theme.variables.borderWidths
            },

            //box-Shadow

            screenReader: {
                mixin: ["sr-only", "not-sr-only"],
            },

            // Margin
            margin: {
                responsive: true,
                property: "margin",
                class: "m",
                value: _.assign({}, assignWithNative(theme.variables.gaps), {auto: 'auto'})
            },
            marginBottom: {
                responsive: true,
                property: "margin-bottom",
                class: "mb",
                value: _.assign({}, assignWithNative(theme.variables.gaps), {auto: 'auto'})
            },
            marginLeft: {
                responsive: true,
                property: "margin-left",
                class: "ml",
                value: _.assign({}, assignWithNative(theme.variables.gaps), {auto: 'auto'})
            },
            marginRight: {
                responsive: true,
                property: "margin-right",
                class: "mr",
                value: _.assign({}, assignWithNative(theme.variables.gaps), {auto: 'auto'})
            },
            marginTop: {
                responsive: true,
                property: "margin-top",
                class: "mt",
                value: _.assign({}, assignWithNative(theme.variables.gaps), {auto: 'auto'})
            },
            marginY: {
                responsive: true,
                property: ["margin-top", "margin-bottom"],
                class: "my",
                value: _.assign({}, assignWithNative(theme.variables.gaps), {auto: 'auto'})
            },
            marginX: {
                responsive: true,
                property: ["margin-left", "margin-right"],
                class: "mx",
                value: _.assign({}, assignWithNative(theme.variables.gaps), {auto: 'auto'})
            },

            opacity: {
                property: "opacity",
                value: theme.opacity
            },
            order: {
                responsive: true,
                property: "order",
                value: theme.order
            },
            outline: {
                property: "outline",
                value: {none: 0}
            },
            // overflow
            overflow: {
                property: "overflow",
                value: ["visible", "hidden", "scroll", "auto"]
            },
            overflowX: {
                property: "overflow-x",
                value: ["visible", "hidden", "scroll", "auto"]
            },
            overflowY: {
                property: "overflow-y",
                value: ["visible", "hidden", "scroll", "auto"]
            },

            // padding
            padding: {
                responsive: true,
                property: "padding",
                class: "p",
                value: _.assign({}, assignWithNative(theme.variables.gaps))
            },
            paddingBottom: {
                responsive: true,
                property: "padding-bottom",
                class: "pb",
                value: _.assign({}, assignWithNative(theme.variables.gaps))
            },
            paddingLeft: {
                responsive: true,
                property: "padding-left",
                class: "pl",
                value: _.assign({}, assignWithNative(theme.variables.gaps))
            },
            paddingRight: {
                responsive: true,
                property: "padding-right",
                class: "pr",
                value: _.assign({}, assignWithNative(theme.variables.gaps))
            },
            paddingTop: {
                responsive: true,
                property: "padding-top",
                class: "pt",
                value: _.assign({}, assignWithNative(theme.variables.gaps))
            },
            paddingY: {
                responsive: true,
                property: ["padding-top", "padding-bottom"],
                class: "py",
                value: _.assign({}, assignWithNative(theme.variables.gaps))
            },
            paddingX: {
                responsive: true,
                property: ["padding-left", "padding-right"],
                class: "px",
                value: _.assign({}, assignWithNative(theme.variables.gaps))
            },

            pointerEvents: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "pointer-events",
                class: "pe",
                value: ['auto', 'none']
            },
            position: {
                responsive: true,
                property: "position",
                class: "ps",
                value: ['static', 'relative', 'absolute', 'fixed', 'sticky']
            },

            resize: {
                property: "resize",
                value: {
                    none: 'none',
                    both: 'both',
                    x: "horizontal",
                    y: "vertical"
                }
            },
            rowGap: {
                responsive: true,
                property: "row-gap",
                value: theme.gap
            },

            // transform
            transform: {
                mixin: ["transform"]
            },
            transformRotate: {
                property: "--transform-rotate",
                value: assignWithNative({
                    0: '0',
                    45: '45deg',
                    90: "90deg",
                    180: "180deg",
                })
            },
            transformScale: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: ["--transform-scale-x", "--transform-scale-y"],
                value: theme.scale
            },

            tableLayout: {
                property: "table-layout",
                value: ['auto', "fixed"]
            },
            textAlign: {
                responsive: true,
                property: "text-align",
                value: ["left", "right", "center", "justify"]
            },
            textDecoration: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "text-decoration",
                value: _.assign({
                    none: "none",
                    underline: "underline",
                    overline: "overline",
                    through: "through",
                    solid: "solid",
                    dashed: "dashed",
                    wavy: "wavy",
                }, theme.colors)
            },

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