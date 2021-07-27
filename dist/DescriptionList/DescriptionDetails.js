"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Box_1 = __importDefault(require("../Box"));
const DescriptionDetails = Box_1.default.withComponent('dd');
DescriptionDetails.defaultProps = Object.assign(Object.assign({}, Box_1.default.defaultProps), { color: 'text.default', fontSize: 'size4', lineHeight: 'small', mb: 'regular' });
exports.default = DescriptionDetails;
