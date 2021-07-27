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
var Box_1 = __importDefault(require("../Box"));
var CheckboxInput = styled_1["default"](Box_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
CheckboxInput.defaultProps = {
    as: 'input'
};
exports["default"] = CheckboxInput;
var templateObject_1;
