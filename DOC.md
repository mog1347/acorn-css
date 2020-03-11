### 语法高亮
1. vscode
安装扩展：
```language-postcss```
https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss
2. webstorm/phpstorm
安装扩展：
```PostCSS```
https://plugins.jetbrains.com/plugin/8578-postcss

### 语法检查
//todo

### 智能提示
//un-staged

//立刻TODO
- 加上normal.css和基本样式preflight
- !important添加


//TODO
- 添加filter滤镜的支持
- 添加对text-emphasis的支持
- 增加对常见伪元素的支持 ::placehoder, ::scrollbar, ::selection
- 考虑是否添加text-shadow的支持    
- 考虑是否加上
```css
@mixin reset-text() {
  font-family: $font-family-base;
  // We deliberately do NOT reset font-size or word-wrap.
  font-style: normal;
  font-weight: $font-weight-normal;
  line-height: $line-height-base;
  text-align: left; // Fallback for where `start` is not supported
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
}
.text-reset { color: inherit !important; }
// CSS image replacement
@mixin text-hide($ignore-warning: false) {
  // stylelint-disable-next-line font-family-no-missing-generic-family-keyword
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

这个命名可以考虑下
// Size
.font-size-larger     { font-size: $font-size-larger !important; }
.font-size-large      { font-size: $font-size-large !important; }
.font-size-normal     { font-size: $font-size-base !important; }
.font-size-small      { font-size: $font-size-small !important; }
.font-size-smaller    { font-size: $font-size-smaller !important; }
// Weight
.font-weight-light    { font-weight: $font-weight-light !important; }
.font-weight-lighter  { font-weight: $font-weight-lighter !important; }
.font-weight-normal   { font-weight: $font-weight-normal !important; }
.font-weight-bold     { font-weight: $font-weight-bold !important; }
.font-weight-bolder   { font-weight: $font-weight-bolder !important; }


.font-inherit         { font:inherit !important; }__
```

//命名方式
/*
形容词命名//并非线性
4xl 3xl 2xl xl lg md sm xs 2xs
extra-large large default small extra-small
hair-thin thin lighter light medium bold extra-bold dark extra-dark




量词命名
100 200 300 400 500 600 ...
10 20 30 40 50 60...
5 10 15 20 25...
0 2 4 8 12 16 20 24 28 32...
1/2 1/3 1/4 1/12


属性命名
none inline inline-block
*/
