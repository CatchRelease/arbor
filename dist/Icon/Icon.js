"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.StyledIcon = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var rotationStyles = function (_a) {
    var rotation = _a.rotation;
    return rotation && react_2.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transform: rotate(", "deg);\n  "], ["\n    transform: rotate(", "deg);\n  "])), rotation);
};
exports.StyledIcon = styled_1["default"].i(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), styled_system_1.color, styled_system_1.display, styled_system_1.fontSize, styled_system_1.space, styled_system_1.textAlign, rotationStyles, styled_system_1.textShadow, styled_system_1.opacity);
var Icon = function (_a) {
    var className = _a.className, iconRef = _a.iconRef, name = _a.name, _b = _a.rotation, rotation = _b === void 0 ? null : _b, theme = _a.theme, props = __rest(_a, ["className", "iconRef", "name", "rotation", "theme"]);
    var iconFontPrefix = theme.iconFontPrefix;
    return (jsx_runtime_1.jsx(react_2.ClassNames, { children: function (_a) {
            var cx = _a.cx;
            return (jsx_runtime_1.jsx(exports.StyledIcon, __assign({ className: cx(iconFontPrefix, iconFontPrefix + "-" + name, className), ref: iconRef, rotation: rotation }, props), void 0));
        } }, void 0));
};
var WithThemeIcon = react_2.withTheme(Icon);
exports["default"] = react_1.forwardRef(function (props, ref) {
    return jsx_runtime_1.jsx(WithThemeIcon, __assign({}, props, { iconRef: ref }), void 0);
});
var templateObject_1, templateObject_2;
