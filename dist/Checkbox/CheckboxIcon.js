"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Icon_1 = __importDefault(require("../Icon"));
const iconFontSize = '16px';
const CheckboxIcon = ({ checked, indeterminate }) => {
    if (indeterminate) {
        return jsx_runtime_1.jsx(Icon_1.default, { name: "checkbox-indeterminate", fontSize: iconFontSize }, void 0);
    }
    if (checked) {
        return jsx_runtime_1.jsx(Icon_1.default, { name: "checkbox-checked", fontSize: iconFontSize }, void 0);
    }
    return null;
};
CheckboxIcon.propTypes = {
    /**
     * Whether or not the checkbox is checked.
     */
    checked: prop_types_1.default.bool,
    /**
     * Checkbox's indeterminate state.
     */
    indeterminate: prop_types_1.default.bool
};
CheckboxIcon.defaultProps = {
    checked: false,
    indeterminate: false
};
exports.default = CheckboxIcon;
