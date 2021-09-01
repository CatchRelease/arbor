"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Icon_1 = __importDefault(require("../Icon"));
const iconFontSize = '16px';
const RadioButtonIcon = ({ checked }) => {
    if (checked) {
        return (0, jsx_runtime_1.jsx)(Icon_1.default, { name: "radio-checked", fontSize: iconFontSize }, void 0);
    }
    return null;
};
RadioButtonIcon.propTypes = {
    /**
     * Whether or not the checkbox is checked.
     */
    checked: prop_types_1.default.bool
};
RadioButtonIcon.defaultProps = {
    checked: false
};
exports.default = RadioButtonIcon;
