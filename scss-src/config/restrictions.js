/*!
 * Kernel CSS v1.0.0 (https://gitee.com/mog1347/kernel-css)
 * Copyright 2020 FishEleven
 * Licensed under MIT (https://gitee.com/mog1347/kernel-css/LICENSE)
 */
// Restrictions on pseudo-class and pseudo-element
const pseudoClassRestrictions = [
    "link",
    "visited",
    "any-link",
    "hover",
    "active",
    "focus",
    "focus-within",

    "checked",
    "disabled",
    "read-only",
    "invalid",
    "valid",

    "first-child",
    "last-child",
    "odd-child", //nth-child(odd)
    "even-child" //nth-child(even)
]
const pseudoElementRestrictions = [
    "before",
    "after",
    "placeholder",
    "selection"
]

module.exports = {
    isAllowedPseudoClass: function () {


    },
    isAllowedPseudoElement: function () {

    }
}