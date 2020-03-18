# Classes > Background

## backgroundAttachment

| ClassDetail                           | Customization         |
| ------------------------------------- | --------------------- |
| **Properties**: background-attachment | **Disabled**: false   |
| **ClassName**: ```.bg-attach-*```     | **Responsive**: false |
|                                       | **PseudoClass**: null |

**Values**:

```json
//Native:
{	
    local: "local",
    fixed: "fixed",
    scroll: "scroll"
}
```

##  backgroundBlendMode

| ClassDetail                           | Customization         |
| ------------------------------------- | --------------------- |
| **Properties**: background-blend-mode | **Disabled**: true    |
| **ClassName**: ```.bg-blend-*```      | **Responsive**: false |
|                                       | **PseudoClass**: null |

**Values**:

```json
//Native:
{	
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
}
```

## backgroundClip

| ClassDetail                     | Customization         |
| ------------------------------- | --------------------- |
| **Properties**: background-clip | **Disabled**: true    |
| **ClassName**: ```.bg-clip-*``` | **Responsive**: false |
|                                 | **PseudoClass**: null |

**Values**:

```json
//Native:
{	
    border: "border-box",
    content: "content-box",
    padding: "padding-box",
    text: "text"
}
```

## backgroundColor

| ClassDetail                      | Customization                                                |
| -------------------------------- | ------------------------------------------------------------ |
| **Properties**: background-color | **Disabled**: false                                          |
| **ClassName**: ```.bg-*```       | **Responsive**: true                                         |
|                                  | **PseudoClass**: ["hover", "active", "focus", "focus-within"] |

**Values**:

```json
//Builtin:
{	
    transparent: "transparent",
    current: "currentcolor",
    black: "black",
    white: "white",
}
//Theme: "variables.color"
```

## backgroundOrigin

| ClassDetail                       | Customization         |
| --------------------------------- | --------------------- |
| **Properties**: background-origin | **Disabled**: false   |
| **ClassName**: ```.bg-orig-*```   | **Responsive**: false |
|                                   | **PseudoClass**: null |

**Values**:

```json
//Native:
{	
    border: "border-box",
    content: "content-box",
    padding: "padding-box",
}
```

## backgroundPosition

| ClassDetail                         | Customization         |
| ----------------------------------- | --------------------- |
| **Properties**: background-position | **Disabled**: false   |
| **ClassName**: ```.bg-pos-*```      | **Responsive**: false |
|                                     | **PseudoClass**: null |

**Values**:

```json
//Native:
{	
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    center: "center",
    "left-bottom": "left bottom",
    "left-top": "left top",
    "right-bottom": "right bottom",
    "right-top": "right top"
}
```

## backgroundRepeat

| ClassDetail                       | Customization         |
| --------------------------------- | --------------------- |
| **Properties**: background-repeat | **Disabled**: false   |
| **ClassName**: ```.bg-*```        | **Responsive**: false |
|                                   | **PseudoClass**: null |

**Values**:

```json
//Native:
{	
    repeat: "repeat",
    "no-repeat": "no-repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    round: "round",
    space: "space"
}
```

## backgroundSize

| ClassDetail                     | Customization         |
| ------------------------------- | --------------------- |
| **Properties**: background-size | **Disabled**: false   |
| **ClassName**: ```.bg-size-*``` | **Responsive**: false |
|                                 | **PseudoClass**: null |

**Values**:

```json
//Native:
{
    auto: "auto",
    cover: "cover",
    contain: "contain"
}
```