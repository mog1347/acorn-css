/*!
 * Kernel CSS v1.0.0 (https://gitee.com/mog1347/kernel-css)
 * Copyright 2020 FishEleven
 * Licensed under MIT (https://gitee.com/mog1347/kernel-css/LICENSE)
 */
const _ = require('lodash')

const pseudoClasses = {
    link: "link",
    visited: "visited",
    "any-link": "any-link",
    hover: "hover",
    active: "active",
    focus: "focus",
    "focus-within": "focus-within",

    checked: "checked",
    disabled: "disabled",
    "read-only": "read-only",
    invalid: "invalid",
    valid: "valid",

    "first-child": "first-child",
    "last-child": "last-child",
    "odd-child": "nth-child(odd)",
    "even-child": "nth-child(even)"
}


function generateNegativeClasses(variableObj, negativeTag, useCustomProperties = false) {
    return _.assign({}, variableObj, _.transform(variableObj, function (result, value, key) {
        //TODO 优化对0值的判断
        if (value != 0 || value != "0px" || value != "0rem") {
            if (useCustomProperties) {
                //style-n0: calc(-1 * var(--px-1))
                result[negativeTag + key] = "calc( -1 * " + value + ")"
            } else {
                //style-n0: -1px
                result[negativeTag + key] = '-' + value
            }
        }
    }, {}))
}

