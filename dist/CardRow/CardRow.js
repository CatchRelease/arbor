"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Flex_1 = __importDefault(require("../Flex"));
const CardRow = (props) => (0, jsx_runtime_1.jsx)(Flex_1.default, Object.assign({}, props), void 0);
CardRow.defaultProps = {
    px: 'regular',
    py: 'smallest',
    my: 'smaller',
    alignItems: 'center',
    justifyContent: 'space-between'
};
exports.default = CardRow;
