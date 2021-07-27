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
exports.StyledAvatarText = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("@emotion/react");
const Text_1 = __importDefault(require("../Text"));
const avatars_1 = require("../theme/avatars");
const StyledAvatarText = (_a) => {
    var { baseColor, size, subtle, theme: { avatarFontSizes } } = _a, // eslint-disable-line react/prop-types
    props = __rest(_a, ["baseColor", "size", "subtle", "theme"]);
    const color = subtle ? baseColor : 'monochrome.white';
    const fontSize = avatarFontSizes[size];
    return jsx_runtime_1.jsx(Text_1.default, Object.assign({}, Object.assign({ color, fontSize }, props)), void 0);
};
exports.StyledAvatarText = StyledAvatarText;
exports.StyledAvatarText.propTypes = {
    baseColor: prop_types_1.default.string.isRequired,
    size: prop_types_1.default.oneOf(Object.keys(avatars_1.sizes)).isRequired,
    subtle: prop_types_1.default.bool.isRequired
};
exports.default = react_1.withTheme(exports.StyledAvatarText);
