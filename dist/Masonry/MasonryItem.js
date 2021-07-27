"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var Box_1 = __importDefault(require("../Box"));
var MasonryItem = styled_1["default"](Box_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  break-inside: avoid;\n  ", ";\n  ", ";\n"], ["\n  break-inside: avoid;\n  ", ";\n  ", ";\n"])), styled_system_1.display, styled_system_1.width);
MasonryItem.propTypes = __assign(__assign({}, styled_system_1.display.propTypes), styled_system_1.width.propTypes);
MasonryItem.defaultProps = {
    display: 'block',
    width: '100%'
};
exports["default"] = MasonryItem;
var templateObject_1;
