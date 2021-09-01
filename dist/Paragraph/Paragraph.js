"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const Text_1 = __importDefault(require("../Text"));
const typography_1 = require("../theme/typography");
const VARIANT_MAPPING = {
    ui: 'size4',
    longForm: 'size5',
    tiny: 'size3'
};
const isFontSize = (value) => typography_1.fontSizeKeys.includes(value);
const variantStyles = ({ theme, variant, fontSize }) => {
    const fontSizeOverride = fontSize && isFontSize(fontSize) && theme.fontSizes[fontSize]
        ? theme.fontSizes[fontSize]
        : fontSize;
    return (0, react_1.css) `
    font-size: ${fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]]};
  `;
};
const Paragraph = (0, styled_1.default)(Text_1.default) `
  ${variantStyles};
`;
Paragraph.defaultProps = {
    lineHeight: 'large'
};
exports.default = Paragraph;
