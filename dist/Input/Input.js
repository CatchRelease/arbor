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
var react_1 = require("react");
var FormField_1 = __importDefault(require("../FormField"));
var StyledInput_1 = __importDefault(require("./StyledInput"));
var Input = react_1.forwardRef(function (_a, ref) {
    var _b = _a.caption, caption = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? '' : _c, _d = _a.labelAside, labelAside = _d === void 0 ? null : _d, id = _a.id, onBlur = _a.onBlur, onChange = _a.onChange, _e = _a.type, type = _e === void 0 ? 'text' : _e, _f = _a.validate, validate = _f === void 0 ? function () { return undefined; } : _f, propValue = _a.value, props = __rest(_a, ["caption", "label", "labelAside", "id", "onBlur", "onChange", "type", "validate", "value"]);
    var _g = react_1.useState(false), touched = _g[0], setTouched = _g[1];
    var _h = react_1.useState(propValue), value = _h[0], setValue = _h[1];
    var errorMessage = touched && validate(value);
    var handleBlur = function (event) {
        setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };
    var handleChange = function (event) {
        setValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (jsx_runtime_1.jsx(FormField_1["default"], __assign({ caption: errorMessage || caption, id: id, label: label, labelAside: labelAside }, { children: jsx_runtime_1.jsx(StyledInput_1["default"], __assign({}, __assign(__assign({}, props), { id: id, ref: ref, type: type }), { value: propValue ? propValue.toString() : propValue, isInvalid: !!errorMessage, onBlur: handleBlur, onChange: handleChange }), void 0) }), void 0));
});
exports["default"] = Input;
