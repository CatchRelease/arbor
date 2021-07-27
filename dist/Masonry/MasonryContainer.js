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
var columns_1 = require("../utils/columns");
var MasonryContainer = styled_1["default"](Box_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), columns_1.columnCount, columns_1.columnGap, columns_1.columnRule, columns_1.columnRuleColor, columns_1.columnRuleStyle, columns_1.columnRuleWidth, columns_1.columnWidth, columns_1.columns);
MasonryContainer.propTypes = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, columns_1.columnCount.propTypes), columns_1.columnGap.propTypes), columns_1.columnRule.propTypes), columns_1.columnRuleColor.propTypes), columns_1.columnRuleStyle.propTypes), columns_1.columnRuleWidth.propTypes), columns_1.columnWidth.propTypes), columns_1.columns.propTypes);
exports["default"] = MasonryContainer;
var templateObject_1;
