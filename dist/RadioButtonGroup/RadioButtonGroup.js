"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const RadioButton_1 = __importDefault(require("../RadioButton"));
const groupOnChange = (e, setCheckedValueState, onChange) => {
    const { target: { value } } = e;
    setCheckedValueState(value);
    onChange(e);
};
const RadioButtonGroup = ({ buttonProps = {}, checkedValue = null, disabled = false, name, onChange, options }) => {
    const [checkedValueState, setCheckedValueState] = (0, react_1.useState)(checkedValue);
    const buttonOnChange = (e) => {
        groupOnChange(e, setCheckedValueState, onChange);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: options.map(({ label, value, disabled: optionDisabled }, idx) => ((0, jsx_runtime_1.jsx)(RadioButton_1.default, Object.assign({}, Object.assign({ id: `${name}:${value}`, key: `${name}:${value}`, name, disabled: disabled || optionDisabled, label,
            value, onChange: buttonOnChange, checked: checkedValueState
                ? checkedValueState === value
                : idx === 0 }, buttonProps)), void 0))) }, void 0));
};
exports.default = RadioButtonGroup;
