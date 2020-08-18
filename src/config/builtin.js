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
    clear: {
        none: "none",
        left: "left",
        right: "right",
        both: "both"
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
    direction: {
        ltr: "ltr",
        rtl: "rtl"
    },
    display: {
        none: "none",
        inline: "inline",
        block: "block",
        "inline-block": "inline-block",
        flex: "flex",
        "flow-root": "flow-root",
        "inline-flex": "inline-flex",
        grid: "grid",
        "inline-grid": "inline-grid"
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
    fontWeight: {
        thin: 100,
        "extra-light": 200,
        light: 300,
        "semi-light": 350,
        normal: 400,
        medium: 500,
        "semi-bold": 600,
        bold: 700,
        "extra-bold": 800,
        black: 900,
        bolder: "bolder",
        lighter: "lighter"
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
    lineBreak: {
        auto: "auto",
        loose: "loose",
        normal: "normal",
        strict: "strict",
        anywhere: "anywhere"
    },
    listStylePosition: {
        inside: "inside",
        outside: "outside"
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
    objectFit: {
        fill: "fill",
        contain: "contain",
        cover: "cover",
        none: "none",
        "scale-down": "scale-down"
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
    overflowWrap: {
        normal: "normal",
        word: "break-word"
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
    whiteSpace: {
        wrap: "normal",
        nowrap: "nowrap",
        pre: "pre",
        "pre-line": "pre-line",
        "pre-wrap": "pre-wrap"
    },
    wordBreak: {
        "break-all": "break-all",
        "keep-all": "keep-all"
    }
}

const builtinVariables = {
    backgroundColor: {
        transparent: "transparent",
        current: "currentcolor",
    },
    borderColor: {
        current: "currentcolor",
        transparent: "transparent",
    },
    borderRadius: {
        0: 0,
        half: "50%",
        full: "100%",
        auto: "9999px"
    },
    borderWidth: {
        0: 0
    },
    boxShadow: {
        none: "none",
    },

    color: {
        transparent: "transparent",
    },
    caretColor: {
        auto: "auto",
        transparent: "transparent",
        current: "currentcolor",
    },

    display: {},

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
    fontFamily: {},
    fontSize: {},
    gridGap: {
        0: 0,
    },
    padding: {
        0: 0
    },
    margin: {
        0: 0,
        auto: "auto"
    },
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
        half: "50%",
        full: "100%",
    },
    width: {
        auto: "auto",
        0: 0,
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
    },
    outlineOffset: {
        0: 0
    },
    tabSize: {
        0: 0
    },
    textDecorationColor: {
        current: "currentcolor",
        transparent: "transparent"
    },
    textIndent: {
        0: 0
    },
    transitionProperty: {
        none: "none",
        all: "all"
    },
    transitionDuration: {
        0: "0s"
    },
    transitionTimingFunction: {
        ease: "ease",
        "ease-in": "ease-in",
        "ease-out": "ease-out",
        "ease-in-out": "ease-in-out",
        linear: "linear"
    },
    transitionDelay: {
        0: "0s"
    },
    translate: {
        0: 0,
        half: "50%",
        full: "100%"
    },
    rotate: {
        0: 0
    },
    skew: {
        0: 0
    },
    scale: {
        0: 0
    },
    wordSpacing: {
        normal: "normal",
        0: 0
    },
    zIndex: {
        auto: "auto",
        0: 0,
    }
}

module.exports = [nativeVariables, builtinVariables]