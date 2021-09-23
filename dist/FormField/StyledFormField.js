"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const StyledFormField = styled_1.default.div `
  margin-bottom: ${(props) => props.caption ? props.theme.space.smaller : props.theme.space.regular};
`;
StyledFormField.defaultProps = {
    caption: ''
};
exports.default = StyledFormField;
