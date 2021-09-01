"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const Box_1 = __importDefault(require("../Box"));
const Flex = (0, styled_1.default)(Box_1.default) `
  display: flex;
  ${styled_system_1.alignContent};
  ${styled_system_1.alignItems};
  ${styled_system_1.alignSelf};
  ${styled_system_1.flex};
  ${styled_system_1.flexDirection};
  ${styled_system_1.flexWrap};
  ${styled_system_1.gridGap};
  ${styled_system_1.justifyContent};
  ${styled_system_1.justifyItems};
  ${styled_system_1.justifySelf};
  ${styled_system_1.order};
`;
exports.default = Flex;
