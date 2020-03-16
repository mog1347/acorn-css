![](htttp://ac.fisheleven.com/asset/logo.svg)

## 核心思想

- 跟随AtomCss思想，构建最基本的原子Css样式

- 提供以Js为输入的自定义Theme接口， 方便用户自定义

- 不完全依赖Postcss，仍然以Sass/Scss作为编译样式的主要预处理器，方便大多数用户开发样式

- 提供丰富的配置选项，用户可以自行定义Responsive和PseudoClass

 

[Theme](theme.md)









## 配置

Theme文件模板（默认值）：

```js
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
        padding: "0",
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
    variables: {
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
            colorTranslucent
        ),
        borderRadius: {
            1: "0.125rem",
            2: "0.25rem",
            3: "0.375rem",
            4: "0.5rem",
            5: "0.625rem",
            6: "0.875rem",
            7: "1rem",
        },
        letterSpacing: {
            1: "0.025em",
            2: "0.05em",
            3: "0.1em"
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
            1: "0.25rem",       //4px
            2: "0.5rem",        //8px
            3: "0.75rem",       //12px
            4: "1rem",          //16px
            5: "1.25rem",       //20px
            6: "1.5rem",        //24px
            7: "3rem"           //48px
        },


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

        //可以单独配置的非抽象的
        margin: {},
        padding: {},
        width: {},
        height: {},
        minWidth: {},
        minHeight: {},
        maxWidth: {},
        maxHeight: {},

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


        //TODO boxShadow change px to rem
        boxShadow: _.assign({}, {
                1: "0 0 0 1px rgba(0, 0, 0, 0.05)",
                2: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                3: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                4: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
                5: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                6: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)",
                7: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }, colorBoxShadow
        ),
        fontFamily: {
            sans: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            serif: "Georgia, Cambria, \"Times New Roman\", Times, serif",
            mono: "Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
        },
        zIndex: {
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50
        },
    },

    customization: {
        alignContent: {
            responsive: false
        }
    }
}
```




















## 引入theme配置







## 比较

1. 以Js输入颜色、字体、大小等主题样式变量，编译Scss VS. 在传统SCSS项目中配置Scss中的变量

   Js的可编程性比Scss要高，结构数据也更加易用，方便自定义



