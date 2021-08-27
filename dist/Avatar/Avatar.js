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
const colors_1 = require("../theme/colors");
const utils_1 = require("../utils");
const StyledAvatar_1 = __importDefault(require("./StyledAvatar"));
const StyledAvatarText_1 = __importDefault(require("./StyledAvatarText"));
const AVATAR_COLORS = Object.keys(colors_1.palette).map((color) => `palette.${color}.default`);
const getInitials = (name) => {
    const [firstName, ...additionalNames] = name.split(' ');
    const firstInitial = firstName[0];
    if (additionalNames.length) {
        const lastName = additionalNames[additionalNames.length - 1];
        const lastInitial = lastName[0];
        return `${firstInitial}${lastInitial}`;
    }
    return firstInitial;
};
const getText = (name) => name.match(/[A-Za-z]/) ? getInitials(name).toUpperCase() : name;
const Avatar = react_1.forwardRef((_a, ref) => {
    var { name, subtle = false, size = 'default', baseColor: baseColorProp } = _a, props = __rest(_a, ["name", "subtle", "size", "baseColor"]);
    const baseColor = baseColorProp || utils_1.colorForString(name, AVATAR_COLORS);
    return (jsx_runtime_1.jsx(StyledAvatar_1.default, Object.assign({}, Object.assign({ alignItems: 'center', baseColor, border: '1px solid', borderRadius: '50%', justifyContent: 'center', size,
        subtle,
        ref }, props), { children: jsx_runtime_1.jsx(StyledAvatarText_1.default, Object.assign({}, { baseColor, size, subtle }, { children: getText(name) }), void 0) }), void 0));
});
exports.default = Avatar;
