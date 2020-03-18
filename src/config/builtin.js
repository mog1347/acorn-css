const nativeVariables = {
    alignContent: {
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
    },
    alignItems: {
        normal: "normal",
        start: "start",
        end: "end",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        baseline: "baseline",
        stretch: "stretch"
    },
    alignSelf: {
        auto: "auto",
        start: "start",
        end: "end",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        baseline: "baseline",
        stretch: "stretch"
    },
    justifyContent: {
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
    },
    justifyItems: {
        normal: "normal",
        start: "start",
        end: "end",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        baseline: "baseline",
        stretch: "stretch"
    },
    justifySelf: {
        auto: "auto",
        start: "start",
        end: "end",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        baseline: "baseline",
        stretch: "stretch"
    },
    appearance: {
        none: "none"
    },
    backgroundAttachment: {
        local: "local",
        fixed: "fixed",
        scroll: "scroll"
    },
    backgroundBlendMode: {
        normal: "normal",
        multiply: "multiply",
        screen: "screen",
        overlay: "overlay",
        darken: "darken",
        lighten: "lighten",
        dodge: "color-dodge",
        burn: "color-burn",
        hard: "hard-light",
        soft: "soft-light",
        difference: "difference",
        exclusion: "exclusion",
        hue: "hue",
        saturation: "saturation",
        color: "color",
        luminosity: "luminosity"
    },
    backgroundClip: {
        border: "border-box",
        content: "content-box",
        padding: "padding-box",
        text: "text"
    },
    backgroundOrigin: {
        border: "border-box",
        content: "content-box",
        padding: "padding-box",
    },
    backgroundPosition: {
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
        center: "center",
        "left-bottom": "left bottom",
        "left-top": "left top",
        "right-bottom": "right bottom",
        "right-top": "right top"
    },
    backgroundRepeat: {
        repeat: "repeat",
        "no-repeat": "no-repeat",
        "repeat-x": "repeat-x",
        "repeat-y": "repeat-y",
        round: "round",
        space: "space"
    },
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    borderCollapse: {
        collapse: "collapse",
        separate: "separate"
    },
    borderStyle: {
        none: "none",
        solid: "solid",
        // hidden:"hidden",
        dotted: "dotted",
        dashed: "dashed",
        double: "double"
    },
    boxSizing: {
        border: "border-box",
        content: "content-box",
    },
    cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        crosshair: "crosshair",
        move: "move",
        text: "text",
        wait: "wait",
        help: "help",
        "not-allowed": "not-allowed",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out"
    },
    clear: {
        none: "none",
        left: "left",
        right: "right",
        both: "both"
    },
    display: {
        none: "none",
        inline: "inline",
        block: "block",
        "inline-block": "inline-block",
        flex: "flex",
        "inline-flex": "inline-flex",
        grid: "grid",
        "inline-grid": "inline-grid"
    },
    direction: {
        ltr: "ltr",
        rtl: "rtl"
    },
    emptyCells: {
        show: "show",
        hide: "hide"
    },
    flexDirection: {
        row: "row",
        "row-reverse": "row-reverse",
        col: "column",
        "col-reverse": "column-reverse"
    },
    flexWrap: {
        nowrap: "nowrap",
        wrap: "wrap",
        "wrap-reverse": "wrap-reverse"
    },
    float: {
        none: "none",
        left: "left",
        right: "right"
    },
    fontKerning: {
        auto: "auto",
        normal: "normal",
        none: "none"
    },
    fontStyle: {
        normal: "normal",
        italic: "italic"
    },
    lineBreak: {
        auto: "auto",
        loose: "loose",
        normal: "normal",
        strict: "strict",
        anywhere: "anywhere"
    },
    listStyleType: {
        none: "none",
        disc: "disc",
        circle: "circle",
        square: "square",
        decimal: "decimal",
        "decimal-zero": "decimal-leading-zero",
        "lower-roman": "lower-roman",
        "upper-roman": "upper-roman",
        "lower-alpha": "lower-alpha",
        "upper-alpha": "upper-alpha"
    },
    listStylePosition: {
        inside: "inside",
        outside: "outside"
    },
    objectPosition: {
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
        center: "center",
        "left-bottom": "left bottom",
        "left-top": "left top",
        "right-bottom": "right bottom",
        "right-top": "right top"
    },
    objectFit: {
        fill: "fill",
        contain: "contain",
        cover: "cover",
        none: "none",
        "scale-down": "scale-down"
    },
    outlineStyle: {
        auto: "auto",
        none: "none",
        solid: "solid",
        dotted: "dotted",
        dashed: "dashed",
        double: "double"
    },
    overflow: {
        visible: "visible",
        hidden: "hidden",
        scroll: "scroll",
        auto: "auto"
    },
    pointerEvents: {
        auto: "auto",
        none: "none"
    },
    position: {
        static: "static",
        relative: "relative",
        absolute: "absolute",
        fixed: "fixed",
        sticky: "sticky"
    },
    resize: {
        none: "none",
        both: "both",
        x: "horizontal",
        y: "vertical"
    },
    tableLayout: {
        auto: "auto",
        fixed: "fixed"
    },
    textAlign: {
        left: "left",
        right: "right",
        center: "center",
        justify: "justify"
    },
    textDecorationLine: {
        none: "none",
        underline: "underline",
        overline: "overline",
        through: "line-through"
    },
    textDecorationStyle: {
        solid: "solid",
        dotted: "dotted",
        dashed: "dashed",
        double: "double",
        wavy: "wavy"
    },
    textTransform: {
        none: "none",
        capitalize: "capitalize",
        uppercase: "uppercase",
        lowercase: "lowercase"
    },
    touchAction: {
        auto: "auto",
        none: "none",
        manipulation: "manipulation"
    },
    transformOrigin: {
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
        center: "center",
        "left-bottom": "left bottom",
        "left-top": "left top",
        "right-bottom": "right bottom",
        "right-top": "right top"
    },
    userSelect: {
        auto: "auto",
        none: "none",
        text: "text",
        all: "all",
        contain: "contain"
    },
    verticalAlign: {
        baseline: "baseline",
        sub: "sub",
        sup: "sup",
        "text-top": "text-top",
        "text-bottom": "text-bottom",
        middle: "middle",
        top: "top",
        bottom: "bottom"
    },
    visibility: {
        visible: "visible",
        hidden: "hidden"
    },
    overflowWrap: {
        normal: "normal",
        word: "break-word"
    },
    wordBreak: {
        "break-all": "break-all",
        "keep-all": "keep-all"
    },
    whiteSpace: {
        wrap: "normal",
        nowrap: "nowrap",
        pre: "pre",
        "pre-line": "pre-line",
        "pre-wrap": "pre-wrap"
    }
}

