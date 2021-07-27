"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Pane_1 = __importDefault(require("../Pane"));
const Card = (props) => jsx_runtime_1.jsx(Pane_1.default, Object.assign({}, props), void 0);
Card.defaultProps = {
    borderRadius: 'large'
};
exports.default = Card;
