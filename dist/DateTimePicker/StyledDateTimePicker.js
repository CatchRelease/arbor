"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_datetime_1 = __importDefault(require("react-datetime"));
var styled_1 = __importDefault(require("@emotion/styled"));
var inputStyles_1 = __importDefault(require("../Input/inputStyles"));
require("react-datetime/css/react-datetime.css");
var StyledDateTimePicker = styled_1["default"](react_datetime_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n\n  & .form-control {\n    ", ";\n  }\n\n  & .rdtPicker th,\n  & .rdtPicker td {\n    vertical-align: middle;\n  }\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n\n  & .form-control {\n    ", ";\n  }\n\n  & .rdtPicker th,\n  & .rdtPicker td {\n    vertical-align: middle;\n  }\n"])), function (props) { return props.theme.colors.text["default"]; }, function (props) { return props.theme.brandFont; }, function (props) { return props.theme.fontSizes.size4; }, inputStyles_1["default"]);
exports["default"] = StyledDateTimePicker;
var templateObject_1;
