"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const RadioButton_1 = __importDefault(require("../RadioButton"));
const groupOnChange = (e, setCheckedValueState, onChange) => {
    const { target: { value } } = e;
    setCheckedValueState(value);
    onChange(e);
};
const RadioButtonGroup = ({ name, options, onChange, checkedValue, disabled, buttonProps }) => {
    const [checkedValueState, setCheckedValueState] = react_1.useState(checkedValue);
    const buttonOnChange = (e) => {
        groupOnChange(e, setCheckedValueState, onChange);
    };
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: options.map(({ label, value, disabled: optionDisabled }, idx) => (jsx_runtime_1.jsx(RadioButton_1.default, Object.assign({}, Object.assign({ id: `${name}:${value}`, key: `${name}:${value}`, name, disabled: disabled || optionDisabled, label,
            value, onChange: buttonOnChange, checked: checkedValueState
                ? checkedValueState === value
                : idx === 0 }, buttonProps)), void 0))) }, void 0));
};
RadioButtonGroup.propTypes = {
    name: prop_types_1.default.string.isRequired,
    options: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        label: prop_types_1.default.node.isRequired,
        value: prop_types_1.default.string.isRequired,
        disabled: prop_types_1.default.bool
    })).isRequired,
    onChange: prop_types_1.default.func.isRequired,
    checkedValue: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
    buttonProps: prop_types_1.default.object // eslint-disable-line react/forbid-prop-types
};
RadioButtonGroup.defaultProps = {
    checkedValue: null,
    buttonProps: {},
    disabled: false
};
exports.default = RadioButtonGroup;
