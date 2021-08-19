"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@emotion/react");
const Box_1 = __importDefault(require("../Box"));
const activeStyles = ({ active, theme }) => {
    const color = theme.colors.intent.brand.dark;
    return (active &&
        react_1.css `
      color: ${color};
      border-color: ${color};

      &:focus,
      &:hover {
        background: transparent;
        border-color: ${color};
      }
    `);
};
const StyledTab = styled_1.default(Box_1.default) `
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: ${(props) => props.theme.lineHeights.small};
  outline: none;

  &:last-child {
    margin-right: 0;
  }

  &:focus,
  &:hover {
    background: ${(props) => props.theme.colors.background.muted};
    border-color: ${(props) => props.theme.colors.border.muted};
  }

  ${activeStyles};
`;
StyledTab.defaultProps = {
    active: false,
    alignItems: 'center',
    borderBottom: '1px solid transparent',
    color: 'text.muted',
    display: 'inline-block',
    fontSize: 'size5',
    justifyContent: 'center',
    mb: '-4px',
    mr: 'large',
    overflow: 'hidden',
    py: 'regular',
    tabIndex: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};
exports.default = StyledTab;
