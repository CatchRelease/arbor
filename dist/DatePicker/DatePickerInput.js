"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const DayPickerInput_1 = __importDefault(require("react-day-picker/DayPickerInput"));
const datePickerDefaults_1 = __importDefault(require("./datePickerDefaults"));
const DatePickerInputOverlay_1 = __importDefault(require("./DatePickerInputOverlay"));
const Input_1 = __importDefault(require("../Input"));
const defaultInputProps = {
    autoComplete: 'off'
};
const DatePickerInput = (_a) => {
    var { dayPickerProps, inputProps } = _a, props = __rest(_a, ["dayPickerProps", "inputProps"]);
    return (jsx_runtime_1.jsx(DayPickerInput_1.default, Object.assign({ component: Input_1.default, overlayComponent: DatePickerInputOverlay_1.default, dayPickerProps: Object.assign(Object.assign({}, datePickerDefaults_1.default), dayPickerProps), inputProps: Object.assign(Object.assign({}, defaultInputProps), inputProps) }, props), void 0));
};
DatePickerInput.propTypes = {
    dayPickerProps: prop_types_1.default.object,
    inputProps: prop_types_1.default.object // eslint-disable-line react/forbid-prop-types
};
DatePickerInput.defaultProps = {
    dayPickerProps: {},
    inputProps: {}
};
exports.default = DatePickerInput;
