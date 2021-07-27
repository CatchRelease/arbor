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
var Grid_1 = __importDefault(require("../Grid"));
var gridStyles = function (_a) {
    var children = _a.children;
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  grid-template-columns: repeat(", ", 1fr);\n"], ["\n  grid-template-columns: repeat(", ", 1fr);\n"])), children.length);
};
var CardActions = styled_1["default"](Grid_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), gridStyles);
CardActions.defaultProps = {
    gridGap: 'smaller'
};
exports["default"] = CardActions;
var templateObject_1, templateObject_2;
