"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.boxShadows = exports.borderWidth = exports.borderRadius = exports.spacings = exports.brandFont = exports.typography = exports.lineHeights = exports.fontWeights = exports.fontSizes = exports.colors = exports.textColors = exports.iconColors = exports.brandColors = exports.borderColors = exports.backgroundColors = exports.bronzes = exports.black = exports.greens = exports.reds = exports.whites = exports.greys = exports.blues = exports.breakpoints = void 0;

var _polished = require("polished");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var breakpoints = ['512px', '768px', '1024px', '1600px'];
exports.breakpoints = breakpoints;
var blues = {
  blueLighter: '#6688FF',
  blueLight: '#5577FF',
  blue: '#4466EE',
  blueDark: '#4455CC',
  blueDarkest: '#2E374E'
};
exports.blues = blues;
var greys = {
  grey10: '#F8F9F9',
  grey20: '#F2F2F2',
  grey30: '#EBECEC',
  grey40: '#E0E1E2',
  grey50: '#BEBEC0',
  grey60: '#989A9C',
  grey70: '#78797D',
  grey80: '#5B5D61',
  grey90: '#25272D',
  grey100: '#0F0F10'
};
exports.greys = greys;
var whites = {
  white: '#FFFFFF'
};
exports.whites = whites;
var reds = {
  redLighter: '#FF6655',
  redLight: '#FF4444',
  red: '#EE2200',
  redDark: '#DD1100'
};
exports.reds = reds;
var greens = {
  greenLighter: '#00CC66',
  greenLight: '#00BB44',
  green: '#00AA44',
  greenDark: '#008833'
};
exports.greens = greens;
var black = '#000000';
exports.black = black;
var bronzes = {
  bronzeLight: '#CC9900',
  bronze: '#CC7700',
  bronzeDark: '#AA5500'
};
exports.bronzes = bronzes;
var backgroundColors = {
  muted: greys.grey10,
  default: greys.grey20
};
exports.backgroundColors = backgroundColors;
var borderColors = {
  muted: greys.grey30,
  default: greys.grey40
};
exports.borderColors = borderColors;
var brandColors = {
  get light() {
    return (0, _polished.transparentize)(0.91, this.dark);
  },

  default: '#007558',
  dark: '#00533E',
  darkest: '#001C15'
};
exports.brandColors = brandColors;
var iconColors = {
  disabled: (0, _polished.transparentize)(0.3, greys.grey50),
  default: greys.grey60
};
exports.iconColors = iconColors;
var textColors = {
  disabled: (0, _polished.transparentize)(0.3, greys.grey70),
  muted: greys.grey80,
  default: greys.grey90,
  dark: greys.grey100
};
exports.textColors = textColors;

var colors = _objectSpread({
  black: black
}, blues, greys, whites, greens, reds, bronzes, {
  background: _objectSpread({}, backgroundColors),
  brand: _objectSpread({}, brandColors),
  border: _objectSpread({}, borderColors),
  icon: _objectSpread({}, iconColors),
  text: _objectSpread({}, textColors)
});

exports.colors = colors;
var fontSizes = {
  size1: (0, _polished.rem)('11px'),
  size2: (0, _polished.rem)('12px'),
  size3: (0, _polished.rem)('13px'),
  size4: (0, _polished.rem)('14px'),
  size5: (0, _polished.rem)('16px'),
  size6: (0, _polished.rem)('20px'),
  size7: (0, _polished.rem)('24px'),
  size8: (0, _polished.rem)('28px'),
  size9: (0, _polished.rem)('34px')
};
exports.fontSizes = fontSizes;
var fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
};
exports.fontWeights = fontWeights;
var lineHeights = {
  small: 1.25,
  regular: 1,
  large: 1.5
};
exports.lineHeights = lineHeights;
var typography = {
  text: {
    ui: {
      fontSize: fontSizes.size4
    },
    longForm: {
      fontSize: fontSizes.size5
    },
    tiny: {
      fontSize: fontSizes.size2
    }
  }
};
exports.typography = typography;
var brandFont = 'Motiva Sans';
exports.brandFont = brandFont;
var spacings = {
  smallest: (0, _polished.rem)('4px'),
  smaller: (0, _polished.rem)('8px'),
  small: (0, _polished.rem)('12px'),
  regular: (0, _polished.rem)('16px'),
  large: (0, _polished.rem)('24px'),
  larger: (0, _polished.rem)('32px'),
  largest: (0, _polished.rem)('64px')
};
exports.spacings = spacings;
var borderRadius = {
  small: '3px',
  large: '6px'
};
exports.borderRadius = borderRadius;
var borderWidth = {
  small: '1px',
  medium: '2px',
  large: '4px'
};
exports.borderWidth = borderWidth;
var blurryShadowColor = (0, _polished.transparentize)(0.7, greys.grey90);
var borderShadowColor = (0, _polished.transparentize)(0.53, greys.grey90);
var boxShadows = {
  elevation0: "0 0 1px ".concat(borderShadowColor),
  elevation1: "0 0 1px ".concat(borderShadowColor, ", 0 2px 4px -2px ").concat(blurryShadowColor),
  elevation2: "0 0 1px ".concat(borderShadowColor, ", 0 5px 8px -4px ").concat(blurryShadowColor),
  elevation3: "0 0 1px ".concat(borderShadowColor, ", 0 8px 10px -4px ").concat(blurryShadowColor),
  elevation4: "0 0 1px ".concat(borderShadowColor, ", 0 16px 24px -8px ").concat(blurryShadowColor)
};
exports.boxShadows = boxShadows;
var _default = {
  backgroundColors: backgroundColors,
  borderColors: borderColors,
  borderRadius: borderRadius,
  borderWidth: borderWidth,
  brandColors: brandColors,
  brandFont: brandFont,
  breakpoints: breakpoints,
  colors: colors,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  iconColors: iconColors,
  iconFontPrefix: 'ar',
  lineHeights: lineHeights,
  shadows: boxShadows,
  space: spacings,
  textColors: textColors,
  typography: typography
};
exports.default = _default;