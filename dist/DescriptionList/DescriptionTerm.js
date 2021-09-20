"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Box_1 = __importDefault(require("../Box"));
const DescriptionTerm = Box_1.default.withComponent('dt');
DescriptionTerm.defaultProps = {
    color: 'text.muted',
    fontSize: 'size3',
    lineHeight: 'small',
    mb: 'smallest'
};
exports.default = DescriptionTerm;
