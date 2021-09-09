"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Flex_1 = __importDefault(require("../Flex"));
const getBackground = ({ paletteColor, subtle, theme }) => {
    if (paletteColor) {
        return subtle
            ? theme.colors.palette[paletteColor].lighter
            : theme.colors.palette[paletteColor].default;
    }
    return subtle
        ? theme.colors.monochrome.grey20
        : theme.colors.monochrome.grey100;
};
const getBorderColor = ({ paletteColor, theme }) => paletteColor
    ? theme.colors.palette[paletteColor].default
    : theme.colors.monochrome.grey100;
const StyledBadge = (0, styled_1.default)(Flex_1.default) `
  background: ${getBackground};
  border-color: ${getBorderColor};
  border-radius: ${(props) => (props.variant === 'pill' ? '999px' : '2px')};
`;
StyledBadge.defaultProps = {
    alignItems: 'center',
    border: '1px solid',
    height: '24px',
    maxWidth: '100%',
    px: 'smaller'
};
exports.default = StyledBadge;
