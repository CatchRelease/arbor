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
var prop_types_1 = __importDefault(require("prop-types"));
var avatars_1 = require("../theme/avatars");
var colors_1 = require("../theme/colors");
var utils_1 = require("../utils");
var StyledAvatar_1 = __importDefault(require("./StyledAvatar"));
var StyledAvatarText_1 = __importDefault(require("./StyledAvatarText"));
var AVATAR_COLORS = Object.keys(colors_1.palette).map(function (color) { return "palette." + color + ".default"; });
var getInitials = function (name) {
    var _a = name.split(' '), firstName = _a[0], additionalNames = _a.slice(1);
    var firstInitial = firstName[0];
    if (additionalNames.length) {
        var lastName = additionalNames[additionalNames.length - 1];
        var lastInitial = lastName[0];
        return "" + firstInitial + lastInitial;
    }
    return firstInitial;
};
var getText = function (name) {
    return name.match(/[A-Za-z]/) ? getInitials(name).toUpperCase() : name;
};
var Avatar = react_1.forwardRef(function (_a, ref) {
    var name = _a.name, subtle = _a.subtle, size = _a.size, baseColorProp = _a.baseColor, props = __rest(_a, ["name", "subtle", "size", "baseColor"]);
    var baseColor = baseColorProp || utils_1.colorForString(name, AVATAR_COLORS);
    return (jsx_runtime_1.jsx(StyledAvatar_1["default"], __assign({}, __assign({ alignItems: 'center', baseColor: baseColor, border: '1px solid', borderRadius: '50%', justifyContent: 'center', size: size, subtle: subtle, ref: ref }, props), { children: jsx_runtime_1.jsx(StyledAvatarText_1["default"], __assign({}, { baseColor: baseColor, size: size, subtle: subtle }, { children: getText(name) }), void 0) }), void 0));
});
Avatar.propTypes = {
    /**
     * Base color to use for the avatar
     */
    baseColor: prop_types_1["default"].string,
    /**
     * The name for the user's avatar. The name is used to determine the color for
     * the avatar component. See utils/colorForString.
     *
     * The initials for display will also be determined based of the name
     * provided.
     */
    name: prop_types_1["default"].string.isRequired,
    /**
     * Visual size of the Avatar component
     */
    size: prop_types_1["default"].oneOf(Object.keys(avatars_1.sizes)),
    /**
     * Use a subtle version of the avatar's color styling.
     * */
    subtle: prop_types_1["default"].bool
};
Avatar.defaultProps = {
    baseColor: undefined,
    size: 'default',
    subtle: false
};
exports["default"] = Avatar;
