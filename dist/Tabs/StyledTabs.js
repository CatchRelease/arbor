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
var Box_1 = __importDefault(require("../Box"));
var StyledTabs = styled_1["default"](Box_1["default"].withComponent('div'))(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  justify-content: space-between;\n"], ["\n  justify-content: space-between;\n"])));
StyledTabs.defaultProps = __assign(__assign({}, Box_1["default"].defaultProps), { borderBottom: '1px solid transparent', borderColor: 'border.muted', display: 'inline-flex', width: '100%' });
exports["default"] = StyledTabs;
var templateObject_1;
