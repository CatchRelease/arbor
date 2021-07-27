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
var Card_1 = __importDefault(require("../Card"));
var PopoverContent = styled_1["default"](Card_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: ", ";\n  min-height: 40px;\n  min-width: 160px;\n"], ["\n  background: ", ";\n  box-shadow: ", ";\n  min-height: 40px;\n  min-width: 160px;\n"])), function (props) { return props.theme.colors.monochrome.white; }, function (props) { return props.theme.shadows.elevation2; });
PopoverContent.defaultProps = {
    overflow: 'hidden'
};
exports["default"] = PopoverContent;
var templateObject_1;
