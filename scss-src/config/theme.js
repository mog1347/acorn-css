const colors = require("./theme/colors")

module.exports = {
    suffixes: {
        namespace: JSON.stringify("~"),
        basic: JSON.stringify("-"),
        responsive: JSON.stringify("@"),
        pseudoClass: JSON.stringify(":"),
        pseudoElement: JSON.stringify("$")
    },

    important: false,
    namespace: JSON.stringify(""),
    pseudoClass: {
        disabled: false
    },
    pseudoElement: {
        disabled: false
    },

    // basicStyle: JSON.stringify(""),

    responsive: {
        disabled: false,
        type: JSON.stringify("up"),//"down"
        breakpoints: {
            // when type is "up"
            xs: null,
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px"
            //when type is "down"
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
        columns: 12,
        flex: {disabled: false, gap: "1rem"},
        grid: {disabled: false}
    },

    useCssCustomProperties: true,
    variables: {
        colors: colors,

        //.letter-spacing-n3:{
        //      letter-spacing:var(--letter-spacing-n3)
        // }
        //
        //:root{
        //      --letter-spacing-n3:"-0.1em"
        // }
        letterSpacings: {
            0: "0",
            1: "0.025em",
            2: "0.05em",
            3: "0.1em"
        },
        fontWeights: {
            1: "100",   //Thin
            2: "200",   //Extra Light
            3: "300",   //Light
            4: "400",   //Normal
            5: "500",   //Medium
            6: "600",   //Semi Bold
            7: "700",   //Bold
            8: "800",   //Extra Bold
            9: "900",   //Black
        },
        //边框宽度，4之前，差值为1，4之后差值为2，
        borderWidths: {
            0: 0,
            1: "1px",
            2: "2px",
            3: "3px",
            4: "4px",
            5: "6px",
            6: "8px",
            7: "10px"
        },
        //普通控制文字大小，font-size  = font-size-4，间隔为等差数列，为0.125rem的倍数
        fontSizes: {
            1: "0.625rem",      //10px
            2: "0.75rem",       //12px
            3: "0.875rem",      //14px
            4: "1rem",          //16px
            5: "1.125rem",      //18px
            6: "1.25rem",       //20px
            7: "1.375rem"       //22px
        },
        //控制间隔的大小，margin,padding，间隔为等差/等比数列，中间5个值为0.25rem的倍数，首末两个值为2倍关系
        gaps: {
            0: 0,
            1: "0.25rem",       //4px
            2: "0.5rem",        //8px
            3: "0.75rem",       //12px
            4: "1rem",          //16px
            5: "1.25rem",       //20px
            6: "1.5rem",        //24px
            7: "3rem"           //48px
        },
        //用于大型显示的文字大小，间隔为等差数列，为0.5rem的倍数
        displays: {
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
        spaces: {
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
            half: "50%",
            full: "100%"
        },

        lineHeights: {},

        order: {
            none: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            first: -9999,
            last: 9999
        },
        opacity: {
            100: 1,
            90: 0.9,
            80: 0.8,
            70: 0.7,
            60: 0.6,
            50: 0.5,
            40: 0.4,
            30: 0.3,
            20: 0.2,
            10: 0.1,
            0: 0
        },
        scale: {
            0: 0,
            50: 0.5,
            75: 0.75,
            90: 0.9,
            95: 0.95,
            100: 1,
            105: 1.05,
            125: 1.25,
            150: 1.5
        },
        skew: {
            0: 0,
            3: 3,
            6: 6,
            12: 12,
        },
        shadows: {
            default: "sm",
            none: "none",
            tn: "0 0 0 1px rgba(0, 0, 0, 0.05)",
            xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)",
            hg: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"
        },
        zIndex: {
            auto: "auto",
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50
        }
    },

    custom: {}
}