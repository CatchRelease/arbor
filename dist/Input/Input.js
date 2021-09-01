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
const react_1 = require("react");
const FormField_1 = __importDefault(require("../FormField"));
const StyledInput_1 = __importDefault(require("./StyledInput"));
const Input = (0, react_1.forwardRef)((_a, ref) => {
    var { caption = '', label = '', labelAside = null, id, onBlur, onChange, type = 'text', validate = () => undefined, value: propValue } = _a, props = __rest(_a, ["caption", "label", "labelAside", "id", "onBlur", "onChange", "type", "validate", "value"]);
    const [touched, setTouched] = (0, react_1.useState)(false);
    const [value, setValue] = (0, react_1.useState)(propValue);
    const errorMessage = touched && validate(value);
    const handleBlur = (event) => {
        setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };
    const handleChange = (event) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return ((0, jsx_runtime_1.jsx)(FormField_1.default, Object.assign({ caption: errorMessage || caption, id: id, label: label, labelAside: labelAside }, { children: (0, jsx_runtime_1.jsx)(StyledInput_1.default, Object.assign({}, Object.assign(Object.assign({}, props), { id, ref, type }), { value: propValue ? propValue.toString() : propValue, isInvalid: !!errorMessage, onBlur: handleBlur, onChange: handleChange }), void 0) }), void 0));
});
exports.default = Input;
