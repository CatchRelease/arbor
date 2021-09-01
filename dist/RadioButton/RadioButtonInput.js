"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Box_1 = __importDefault(require("../Box"));
const RadioButtonInput = (0, styled_1.default)(Box_1.default) `
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
RadioButtonInput.defaultProps = {
    as: 'input'
};
exports.default = RadioButtonInput;
