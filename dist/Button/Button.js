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
const ButtonContent_1 = __importDefault(require("./ButtonContent"));
const ButtonSpinner_1 = __importDefault(require("./ButtonSpinner"));
const StyledButton_1 = __importDefault(require("./StyledButton"));
const Text_1 = __importDefault(require("../Text"));
const Button = react_1.forwardRef((_a, ref) => {
    var { bg = null, children, disabled = false, fullWidth = false, iconEnd, iconStart, intent = 'brand', paletteColor = '', size = 'large', spin = false, type, variant = 'primary' } = _a, props = __rest(_a, ["bg", "children", "disabled", "fullWidth", "iconEnd", "iconStart", "intent", "paletteColor", "size", "spin", "type", "variant"]);
    return (jsx_runtime_1.jsxs(StyledButton_1.default, Object.assign({}, Object.assign({ bg, className: `button--${variant}`, disabled,
        fullWidth,
        iconEnd,
        iconStart,
        intent,
        paletteColor,
        ref,
        size,
        type,
        variant }, props), { children: [spin && jsx_runtime_1.jsx(ButtonSpinner_1.default, Object.assign({}, { disabled, intent, size, variant }), void 0), jsx_runtime_1.jsxs(ButtonContent_1.default, Object.assign({}, { hasText: !!children, iconStart, iconEnd, spin }, { children: [iconStart, children && (jsx_runtime_1.jsx(Text_1.default, Object.assign({ color: "inherit", fontSize: "inherit" }, { children: children }), void 0)), iconEnd] }), void 0)] }), void 0));
});
exports.default = Button;
