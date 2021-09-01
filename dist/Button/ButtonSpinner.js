"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const polished_1 = require("polished");
const styled_1 = __importDefault(require("@emotion/styled"));
const Spinner_1 = __importDefault(require("../Spinner"));
const StyledButtonSpinner = (0, styled_1.default)(Spinner_1.default) `
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const spinnerColor = (disabled, variant, intent) => {
    if (disabled)
        return 'text.muted';
    switch (variant) {
        case 'primary':
            return intent === 'brand' ? `intent.${intent}.light` : 'monochrome.white';
        default:
            return `intent.${intent}.default`;
    }
};
const spinnerDiameters = {
    small: 8,
    medium: 12,
    large: 16,
    jumbo: 24
};
const ButtonSpinner = ({ disabled, intent, size, variant }) => {
    const diameter = Array.isArray(size)
        ? size.map((value) => (0, polished_1.rem)(`${spinnerDiameters[value]}px`))
        : (0, polished_1.rem)(`${spinnerDiameters[size]}px`);
    return ((0, jsx_runtime_1.jsx)(StyledButtonSpinner, { diameter: diameter, color: spinnerColor(disabled, variant, intent) }, void 0));
};
exports.default = ButtonSpinner;
