"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polished_1 = require("polished");
const monochrome_1 = require("./monochrome");
const { grey50, grey60 } = monochrome_1.greys;
exports.default = {
    disabled: polished_1.transparentize(0.3, grey50),
    default: grey60
};
