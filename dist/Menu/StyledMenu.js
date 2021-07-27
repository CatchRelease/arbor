"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Flex_1 = __importDefault(require("../Flex"));
const StyledMenu = styled_1.default(Flex_1.default) `
  outline: none;
`;
StyledMenu.defaultProps = {
    pb: 'smallest',
    pt: 'smallest'
};
exports.default = StyledMenu;
