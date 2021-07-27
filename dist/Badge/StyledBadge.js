"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = __importDefault(require("@emotion/styled"));
const Flex_1 = __importDefault(require("../Flex"));
const palette_1 = __importDefault(require("../theme/colors/palette"));
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
const StyledBadge = styled_1.default(Flex_1.default) `
  background: ${getBackground};
  border-color: ${getBorderColor};
  border-radius: ${(props) => (props.variant === 'pill' ? '999px' : '2px')};
`;
StyledBadge.propTypes = {
    children: prop_types_1.default.node.isRequired,
    paletteColor: prop_types_1.default.oneOf(['', ...Object.keys(palette_1.default)]),
    subtle: prop_types_1.default.bool,
    variant: prop_types_1.default.oneOf(['default', 'pill'])
};
StyledBadge.defaultProps = {
    alignItems: 'center',
    border: '1px solid',
    paletteColor: '',
    height: '24px',
    maxWidth: '100%',
    px: 'smaller'
};
exports.default = StyledBadge;
