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
var Flex_1 = __importDefault(require("../Flex"));
var CheckboxLabel = styled_1["default"](Flex_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: ", ";\n  line-height: ", ";\n"], ["\n  cursor: ", ";\n  line-height: ", ";\n"])), function (props) { return (props.disabled ? 'not-allowed' : 'pointer'); }, function (_a) {
    var theme = _a.theme;
    return theme.lineHeights.small;
});
CheckboxLabel.defaultProps = {
    as: 'label'
};
exports["default"] = CheckboxLabel;
var templateObject_1;
