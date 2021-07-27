"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monochrome_1 = require("./monochrome");
const { grey30, grey40, grey80 } = monochrome_1.greys;
exports.default = {
    muted: grey30,
    default: grey40,
    dark: grey80
};
