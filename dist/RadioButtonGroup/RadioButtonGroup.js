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
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var RadioButton_1 = __importDefault(require("../RadioButton"));
var groupOnChange = function (e, setCheckedValueState, onChange) {
    var value = e.target.value;
    setCheckedValueState(value);
    onChange(e);
};
var RadioButtonGroup = function (_a) {
    var name = _a.name, options = _a.options, onChange = _a.onChange, checkedValue = _a.checkedValue, disabled = _a.disabled, buttonProps = _a.buttonProps;
    var _b = react_1.useState(checkedValue), checkedValueState = _b[0], setCheckedValueState = _b[1];
    var buttonOnChange = function (e) {
        groupOnChange(e, setCheckedValueState, onChange);
    };
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: options.map(function (_a, idx) {
            var label = _a.label, value = _a.value, optionDisabled = _a.disabled;
            return (jsx_runtime_1.jsx(RadioButton_1["default"], __assign({}, __assign({ id: name + ":" + value, key: name + ":" + value, name: name, disabled: disabled || optionDisabled, label: label, value: value, onChange: buttonOnChange, checked: checkedValueState
                    ? checkedValueState === value
                    : idx === 0 }, buttonProps)), void 0));
        }) }, void 0));
};
RadioButtonGroup.propTypes = {
    name: prop_types_1["default"].string.isRequired,
    options: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        label: prop_types_1["default"].node.isRequired,
        value: prop_types_1["default"].string.isRequired,
        disabled: prop_types_1["default"].bool
    })).isRequired,
    onChange: prop_types_1["default"].func.isRequired,
    checkedValue: prop_types_1["default"].string,
    disabled: prop_types_1["default"].bool,
    buttonProps: prop_types_1["default"].object // eslint-disable-line react/forbid-prop-types
};
RadioButtonGroup.defaultProps = {
    checkedValue: null,
    buttonProps: {},
    disabled: false
};
exports["default"] = RadioButtonGroup;
