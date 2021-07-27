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
var StyledFormField = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), function (props) {
    return props.caption ? props.theme.space.smaller : props.theme.space.regular;
});
StyledFormField.propTypes = {
    caption: prop_types_1["default"].string
};
StyledFormField.defaultProps = {
    caption: ''
};
exports["default"] = StyledFormField;
var templateObject_1;
