"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.fontSizeKeys = void 0;
var polished_1 = require("polished");
var fontSizes = {
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
var inputSizes = {
    "default": fontSizes.size4,
    mobile: fontSizes.size5
};
exports["default"] = __assign(__assign({}, fontSizes), { input: __assign({}, inputSizes) });
