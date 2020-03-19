# Classes > Background

## backgroundAttachment

| ClassDetail                           | Default               |
| ------------------------------------- | --------------------- |
| **Properties**: background-attachment | **Disabled**: false   |
| **ClassName**: ```.bg-attach-*```     | **Responsive**: false |
|                                       | **PseudoClass**: null |

**Values**:

```js
//This class is constant, its values are native and does not accept modification.
//Native values:
{	
    local: "local",
    fixed: "fixed",
    scroll: "scroll"
}
```

##  backgroundBlendMode

| ClassDetail                           | Default               |
| ------------------------------------- | --------------------- |
| **Properties**: background-blend-mode | **Disabled**: true    |
| **ClassName**: ```.bg-blend-*```      | **Responsive**: false |
|                                       | **PseudoClass**: null |

**Values**:

```js
//This class is constant, its values are native and does not accept modification.
//Native values:
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

| ClassDetail                     | Default               |
| ------------------------------- | --------------------- |
| **Properties**: background-clip | **Disabled**: `true`  |
| **ClassName**: ```.bg-clip-*``` | **Responsive**: false |
|                                 | **PseudoClass**: null |

**Values**:

```json
//This class is constant, its values are native and does not accept modification.
//Native values:
{	
    border: "border-box",
    content: "content-box",
    padding: "padding-box",
    text: "text"
}
```

## ==backgroundColor==

| ClassDetail                      | Default                                                      |
| -------------------------------- | ------------------------------------------------------------ |
| **Properties**: background-color | **Disabled**: false                                          |
| **ClassName**: ```.bg-*```       | **Responsive**: true                                         |
|                                  | **PseudoClass**: ["hover", "active", "focus", "focus-within"] |

**Values**:

```json
//The values of this class accept modification.
//Builtin values:
{	
    transparent: "transparent",
    current: "currentcolor",
    black: "black",
    white: "white",
}
//Values will be extend or replace by following theme data in order:
//"variables.color"
//"customization.backgroundColor"
```

## backgroundOrigin

| ClassDetail                       | Default               |
| --------------------------------- | --------------------- |
| **Properties**: background-origin | **Disabled**: false   |
| **ClassName**: ```.bg-orig-*```   | **Responsive**: false |
|                                   | **PseudoClass**: null |

**Values**:

```json
//This class is constant, its values are native and does not accept modification.
//Native values:
{	
    border: "border-box",
    content: "content-box",
    padding: "padding-box",
}
```

## backgroundPosition

| ClassDetail                         | Default               |
| ----------------------------------- | --------------------- |
| **Properties**: background-position | **Disabled**: false   |
| **ClassName**: ```.bg-pos-*```      | **Responsive**: false |
|                                     | **PseudoClass**: null |

**Values**:

```json
//This class is constant, its values are native and does not accept modification.
//Native values:
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

| ClassDetail                       | Default               |
| --------------------------------- | --------------------- |
| **Properties**: background-repeat | **Disabled**: false   |
| **ClassName**: ```.bg-*```        | **Responsive**: false |
|                                   | **PseudoClass**: null |

**Values**:

```json
//This class is constant, its values are native and does not accept modification.
//Native values:
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

| ClassDetail                     | Default               |
| ------------------------------- | --------------------- |
| **Properties**: background-size | **Disabled**: false   |
| **ClassName**: ```.bg-size-*``` | **Responsive**: false |
|                                 | **PseudoClass**: null |

**Values**:

```json
//This class is constant, its values are native and does not accept modification.
//Native values:
{
    auto: "auto",
    cover: "cover",
    contain: "contain"
}
```