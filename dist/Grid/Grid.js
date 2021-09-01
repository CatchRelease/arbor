"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const Box_1 = __importDefault(require("../Box"));
const Grid = (0, styled_1.default)(Box_1.default) `
  ${styled_system_1.alignContent};
  ${styled_system_1.alignItems};
  ${styled_system_1.grid};
  ${styled_system_1.justifyContent};
  ${styled_system_1.justifyItems};
`;
Grid.defaultProps = {
    display: 'grid'
};
exports.default = Grid;
