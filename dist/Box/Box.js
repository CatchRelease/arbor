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
var styled_system_1 = require("styled-system");
var Text_1 = __importDefault(require("../Text"));
var TextDiv = Text_1["default"].withComponent('div');
var TextDivWithColorPropFix = TextDiv;
var Box = styled_1["default"](TextDivWithColorPropFix)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  box-sizing: border-box;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), styled_system_1.borders, styled_system_1.boxShadow, styled_system_1.display, styled_system_1.height, styled_system_1.gridArea, styled_system_1.maxHeight, styled_system_1.minHeight, styled_system_1.position, styled_system_1.width);
exports["default"] = Box;
var templateObject_1;
