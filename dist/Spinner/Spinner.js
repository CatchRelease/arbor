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
const theme_get_1 = require("@styled-system/theme-get");
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_system_1 = require("styled-system");
const Box_1 = __importDefault(require("../Box"));
const StyledSpinner = (0, styled_1.default)(Box_1.default) `
  ${(0, styled_system_1.system)({
    diameter: {
        properties: ['width', 'height']
    }
})}

  position: relative;
`;
const spinAnimation = (0, react_1.keyframes) `
  0%, 39%, 100% {
    opacity: 0.5;
    transform: scale(0.6);
  } 40% {
    opacity: 1; 
    transform: scale(1);
  }
`;
const StyledSpinnerDot = (0, styled_1.default)(Box_1.default) `
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: block;
    width: 15%;
    height: 15%;
    background-color: ${(props) => props.color};
    border-radius: 100%;
    animation: ${spinAnimation} 1.2s infinite ease-in-out both;
  }

  &:nth-child(1) {
    transform: rotate(30deg);
  }
  &:nth-child(2) {
    transform: rotate(60deg);
  }
  &:nth-child(3) {
    transform: rotate(90deg);
  }
  &:nth-child(4) {
    transform: rotate(120deg);
  }
  &:nth-child(5) {
    transform: rotate(150deg);
  }
  &:nth-child(6) {
    transform: rotate(180deg);
  }
  &:nth-child(7) {
    transform: rotate(210deg);
  }
  &:nth-child(8) {
    transform: rotate(240deg);
  }
  &:nth-child(9) {
    transform: rotate(270deg);
  }
  &:nth-child(10) {
    transform: rotate(300deg);
  }
  &:nth-child(11) {
    transform: rotate(330deg);
  }
  &:nth-child(1):before {
    animation-delay: -1.1s;
  }
  &:nth-child(2):before {
    animation-delay: -1s;
  }
  &:nth-child(3):before {
    animation-delay: -0.9s;
  }
  &:nth-child(4):before {
    animation-delay: -0.8s;
  }
  &:nth-child(5):before {
    animation-delay: -0.7s;
  }
  &:nth-child(6):before {
    animation-delay: -0.6s;
  }
  &:nth-child(7):before {
    animation-delay: -0.5s;
  }
  &:nth-child(8):before {
    animation-delay: -0.4s;
  }
  &:nth-child(9):before {
    animation-delay: -0.3s;
  }
  &:nth-child(10):before {
    animation-delay: -0.2s;
  }
  &:nth-child(11):before {
    animation-delay: -0.1s;
  }
`;
const Spinner = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children, color, spin } = _a, props = __rest(_a, ["children", "color", "spin"]);
    const themedColor = (0, theme_get_1.themeGet)(`colors.${color}`, color)(props);
    if (!spin) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(StyledSpinner, Object.assign({}, Object.assign({ color: themedColor }, props), { children: [...Array(12).keys()].map((value) => ((0, jsx_runtime_1.jsx)(StyledSpinnerDot, { color: themedColor }, value))) }), void 0));
};
Spinner.defaultProps = {
    color: 'monochrome.black',
    spin: true,
    diameter: '40px'
};
exports.default = (0, react_1.withTheme)(Spinner);
