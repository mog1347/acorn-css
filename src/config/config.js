/*!
 * Acorn-CSS v1.0.0 (https://gitee.com/mog1347/kernel-css)
 * Copyright 2020 FishEleven
 * Licensed under MIT (https://gitee.com/mog1347/kernel-css/LICENSE)
 */
const
    _ = require("lodash"),
    kebabcaseKeys = require("kebabcase-keys"),
    misc = require("./asset/misc"),
    builtin = require("./builtin")


module.exports = function (theme) {
    //for customProperties
    const [customProperties, themeVariables] = misc.useCustomProperty(theme.variables, theme.namespace, theme.useCustomProperty)
    const [nativeVariables, builtinVariables] = builtin
    //for negative
    let withNegative = _.partial(misc.withNegative, _, theme.negativeTag, theme.useCustomProperty);

    let config = {
        namespace: misc.quote(theme.namespace),
        useImportant: theme.useImportant,
        useImportantOnDisplay: theme.useImportantOnDisplay,
        //no more "useCustomProperty", replace by "customProperties"
        customProperties: customProperties,
        //no more "negativeTag"
        pseudoClass: _.assign(theme.pseudoClass, {
            suffix: misc.quote(theme.pseudoClass.suffix),
            list: misc.quoteValues(theme.pseudoClass.list)
        }),
        responsive: _.assign(theme.responsive, {
            suffix: misc.quote(theme.responsive.suffix),
            type: misc.quote(theme.responsive.type)
        }),
        container: theme.container,
        layout: {
            flex: theme.layout.flex,
            grid: _.assign({}, theme.layout.grid, {
                gap: _.assign({},
                    builtinVariables.gridGap,
                    themeVariables.gap
                )
            })
        },
        // almost follow alphabet and logical
        ultimate: {
            // placement
            alignContent: {
                responsive: true,
                property: "align-content",
                values: nativeVariables.alignContent
            },
            alignItems: {
                responsive: true,
                property: "align-items",
                values: nativeVariables.alignItems
            },
            alignSelf: {
                responsive: true,
                property: "align-self",
                values: nativeVariables.alignSelf
            },
            justifyContent: {
                responsive: true,
                property: "justify-content",
                values: nativeVariables.justifyContent
            },
            justifyItems: {
                responsive: true,
                property: "justify-items",
                values: nativeVariables.justifyItems
            },
            justifySelf: {
                responsive: true,
                property: "justify-self",
                values: nativeVariables.justifySelf
            },

            // appearance
            appearance: {
                property: "appearance",
                values: nativeVariables.appearance
            },

            // background
            backgroundAttachment: {
                property: "background-attachment",
                class: "bg-attach",
                values: nativeVariables.backgroundAttachment
            },
            backgroundBlendMode: {
                disabled: true,
                property: "background-blend-mode",
                class: "bg-blend",
                values: nativeVariables.backgroundBlendMode
            },
            backgroundClip: {
                disabled: true,
                property: "background-clip",
                class: "bg-clip",
                values: nativeVariables.backgroundClip
            },
            backgroundColor: {
                responsive: true,
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                property: "background-color",
                class: "bg",
                values: _.assign({},
                    builtinVariables.backgroundColor,
                    themeVariables.color
                )
            },
            backgroundOrigin: {
                disabled: true,
                property: "background-origin",
                class: "bg-orig",
                values: nativeVariables.backgroundOrigin
            },
            backgroundPosition: {
                property: "background-position",
                class: "bg-pos",
                values: nativeVariables.backgroundPosition
            },
            backgroundRepeat: {
                property: "background-repeat",
                class: "bg",
                values: nativeVariables.backgroundRepeat
            },
            backgroundSize: {
                property: "background-size",
                class: "bg-size",
                values: nativeVariables.backgroundSize
            },

            // border
            borderCollapse: {
                property: "border-collapse",
                class: "b",
                values: nativeVariables.borderCollapse
            },
            borderColor: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: "border-color",
                class: "b",
                values: _.assign({},
                    builtinVariables.borderColor,
                    themeVariables.color
                )
            },
            borderStyle: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: "border-style",
                class: "b",
                values: nativeVariables.borderStyle
            },
            borderWidth: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: "border-width",
                class: "b",
                values: _.assign({},
                    builtinVariables.borderWidth,
                    themeVariables.lineWidth
                )
            },
            borderTopWidth: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: "border-top-width",
                class: "bt",
                values: _.assign({},
                    builtinVariables.borderWidth,
                    themeVariables.lineWidth
                )
            },
            borderRightWidth: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: "border-right-width",
                class: "br",
                values: _.assign({},
                    builtinVariables.borderWidth,
                    themeVariables.lineWidth
                )
            },
            borderBottomWidth: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: "border-bottom-width",
                class: "bb",
                values: _.assign({},
                    builtinVariables.borderWidth,
                    themeVariables.lineWidth
                )
            },
            borderLeftWidth: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: "border-left-width",
                class: "bl",
                values: _.assign({},
                    builtinVariables.borderWidth,
                    themeVariables.lineWidth
                )
            },
            borderXWidth: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: ["border-left-width", "border-right-width"],
                class: "bx",
                values: _.assign({},
                    builtinVariables.borderWidth,
                    themeVariables.lineWidth
                )
            },
            borderYWidth: {
                pseudoClass: ["hover", "active", "focus", "focus-within"],
                property: ["border-top-width", "border-bottom-width"],
                class: "by",
                values: _.assign({},
                    builtinVariables.borderWidth,
                    themeVariables.lineWidth
                )
            },

            // border-radius
            borderRadius: {
                property: "border-radius",
                class: "round",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderTopRadius: {
                property: ["border-top-left-radius", "border-top-right-radius"],
                class: "round-t",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderRightRadius: {
                property: ["border-top-right-radius", "border-bottom-right-radius"],
                class: "round-r",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderBottomRadius: {
                property: ["border-bottom-right-radius", "border-bottom-left-radius"],
                class: "round-b",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderLeftRadius: {
                property: ["border-top-left-radius", "border-bottom-left-radius"],
                class: "round-l",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderTopLeftRadius: {
                property: "border-top-left-radius",
                class: "round-tl",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderTopRightRadius: {
                property: "border-top-right-radius",
                class: "round-tr",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderBottomLeftRadius: {
                property: "border-bottom-left-radius",
                class: "round-bl",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },
            borderBottomRightRadius: {
                property: "border-bottom-right-radius",
                class: "round-br",
                values: _.assign({},
                    builtinVariables.borderRadius,
                    themeVariables.borderRadius
                )
            },

            // box-shadow
            boxShadow: {
                pseudoClass: ["hover", "focus"],
                property: "box-shadow",
                values: _.assign({},
                    misc.bracketValues(builtinVariables.boxShadow),
                    themeVariables.boxShadow
                )
            },

            boxSizing: {
                property: "box-sizing",
                class: "box",
                values: nativeVariables.boxSizing
            },
            cursor: {
                property: "cursor",
                values: nativeVariables.cursor
            },
            color: {
                pseudoClass: ["any-link", "hover", "active", "focus", "focus-within"],
                property: "color",
                class: "text",
                values: _.assign({},
                    builtinVariables.color,
                    themeVariables.color
                )
            },
            caretColor: {
                property: "caret-color",
                class: "caret",
                values: _.assign({},
                    builtinVariables.caretColor,
                    themeVariables.color
                )
            },
            clear: {
                property: "clear",
                values: nativeVariables.clear
            },

            // clearfix mixin
            clearfix: {
                mixin: ["clearfix"]
            },

            display: {
                responsive: true,
                property: "display",
                class: "d",
                values: nativeVariables.display
            },
            direction: {
                property: "direction",
                values: nativeVariables.direction
            },
            emptyCells: {
                property: "empty-cells",
                values: nativeVariables.emptyCells
            },

            // flex
            flex: {
                responsive: true,
                property: "flex",
                values: builtinVariables.flex
            },
            flexBasis: {
                responsive: true,
                property: "flex-basis",
                values: builtinVariables.flexBasis
            },
            flexGrow: {
                responsive: true,
                property: "flex-grow",
                values: builtinVariables.flexGrow
            },
            flexShrink: {
                responsive: true,
                property: "flex-shrink",
                values: builtinVariables.flexShrink
            },
            flexDirection: {
                responsive: true,
                property: "flex-direction",
                class: "flex",
                values: nativeVariables.flexDirection
            },
            flexWrap: {
                responsive: true,
                property: "flex-wrap",
                class: "flex",
                values: nativeVariables.flexWrap
            },

            float: {
                responsive: true,
                property: "float",
                values: nativeVariables.float
            },
            // font
            fontFamily: {
                property: "font-family",
                class: "font",
                values: _.assign({},
                    misc.bracketValues(builtinVariables.fontFamily),
                    themeVariables.fontFamily
                )
            },
            fontKerning: {
                property: "font-kerning",
                values: nativeVariables.fontKerning
            },
            // fontSize themeVariables only!
            fontSize: {
                property: "font-size",
                values: themeVariables.fontSize
            },
            fontStyle: {
                property: "font-style",
                class: "font",
                values: nativeVariables.fontStyle
            },
            fontWeight: {
                property: "font-weight",
                values: builtinVariables.fontWeight
            },
            letterSpacing: {
                property: "letter-spacing",
                values: withNegative(
                    _.assign({},
                        builtinVariables.letterSpacing,
                        themeVariables.letterSpacing
                    )
                )
            },
            lineBreak: {
                property: "line-break",
                values: nativeVariables.lineBreak
            },
            lineHeight: {
                property: "line-height",
                class: "line-h",
                values: _.assign({},
                    builtinVariables.lineHeight,
                    themeVariables.lineHeight
                )
            },
            // inset
            inset: {
                property: ["top", "right", "bottom", "left"],
                class: "i",
                values: withNegative(_.assign({},
                    builtinVariables.inset,
                    themeVariables.inset)
                )
            },
            insetTop: {
                property: "top",
                class: "it",
                values: withNegative(_.assign({},
                    builtinVariables.inset,
                    themeVariables.inset)
                )
            },
            insetRight: {
                property: "right",
                class: "ir",
                values: withNegative(_.assign({},
                    builtinVariables.inset,
                    themeVariables.inset)
                )
            },
            insetBottom: {
                property: "bottom",
                class: "ib",
                values: withNegative(_.assign({},
                    builtinVariables.inset,
                    themeVariables.inset)
                )
            },
            insetLeft: {
                property: "left",
                class: "il",
                values: withNegative(_.assign({},
                    builtinVariables.inset,
                    themeVariables.inset)
                )
            },
            insetX: {
                property: ["left", "right"],
                class: "ix",
                values: withNegative(_.assign({},
                    builtinVariables.inset,
                    themeVariables.inset)
                )
            },
            insetY: {
                property: ["top", "bottom"],
                class: "iy",
                values: withNegative(_.assign({},
                    builtinVariables.inset,
                    themeVariables.inset)
                )
            },

            // list
            listStyleType: {
                property: "list-style-type",
                class: "list",
                values: nativeVariables.listStyleType
            },
            listStylePosition: {
                property: "list-style-position",
                class: "list",
                values: nativeVariables.listStylePosition
            },

            // Margin
            margin: {
                responsive: true,
                property: "margin",
                class: "m",
                values: withNegative(_.assign({},
                    builtinVariables.margin,
                    themeVariables.gap,
                    themeVariables.margin)
                )
            },
            marginTop: {
                responsive: true,
                property: "margin-top",
                class: "mt",
                values: withNegative(_.assign({},
                    builtinVariables.margin,
                    themeVariables.gap,
                    themeVariables.margin)
                )
            },
            marginRight: {
                responsive: true,
                property: "margin-right",
                class: "mr",
                values: withNegative(_.assign({},
                    builtinVariables.margin,
                    themeVariables.gap,
                    themeVariables.margin)
                )
            },
            marginBottom: {
                responsive: true,
                property: "margin-bottom",
                class: "mb",
                values: withNegative(_.assign({},
                    builtinVariables.margin,
                    themeVariables.gap,
                    themeVariables.margin)
                )
            },
            marginLeft: {
                responsive: true,
                property: "margin-left",
                class: "ml",
                values: withNegative(_.assign({},
                    builtinVariables.margin,
                    themeVariables.gap,
                    themeVariables.margin)
                )
            },
            marginX: {
                responsive: true,
                property: ["margin-left", "margin-right"],
                class: "mx",
                values: withNegative(_.assign({},
                    builtinVariables.margin,
                    themeVariables.gap,
                    themeVariables.margin)
                )
            },
            marginY: {
                responsive: true,
                property: ["margin-top", "margin-bottom"],
                class: "my",
                values: withNegative(_.assign({},
                    builtinVariables.margin,
                    themeVariables.gap,
                    themeVariables.margin)
                )
            },

            // width and height
            width: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "width",
                class: "w",
                values: _.assign({},
                    builtinVariables.width,
                    themeVariables.space,
                    themeVariables.width
                )
            },
            height: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "height",
                class: "h",
                values: _.assign({},
                    builtinVariables.height,
                    themeVariables.space,
                    themeVariables.height
                )
            },
            maxWidth: {
                property: "max-width",
                class: "max-w",
                values: _.assign({},
                    builtinVariables.maxWidth,
                    themeVariables.space,
                    themeVariables.maxWidth
                )
            },
            minWidth: {
                property: "min-width",
                class: "min-w",
                values: _.assign({},
                    builtinVariables.minWidth,
                    themeVariables.space,
                    themeVariables.minWidth
                )
            },
            maxHeight: {
                property: "max-height",
                class: "max-h",
                values: _.assign({},
                    builtinVariables.maxHeight,
                    themeVariables.space,
                    themeVariables.maxHeight
                )
            },
            minHeight: {
                property: "min-height",
                class: "min-h",
                values: _.assign({},
                    builtinVariables.minHeight,
                    themeVariables.space,
                    themeVariables.minHeight
                )
            },

            objectPosition: {
                property: "object-position",
                class: "obj-ps",
                values: nativeVariables.objectPosition
            },
            objectFit: {
                property: "object-fit",
                class: "obj-fit",
                values: nativeVariables.objectFit
            },
            opacity: {
                property: "opacity",
                class: "o",
                values: builtinVariables.opacity
            },
            order: {
                responsive: true,
                property: "order",
                values: builtinVariables.order
            },
            // outline
            outlineWidth: {
                property: "outline-width",
                values: _.assign({},
                    builtinVariables.outlineWidth,
                    themeVariables.lineWidth
                )
            },
            outlineStyle: {
                property: "outline-style",
                values: nativeVariables.outlineStyle
            },
            outlineColor: {
                property: "outline-color",
                values: _.assign({},
                    builtinVariables.outlineColor,
                    themeVariables.color
                )
            },
            outlineOffset: {
                property: "outline-offset",
                values: withNegative(_.assign({},
                    builtinVariables.outlineOffset,
                    themeVariables.gap)
                )
            },
            // overflow
            overflow: {
                property: "overflow",
                values: nativeVariables.overflow
            },
            overflowX: {
                property: "overflow-x",
                values: nativeVariables.overflow
            },
            overflowY: {
                property: "overflow-y",
                values: nativeVariables.overflow
            },

            // padding
            padding: {
                responsive: true,
                property: "padding",
                class: "p",
                values: _.assign({},
                    builtinVariables.padding,
                    themeVariables.gap,
                    themeVariables.padding
                )
            },
            paddingTop: {
                responsive: true,
                property: "padding-top",
                class: "pt",
                values: _.assign({},
                    builtinVariables.padding,
                    themeVariables.gap,
                    themeVariables.padding
                )
            },
            paddingRight: {
                responsive: true,
                property: "padding-right",
                class: "pr",
                values: _.assign({},
                    builtinVariables.padding,
                    themeVariables.gap,
                    themeVariables.padding
                )
            },
            paddingBottom: {
                responsive: true,
                property: "padding-bottom",
                class: "pb",
                values: _.assign({},
                    builtinVariables.padding,
                    themeVariables.gap,
                    themeVariables.padding
                )
            },
            paddingLeft: {
                responsive: true,
                property: "padding-left",
                class: "pl",
                values: _.assign({},
                    builtinVariables.padding,
                    themeVariables.gap,
                    themeVariables.padding
                )
            },
            paddingX: {
                responsive: true,
                property: ["padding-left", "padding-right"],
                class: "px",
                values: _.assign({},
                    builtinVariables.padding,
                    themeVariables.gap,
                    themeVariables.padding
                )
            },
            paddingY: {
                responsive: true,
                property: ["padding-top", "padding-bottom"],
                class: "py",
                values: _.assign({},
                    builtinVariables.padding,
                    themeVariables.gap,
                    themeVariables.padding
                )
            },

            pointerEvents: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "pointer-events",
                class: "pe",
                values: nativeVariables.pointerEvents
            },
            position: {
                responsive: true,
                property: "position",
                class: "ps",
                values: nativeVariables.position
            },
            resize: {
                property: "resize",
                values: nativeVariables.resize
            },

            // screenReader mixin
            screenReader: {
                mixin: ["sr-only", "not-sr-only"]
            },

            tableLayout: {
                property: "table-layout",
                class: "table",
                values: nativeVariables.tableLayout
            },
            tabSize: {
                property: "tab-size",
                class: "tab",
                values: builtinVariables.tabSize
            },
            textAlign: {
                responsive: true,
                property: "text-align",
                class: "text",
                values: nativeVariables.textAlign
            },
            textDecorationLine: {
                property: "text-decoration-line",
                class: "text-decr",
                values: nativeVariables.textDecorationLine
            },
            textDecorationColor: {
                property: "text-decoration-color",
                class: "text-decr",
                values: _.assign({},
                    builtinVariables.textDecorationColor,
                    themeVariables.color
                )
            },
            textDecorationStyle: {
                property: "text-decoration-style",
                class: "text-decr",
                values: nativeVariables.textDecorationStyle
            },
            textIndent: {
                property: "text-indent",
                values: withNegative(builtinVariables.textIndent)
            },
            // textOverflow mixin
            textOverflow: {
                mixin: ["text-clip", "text-ellipsis"]
            },
            textTransform: {
                property: "text-transform",
                class: "text-tf",
                values: nativeVariables.textTransform,
            },
            touchAction: {
                property: "touch-action",
                class: "touch",
                values: nativeVariables.touchAction
            },
            // transition mixin
            transition: {
                mixin: ["transition", "no-transition"]
            },
            transitionProperty: {
                property: "--transition-property",
                class: "ts",
                values: misc.bracketValues(builtinVariables.transitionProperty)
            },
            transitionDuration: {
                property: "--transition-duration",
                class: "ts-duration",
                values: builtinVariables.transitionDuration
            },
            transitionTimingFunction: {
                property: "--transition-timing-function",
                class: "ts",
                values: builtinVariables.transitionTimingFunction
            },
            transitionDelay: {
                property: "--transition-delay",
                class: "ts-delay",
                values: builtinVariables.transitionDelay
            },
            // transform mixin
            transform: {
                mixin: ["transform", "no-transform"]
            },
            transformOrigin: {
                property: "transform-origin",
                class: "tf-orig",
                values: nativeVariables.transformOrigin
            },
            translateX: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "--transform-translate-x",
                class: "tf-translate-x",
                values: withNegative(builtinVariables.translate)
            },
            translateY: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "--transform-translate-y",
                class: "tf-translate-y",
                values: withNegative(builtinVariables.translate)
            },
            rotate: {
                property: "--transform-rotate",
                class: "tf-rotate",
                values: withNegative(builtinVariables.rotate)
            },
            skewX: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "--transform-skew-x",
                class: "tf-skew-x",
                values: withNegative(builtinVariables.skew)
            },
            skewY: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "--transform-skew-y",
                class: "tf-skew-y",
                values: withNegative(builtinVariables.skew)
            },
            scale: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: ["--transform-scale-x", "--transform-scale-y"],
                class: "tf-scale",
                values: builtinVariables.scale
            },
            scaleX: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "--transform-scale-x",
                class: "tf-scale-x",
                values: builtinVariables.scale
            },
            scaleY: {
                responsive: true,
                pseudoClass: ["hover", "focus"],
                property: "--transform-scale-y",
                class: "tf-scale-y",
                values: builtinVariables.scale
            },

            userSelect: {
                property: "user-select",
                values: nativeVariables.userSelect
            },

            verticalAlign: {
                property: "vertical-align",
                class: "v-align",
                values: nativeVariables.verticalAlign
            },
            visibility: {
                property: "visibility",
                class: "v",
                values: nativeVariables.visibility
            },
            // word-break： 默认normal 可选break-all keep-all break-word
            // overflow-wrap(原名word-wrap)： 默认normal值，可选break-word
            // word-break的break-word未列入标准，一般使用overflow-wrap的break-word值
            // 两者效果一样
            overflowWrap: {
                property: ["overflow-wrap", "word-break"],
                class: "text-break",
                values: nativeVariables.overflowWrap
            },
            wordBreak: {
                property: "word-break",
                class: "text",
                values: nativeVariables.wordBreak
            },
            wordSpacing: {
                property: "word-spacing",
                values: _.assign({},
                    builtinVariables.wordSpacing,
                    themeVariables.gap
                )
            },
            whiteSpace: {
                property: "white-space",
                class: "text",
                values: nativeVariables.whiteSpace
            },
            zIndex: {
                property: "z-index",
                values: _.assign({},
                    builtinVariables.zIndex,
                    themeVariables.zIndex
                )
            },
            zoom: {
                property: "zoom",
                values: builtinVariables.zoom
            }
        }
    }

    misc.applyCustomization(config.ultimate, theme.customization);
    return kebabcaseKeys(config, {deep: true, exclude: [new RegExp(`${theme.negativeTag}\d`)]})
}