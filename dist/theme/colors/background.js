"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monochrome_1 = require("./monochrome");
const { grey10, grey20, grey30 } = monochrome_1.greys;
exports.default = {
    default: grey20,
    disabled: grey30,
    muted: grey10,
    white: monochrome_1.white
};
