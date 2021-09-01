"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Box_1 = __importDefault(require("../Box"));
const Button_1 = __importDefault(require("../Button"));
const Flex_1 = __importDefault(require("../Flex"));
const Icon_1 = __importDefault(require("../Icon"));
const DatePickerNavbar = ({ onPreviousClick, onNextClick, className }) => ((0, jsx_runtime_1.jsxs)(Flex_1.default, Object.assign({ className: className, alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { iconStart: (0, jsx_runtime_1.jsx)(Icon_1.default, { color: "icon.default", name: "chevron", rotation: "90" }, void 0), onClick: () => onPreviousClick(), size: "small", variant: "minimal", "aria-label": "Previous Month", type: "button" }, void 0), (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ mr: "small", ml: "small" }, { children: (0, jsx_runtime_1.jsx)(Icon_1.default, { color: "icon.default", fontSize: "size5", name: "symbol-circle" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, { iconStart: (0, jsx_runtime_1.jsx)(Icon_1.default, { color: "icon.default", name: "chevron", rotation: "270" }, void 0), onClick: () => onNextClick(), size: "small", variant: "minimal", "aria-label": "Next Month", type: "button" }, void 0)] }), void 0));
DatePickerNavbar.propTypes = {
    /**
     * Classname to aply to the wrapping container of the DatePickerNavbar content
     */
    className: prop_types_1.default.string.isRequired,
    /**
     * Callback called when the user clicks on the 'Next Month' button
     */
    onNextClick: prop_types_1.default.func.isRequired,
    /**
     * Callback called when the user clicks on the 'Previous Month' button
     */
    onPreviousClick: prop_types_1.default.func.isRequired
};
exports.default = DatePickerNavbar;
