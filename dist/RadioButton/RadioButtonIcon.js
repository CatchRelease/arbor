"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var Icon_1 = __importDefault(require("../Icon"));
var iconFontSize = '16px';
var RadioButtonIcon = function (_a) {
    var checked = _a.checked;
    if (checked) {
        return jsx_runtime_1.jsx(Icon_1["default"], { name: "radio-checked", fontSize: iconFontSize }, void 0);
    }
    return null;
};
RadioButtonIcon.propTypes = {
    /**
     * Whether or not the checkbox is checked.
     */
    checked: prop_types_1["default"].bool
};
RadioButtonIcon.defaultProps = {
    checked: false
};
exports["default"] = RadioButtonIcon;
