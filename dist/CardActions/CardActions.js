"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const Grid_1 = __importDefault(require("../Grid"));
const length = (children) => 'length' in children ? children.length : 1;
const gridStyles = ({ children }) => (0, react_1.css) `
  grid-template-columns: repeat(${length(children)}, 1fr);
`;
const CardActions = (0, styled_1.default)(Grid_1.default) `
  ${gridStyles};
`;
CardActions.defaultProps = {
    gridGap: 'smaller'
};
exports.default = CardActions;
