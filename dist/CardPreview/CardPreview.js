"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("../utils");
const Box_1 = __importDefault(require("../Box"));
const CardPreview = styled_1.default(Box_1.default) `
  background: url(${(props) => props.image}) center center no-repeat
    ${(props) => props.theme.colors.monochrome.black};
  background-size: contain;
  ${utils_1.ratio};
`;
CardPreview.propTypes = Object.assign({ 
    /**
     * Image to be rendered as the background of the CardPreview
     */
    image: prop_types_1.default.string.isRequired }, utils_1.ratio.propTypes);
CardPreview.defaultProps = {
    ratio: 9 / 16
};
exports.default = CardPreview;
