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
var ButtonContent_1 = __importDefault(require("./ButtonContent"));
var ButtonSpinner_1 = __importDefault(require("./ButtonSpinner"));
var StyledButton_1 = __importDefault(require("./StyledButton"));
var Text_1 = __importDefault(require("../Text"));
var Button = react_1.forwardRef(function (_a, ref) {
    var _b = _a.bg, bg = _b === void 0 ? null : _b, children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, iconEnd = _a.iconEnd, iconStart = _a.iconStart, _e = _a.intent, intent = _e === void 0 ? 'brand' : _e, _f = _a.paletteColor, paletteColor = _f === void 0 ? '' : _f, _g = _a.size, size = _g === void 0 ? 'large' : _g, _h = _a.spin, spin = _h === void 0 ? false : _h, type = _a.type, _j = _a.variant, variant = _j === void 0 ? 'primary' : _j, props = __rest(_a, ["bg", "children", "disabled", "fullWidth", "iconEnd", "iconStart", "intent", "paletteColor", "size", "spin", "type", "variant"]);
    return (jsx_runtime_1.jsxs(StyledButton_1["default"], __assign({}, __assign({ bg: bg, className: "button--" + variant, disabled: disabled, fullWidth: fullWidth, iconEnd: iconEnd, iconStart: iconStart, intent: intent, paletteColor: paletteColor, ref: ref, size: size, type: type, variant: variant }, props), { children: [spin && jsx_runtime_1.jsx(ButtonSpinner_1["default"], __assign({}, { disabled: disabled, intent: intent, size: size, variant: variant }), void 0), jsx_runtime_1.jsxs(ButtonContent_1["default"], __assign({}, { hasText: !!children, iconStart: iconStart, iconEnd: iconEnd, spin: spin }, { children: [iconStart, children && (jsx_runtime_1.jsx(Text_1["default"], __assign({ color: "inherit", fontSize: "inherit" }, { children: children }), void 0)), iconEnd] }), void 0)] }), void 0));
});
exports["default"] = Button;
