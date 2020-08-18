const
    _ = require("lodash"),
    tool = require("./asset/themeTool")

const themeColor = {
    chromatic: {
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
    translucent: {
        light: '#FFFFFF',
        dark: '#000000'
    }
}

let
    //多彩色，体现整体风格的颜色，将进行亮度1-9的转换
    colorChromatic = tool.buildColorChromatic(themeColor.chromatic),
    //中性色，体现细节的颜色，将进行亮度1-17的转换
    colorNeutral = tool.buildColorNeutral(themeColor.neutral),
    //半透明色，主要是为了文本或者背景与主题一致，采用半透明，一般为黑白
    colorTranslucent = tool.buildColorTranslucent(themeColor.translucent),
    colorKey = tool.findColorKey(_.assign({}, themeColor.chromatic, themeColor.neutral))

let colorBoxShadow = _.mapValues(colorKey, function (val) {
    return tool.buildBoxShadow(val, 0.5, 0, 0, 0, "0.25rem")
})

module.exports = {
    namespace: "",
    useImportant: false,
    useImportantOnDisplay: false,
    useCustomProperty: false,
    negativeTag: "n",
    pseudoClass: {
        disabled: false,
        suffix: ":",
        list: {
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
    },
    responsive: {
        disabled: false,
        suffix: "@",
        type: "up",// or "down"
        breakpoints: {
            // when type is "up"
            xs: null,
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px"
            // when type is "down"
            // xs: "639px",
            // sm: "767px",
            // md: "1023px",
            // lg: "1279px",
            // xl: null
        }
    },
    container: {
        disabled: false,
        padding: 0,
        centered: true
    },
    layout: {
        flex: {
            disabled: false,
            column: 12,
            gap: "1rem"
        },
        grid: {
            disabled: false,
            column: 12,
            row: 6
        }
    },
    preflight: {
        root: {
            lineHeight: "1.15em",
            fontSize: "16px",
            backgroundColor: "white",
            color: "black",
        },
        body: {},
        heading: {},
        paragraph: {
            lineHeight: "",
            margin: ""
        }
    },
    variables: {
        prototype: {
            /**
             * 影响样式:
             * color,
             * backgroundColor,
             * borderColor, border(TRBLXY)Color,
             *
             */
            color: _.assign({},
                colorChromatic,
                colorNeutral,
                colorTranslucent,
                {
                    black: "#000000",
                    white: "#FFFFFF"
                }
            ),
            /**
             * <抽象样式>
             * :影响样式:
             * gridGap,
             * margin
             * padding
             * wordSpacing
             * :规则:
             * 间隔为等差/等比数列，中间5个值为0.25rem的倍数，首末两个值为2倍关系
             */
            gap: {
                px: "1px",
                1: "0.25rem",       //4px
                2: "0.5rem",        //8px
                3: "0.75rem",       //12px
                4: "1rem",          //16px
                5: "1.25rem",       //20px
                6: "1.5rem",        //24px
                7: "3rem"           //48px
            },
            //用于设定大的具体的宽度/高度，为2rem的倍数
            space: {
                1: "2rem",          //32px
                2: "4rem",          //64px
                3: "6rem",          //96px
                4: "8rem",          //128px
                5: "10rem",         //160px
                6: "12rem",         //192px
                7: "14rem",         //224px
                8: "16rem",         //256px
                9: "18rem",         //288px
                10: "20rem",        //320px
                11: "22rem",         //352px
            },
            /**
             * 影响样式
             * borderWidth, border(TRBLXY)Width
             * strokeWidth
             * outlineWidth
             * 规则`
             * 4px之前，差值为1px，4之后差值为2px
             */
            lineWidth: {
                1: "1px",
                2: "2px",
                3: "3px",
                4: "4px",
                5: "6px",
                6: "8px",
                7: "10px"
            },
        },
        // Detail Variables
        backgroundColor: {},
        borderColor: {},
        borderRadius: {
            1: "0.125rem",
            2: "0.25rem",
            3: "0.375rem",
            4: "0.5rem",
            5: "0.625rem",
            6: "0.875rem",
            7: "1rem",
        },
        borderWidth: {},
        boxShadow: _.assign({}, {
                inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                1: "0 0 0 1px rgba(0, 0, 0, 0.05)",
                2: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                3: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                4: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
                5: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                6: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)",
                7: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }, colorBoxShadow
        ),

        color: {},
        caretColor: {},

        //用于大型显示的文字大小，间隔为等差数列，为0.5rem的倍数
        display: {
            1: "1.5rem",        //24px
            2: "2rem",          //32px
            3: "2.5rem",        //40px
            4: "3rem",          //48px
            5: "3.5rem",        //56px
            6: "4rem",          //64px
            7: "4.5rem",        //72px
            8: "5rem",          //80px
            9: "5.5rem",        //88px
            10: "6rem",         //96px
            11: "6.5rem"        //104px
        },

        flex: {},
        flexBasis: {},
        flexGrow: {},
        flexShrink: {},
        fontFamily: {
            sans: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            serif: "\"Droid Serif\", Lucida, Georgia, Palatino, \"Palatino Linotype\", \"Times New Roman\", Times, serif",
            mono: "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
        },
        //普通控制文字大小，font-size  = font-size-4，间隔为等差数列，为0.125rem的倍数
        fontSize: {
            1: "0.625rem",      //10px
            2: "0.75rem",       //12px
            3: "0.875rem",      //14px
            4: "1rem",          //16px
            5: "1.125rem",      //18px
            6: "1.25rem",       //20px
            7: "1.375rem"       //22px
        },
        gridGap: {},
        padding: {},
        margin: {},
        letterSpacing: {
            1: "0.025em",
            2: "0.05em",
            3: "0.1em"
        },
        /**
         * 影响样式
         * lineHeight
         *
         */
        lineHeight: {
            1: 1,
            2: 1.25,
            3: 1.5,
            4: 1.75,
            5: 2.0
        },
        /**
         * 影响样式
         * inset = top, right, bottom, left
         * inset, inset(TRBLXY)
         */
        inset: {
            px: "1px",
            rem: "1rem"
        },


        //可以单独配置的非抽象的
        margin: {},
        padding: {},
        width: {
            // "1/3": "33.333333%",
            // "2/3": "66.666667%",
            // "1/4": "25%",
            // "2/4": "50%",
            // "3/4": "75%",
            // "1/5": "20%",
            // "2/5": "40%",
            // "3/5": "60%",
            // "4/5": "80%",
            // "1/6": "16.666667%",
            // "2/6": "33.333333%",
            // "3/6": "50%",
            // "4/6": "66.666667%",
            // "5/6": "83.333333%",
        },
        height: {},
        minWidth: {},
        minHeight: {},
        maxWidth: {},
        maxHeight: {},


        opacity: {
            90: 0.9,
            80: 0.8,
            70: 0.7,
            60: 0.6,
            50: 0.5,
            40: 0.4,
            30: 0.3,
            20: 0.2,
            10: 0.1
        },
        order: {},
        outlineWidth: {},
        outlineColor: {},
        outlineOffset: {},
        tabSize: {
            2: 2,
            4: 4,
            8: 8
        },
        textDecorationColor: {},
        textIndent: {
            2: "2em",
            4: "4em",
            6: "6em",
            8: "8em"
        },
        transitionProperty: {
            color: "background-color, border-color, color, fill, stroke",
            space: "width, height, max-width, max-height, margin, padding",
            opacity: "opacity",
            shadow: "box-shadow",
            transform: "transform"
        },
        transitionDuration: {
            250: "250ms",
            500: "500ms",
            1000: "1000ms",
            1500: "1500ms",
            2000: "2000ms",
            2500: "2500ms",
            3000: "3000ms"
        },
        transitionTimingFunction: {},
        transitionDelay: {
            250: "250ms",
            500: "500ms",
            1000: "1000ms",
            1500: "1500ms",
            2000: "2000ms",
            2500: "2500ms",
            3000: "3000ms"
        },
        translate: {},
        rotate: {
            30: "30deg",
            45: "45deg",
            60: "60deg",
            90: "90deg",
            180: "180deg",
        },
        skew: {
            3: "3deg",
            6: "6deg",
            12: "12deg",
        },
        scale: {
            50: 0.5,
            75: 0.75,
            90: 0.9,
            95: 0.95,
            100: 1,
            105: 1.05,
            110: 1.10,
            125: 1.25,
            150: 1.5,
            200: 2
        },
        wordSpacing: {},
        zIndex: {
            100: 100,
            200: 200,
            300: 300,
            400: 400,
            500: 500,
            600: 600,
            700: 700
        },
        zoom: {
            50: 0.5,
            75: 0.75,
            90: 0.9,
            95: 0.95,
            100: 1,
            105: 1.05,
            110: 1.10,
            125: 1.25,
            150: 1.5,
            200: 2
        }
    },

    customization: {
        // alignContent: {
        //     responsive: false
        // }
    }
}