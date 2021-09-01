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
exports.StyledIcon = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const rotationStyles = ({ rotation }) => rotation &&
    (0, react_2.css) `
    transform: rotate(${rotation}deg);
  `;
exports.StyledIcon = styled_1.default.i `
  ${styled_system_1.color};
  ${styled_system_1.display};
  ${styled_system_1.fontSize};
  ${styled_system_1.space};
  ${styled_system_1.textAlign};
  ${rotationStyles};
  ${styled_system_1.textShadow};
  ${styled_system_1.opacity};
`;
const Icon = (_a) => {
    var { className, iconRef, name, rotation = null, theme } = _a, props = __rest(_a, ["className", "iconRef", "name", "rotation", "theme"]);
    const { iconFontPrefix } = theme;
    return ((0, jsx_runtime_1.jsx)(react_2.ClassNames, { children: ({ cx }) => ((0, jsx_runtime_1.jsx)(exports.StyledIcon, Object.assign({ className: cx(iconFontPrefix, `${iconFontPrefix}-${name}`, className), ref: iconRef, rotation: rotation }, props), void 0)) }, void 0));
};
const WithThemeIcon = (0, react_2.withTheme)(Icon);
const ForwardRefWithThemeIcon = (0, react_1.forwardRef)((props, ref) => {
    return (0, jsx_runtime_1.jsx)(WithThemeIcon, Object.assign({}, props, { iconRef: ref }), void 0);
});
exports.default = ForwardRefWithThemeIcon;
