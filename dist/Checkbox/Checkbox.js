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
const CheckboxIcon_1 = __importDefault(require("./CheckboxIcon"));
const CheckboxInput_1 = __importDefault(require("./CheckboxInput"));
const CheckboxLabel_1 = __importDefault(require("./CheckboxLabel"));
const StyledCheckbox_1 = __importDefault(require("./StyledCheckbox"));
const Checkbox = (_a) => {
    var { checked = false, disabled = false, icon, id, indeterminate = false, isInvalid = false, label, name, onChange = () => { }, value = '' } = _a, props = __rest(_a, ["checked", "disabled", "icon", "id", "indeterminate", "isInvalid", "label", "name", "onChange", "value"]);
    return (jsx_runtime_1.jsxs(CheckboxLabel_1.default, Object.assign({ alignItems: "center", my: "regular" }, props, { children: [jsx_runtime_1.jsx(CheckboxInput_1.default, { id: id, type: "checkbox", name: name, value: value, checked: checked || indeterminate, onChange: onChange, disabled: disabled, "aria-invalid": isInvalid }, void 0), jsx_runtime_1.jsx(StyledCheckbox_1.default, Object.assign({}, { disabled, checked, indeterminate }, { children: jsx_runtime_1.jsx(CheckboxIcon_1.default, Object.assign({}, { checked, indeterminate }), void 0) }), void 0), icon && (jsx_runtime_1.jsx(Icon_1.default, { fontSize: "24px", name: icon, color: disabled ? 'icon.disabled' : 'icon.default', ml: "smaller" }, void 0)), jsx_runtime_1.jsx(Text_1.default, Object.assign({ as: "span", fontSize: "size4", color: disabled ? 'text.disabled' : 'text.default', ml: icon ? 'smallest' : 'smaller' }, { children: label }), void 0)] }), void 0));
};
exports.default = Checkbox;
