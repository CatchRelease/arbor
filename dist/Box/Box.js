"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const Text_1 = __importDefault(require("../Text"));
const TextDiv = Text_1.default.withComponent('div');
const TextDivWithColorPropFix = TextDiv;
const Box = styled_1.default(TextDivWithColorPropFix) `
  box-sizing: border-box;
  ${styled_system_1.borders};
  ${styled_system_1.boxShadow};
  ${styled_system_1.display};
  ${styled_system_1.height};
  ${styled_system_1.gridArea};
  ${styled_system_1.maxHeight};
  ${styled_system_1.minHeight};
  ${styled_system_1.position};
  ${styled_system_1.width};
`;
exports.default = Box;
