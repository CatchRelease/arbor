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
const Icon_1 = __importDefault(require("../Icon"));
const Text_1 = __importDefault(require("../Text"));
const RadioButtonIcon_1 = __importDefault(require("./RadioButtonIcon"));
const RadioButtonInput_1 = __importDefault(require("./RadioButtonInput"));
const RadioButtonLabel_1 = __importDefault(require("./RadioButtonLabel"));
const StyledRadioButton_1 = __importDefault(require("./StyledRadioButton"));
const RadioButton = (_a) => {
    var { checked = false, disabled = false, icon, id, isInvalid = false, label, name, onChange = () => { }, value = '' } = _a, props = __rest(_a, ["checked", "disabled", "icon", "id", "isInvalid", "label", "name", "onChange", "value"]);
    return ((0, jsx_runtime_1.jsxs)(RadioButtonLabel_1.default, Object.assign({ alignItems: "center", my: "regular" }, props, { children: [(0, jsx_runtime_1.jsx)(RadioButtonInput_1.default, { id: id, type: "radio", name: name, value: value, checked: checked, onChange: onChange, disabled: disabled, "aria-invalid": isInvalid }, void 0), (0, jsx_runtime_1.jsx)(StyledRadioButton_1.default, Object.assign({}, { disabled, checked }, { children: (0, jsx_runtime_1.jsx)(RadioButtonIcon_1.default, Object.assign({}, { checked }), void 0) }), void 0), icon && ((0, jsx_runtime_1.jsx)(Icon_1.default, { fontSize: "24px", name: icon, color: disabled ? 'icon.disabled' : 'icon.default', ml: "smaller" }, void 0)), (0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({ as: "span", fontSize: "size4", color: disabled ? 'text.disabled' : 'text.default', ml: icon ? 'smallest' : 'smaller' }, { children: label }), void 0)] }), void 0));
};
exports.default = RadioButton;
