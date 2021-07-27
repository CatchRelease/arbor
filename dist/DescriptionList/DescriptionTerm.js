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
var Box_1 = __importDefault(require("../Box"));
var DescriptionTerm = Box_1["default"].withComponent('dt');
DescriptionTerm.defaultProps = __assign(__assign({}, Box_1["default"].defaultProps), { color: 'text.muted', fontSize: 'size3', lineHeight: 'small', mb: 'smallest' });
exports["default"] = DescriptionTerm;
