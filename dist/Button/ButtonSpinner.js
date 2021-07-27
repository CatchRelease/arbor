"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var polished_1 = require("polished");
var styled_1 = __importDefault(require("@emotion/styled"));
var sizes_1 = __importDefault(require("./sizes"));
var Spinner_1 = __importDefault(require("../Spinner"));
var StyledButtonSpinner = styled_1["default"](Spinner_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"], ["\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"])));
var spinnerColor = function (disabled, variant, intent) {
    if (disabled)
        return 'text.muted';
    switch (variant) {
        case 'primary':
            return intent === 'brand' ? "intent." + intent + ".light" : 'monochrome.white';
        default:
            return "intent." + intent + ".default";
    }
};
var spinnerDiameters = {
    small: 8,
    medium: 12,
    large: 16,
    jumbo: 24
};
var ButtonSpinner = function (_a) {
    var disabled = _a.disabled, intent = _a.intent, size = _a.size, variant = _a.variant;
    var diameter = Array.isArray(size)
        ? size.map(function (value) { return polished_1.rem(spinnerDiameters[value] + "px"); })
        : polished_1.rem(spinnerDiameters[size] + "px");
    return (jsx_runtime_1.jsx(StyledButtonSpinner, { diameter: diameter, color: spinnerColor(disabled, variant, intent) }, void 0));
};
ButtonSpinner.propTypes = {
    disabled: prop_types_1["default"].bool.isRequired,
    intent: prop_types_1["default"].string.isRequired,
    size: prop_types_1["default"].oneOfType([
        prop_types_1["default"].arrayOf(prop_types_1["default"].oneOf(sizes_1["default"])),
        prop_types_1["default"].oneOf(sizes_1["default"])
    ]).isRequired,
    variant: prop_types_1["default"].string.isRequired
};
exports["default"] = ButtonSpinner;
var templateObject_1;
