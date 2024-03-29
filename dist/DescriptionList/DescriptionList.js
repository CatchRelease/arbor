"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@emotion/react");
const Box_1 = __importDefault(require("../Box"));
const inlineStyles = ({ inline, theme }) => {
    if (!inline) {
        return '';
    }
    return (0, react_1.css) `
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    dd {
      display: inline;
      margin-left: ${theme.space.smaller};
    }

    dd:after {
      display: block;
      content: '';
    }

    dt {
      display: inline-block;
      margin-bottom: ${theme.space.small};
    }
  `;
};
const DescriptionList = (0, styled_1.default)(Box_1.default.withComponent('dl')) `
  ${inlineStyles};
`;
exports.default = DescriptionList;
