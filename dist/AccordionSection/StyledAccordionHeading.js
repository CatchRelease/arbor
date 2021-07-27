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
var Heading_1 = __importDefault(require("../Heading"));
var StyledHeading = styled_1["default"](Heading_1["default"].H4)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0;\n"])));
StyledHeading.defaultProps = {
    as: 'h1'
};
exports["default"] = StyledHeading;
var templateObject_1;
