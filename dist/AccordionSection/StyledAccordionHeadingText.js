"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledText = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var Flex_1 = __importDefault(require("../Flex"));
exports.StyledText = styled_1["default"](Flex_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  font-size: inherit;\n  font-weight: ", ";\n  padding: 0;\n"], ["\n  background: none;\n  border: none;\n  font-size: inherit;\n  font-weight: ", ";\n  padding: 0;\n"])), function (props) { return props.theme.fontWeights.regular; });
exports.StyledText.defaultProps = {
    as: 'span'
};
exports["default"] = exports.StyledText;
var templateObject_1;
