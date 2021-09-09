"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const utils_1 = require("../utils");
const Box_1 = __importDefault(require("../Box"));
const CardPreview = (0, styled_1.default)(Box_1.default) `
  background: url(${(props) => props.image}) center center no-repeat
    ${(props) => props.theme.colors.monochrome.black};
  background-size: contain;
  ${utils_1.ratio};
`;
CardPreview.defaultProps = {
    ratio: 9 / 16
};
exports.default = CardPreview;
