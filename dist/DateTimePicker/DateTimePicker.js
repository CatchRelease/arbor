"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const StyledDateTimePicker_1 = __importDefault(require("./StyledDateTimePicker"));
const dateTimePickerDefaults_1 = __importDefault(require("./dateTimePickerDefaults"));
const DateTimePicker = (props) => (jsx_runtime_1.jsx(StyledDateTimePicker_1.default, Object.assign({}, dateTimePickerDefaults_1.default, props), void 0));
exports.default = DateTimePicker;
