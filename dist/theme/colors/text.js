"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polished_1 = require("polished");
const monochrome_1 = require("./monochrome");
const { grey60, grey70, grey80, grey90, grey100 } = monochrome_1.greys;
exports.default = {
    dark: grey100,
    default: grey90,
    disabled: polished_1.transparentize(0.3, grey70),
    muted: grey80,
    placeholder: grey60
};
