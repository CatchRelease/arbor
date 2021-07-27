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
var inputStyles_1 = __importDefault(require("./inputStyles"));
var largeStyles = function (_a) {
    var theme = _a.theme, large = _a.large;
    return large && react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", " ", ";\n  "], ["\n    padding: ", " ", ";\n  "])), theme.space.small, theme.space.smaller);
};
var StyledInput = styled_1["default"].input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), inputStyles_1["default"], styled_system_1.display, largeStyles, styled_system_1.maxWidth);
exports["default"] = StyledInput;
var templateObject_1, templateObject_2;
