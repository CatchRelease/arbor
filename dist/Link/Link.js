"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const Text_1 = __importDefault(require("../Text"));
const baseStyles = react_1.css `
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
const variantStyles = ({ variant = 'default', theme: { colors } }) => {
    const variantMapping = {
        brandDark: {
            color: colors.intent.brand.dark,
            '&:visited': {
                color: colors.intent.brand.dark
            },
            '&:hover': {
                color: colors.intent.brand.dark
            },
            '&:active': {
                color: colors.intent.brand.dark
            },
            '&:focus': {
                outline: `1px solid ${colors.brand.dark}`
            }
        },
        brandLight: {
            color: colors.intent.brand.light,
            '&:visited': {
                color: colors.intent.brand.light
            },
            '&:hover': {
                color: colors.intent.brand.light
            },
            '&:active': {
                color: colors.intent.brand.light
            },
            '&:focus': {
                outline: `1px solid ${colors.brand.light}`
            }
        },
        default: {
            color: colors.palette.teal.default,
            '&:visited': {
                color: colors.palette.teal.default
            },
            '&:hover': {
                color: colors.palette.teal.dark
            },
            '&:active': {
                color: colors.palette.teal.darker
            },
            '&:focus': {
                outline: `1px solid ${colors.palette.teal.default}`
            }
        },
        muted: {
            color: colors.text.muted,
            '&:visited': {
                color: colors.text.muted
            },
            '&:hover': {
                color: colors.text.default
            },
            '&:active': {
                color: colors.text.dark
            },
            '&:focus': {
                outline: `1px solid ${colors.grey100}`
            }
        }
    };
    return variantMapping[variant];
};
const TextAnchor = Text_1.default.withComponent('a');
const TextAnchorWithColorPropFix = TextAnchor;
const Link = styled_1.default(TextAnchorWithColorPropFix) `
  ${baseStyles};
  ${variantStyles};
  ${styled_system_1.color};
`;
exports.default = Link;
