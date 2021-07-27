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
var Box_1 = __importDefault(require("../Box"));
var Grid = styled_1["default"](Box_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), styled_system_1.alignContent, styled_system_1.alignItems, styled_system_1.grid, styled_system_1.justifyContent, styled_system_1.justifyItems);
Grid.defaultProps = {
    display: 'grid'
};
exports["default"] = Grid;
var templateObject_1;
