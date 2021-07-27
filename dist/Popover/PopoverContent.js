"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Card_1 = __importDefault(require("../Card"));
const PopoverContent = styled_1.default(Card_1.default) `
  background: ${(props) => props.theme.colors.monochrome.white};
  box-shadow: ${(props) => props.theme.shadows.elevation2};
  min-height: 40px;
  min-width: 160px;
`;
PopoverContent.defaultProps = {
    overflow: 'hidden'
};
exports.default = PopoverContent;
