"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var Box_1 = __importDefault(require("../Box"));
var Button_1 = __importDefault(require("../Button"));
var Flex_1 = __importDefault(require("../Flex"));
var Icon_1 = __importDefault(require("../Icon"));
var DatePickerNavbar = function (_a) {
    var onPreviousClick = _a.onPreviousClick, onNextClick = _a.onNextClick, className = _a.className;
    return (jsx_runtime_1.jsxs(Flex_1["default"], __assign({ className: className, alignItems: "center" }, { children: [jsx_runtime_1.jsx(Button_1["default"], { iconStart: jsx_runtime_1.jsx(Icon_1["default"], { color: "icon.default", name: "chevron", rotation: "90" }, void 0), onClick: function () { return onPreviousClick(); }, size: "small", variant: "minimal", "aria-label": "Previous Month", type: "button" }, void 0), jsx_runtime_1.jsx(Box_1["default"], __assign({ mr: "small", ml: "small" }, { children: jsx_runtime_1.jsx(Icon_1["default"], { color: "icon.default", fontSize: "size5", name: "symbol-circle" }, void 0) }), void 0), jsx_runtime_1.jsx(Button_1["default"], { iconStart: jsx_runtime_1.jsx(Icon_1["default"], { color: "icon.default", name: "chevron", rotation: "270" }, void 0), onClick: function () { return onNextClick(); }, size: "small", variant: "minimal", "aria-label": "Next Month", type: "button" }, void 0)] }), void 0));
};
DatePickerNavbar.propTypes = {
    /**
     * Classname to aply to the wrapping container of the DatePickerNavbar content
     */
    className: prop_types_1["default"].string.isRequired,
    /**
     * Callback called when the user clicks on the 'Next Month' button
     */
    onNextClick: prop_types_1["default"].func.isRequired,
    /**
     * Callback called when the user clicks on the 'Previous Month' button
     */
    onPreviousClick: prop_types_1["default"].func.isRequired
};
exports["default"] = DatePickerNavbar;
