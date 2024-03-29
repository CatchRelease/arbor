"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const Box_1 = __importDefault(require("../Box"));
const MasonryItem = (0, styled_1.default)(Box_1.default) `
  break-inside: avoid;
  ${styled_system_1.display};
  ${styled_system_1.width};
`;
MasonryItem.defaultProps = {
    display: 'block',
    width: '100%'
};
exports.default = MasonryItem;
