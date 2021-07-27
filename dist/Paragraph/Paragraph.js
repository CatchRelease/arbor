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
var Text_1 = __importDefault(require("../Text"));
var typography_1 = require("../theme/typography");
var VARIANT_MAPPING = {
    ui: 'size4',
    longForm: 'size5',
    tiny: 'size3'
};
var isFontSize = function (value) {
    return typography_1.fontSizeKeys.includes(value);
};
var variantStyles = function (_a) {
    var theme = _a.theme, variant = _a.variant, fontSize = _a.fontSize;
    var fontSizeOverride = fontSize && isFontSize(fontSize) && theme.fontSizes[fontSize]
        ? theme.fontSizes[fontSize]
        : fontSize;
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n  "], ["\n    font-size: ", ";\n  "])), fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]]);
};
var Paragraph = styled_1["default"](Text_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), variantStyles);
Paragraph.defaultProps = {
    lineHeight: 'large'
};
exports["default"] = Paragraph;
var templateObject_1, templateObject_2;
