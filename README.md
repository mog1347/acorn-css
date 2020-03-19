# 设计原则
## 颜色
- 受Triadic Color Scheme的启发，在传统```CSS Framework```双元色（primary，secondary）的基础上，添加第三种元色，形成（primary secondary tertiary）的配色体系，三者分别是web的第一色调（主色调），第二色调，第三色调（辅助色调）。web页面中不应该出现多于3种以上的



- （gray）灰度色调可以自定义，灰度色调是当前web设计中不可缺乏的颜色组成部分。





样式的维度
1. ==DarkMode or LightMode==，深色主题和浅色主题的用色配方是不一样的；
2. Response or Non-response，是否自适应的方案也是不一样的；

注：目前自适应的方案有两种方法，一种采用rem单位，通过```@media query```改变rem的值来全局影响；另一种采用vw,vh单位，直接根据浏览器的尺寸来进行全局影响，这两者可以结合使用，甚至可以calc(25vw - 16rem)。这样的处理方式会非常灵活。

