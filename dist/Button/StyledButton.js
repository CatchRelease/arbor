"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const textTransform_1 = __importDefault(require("../utils/textTransform"));
const variantStyles_1 = __importDefault(require("./variantStyles"));
const whiteSpace_1 = __importDefault(require("../utils/whiteSpace"));
const fullWidth = styled_system_1.variant({
    prop: 'fullWidth',
    variants: {
        true: {
            width: '100%'
        },
        false: {
            width: 'auto'
        }
    }
});
const size = styled_system_1.variant({
    prop: 'size',
    scale: 'buttons.sizes',
    variants: {
        small: {},
        medium: {},
        large: {},
        jumbo: {}
    }
});
const StyledButton = styled_1.default.button `
  appearance: none;
  outline: none;
  position: relative;
  text-align: center;

  &:disabled {
    background: ${(props) => props.theme.colors.background.disabled};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &:enabled {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  i {
    transition: all 0.3s ease;
    vertical-align: middle;
  }

  ${size};
  ${variantStyles_1.default};
  ${styled_system_1.fontWeight};
  ${styled_system_1.fontSize};
  ${fullWidth};
  ${styled_system_1.lineHeight};
  ${styled_system_1.space};
  ${textTransform_1.default};
  ${whiteSpace_1.default};
  ${styled_system_1.borders};
  ${styled_system_1.borderColor};
  ${styled_system_1.color};
  ${styled_system_1.display};
`;
StyledButton.defaultProps = {
    border: '1px solid transparent',
    borderRadius: 'small',
    fontWeight: 'medium',
    lineHeight: 'regular'
};
exports.default = StyledButton;
