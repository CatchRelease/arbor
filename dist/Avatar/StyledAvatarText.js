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
exports.StyledAvatarText = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = require("@emotion/react");
var Text_1 = __importDefault(require("../Text"));
var avatars_1 = require("../theme/avatars");
var StyledAvatarText = function (_a) {
    var baseColor = _a.baseColor, size = _a.size, subtle = _a.subtle, avatarFontSizes = _a.theme.avatarFontSizes, // eslint-disable-line react/prop-types
    props = __rest(_a, ["baseColor", "size", "subtle", "theme"]);
    var color = subtle ? baseColor : 'monochrome.white';
    var fontSize = avatarFontSizes[size];
    return jsx_runtime_1.jsx(Text_1["default"], __assign({}, __assign({ color: color, fontSize: fontSize }, props)), void 0);
};
exports.StyledAvatarText = StyledAvatarText;
exports.StyledAvatarText.propTypes = {
    baseColor: prop_types_1["default"].string.isRequired,
    size: prop_types_1["default"].oneOf(Object.keys(avatars_1.sizes)).isRequired,
    subtle: prop_types_1["default"].bool.isRequired
};
exports["default"] = react_1.withTheme(exports.StyledAvatarText);
