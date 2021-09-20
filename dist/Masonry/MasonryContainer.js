"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Box_1 = __importDefault(require("../Box"));
const columns_1 = require("../utils/columns");
const MasonryContainer = (0, styled_1.default)(Box_1.default) `
  ${columns_1.columnCount};
  ${columns_1.columnGap};
  ${columns_1.columnRule};
  ${columns_1.columnRuleColor};
  ${columns_1.columnRuleStyle};
  ${columns_1.columnRuleWidth};
  ${columns_1.columnWidth};
  ${columns_1.columns};
`;
exports.default = MasonryContainer;
