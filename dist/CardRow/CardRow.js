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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var Flex_1 = __importDefault(require("../Flex"));
var CardRow = function (props) { return jsx_runtime_1.jsx(Flex_1["default"], __assign({}, props), void 0); };
CardRow.defaultProps = {
    px: 'regular',
    py: 'smallest',
    my: 'smaller',
    alignItems: 'center',
    justifyContent: 'space-between'
};
exports["default"] = CardRow;
