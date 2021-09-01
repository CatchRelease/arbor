"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_day_picker_1 = __importDefault(require("react-day-picker"));
const styled_1 = __importDefault(require("@emotion/styled"));
const polished_1 = require("polished");
require("react-day-picker/lib/style.css");
const StyledDatePicker = (0, styled_1.default)(react_day_picker_1.default) `
  color: ${(props) => props.theme.colors.text.default};
  font-family: ${(props) => props.theme.brandFont};
  font-size: ${(props) => props.theme.fontSizes.size3};

  .DayPicker-Caption {
    font-size: ${(props) => props.theme.fontSizes.size4};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    margin-bottom: ${(props) => props.theme.space.regular};
    padding-top: ${(props) => props.theme.space.smallest};
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 5px;
    margin: 0;
  }

  .DayPicker-Weekday {
    color: ${(props) => props.theme.colors.text.default};
    font-size: ${(props) => props.theme.fontSizes.size3};
  }

  .DayPicker-Day {
    border-radius: ${(props) => props.theme.radii.small};
    height: 28px;
    padding: 0;
    width: 28px;
  }

  .DayPicker-Day--today {
    background-color: ${(props) => props.theme.colors.background.default};
    color: ${(props) => props.theme.colors.text.dark};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }

  .DayPicker-Day--outside,
  .DayPicker-Day--disabled {
    color: ${(props) => (0, polished_1.transparentize)(0.7, props.theme.colors.grey60)};
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${(props) => props.theme.colors.intent.brand.dark};
    color: ${(props) => props.theme.colors.intent.brand.light};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }

  &:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${(props) => props.theme.colors.intent.brand.light};
    color: ${(props) => props.theme.colors.intent.brand.dark};
  }

  .DayPicker-NavBar {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
exports.default = StyledDatePicker;
