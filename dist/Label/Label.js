"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const prop_types_1 = __importDefault(require("prop-types"));
const Label = styled_1.default.label `
  color: ${(props) => props.theme.colors.text.muted};
  display: block;
  font-family: ${(props) => props.theme.brandFont};
  font-size: ${(props) => props.theme.fontSizes.size4};
  line-height: ${(props) => props.theme.lineHeights.large};
`;
Label.propTypes = {
    /**
     * ID of the input that the label is related to
     */
    htmlFor: prop_types_1.default.string.isRequired
};
exports.default = Label;
