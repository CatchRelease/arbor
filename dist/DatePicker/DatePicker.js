"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const datePickerDefaults_1 = __importDefault(require("./datePickerDefaults"));
const StyledDatePicker_1 = __importDefault(require("./StyledDatePicker"));
const DatePicker = (props) => ((0, jsx_runtime_1.jsx)(StyledDatePicker_1.default, Object.assign({}, datePickerDefaults_1.default, props), void 0));
exports.default = DatePicker;
