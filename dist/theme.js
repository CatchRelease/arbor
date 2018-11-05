"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.borderWidth = exports.borderRadius = exports.spacings = exports.brandFont = exports.typography = exports.lineHeights = exports.fontWeights = exports.fontSizes = exports.colors = exports.bronzes = exports.black = exports.greens = exports.reds = exports.whites = exports.greys = exports.blues = exports.breakpoints = void 0;

var _polished = require("polished");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var breakpoints = ['768px'];
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
  grey10: '#EEEEEE',
  grey20: '#DDDDDD',
  grey30: '#CCCCCC',
  grey40: '#BBBBBB',
  grey50: '#AAAAAA',
  grey60: '#999999',
  grey70: '#888888',
  grey80: '#666666',
  grey90: '#444444',
  grey100: '#222222'
};
exports.greys = greys;
var whites = {
  white: '#FFFFFF',
  white10: '#FAFAFA'
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

var colors = _objectSpread({
  black: black
}, blues, greys, whites, greens, reds, bronzes);

exports.colors = colors;
var fontSizes = {
  size1: (0, _polished.rem)('12px'),
  size2: (0, _polished.rem)('14px'),
  size3: (0, _polished.rem)('16px'),
  size4: (0, _polished.rem)('18px'),
  size5: (0, _polished.rem)('22px'),
  size6: (0, _polished.rem)('28px'),
  size7: (0, _polished.rem)('34px')
};
exports.fontSizes = fontSizes;
var fontWeights = {
  regular: 400,
  medium: 600,
  bold: 700
};
exports.fontWeights = fontWeights;
var lineHeights = {
  small: 1.25,
  large: 1.5
};
exports.lineHeights = lineHeights;
var typography = {
  text: {
    ui: {
      fontSize: fontSizes.size2,
      color: colors.grey100
    },
    longForm: {
      fontSize: fontSizes.size3,
      color: colors.grey100
    },
    tiny: {
      fontSize: fontSizes.size1,
      color: colors.grey80
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
var _default = {
  borderRadius: borderRadius,
  borderWidth: borderWidth,
  brandFont: brandFont,
  breakpoints: breakpoints,
  colors: colors,
  fontWeights: fontWeights,
  fontSizes: fontSizes,
  iconFontPrefix: 'fa',
  lineHeights: lineHeights,
  space: spacings,
  typography: typography
};
exports.default = _default;