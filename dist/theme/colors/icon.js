"use strict";
exports.__esModule = true;
var polished_1 = require("polished");
var monochrome_1 = require("./monochrome");
var grey50 = monochrome_1.greys.grey50, grey60 = monochrome_1.greys.grey60;
exports["default"] = {
    disabled: polished_1.transparentize(0.3, grey50),
    "default": grey60
};
