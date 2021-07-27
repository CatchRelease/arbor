"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontSizeKeys = void 0;
const polished_1 = require("polished");
const fontSizes = {
    size1: polished_1.rem('11px'),
    size2: polished_1.rem('12px'),
    size3: polished_1.rem('13px'),
    size4: polished_1.rem('14px'),
    size5: polished_1.rem('16px'),
    size6: polished_1.rem('20px'),
    size7: polished_1.rem('24px'),
    size8: polished_1.rem('28px'),
    size9: polished_1.rem('34px')
};
exports.fontSizeKeys = Object.keys(fontSizes);
const inputSizes = {
    default: fontSizes.size4,
    mobile: fontSizes.size5
};
exports.default = Object.assign(Object.assign({}, fontSizes), { input: Object.assign({}, inputSizes) });
