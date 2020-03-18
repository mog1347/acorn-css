# Theme.js

[ToC]

Theme.js should be a CommonJS module, like:

```js
module.exports = {
    namespace: "",
    useImportant: false,
    useImportantOnDisplay: false,
    useCustomProperty: false,
    negativeTag: "n",
    pseudoClass: {...},
    responsive: {...},
    container: {...},
    layout: {...},
    preflight: {...},
    variables: {...},
    customization: {...}
}
```

## namespace

**Def:**  The global css namespace prefix

**Value:** {String}

**Default:** ""

If  ```namespace``` is not empty string , it will be added to all the css classes as a prefix. If ```namespace``` is "ac", class such as ```.text-center``` will change to ```.ac-text-center```. The class names mentioned below will be assumed to have no namespace.

## useImportant

**Def:** Whether to add ```!important```for all classes

**Value:** {Boolean}

**Default:** false

Set true to add ```!important``` in each declaration of all classes except ```d-*```.

##　useImportantOnDisplay

**Def:** Whether to add ```!important``` to display classes. The display class names begin with ```.d-*```

**Value:** {Boolean}

**Default:** false

Specific setting on display classes to use ```!important```. The ```useImportant``` does not effect display classes.

> Note
> This is useful when you still use inline style to handle the DOM visibility. If ```d-*``` classes have ```!important```, you can not hide an element by adding inline style ```style="display: none;"```, because ```!important``` overrides other declaration including the inline style.

## useCustomProperty

**Def:** Whether use "[CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)" or not

**Value:** {Boolean}

**Default:** true

If this is true, ```Kernel-CSS``` will extract all your ```theme.variables``` to transform them to css custom properties, and use the custom properties in classes declarations. For example,  supposing you have a red color named "red-100" defined in ```theme.variables``` like:

```js
theme:{
    variables:{
        color:{
            "red-100":"#FC0000"
        }
    }
}
```

If ```useCustomProperty``` is set true, you will get the ```kernel.css``` like:

```css
:root{
    --color-red-100: #FC0000;
}
...
.bg-red-100{
    background-color: var(--color-red-100);
}
...
```

If ```useCustomProperty``` is set false, you will get the ```kernel.css``` like:

```css
...
.bg-red-100{
    background-color: #FC0000;
}
...
```

With this you can easily change the whole css style by just changing the custom properties.

## negativeTag

**Def:** The tag added to the class name when the property value is negative

**Value:** {String}

**Default:** "n"

```Kernel-CSS``` will automatically apply negative values to some properties that supposes, like ```margin``` etc. In order to differ from the positive values, there must be a tag. For example, you have a gap setting in ```theme.variables``` like:

```js
theme:{
    variables:{
        gap:{
            "1":"0.5rem"
        }
    }
}
```

If ```negativeTag``` is "n", you will get the ```m-* ``` margin class in ```kernel.css``` like:

```css
...
.m-1{
    margin: 0.5rem;
}
.m-n1{
    margin: -0.5rem;
}
...
```

## pseudoClass

**Def:** Pseudo-class section

**Value:** {Object}

### disabled

**Def:** Whether use pseudo-class or not

**Value:** {Boolean}

**Default:** false

If you really don't want to define any pseudo-class class, set this to true and disable it(not recommended). 

### suffix

**Def:** Pseudo-class suffix

**Value:** {String}

**Default:** ":"

Pseudo-class suffix added to the class name, For example, you want apply a red background style above when hover, you will write a hover pseudo-class class like ```.hover:bg-red-100```

### list

**Def:** Pseudo-class supported list

**Value:** {Object}

**Default:** 

```js
{
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
```

The key is a name or abbreviation of a pseudo-class, the value is the pseudo-class selector(with ```:``` omitted). You can customize any word you like to the name, but keep the value a valid pseudo-class selector.

## responsive

**Def:** Responsive class section

**Value:** {Object}

### disabled

**Def:** Whether use responsive or not

**Value:** {Boolean}

**Default:** false

When you are writing a website without responsive design requirement, you could use this option to disable all the responsive figures in ```Kernel-CSS```.

### suffix

**Def:** Responsive suffix

**Value:** {String}

**Default:** "@"

Responsive suffix added to the class name, For example, you want apply a red background style above when screen is at ```sm``` size, you will write a responsive class like ```.sm@bg-red-100```

### type

**Def:** Responsive type determinate what size of screen to adapt first---- At this size of screen, class name would be wrote without responsive prefix. Set ```up``` to use css media query ```min-width``` to adapt small screen device first, like cellphone,  set ```down``` to use css media query ```max-width``` to adapt large screen device first like PC.  

**Value:** {String}["up", "down"]

**Default:** "up"

### breakpoints

**Def:** The screen width breakpoints, which css class will swap effective at.

**Default:** 

```js
{
    xs: null,
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px"
}
```

When ```type``` is "up", keep the first breakpoint with ```null``` like above. When ```type``` is "down", keep the last breakpoint with ```null``` like below:

```js
{ 
    xs: "639px",
    sm: "767px",
    md: "1023px",
    lg: "1279px",
    xl: null
}
```

Write the breakpoints in ascendant order of width.

## container

**Def:** Container section

**Value:** {Object}

Container is a general wrapper of content, of which the ```max-width``` property will jump at each responsive breakpoints. It very useful to set up a responsive web design.

### disabled

**Def:** Whether use container or not

**Value:** {Boolean}

**Default:** false

### padding

**Def:** Horizontal padding of container

**Value:** {CSS Value}

**Default:** 0

### centered

**Def:** Whether container is horizontal centered

**Value:** {Boolean}

**Default:** true

## layout

**Def:** Layout section

**Value:** {Object}

### flex

**Def:** Flex layout section, A flex layout like Bootstrap and more

**Value:** {Object}

#### disabled

**Def:** Whether use flex layout or not

**Value:** {Boolean}

**Default:** false

#### column

**Def:** Flex layout column count

**Value:** {Integer}

**Default:** 12

#### gap

**Def:** Flex layout column gap

**Value:** {CSS Value}

**Default:** "1rem"

### grid

**Def:** grid layout section

**Value:** {Object}    

#### disabled

**Def:** Whether use grid layout or not

**Value:** {Boolean}

**Default:** false

#### column

**Def:** Grid layout max column count

**Value:** {Integer}

**Default:** 12

#### row

**Def:** Grid layout max row count

**Value:** {Integer}

**Default:** 6

## variables

