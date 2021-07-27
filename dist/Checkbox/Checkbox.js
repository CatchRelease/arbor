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
var Icon_1 = __importDefault(require("../Icon"));
var Text_1 = __importDefault(require("../Text"));
var CheckboxIcon_1 = __importDefault(require("./CheckboxIcon"));
var CheckboxInput_1 = __importDefault(require("./CheckboxInput"));
var CheckboxLabel_1 = __importDefault(require("./CheckboxLabel"));
var StyledCheckbox_1 = __importDefault(require("./StyledCheckbox"));
var Checkbox = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, icon = _a.icon, id = _a.id, _d = _a.indeterminate, indeterminate = _d === void 0 ? false : _d, _e = _a.isInvalid, isInvalid = _e === void 0 ? false : _e, label = _a.label, name = _a.name, _f = _a.onChange, onChange = _f === void 0 ? function () { } : _f, _g = _a.value, value = _g === void 0 ? '' : _g, props = __rest(_a, ["checked", "disabled", "icon", "id", "indeterminate", "isInvalid", "label", "name", "onChange", "value"]);
    return (jsx_runtime_1.jsxs(CheckboxLabel_1["default"], __assign({ alignItems: "center", my: "regular" }, props, { children: [jsx_runtime_1.jsx(CheckboxInput_1["default"], { id: id, type: "checkbox", name: name, value: value, checked: checked || indeterminate, onChange: onChange, disabled: disabled, "aria-invalid": isInvalid }, void 0), jsx_runtime_1.jsx(StyledCheckbox_1["default"], __assign({}, { disabled: disabled, checked: checked, indeterminate: indeterminate }, { children: jsx_runtime_1.jsx(CheckboxIcon_1["default"], __assign({}, { checked: checked, indeterminate: indeterminate }), void 0) }), void 0), icon && (jsx_runtime_1.jsx(Icon_1["default"], { fontSize: "24px", name: icon, color: disabled ? 'icon.disabled' : 'icon.default', ml: "smaller" }, void 0)), jsx_runtime_1.jsx(Text_1["default"], __assign({ as: "span", fontSize: "size4", color: disabled ? 'text.disabled' : 'text.default', ml: icon ? 'smallest' : 'smaller' }, { children: label }), void 0)] }), void 0));
};
exports["default"] = Checkbox;
