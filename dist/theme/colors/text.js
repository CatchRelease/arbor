"use strict";
exports.__esModule = true;
var polished_1 = require("polished");
var monochrome_1 = require("./monochrome");
var grey60 = monochrome_1.greys.grey60, grey70 = monochrome_1.greys.grey70, grey80 = monochrome_1.greys.grey80, grey90 = monochrome_1.greys.grey90, grey100 = monochrome_1.greys.grey100;
exports["default"] = {
    dark: grey100,
    "default": grey90,
    disabled: polished_1.transparentize(0.3, grey70),
    muted: grey80,
    placeholder: grey60
};
