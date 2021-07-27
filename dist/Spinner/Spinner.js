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
var theme_get_1 = require("@styled-system/theme-get");
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var Box_1 = __importDefault(require("../Box"));
var StyledSpinner = styled_1["default"](Box_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  position: relative;\n"], ["\n  ", "\n\n  position: relative;\n"])), styled_system_1.system({
    diameter: {
        properties: ['width', 'height']
    }
}));
var spinAnimation = react_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0%, 39%, 100% {\n    opacity: 0.5;\n    transform: scale(0.6);\n  } 40% {\n    opacity: 1; \n    transform: scale(1);\n  }\n"], ["\n  0%, 39%, 100% {\n    opacity: 0.5;\n    transform: scale(0.6);\n  } 40% {\n    opacity: 1; \n    transform: scale(1);\n  }\n"])));
var StyledSpinnerDot = styled_1["default"](Box_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  &:before {\n    content: '';\n    display: block;\n    width: 15%;\n    height: 15%;\n    background-color: ", ";\n    border-radius: 100%;\n    animation: ", " 1.2s infinite ease-in-out both;\n  }\n\n  &:nth-child(1) {\n    transform: rotate(30deg);\n  }\n  &:nth-child(2) {\n    transform: rotate(60deg);\n  }\n  &:nth-child(3) {\n    transform: rotate(90deg);\n  }\n  &:nth-child(4) {\n    transform: rotate(120deg);\n  }\n  &:nth-child(5) {\n    transform: rotate(150deg);\n  }\n  &:nth-child(6) {\n    transform: rotate(180deg);\n  }\n  &:nth-child(7) {\n    transform: rotate(210deg);\n  }\n  &:nth-child(8) {\n    transform: rotate(240deg);\n  }\n  &:nth-child(9) {\n    transform: rotate(270deg);\n  }\n  &:nth-child(10) {\n    transform: rotate(300deg);\n  }\n  &:nth-child(11) {\n    transform: rotate(330deg);\n  }\n  &:nth-child(1):before {\n    animation-delay: -1.1s;\n  }\n  &:nth-child(2):before {\n    animation-delay: -1s;\n  }\n  &:nth-child(3):before {\n    animation-delay: -0.9s;\n  }\n  &:nth-child(4):before {\n    animation-delay: -0.8s;\n  }\n  &:nth-child(5):before {\n    animation-delay: -0.7s;\n  }\n  &:nth-child(6):before {\n    animation-delay: -0.6s;\n  }\n  &:nth-child(7):before {\n    animation-delay: -0.5s;\n  }\n  &:nth-child(8):before {\n    animation-delay: -0.4s;\n  }\n  &:nth-child(9):before {\n    animation-delay: -0.3s;\n  }\n  &:nth-child(10):before {\n    animation-delay: -0.2s;\n  }\n  &:nth-child(11):before {\n    animation-delay: -0.1s;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  &:before {\n    content: '';\n    display: block;\n    width: 15%;\n    height: 15%;\n    background-color: ", ";\n    border-radius: 100%;\n    animation: ", " 1.2s infinite ease-in-out both;\n  }\n\n  &:nth-child(1) {\n    transform: rotate(30deg);\n  }\n  &:nth-child(2) {\n    transform: rotate(60deg);\n  }\n  &:nth-child(3) {\n    transform: rotate(90deg);\n  }\n  &:nth-child(4) {\n    transform: rotate(120deg);\n  }\n  &:nth-child(5) {\n    transform: rotate(150deg);\n  }\n  &:nth-child(6) {\n    transform: rotate(180deg);\n  }\n  &:nth-child(7) {\n    transform: rotate(210deg);\n  }\n  &:nth-child(8) {\n    transform: rotate(240deg);\n  }\n  &:nth-child(9) {\n    transform: rotate(270deg);\n  }\n  &:nth-child(10) {\n    transform: rotate(300deg);\n  }\n  &:nth-child(11) {\n    transform: rotate(330deg);\n  }\n  &:nth-child(1):before {\n    animation-delay: -1.1s;\n  }\n  &:nth-child(2):before {\n    animation-delay: -1s;\n  }\n  &:nth-child(3):before {\n    animation-delay: -0.9s;\n  }\n  &:nth-child(4):before {\n    animation-delay: -0.8s;\n  }\n  &:nth-child(5):before {\n    animation-delay: -0.7s;\n  }\n  &:nth-child(6):before {\n    animation-delay: -0.6s;\n  }\n  &:nth-child(7):before {\n    animation-delay: -0.5s;\n  }\n  &:nth-child(8):before {\n    animation-delay: -0.4s;\n  }\n  &:nth-child(9):before {\n    animation-delay: -0.3s;\n  }\n  &:nth-child(10):before {\n    animation-delay: -0.2s;\n  }\n  &:nth-child(11):before {\n    animation-delay: -0.1s;\n  }\n"])), function (props) { return props.color; }, spinAnimation);
var Spinner = function (_a) {
    var 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children = _a.children, color = _a.color, spin = _a.spin, props = __rest(_a, ["children", "color", "spin"]);
    var themedColor = theme_get_1.themeGet("colors." + color, color)(props);
    if (!spin) {
        return null;
    }
    return (jsx_runtime_1.jsx(StyledSpinner, __assign({}, __assign({ color: themedColor }, props), { children: __spreadArray([], Array(12).keys()).map(function (value) { return (jsx_runtime_1.jsx(StyledSpinnerDot, { color: themedColor }, value)); }) }), void 0));
};
Spinner.propTypes = {
    /**
     * All Spin.js options are supported as props via react-loader
     * https://www.npmjs.com/package/react-loader
     */
    /**
     * Content to render inside the loader when loaded
     * */
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]),
    /**
     * Color for the spinner, supports colors from theme.
     */
    color: prop_types_1["default"].string,
    /**
     * Whether or not to show the spinner.
     */
    spin: prop_types_1["default"].bool,
    diameter: prop_types_1["default"].oneOfType([
        prop_types_1["default"].arrayOf(prop_types_1["default"].string),
        prop_types_1["default"].string
    ])
};
Spinner.defaultProps = {
    children: undefined,
    color: 'monochrome.black',
    spin: true,
    diameter: '40px'
};
exports["default"] = react_1.withTheme(Spinner);
var templateObject_1, templateObject_2, templateObject_3;
