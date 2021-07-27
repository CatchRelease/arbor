"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("@emotion/react");
var polished_1 = require("polished");
var theme_get_1 = require("@styled-system/theme-get");
var variants = function (_a) {
    var intent = _a.intent, variant = _a.variant, paletteColor = _a.paletteColor, props = __rest(_a, ["intent", "variant", "paletteColor"]);
    var colorIntent = theme_get_1.themeGet("colors.intent." + intent + ".default")(props);
    var colorWhite = theme_get_1.themeGet('colors.monochrome.white')(props);
    var colorGrey = theme_get_1.themeGet("colors.monochrome.grey10")(props);
    var color = function () {
        if (paletteColor) {
            return theme_get_1.themeGet("colors.palette." + paletteColor + ".default")(props);
        }
        if (variant === 'primary') {
            return intent === 'brand'
                ? theme_get_1.themeGet("colors.intent." + intent + ".lighter")(props)
                : colorWhite;
        }
        return colorIntent;
    };
    var colorActive = polished_1.shade(0.16, colorIntent);
    var colorFocus = theme_get_1.themeGet("colors.intent." + intent + ".light")(props);
    var colorHover = polished_1.tint(0.16, colorIntent);
    var colorIcon = function () {
        if (paletteColor) {
            return theme_get_1.themeGet("colors.palette." + paletteColor + ".default")(props);
        }
        if (variant !== 'primary' && intent === 'brand') {
            return theme_get_1.themeGet("colors.icon.default")(props);
        }
        return 'inherit';
    };
    var common = react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &::-moz-focus-inner {\n      border: 0;\n    }\n\n    &:focus {\n      border: 1px solid transparent;\n    }\n\n    &:focus:hover {\n      border: 1px solid transparent;\n    }\n\n    i {\n      color: ", ";\n    }\n  "], ["\n    &::-moz-focus-inner {\n      border: 0;\n    }\n\n    &:focus {\n      border: 1px solid transparent;\n    }\n\n    &:focus:hover {\n      border: 1px solid transparent;\n    }\n\n    i {\n      color: ", ";\n    }\n  "])), colorIcon());
    switch (variant) {
        case 'primary':
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background-color: ", ";\n        color: ", ";\n\n        &:enabled {\n          &:active {\n            background-color: ", ";\n          }\n\n          &:focus {\n            box-shadow: 0 0 0 3px ", ";\n          }\n\n          &:hover {\n            background-color: ", ";\n          }\n        }\n\n        ", ";\n      "], ["\n        background-color: ", ";\n        color: ", ";\n\n        &:enabled {\n          &:active {\n            background-color: ", ";\n          }\n\n          &:focus {\n            box-shadow: 0 0 0 3px ", ";\n          }\n\n          &:hover {\n            background-color: ", ";\n          }\n        }\n\n        ", ";\n      "])), colorIntent, color(), colorActive, colorFocus, colorHover, common);
        case 'secondary':
            return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background-color: ", ";\n        color: ", ";\n\n        &:enabled {\n          border: 1px solid ", ";\n\n          &:active {\n            color: ", ";\n            background-color: ", ";\n          }\n\n          &:focus {\n            box-shadow: 0 0 0 3px ", ";\n          }\n\n          &:hover {\n            border: 1px solid ", ";\n\n            i {\n              color: ", ";\n            }\n          }\n        }\n\n        ", ";\n      "], ["\n        background-color: ", ";\n        color: ", ";\n\n        &:enabled {\n          border: 1px solid ", ";\n\n          &:active {\n            color: ", ";\n            background-color: ", ";\n          }\n\n          &:focus {\n            box-shadow: 0 0 0 3px ", ";\n          }\n\n          &:hover {\n            border: 1px solid ", ";\n\n            i {\n              color: ", ";\n            }\n          }\n        }\n\n        ", ";\n      "])), colorWhite, color(), theme_get_1.themeGet("colors.border.default")(props), colorActive, colorGrey, colorFocus, colorHover, color(), common);
        case 'minimal':
            return react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background-color: transparent;\n        border: 1px solid transparent;\n        color: ", ";\n\n        &:disabled {\n          background-color: transparent;\n          color: ", ";\n\n          /* quiet an invalid lint error - button cannot be disabled and enabled at the same time */\n          /* stylelint-disable-next-line no-descending-specificity */\n          i {\n            color: ", ";\n          }\n        }\n\n        &:enabled {\n          &:active {\n            background-color: ", ";\n            color: ", ";\n          }\n\n          &:focus {\n            box-shadow: 0 0 0 3px ", ";\n          }\n\n          &:hover {\n            background-color: ", ";\n\n            i {\n              color: ", ";\n            }\n          }\n        }\n\n        ", ";\n      "], ["\n        background-color: transparent;\n        border: 1px solid transparent;\n        color: ", ";\n\n        &:disabled {\n          background-color: transparent;\n          color: ", ";\n\n          /* quiet an invalid lint error - button cannot be disabled and enabled at the same time */\n          /* stylelint-disable-next-line no-descending-specificity */\n          i {\n            color: ", ";\n          }\n        }\n\n        &:enabled {\n          &:active {\n            background-color: ", ";\n            color: ", ";\n          }\n\n          &:focus {\n            box-shadow: 0 0 0 3px ", ";\n          }\n\n          &:hover {\n            background-color: ", ";\n\n            i {\n              color: ", ";\n            }\n          }\n        }\n\n        ", ";\n      "])), color(), theme_get_1.themeGet("colors.text.disabled")(props), theme_get_1.themeGet("colors.icon.disabled")(props), colorGrey, colorActive, colorFocus, colorGrey, color(), common);
        default:
            return '';
    }
};
exports["default"] = variants;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
