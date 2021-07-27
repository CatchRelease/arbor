"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("@emotion/react");
var polished_1 = require("polished");
var disabledStyles = function (theme) { return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), theme.colors.background["default"]); };
var focusedStyles = function (theme) { return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: ", " solid ", ";\n  box-shadow: 0 0 8px ", ";\n  outline: none;\n"], ["\n  border: ", " solid ", ";\n  box-shadow: 0 0 8px ", ";\n  outline: none;\n"])), theme.borderWidth.small, theme.colors.intent.brand.dark, polished_1.transparentize(0.9, theme.colors.intent.brand.light)); };
var invalidStyles = function (theme) { return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: ", " solid ", ";\n  background: ", ";\n"], ["\n  border: ", " solid ", ";\n  background: ", ";\n"])), theme.borderWidth.small, theme.colors.palette.red["default"], theme.colors.palette.red.lighter); };
/* stylelint-disable property-no-vendor-prefix */
var hideArrowsStyles = react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  -moz-appearance: textfield;\n"], ["\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  -moz-appearance: textfield;\n"])));
var inputStyles = function (_a) {
    var hideArrows = _a.hideArrows, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isInvalid = _a.isInvalid, theme = _a.theme;
    return react_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: ", ";\n  border: ", " solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin: ", " 0;\n  padding: ", ";\n  width: 100%;\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n  ", ";\n  ", ";\n  ", ";\n\n  &:focus {\n    ", ";\n  }\n\n  &:disabled {\n    ", ";\n  }\n\n  &:required {\n    box-shadow: none;\n  }\n\n  ", "\n"], ["\n  border-radius: ", ";\n  border: ", " solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin: ", " 0;\n  padding: ", ";\n  width: 100%;\n\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n  ", ";\n  ", ";\n  ", ";\n\n  &:focus {\n    ", ";\n  }\n\n  &:disabled {\n    ", ";\n  }\n\n  &:required {\n    box-shadow: none;\n  }\n\n  ", "\n"])), theme.radii.small, theme.borderWidth.small, theme.colors.border["default"], theme.colors.text["default"], theme.brandFont, theme.fontSizes.input["default"], theme.lineHeights.small, theme.space.smallest, theme.space.smaller, theme.breakpointsMap.md, theme.fontSizes.input.mobile, theme.colors.text.placeholder, isDisabled ? disabledStyles(theme) : '', isFocused ? focusedStyles(theme) : '', isInvalid ? invalidStyles(theme) : '', focusedStyles(theme), disabledStyles(theme), hideArrows ? hideArrowsStyles : '');
};
exports["default"] = inputStyles;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
