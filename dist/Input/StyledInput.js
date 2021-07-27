"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const inputStyles_1 = __importDefault(require("./inputStyles"));
const largeStyles = ({ theme, large }) => large &&
    react_1.css `
    padding: ${theme.space.small} ${theme.space.smaller};
  `;
const StyledInput = styled_1.default.input `
  ${inputStyles_1.default};
  ${styled_system_1.display};
  ${largeStyles};
  ${styled_system_1.maxWidth};
`;
exports.default = StyledInput;
