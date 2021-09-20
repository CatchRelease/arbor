"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Icon_1 = __importDefault(require("../Icon"));
const iconFontSize = '16px';
const CheckboxIcon = ({ checked, indeterminate }) => {
    if (indeterminate) {
        return (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "checkbox-indeterminate", fontSize: iconFontSize }, void 0);
    }
    if (checked) {
        return (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "checkbox-checked", fontSize: iconFontSize }, void 0);
    }
    return null;
};
exports.default = CheckboxIcon;
