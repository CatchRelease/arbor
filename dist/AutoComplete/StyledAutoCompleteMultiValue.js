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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var utils_1 = require("../utils");
var colors_1 = require("../theme/colors");
var Badge_1 = __importDefault(require("../Badge"));
var Icon_1 = __importDefault(require("../Icon"));
var StyledAutoCompleteMultiValue = function (_a) {
    var data = _a.data, label = _a.data.label, paletteColor = _a.paletteColor, variant = _a.variant, readOnly = _a.readOnly, removeProps = _a.removeProps;
    var color = paletteColor === null
        ? utils_1.colorForString(label, Object.keys(colors_1.palette))
        : paletteColor;
    var iconEnd = readOnly ? null : (jsx_runtime_1.jsx(Icon_1["default"], __assign({ "aria-label": "remove", css: { cursor: 'pointer' }, fontSize: "size3", name: "cross" }, removeProps), void 0));
    return (jsx_runtime_1.jsx(Badge_1["default"], __assign({}, __assign({ iconEnd: iconEnd, paletteColor: color, subtle: true, variant: variant }, data), { children: label }), void 0));
};
StyledAutoCompleteMultiValue.propTypes = {
    data: prop_types_1["default"].shape({
        label: prop_types_1["default"].string.isRequired
    }).isRequired,
    removeProps: prop_types_1["default"].shape({
        onClick: prop_types_1["default"].func.isRequired,
        onMouseDown: prop_types_1["default"].func.isRequired,
        onTouchEnd: prop_types_1["default"].func.isRequired
    }),
    paletteColor: prop_types_1["default"].oneOf(__spreadArray([''], Object.keys(colors_1.palette))),
    readOnly: prop_types_1["default"].bool,
    variant: prop_types_1["default"].oneOf(['default', 'pill'])
};
StyledAutoCompleteMultiValue.defaultProps = {
    removeProps: {
        onClick: function () { },
        onMouseDown: function () { },
        onTouchEnd: function () { }
    },
    paletteColor: null,
    readOnly: false,
    variant: 'default'
};
exports["default"] = StyledAutoCompleteMultiValue;
