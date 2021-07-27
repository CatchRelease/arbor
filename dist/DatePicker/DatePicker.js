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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var datePickerDefaults_1 = __importDefault(require("./datePickerDefaults"));
var StyledDatePicker_1 = __importDefault(require("./StyledDatePicker"));
var DatePicker = function (props) { return (jsx_runtime_1.jsx(StyledDatePicker_1["default"], __assign({}, datePickerDefaults_1["default"], props), void 0)); };
exports["default"] = DatePicker;
