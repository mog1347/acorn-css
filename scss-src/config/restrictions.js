/*!
 * Kernel CSS v1.0.0 (https://gitee.com/mog1347/kernel-css)
 * Copyright 2020 FishEleven
 * Licensed under MIT (https://gitee.com/mog1347/kernel-css/LICENSE)
 */
const _ = require('lodash')
// Restrict and translate pseudo-class
const pseudoClasses = {
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
module.exports.pseudoClasses = pseudoClasses
module.exports.isAllowedPseudoClass = function (p) {
    return _.has(pseudoClasses, p)
}