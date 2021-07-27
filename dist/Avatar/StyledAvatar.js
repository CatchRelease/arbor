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
exports.StyledAvatar = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@emotion/react");
var prop_types_1 = __importDefault(require("prop-types"));
var Flex_1 = __importDefault(require("../Flex"));
var avatars_1 = require("../theme/avatars");
exports.StyledAvatar = react_1.forwardRef(function (_a, ref) {
    var baseColor = _a.baseColor, border = _a.border, size = _a.size, subtle = _a.subtle, avatarSizes = _a.theme.avatarSizes, // eslint-disable-line react/prop-types
    props = __rest(_a, ["baseColor", "border", "size", "subtle", "theme"]);
    var bg = subtle ? "monochrome.white" : baseColor;
    var borderColor = baseColor;
    return (jsx_runtime_1.jsx(Flex_1["default"], __assign({}, __assign({ width: avatarSizes[size], height: avatarSizes[size], bg: bg, border: border, borderColor: borderColor, ref: ref }, props)), void 0));
});
exports.StyledAvatar.propTypes = {
    baseColor: prop_types_1["default"].string.isRequired,
    border: prop_types_1["default"].string.isRequired,
    size: prop_types_1["default"].oneOf(Object.keys(avatars_1.sizes)).isRequired,
    subtle: prop_types_1["default"].bool.isRequired
};
exports["default"] = react_2.withTheme(exports.StyledAvatar);
