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
exports.StyledAvatar = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@emotion/react");
const Flex_1 = __importDefault(require("../Flex"));
exports.StyledAvatar = (0, react_1.forwardRef)((_a, ref) => {
    var { baseColor, border, size, subtle, theme: { avatarSizes } } = _a, props = __rest(_a, ["baseColor", "border", "size", "subtle", "theme"]);
    const bg = subtle ? `monochrome.white` : baseColor;
    const borderColor = baseColor;
    return ((0, jsx_runtime_1.jsx)(Flex_1.default, Object.assign({}, Object.assign({ width: avatarSizes[size], height: avatarSizes[size], bg,
        border,
        borderColor,
        ref }, props)), void 0));
});
exports.default = (0, react_2.withTheme)(exports.StyledAvatar);
