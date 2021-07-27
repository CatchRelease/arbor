"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Box_1 = __importDefault(require("../Box"));
const StyledTabs = styled_1.default(Box_1.default.withComponent('div')) `
  justify-content: space-between;
`;
StyledTabs.defaultProps = Object.assign(Object.assign({}, Box_1.default.defaultProps), { borderBottom: '1px solid transparent', borderColor: 'border.muted', display: 'inline-flex', width: '100%' });
exports.default = StyledTabs;
