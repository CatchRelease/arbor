"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const textOverflow_1 = __importDefault(require("../utils/textOverflow"));
const textTransform_1 = __importDefault(require("../utils/textTransform"));
const whiteSpace_1 = __importDefault(require("../utils/whiteSpace"));
const baseStyles = ({ theme }) => react_1.css `
  font-family: ${theme.brandFont};
`;
const Text = styled_1.default.p `
  ${baseStyles};

  ${styled_system_1.color};
  ${styled_system_1.fontSize};
  ${styled_system_1.fontWeight};
  ${styled_system_1.lineHeight};
  ${styled_system_1.maxWidth};
  ${styled_system_1.minWidth};
  ${styled_system_1.overflow};
  ${styled_system_1.space};
  ${styled_system_1.textAlign};
  ${textTransform_1.default};
  ${textOverflow_1.default};
  ${whiteSpace_1.default};
`;
Text.defaultProps = {
    color: 'text.default',
    fontSize: 'size4',
    lineHeight: 'small'
};
exports.default = Text;