const builtinVariables = {
    backgroundColor: {
        transparent: "transparent",
        current: "currentcolor",
        black: "black",
        white: "white",
    },
    borderRadius: {
        0: 0,
        half: "50%",
        full: "100%",
        auto: "9999px"
    },
    boxShadow: {
        none: "none",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"  //TODO 这个值到底特殊不特殊
    },
    borderColor: {
        current: "currentcolor",
        transparent: "transparent",
        black: "black",
        white: "white",
    },
    borderWidth: {
        0: 0
    },
    color: {
        transparent: "transparent",
        black: "black",
        white: "white",
    },
    caretColor: {
        auto: "auto",
        transparent: "transparent",
        currentColor: "currentcolor",
        black: "black",
        white: "white"
    },
    flex: {
        init: "0 1 auto",
        none: "0 0 auto",
        fill: "1 0 auto",
        auto: "1 1 auto",
        equal: "1 1 0"
    },
    flexBasis: {
        0: 0,
        auto: "auto"
    },
    flexGrow: {
        0: 0,
        1: 1
    },
    flexShrink: {
        0: 0,
        1: 1
    },
    fontFamily: {
        sans: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji",
        serif: "\"Droid Serif\", Lucida, Georgia, Palatino, \"Palatino Linotype\", \"Times New Roman\", Times, serif",
        mono: "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    },
    fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900
    },
    // start gap related
    // gridGap, margin, padding
    gridGap: {
        0: 0,
        px: "1px"
    },
    padding: {
        0: 0,
        px: "1px"
    },
    margin: {
        0: 0,
        px: "1px",
        auto: "auto" //只有margin有个auto的内部值
    },
    // end gap related
    letterSpacing: {
        normal: "normal",
        0: 0
    },
    lineHeight: {
        0: 0
    },
    inset: {
        auto: "auto",
        0: 0,
        50: "50%",
        100: "100%",
    },
    width: {
        auto: "auto",
        0: 0,
        px: "1px",
        // "13": "33.333333%",
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
        half: "50%",
        full: "100%",
        "half-screen": "50vw",
        "full-screen": "100vw",
    },
    height: {
        auto: "auto",
        0: 0,
        px: "1px",
        half: "50%",
        full: "100%",
        auto: "auto",
        screen: "100vh",
    },
    minWidth: {
        auto: "auto",
        0: 0,
        half: "50%",
        full: "100%",
        "half-screen": "50vw",
        "full-screen": "100vw",
    },
    maxWidth: {
        none: "none",
        half: "50%",
        full: "100%",
        "half-screen": "50vw",
        "full-screen": "100vw",
    },
    minHeight: {
        auto: "auto",
        0: 0,
        half: "50%",
        full: "100%",
        "half-screen": "50vh",
        "full-screen": "100vh",
    },
    maxHeight: {
        none: "none",
        half: "50%",
        full: "100%",
        "half-screen": "50vh",
        "full-screen": "100vh",
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
    order: {
        init: 0,
        first: -9999,
        last: 9999
    },
    outlineWidth: {
        0: 0
    },
    outlineColor: {
        current: "currentcolor",
        black: "black",
        white: "white",
    },
    outlineOffset: {
        0: 0,
        px: "1px",
    },
    tabSize: {
        0: 0,
        2: 2,
        4: 4,
        8: 8
    },
    textDecorationColor: {
        current: "currentcolor",
        transparent: "transparent",
        black: "black",
        white: "white",
    },
    textIndent: {
        0: 0,
        2: "2em",
        4: "4em",
        6: "6em",
        8: "8em"
    },
    transitionProperty: {
        none: "none",
        all: "all",
        color: "background-color, border-color, color, fill, stroke",
        space: "width, height, max-width, max-height, margin, padding",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionDuration: {
        0: "0s",
        250: "250ms",
        500: "500ms",
        1000: "1000ms",
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms"
    },
    transitionTimingFunction: {
        ease: "ease",
        "ease-in": "ease-in",
        "ease-out": "ease-out",
        "ease-in-out": "ease-in-out",
        linear: "linear"
    },
    transitionDelay: {
        0: "0s",
        250: "250ms",
        500: "500ms",
        1000: "1000ms",
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms"
    },
    translate: {
        0: 0,
        50: "50%",
        100: "100%"
    },
    rotate: {
        0: 0,
        30: "30deg",
        45: "45deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
    },
    skew: {
        0: 0,
        3: "3deg",
        6: "6deg",
        12: "12deg",
    },
    scale: {
        0: 0,
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
    wordSpacing: {
        normal: "normal",
        0: 0,
        px: "1px"
    },
    zIndex: {
        auto: "auto",
        0: 0,
    },
    zoom: {
        0: 0,
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
}

module.exports = [nativeVariables, builtinVariables]