"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_datetime_1 = __importDefault(require("react-datetime"));
const styled_1 = __importDefault(require("@emotion/styled"));
const inputStyles_1 = __importDefault(require("../Input/inputStyles"));
require("react-datetime/css/react-datetime.css");
const StyledDateTimePicker = styled_1.default(react_datetime_1.default) `
  color: ${(props) => props.theme.colors.text.default};
  font-family: ${(props) => props.theme.brandFont};
  font-size: ${(props) => props.theme.fontSizes.size4};

  & .form-control {
    ${inputStyles_1.default};
  }

  & .rdtPicker th,
  & .rdtPicker td {
    vertical-align: middle;
  }
`;
exports.default = StyledDateTimePicker;