function transformVariablesToCustomProperties(variables, namespace = null) {

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

function translatePseudoClass($pseudoClass) {
    if (_.isArray($pseudoClass)) {
        return _.map($pseudoClass, function (value) {
            if (!!pseudoClasses[value]) {
                return pseudoClasses[value]
            }
        })
    }
    if (_.isString($pseudoClass)) {
        if (!!pseudoClasses[$pseudoClass]) {
            return [pseudoClasses[value]]
        }
    }
    return [];
}

module.exports = {
    kernelFunction: function (theme) {

        let customProperties, variables

        if (theme.useCustomProperties) {
            [customProperties, variables] = transformVariablesToCustomProperties(theme.variables, theme.namespace)
        } else {
            [customProperties, variables] = [{}, theme.variables]
        }

        return {
            namespace: theme.namespace,
            useImportant: theme.useImportant,
            customProperties: customProperties,

            pseudoClass: theme.pseudoClass,
            responsive: theme.responsive,
            container: theme.container,
            layout: _.merge(theme.layout, {grid: {gaps: theme.variables.gaps}}),

            builtin: {
                alignContent: {
                    responsive: true,
                    property: "align-content",
                    values: {
                        normal: "normal",
                        start: "start",
                        end: "end",
                        "flex-start": "flex-start",
                        "flex-end": "flex-end",
                        center: "center",
                        baseline: "baseline",
                        between: "space-between",
                        around: "space-around",
                        evenly: "space-evenly",
                        stretch: "stretch"
                    }
                },
                alignItems: {
                    responsive: true,
                    property: "align-items",
                    values: {
                        normal: "normal",
                        start: "start",
                        end: "end",
                        "flex-start": "flex-start",
                        "flex-end": "flex-end",
                        center: "center",
                        baseline: "baseline",
                        stretch: "stretch"
                    }
                },
                alignSelf: {
                    responsive: true,
                    property: "align-self",
                    values: {
                        auto: "auto",
                        start: "start",
                        end: "end",
                        "flex-start": "flex-start",
                        "flex-end": "flex-end",
                        center: "center",
                        baseline: "baseline",
                        stretch: "stretch",
                    }
                },
                justifyContent: {
                    responsive: true,
                    property: "justify-content",
                    values: {
                        normal: "normal",
                        start: "start",
                        end: "end",
                        "flex-start": "flex-start",
                        "flex-end": "flex-end",
                        center: "center",
                        baseline: "baseline",
                        between: "space-between",
                        around: "space-around",
                        evenly: "space-evenly",
                        stretch: "stretch"
                    }
                },
                justifyItems: {
                    responsive: true,
                    property: "justify-items",
                    values: {
                        normal: "normal",
                        start: "start",
                        end: "end",
                        "flex-start": "flex-start",
                        "flex-end": "flex-end",
                        center: "center",
                        baseline: "baseline",
                        stretch: "stretch"
                    }
                },
                justifySelf: {
                    responsive: true,
                    property: "justify-self",
                    values: {
                        auto: "auto",
                        start: "start",
                        end: "end",
                        "flex-start": "flex-start",
                        "flex-end": "flex-end",
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
                    pseudoclass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: "background-color",
                    class: "bg",
                    values: _.assign({},
                        variables.colors.colorful,
                        variables.colors.neutral,
                        variables.colors.lightDark, {
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
                    property: "border-color",
                    class: "b",
                    values: _.assign({},
                        variables.colors.colorful,
                        variables.colors.neutral, {
                            black: "black",
                            white: "white"
                        })
                },
                borderStyle: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: "border-style",
                    class: "b",
                    values: ["none", "solid", "dotted", "dashed", "double"]
                },
                borderWidth: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: "border-width",
                    class: "b",
                    values: variables.borderWidths
                },
                borderTopWidth: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: "border-top-width",
                    class: "bt",
                    values: variables.borderWidths
                },
                borderRightWidth: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: "border-right-width",
                    class: "br",
                    values: variables.borderWidths
                },
                borderBottomWidth: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: "border-bottom-width",
                    class: "bb",
                    values: variables.borderWidths
                },
                borderLeftWidth: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: "border-left-width",
                    class: "bl",
                    values: variables.borderWidths
                },
                borderXWidth: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: ["border-left-width", "border-right-width"],
                    class: "bx",
                    values: variables.borderWidths
                },
                borderYWidth: {
                    pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                    property: ["border-top-width", "border-bottom-width"],
                    class: "by",
                    values: variables.borderWidths
                },
                borderRadius: {
                    property: "border-radius",
                    class: "round",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusT: {
                    property: ["border-top-left-radius", "border-top-right-radius"],
                    class: "round-t",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusR: {
                    property: ["border-top-right-radius", "border-bottom-right-radius"],
                    class: "round-r",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusB: {
                    property: ["border-bottom-right-radius", "border-bottom-left-radius"],
                    class: "round-b",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusL: {
                    property: ["border-top-left-radius", "border-bottom-left-radius"],
                    class: "round-l",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusTL: {
                    property: "border-top-left-radius",
                    class: "round-tl",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusTR: {
                    property: "border-top-right-radius",
                    class: "round-tr",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusBR: {
                    property: "border-bottom-right-radius",
                    class: "round-br",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },
                borderRadiusBL: {
                    property: "border-bottom-left-radius",
                    class: "round-bl",
                    value: _.assign({}, {
                        none: 0,
                        half: "50%",
                        full: "9999px"
                    }, variables.borderRadius)
                },

                //box-Shadow
                boxShadow: {
                    property: "box-shadow",
                    values: []
                },
                boxSizing: {
                    property: "box-sizing",
                    class: "box",
                    values: {
                        content: "content-box",
                        border: "border-box",
                    }
                },
                boxShadow: {},

                cursor: {
                    property: "cursor",
                    values: ["auto", "default", "none", "pointer", "wait", "text", "move", "not-allowed"]
                },
                color: {
                    property: "color",
                    class: "text",
                    values: variables.colors
                },
                caretColor: {
                    property: "caret-color",
                    class: "caret",
                    values: _.assign({}, variables.colors.colorfulMain, variables.colors.neutralMain)
                },
                clear: {
                    property: "clear",
                    values: ["none", "left", "right", "both"]
                },
                clearfix: {
                    mixin: ["clearfix"]
                },

                display: {
                    responsive: true,
                    property: "display",
                    class: "d",
                    values: ["none", "inline", "block", "inline-block", "flex", "inline-flex", "grid", "inline-grid"]
                },
                direction: {
                    property: "direction",
                    values: ["ltr", "rtl"]
                },

                emptyCells: {
                    property: "empty-cells",
                    values: ["show", "hide"]
                },

                // flex
                flex: {
                    responsive: true,
                    property: "flex",
                    values: {
                        init: "0 1 auto",
                        none: "0 0 auto",
                        fill: "1 0 auto",
                        auto: "1 1 auto",
                        equal: "1 1 0"
                    }
                },
                flexBasis: {
                    responsive: true,
                    property: "flex-basis",
                    values: ["0", "auto"]
                },
                flexGrow: {
                    responsive: true,
                    property: "flex-grow",
                    values: ["0", "1"]
                },
                flexShrink: {
                    responsive: true,
                    property: "flex-shrink",
                    values: ["0", "1"]
                },
                flexDirection: {
                    responsive: true,
                    property: "flex-direction",
                    class: "flex",
                    values: {
                        row: "row",
                        "row-reverse": "row-reverse",
                        col: "column",
                        "col-reverse": "column-reverse"
                    }
                },
                flexWrap: {
                    responsive: true,
                    property: "flex-wrap",
                    class: "flex",
                    values: ["nowrap", "wrap", "wrap-reverse"]
                },

                // font
                fontFamily: {
                    property: "font-family",
                    class: "font",
                    values: variables.fontFamily
                },
                fontKerning: {
                    property: "font-kerning",
                    values: ["auto", "normal", "none"]
                },
                fontSize: {
                    property: "font-size",
                    values: variables.fontSize
                },
                fontStyle: {
                    property: "font-style",
                    class: "font",
                    values: ["normal", "italic"]
                },
                fontWeight: {
                    property: "font-weight",
                    values: variables.fontWeight
                },

                gap: {
                    property: "gap",
                    values: variables.gaps
                },

                height: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "height",
                    class: "h",
                    values: {
                        0: "0",
                        1: "1px",
                        100: "100%",
                        "100-vh": "100vh",
                        auto: "auto"
                    }
                },

                letterSpacings: {
                    property: "letter-spacing",
                    values: generateNegativeClasses(variables.letterSpacings)
                },
                lineBreak: {
                    property: "line-break",
                    values: ["auto", "loose", "normal", "strict", "anywhere"]
                },
                lineHeight: {
                    property: "line-height",
                    class: "line-h",
                    values: variables.lineHeights
                },
                // inset
                insetTop: {
                    property: "top",
                    class: "it",
                    values: variables.inset
                },
                insetRight: {
                    property: "right",
                    class: "ir",
                    values: variables.inset
                },
                insetBottom: {
                    property: "bottom",
                    class: "ib",
                    values: variables.inset
                },
                insetLeft: {
                    property: "left",
                    class: "il",
                    values: variables.inset
                },
                insetX: {
                    property: ["left", "right"],
                    class: "ix",
                    values: {
                        auto: "auto"
                    }
                },
                insetY: {
                    property: ["top", "bottom"],
                    class: "iy",
                    values: {
                        auto: "auto"
                    }
                },
                inset: {
                    property: ["top", "right", "bottom", "left"],
                    class: "i",
                    values: {
                        auto: "auto"
                    }
                },
                // list
                listStyleType: {
                    property: "list-style-type",
                    class: "list",
                    values: ["none", "disc", "circle", "square", "decimal",
                        "decimal-leading-zero", "lower-roman", "upper-roman", "lower-alpha", "upper-alpha"]
                },
                listStylePosition: {
                    property: "list-style-position",
                    class: "list",
                    values: ["inside", "outside"]
                },

                // Margin
                margin: {
                    responsive: true,
                    property: "margin",
                    class: "m",
                    values: _.assign({}, generateNegativeClasses(variables.gaps), {auto: 'auto'})
                },
                marginTop: {
                    responsive: true,
                    property: "margin-top",
                    class: "mt",
                    values: _.assign({}, generateNegativeClasses(variables.gaps), {auto: 'auto'})
                },
                marginRight: {
                    responsive: true,
                    property: "margin-right",
                    class: "mr",
                    values: _.assign({}, generateNegativeClasses(variables.gaps), {auto: 'auto'})
                },
                marginBottom: {
                    responsive: true,
                    property: "margin-bottom",
                    class: "mb",
                    values: _.assign({}, generateNegativeClasses(variables.gaps), {auto: 'auto'})
                },
                marginLeft: {
                    responsive: true,
                    property: "margin-left",
                    class: "ml",
                    values: _.assign({}, generateNegativeClasses(variables.gaps), {auto: 'auto'})
                },
                marginX: {
                    responsive: true,
                    property: ["margin-left", "margin-right"],
                    class: "mx",
                    values: _.assign({}, generateNegativeClasses(variables.gaps), {auto: 'auto'})
                },
                marginY: {
                    responsive: true,
                    property: ["margin-top", "margin-bottom"],
                    class: "my",
                    values: _.assign({}, generateNegativeClasses(variables.gaps), {auto: 'auto'})
                },

                maxWidth: {
                    property: "max-width",
                    class: "max-w",
                    values: ""
                },
                minWidth: {
                    property: "min-width",
                    class: "min-w",
                    values: {
                        0: 0,
                        half: "50%",
                        full: "100%",
                        "half-screen": "50vw",
                        screen: "100vw"
                    }
                },
                maxHeight: {
                    property: "max-height",
                    class: "max-h",
                    values: {
                        0: 0,
                        half: "50%",
                        full: "100%",
                        "half-screen": "50vh",
                        screen: "100vh"
                    }
                },
                minHeight: {
                    property: "min-height",
                    class: "min-h",
                    values: {
                        0: 0,
                        half: "50%",
                        full: "100%",
                        "half-screen": "50vh",
                        screen: "100vh"
                    }
                },

                objectPosition: {
                    property: "object-position",
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
                objectFit: {
                    property: "object-fit",
                    values: ["contain", "cover", "fill", "none", "scale-down"]
                },
                opacity: {
                    property: "opacity",
                    values: variables.opacity
                },
                order: {
                    responsive: true,
                    property: "order",
                    values: variables.order
                },
                // outline
                outlineWidth: {
                    property: "outline-width",
                    values: variables.borderWidths
                },
                outlineStyle: {
                    property: "outline-style",
                    values: {
                        none: "none",
                        dotted: "dotted",
                        dashed: "dashed",
                        solid: "solid",
                        double: "double",
                        groove: "groove",
                        ridge: "ridge",
                        inset: "inset",
                        outset: "outset"
                    }
                },
                outlineColor: {
                    property: "outline-color",
                    values: _.assign({}, variables.colors.colorfulMain, variables.colors.neutralMain)
                },
                outlineOffset: {
                    property: "outline-offset",
                    values: variables.gaps
                },
                // overflow
                overflow: {
                    property: "overflow",
                    values: ["visible", "hidden", "scroll", "auto"]
                },
                overflowX: {
                    property: "overflow-x",
                    values: ["visible", "hidden", "scroll", "auto"]
                },
                overflowY: {
                    property: "overflow-y",
                    values: ["visible", "hidden", "scroll", "auto"]
                },

                // padding
                padding: {
                    responsive: true,
                    property: "padding",
                    class: "p",
                    values: _.assign({}, generateNegativeClasses(variables.gaps))
                },
                paddingTop: {
                    responsive: true,
                    property: "padding-top",
                    class: "pt",
                    values: _.assign({}, generateNegativeClasses(variables.gaps))
                },
                paddingRight: {
                    responsive: true,
                    property: "padding-right",
                    class: "pr",
                    values: _.assign({}, generateNegativeClasses(variables.gaps))
                },
                paddingBottom: {
                    responsive: true,
                    property: "padding-bottom",
                    class: "pb",
                    values: _.assign({}, generateNegativeClasses(variables.gaps))
                },
                paddingLeft: {
                    responsive: true,
                    property: "padding-left",
                    class: "pl",
                    values: _.assign({}, generateNegativeClasses(variables.gaps))
                },
                paddingX: {
                    responsive: true,
                    property: ["padding-left", "padding-right"],
                    class: "px",
                    values: _.assign({}, generateNegativeClasses(variables.gaps))
                },
                paddingY: {
                    responsive: true,
                    property: ["padding-top", "padding-bottom"],
                    class: "py",
                    values: _.assign({}, generateNegativeClasses(variables.gaps))
                },

                pointerEvents: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "pointer-events",
                    class: "pe",
                    values: ['auto', 'none']
                },
                position: {
                    responsive: true,
                    property: "position",
                    class: "ps",
                    values: ['static', 'relative', 'absolute', 'fixed', 'sticky']
                },

                resize: {
                    property: "resize",
                    values: {
                        none: 'none',
                        both: 'both',
                        x: "horizontal",
                        y: "vertical"
                    }
                },
                rowGap: {
                    responsive: true,
                    property: "row-gap",
                    values: variables.gap
                },

                screenReader: {
                    mixin: ["sr-only", "not-sr-only"]
                },

                tableLayout: {
                    property: "table-layout",
                    values: ['auto', "fixed"]
                },
                textAlign: {
                    responsive: true,
                    property: "text-align",
                    values: ["left", "right", "center", "justify"]
                },
                textDecorationLine: {
                    property: "text-decoration-line",
                    class: "text-decr",
                    values: {
                        none: "none",
                        underline: "underline",
                        overline: "overline",
                        through: "line-through"
                    }
                },
                textDecorationColor: {
                    property: "text-decoration-color",
                    class: "text-decr",
                    values: _.assign({}, variables.colors.colorfulMain, variables.colors.neutralMain)
                },
                textDecorationStyle: {
                    property: "text-decoration-style",
                    class: "text-decr",
                    values: {
                        solid: "solid",
                        double: "double",
                        dotted: "dotted",
                        dashed: "dashed",
                        wavy: "wavy",
                    }
                },
                textOverflow: {
                    mixin: ["text-clip", "text-ellipsis"]
                },
                textTransform: {
                    property: "text-transform",
                    values: {
                        none: "none",
                        capitalize: "capitalize",
                        uppercase: "uppercase",
                        lowercase: "lowercase",
                    }
                },
                // transition
                transition: {
                    mixin: ["transition", "no-transition"]
                },
                transitionProperty: {
                    property: "--transition-property",
                    class: "ts",
                    values: {
                        none: "none",
                        all: "all",
                        color: "background-color, border-color, color, fill, stroke",
                        space: "width, height, max-width, max-height, margin, padding",
                        opacity: "opacity",
                        shadow: "box-shadow",
                        transform: "transform"
                    }
                },
                transitionDuration: {
                    property: "--transition-duration",
                    class: "ts-duration",
                    values: {
                        0: "0s",
                        250: "250ms",
                        500: "500ms",
                        1000: "1000ms",
                        1500: "1500ms",
                        2000: "2000ms",
                        2500: "2500ms",
                        3000: "3000ms"
                    }
                },
                transitionTimingFunction: {
                    property: "--transition-timing-function",
                    class: "ts",
                    values: {
                        ease: "ease",
                        "ease-in": "ease-in",
                        "ease-out": "ease-out",
                        "ease-in-out": "ease-in-out",
                        linear: "linear"
                    }
                },
                transitionDelay: {
                    property: "--transition-delay",
                    class: "ts-delay",
                    values: {
                        0: "0s",
                        250: "250ms",
                        500: "500ms",
                        1000: "1000ms",
                        1500: "1500ms",
                        2000: "2000ms",
                        2500: "2500ms",
                        3000: "3000ms"
                    }
                },
                // transform
                transform: {
                    mixin: ["transform", "no-transform"]
                },
                transformOrigin: {
                    property: "transform-origin",
                    class: "tf-orig",
                    values: {
                        "c": "center",
                        "t": "top",
                        "r": "right",
                        "b": "bottom",
                        "l": "left",
                        "lb": "left bottom",
                        "lt": "left top",
                        "rb": "right bottom",
                        "rt": "right top"
                    }
                },
                translateX: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "--transform-translate-x",
                    class: "tf-translate-x",
                    values: generateNegativeClasses(_.assign({
                        0: 0,
                        50: 0.5,
                        100: 1
                    }, variables.gaps))
                },
                translateY: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "--transform-translate-y",
                    class: "tf-translate-y",
                    values: generateNegativeClasses(_.assign({
                        0: 0,
                        50: 0.5,
                        100: 1
                    }, variables.gaps))
                },
                rotate: {
                    property: "--transform-rotate",
                    class: "tf-rotate",
                    values: generateNegativeClasses({
                        0: '0',
                        45: '45deg',
                        90: "90deg",
                        180: "180deg",
                    })
                },
                skewX: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "--transform-skew-x",
                    class: "tf-skew-x",
                    values: generateNegativeClasses(variables.skew)
                },
                skewY: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "--transform-skew-y",
                    class: "tf-skew-y",
                    values: generateNegativeClasses(variables.skew)
                },
                scale: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: ["--transform-scale-x", "--transform-scale-y"],
                    class: "tf-scale",
                    values: variables.scale
                },
                scaleX: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "--transform-scale-x",
                    class: "tf-scale-x",
                    values: variables.scale
                },
                scaleY: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "--transform-scale-y",
                    class: "tf-scale-y",
                    values: variables.scale
                },

                userSelect: {
                    property: "user-select",
                    values: ["auto", "none", "text", "all", "contain"]
                },

                verticalAlign: {
                    property: "vertical-align",
                    class: "v-align",
                    values: ["baseline", "sub", "sup", "text-top", "text-bottom", "middle", "top", "bottom"]
                },
                visibility: {
                    property: "visibility",
                    class: "visible",
                    values: ["visible"]
                },
                inVisibility: {
                    property: "visibility",
                    class: "invisible",
                    values: ["hidden"]
                },

                // word-break： 默认normal 可选break-all keep-all break-word
                // overflow-wrap(原名word-wrap)： 默认normal值，可选break-word
                // word-break的break-word未列入标准，一般使用overflow-wrap的break-word值
                // 两者效果一样
                overflowWrap: {
                    property: ["overflow-wrap", "word-break"],
                    class: "text-break",
                    values: {
                        normal: "normal",
                        word: "break-word"
                    }
                },
                wordBreak: {
                    property: "word-break",
                    class: "text",
                    values: ["break-all", "keep-all"]
                },
                wordSpacing: {
                    property: "word-spacing",
                    class: "ws",
                    values: _.assign({}, {normal: "normal"}, variables.gaps)
                },
                whiteSpace: {
                    property: "white-space",
                    class: "text",
                    values: {
                        wrap: "normal",
                        nowrap: "nowrap"
                    }
                },
                width: {
                    responsive: true,
                    pseudoClass: ["hover", "focus"],
                    property: "width",
                    class: "w",
                    values: {
                        0: "0",
                        1: "1px",
                        100: "100%",
                        "100-vw": "100vw",
                        auto: "auto"
                    }
                },

                zIndex: {
                    property: "z-index",
                    class: "z",
                    values: variables.zIndex
                }
            }
        }
    }
}