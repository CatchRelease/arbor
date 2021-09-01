"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Heading_1 = __importDefault(require("../Heading"));
const StyledAccordionHeading = (0, styled_1.default)(Heading_1.default) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;
exports.default = StyledAccordionHeading;
