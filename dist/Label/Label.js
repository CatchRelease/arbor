"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var styled_1 = __importDefault(require("@emotion/styled"));
var prop_types_1 = __importDefault(require("prop-types"));
var Label = styled_1["default"].label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n"], ["\n  color: ", ";\n  display: block;\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n"])), function (props) { return props.theme.colors.text.muted; }, function (props) { return props.theme.brandFont; }, function (props) { return props.theme.fontSizes.size4; }, function (props) { return props.theme.lineHeights.large; });
Label.propTypes = {
    /**
     * ID of the input that the label is related to
     */
    htmlFor: prop_types_1["default"].string.isRequired
};
exports["default"] = Label;
var templateObject_1;
