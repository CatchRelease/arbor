"use strict";
exports.__esModule = true;
var polished_1 = require("polished");
var monochrome_1 = require("./monochrome");
var grey90 = monochrome_1.greys.grey90;
exports["default"] = {
    blurry: polished_1.transparentize(0.7, grey90),
    border: polished_1.transparentize(0.53, grey90)
};
