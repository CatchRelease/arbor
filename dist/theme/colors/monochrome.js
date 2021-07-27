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
exports.greys = exports.white = exports.black = void 0;
exports.black = '#000000';
exports.white = '#FFFFFF';
exports.greys = {
    grey10: '#F8F9F9',
    grey20: '#F2F2F2',
    grey30: '#EBECEC',
    grey40: '#E0E1E2',
    grey50: '#BEBEC0',
    grey60: '#989A9C',
    grey70: '#78797D',
    grey80: '#5B5D61',
    grey90: '#25272D',
    grey100: '#0F0F10'
};
exports["default"] = __assign(__assign({}, exports.greys), { black: exports.black, white: exports.white });
