"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prop_types_1 = __importDefault(require("prop-types"));
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("@emotion/react");
var Box_1 = __importDefault(require("../Box"));
var disabledStyles = function (_a) {
    var isDisabled = _a.isDisabled, theme = _a.theme;
    if (!isDisabled)
        return '';
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n      cursor: not-allowed;\n    }\n  "], ["\n    background: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n      cursor: not-allowed;\n    }\n  "])), theme.colors.monochrome.white, theme.colors.text.disabled, theme.colors.monochrome.white);
};
var focusedStyles = function (_a) {
    var isFocused = _a.isFocused, theme = _a.theme;
    if (!isFocused)
        return '';
    return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: ", ";\n  "], ["\n    background: ", ";\n  "])), theme.colors.background.muted);
};
var selectedStyles = function (_a) {
    var isSelected = _a.isSelected, theme = _a.theme;
    if (!isSelected)
        return '';
    return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-weight: ", ";\n  "], ["\n    font-weight: ", ";\n  "])), theme.fontWeights.medium);
};
var StyledMenuItem = styled_1["default"](Box_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background: ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  background: ", ";\n  color: ", ";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background: ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.monochrome.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text["default"];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.background.muted;
}, focusedStyles, selectedStyles, disabledStyles);
StyledMenuItem.propTypes = {
    isDisabled: prop_types_1["default"].bool,
    isFocused: prop_types_1["default"].bool,
    isSelected: prop_types_1["default"].bool
};
StyledMenuItem.defaultProps = {
    fontSize: 'size4',
    isDisabled: false,
    isFocused: false,
    isSelected: false,
    p: 'small'
};
exports["default"] = StyledMenuItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
