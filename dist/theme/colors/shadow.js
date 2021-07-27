"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polished_1 = require("polished");
const monochrome_1 = require("./monochrome");
const { grey90 } = monochrome_1.greys;
exports.default = {
    blurry: polished_1.transparentize(0.7, grey90),
    border: polished_1.transparentize(0.53, grey90)
};
