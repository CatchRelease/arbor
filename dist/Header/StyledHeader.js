"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Grid_1 = __importDefault(require("../Grid"));
const StyledHeader = (props) => jsx_runtime_1.jsx(Grid_1.default, Object.assign({}, props), void 0);
StyledHeader.defaultProps = {
    as: 'header'
};
exports.default = StyledHeader;
