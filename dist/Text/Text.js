"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var textOverflow_1 = __importDefault(require("../utils/textOverflow"));
var textTransform_1 = __importDefault(require("../utils/textTransform"));
var whiteSpace_1 = __importDefault(require("../utils/whiteSpace"));
var baseStyles = function (_a) {
    var theme = _a.theme;
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n"], ["\n  font-family: ", ";\n"])), theme.brandFont);
};
var Text = styled_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), baseStyles, styled_system_1.color, styled_system_1.fontSize, styled_system_1.fontWeight, styled_system_1.lineHeight, styled_system_1.maxWidth, styled_system_1.minWidth, styled_system_1.overflow, styled_system_1.space, styled_system_1.textAlign, textTransform_1["default"], textOverflow_1["default"], whiteSpace_1["default"]);
Text.defaultProps = {
    color: 'text.default',
    fontSize: 'size4',
    lineHeight: 'small'
};
exports["default"] = Text;
var templateObject_1, templateObject_2;
