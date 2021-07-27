"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var DayPickerInput_1 = __importDefault(require("react-day-picker/DayPickerInput"));
var datePickerDefaults_1 = __importDefault(require("./datePickerDefaults"));
var DatePickerInputOverlay_1 = __importDefault(require("./DatePickerInputOverlay"));
var Input_1 = __importDefault(require("../Input"));
var defaultInputProps = {
    autoComplete: 'off'
};
var DatePickerInput = function (_a) {
    var dayPickerProps = _a.dayPickerProps, inputProps = _a.inputProps, props = __rest(_a, ["dayPickerProps", "inputProps"]);
    return (jsx_runtime_1.jsx(DayPickerInput_1["default"], __assign({ component: Input_1["default"], overlayComponent: DatePickerInputOverlay_1["default"], dayPickerProps: __assign(__assign({}, datePickerDefaults_1["default"]), dayPickerProps), inputProps: __assign(__assign({}, defaultInputProps), inputProps) }, props), void 0));
};
DatePickerInput.propTypes = {
    dayPickerProps: prop_types_1["default"].object,
    inputProps: prop_types_1["default"].object // eslint-disable-line react/forbid-prop-types
};
DatePickerInput.defaultProps = {
    dayPickerProps: {},
    inputProps: {}
};
exports["default"] = DatePickerInput;
