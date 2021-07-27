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
var polished_1 = require("polished");
var Flex_1 = __importDefault(require("../Flex"));
var baseStyles = function (_a) {
    var theme = _a.theme;
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  flex-shrink: 0;\n  height: ", ";\n  width: ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  flex-shrink: 0;\n  height: ", ";\n  width: ", ";\n"])), theme.colors.monochrome.white, theme.radii.small, theme.colors.grey60, theme.colors.monochrome.white, polished_1.rem('16px'), polished_1.rem('16px'));
};
var checkedStyles = function (_a) {
    var theme = _a.theme, checked = _a.checked, indeterminate = _a.indeterminate;
    return checked && react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  "])), indeterminate
        ? theme.colors.monochrome.white
        : theme.colors.intent.brand.dark, theme.colors.intent.brand.dark, indeterminate
        ? theme.colors.intent.brand.dark
        : theme.colors.intent.brand.light);
};
var disabledStyles = function (_a) {
    var theme = _a.theme, checked = _a.checked, disabled = _a.disabled;
    return disabled && react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  "], ["\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  "])), checked
        ? theme.colors.monochrome.grey40
        : theme.colors.monochrome.white, theme.colors.border["default"], checked ? theme.colors.grey60 : theme.colors.monochrome.white);
};
var StyledCheckbox = styled_1["default"](Flex_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"])), baseStyles, checkedStyles, disabledStyles);
StyledCheckbox.defaultProps = {
    alignItems: 'center',
    justifyContent: 'center'
};
exports["default"] = StyledCheckbox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
