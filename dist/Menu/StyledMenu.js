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
var StyledMenu = styled_1["default"](Flex_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n"], ["\n  outline: none;\n"])));
StyledMenu.defaultProps = {
    pb: 'smallest',
    pt: 'smallest'
};
exports["default"] = StyledMenu;
var templateObject_1;
