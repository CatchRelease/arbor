"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.boxShadows = exports.borderWidth = exports.borderRadius = exports.spacings = exports.lineHeights = exports.icons = exports.colors = exports.bronzes = exports.black = exports.greens = exports.reds = exports.whites = exports.greys = exports.blues = exports.breakpoints = exports.breakpointsMap = void 0;

var _polished = require("polished");

var _colors = require("./colors");

var _typography = require("./typography");

var _avatars = require("./avatars");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var breakpointsMap = {
  sm: '512px',
  md: '768px',
  lg: '1024px',
  xl: '1600px'
}; // Styled-System breakpoints

exports.breakpointsMap = breakpointsMap;
var breakpoints = Object.values(breakpointsMap);
exports.breakpoints = breakpoints;
breakpoints.sm = breakpointsMap.sm;
breakpoints.md = breakpointsMap.md;
breakpoints.lg = breakpointsMap.lg;
breakpoints.xl = breakpointsMap.xl;
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

var colors = _objectSpread({
  /* START: deprecated -- Color definition and variables are being revamped */
  black: black
}, blues, {}, greys, {}, whites, {}, greens, {}, reds, {}, bronzes, {
  /* END: deprecated */
  background: _colors.background,
  border: _colors.border,
  brand: _colors.brand,
  icon: _colors.icon,
  intent: _colors.intent,
  monochrome: _colors.monochrome,
  palette: _colors.palette,
  primary: _colors.primary,
  secondary: _colors.secondary,
  text: _colors.text
});

exports.colors = colors;
var icons = {
  annotation: '\f039',
  calendar: '\f035',
  caret: '\f037',
  chatBubbleOutline: '\f003',
  checkboxChecked: '\f030',
  checkboxIndeterminate: '\f02f',
  checkboxMarkedCircleOutline: '\f000',
  chevron: '\f03a',
  crLogo: '\f02e',
  cross: '\f03b',
  download: '\f004',
  swap: '\f038',
  symbolCircle: '\f034',
  thumbDownOutline: '\f001',
  thumbUpOutline: '\f002',
  trash: '\f036'
};
exports.icons = icons;
var lineHeights = {
  small: 1.25,
  regular: 1,
  large: 1.5
};
exports.lineHeights = lineHeights;
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
  large: '6px',
  larger: '12px'
};
exports.borderRadius = borderRadius;
var borderWidth = {
  small: '1px',
  medium: '2px',
  large: '4px'
};
exports.borderWidth = borderWidth;
var borders = {
  "default": "".concat(borderWidth.small, " solid ").concat(colors.border["default"])
};
var blurryShadowColor = (0, _polished.transparentize)(0.7, colors.monochrome.grey90);
var borderShadowColor = (0, _polished.transparentize)(0.53, colors.monochrome.grey90);
var boxShadows = {
  elevation0: "0 0 1px ".concat(borderShadowColor),
  elevation1: "0 0 1px ".concat(borderShadowColor, ", 0 2px 4px -2px ").concat(blurryShadowColor),
  elevation2: "0 0 1px ".concat(borderShadowColor, ", 0 5px 8px -4px ").concat(blurryShadowColor),
  elevation3: "0 0 1px ".concat(borderShadowColor, ", 0 8px 10px -4px ").concat(blurryShadowColor),
  elevation4: "0 0 1px ".concat(borderShadowColor, ", 0 16px 24px -8px ").concat(blurryShadowColor)
};
exports.boxShadows = boxShadows;
var _default = {
  avatarSizes: _avatars.sizes,
  avatarFontSizes: _avatars.fontSizes,
  borderWidth: borderWidth,
  borders: borders,
  brandFont: _typography.brandFont,
  breakpoints: breakpoints,
  breakpointsMap: breakpointsMap,
  colors: colors,
  fonts: _typography.fonts,
  fontSizes: _typography.sizes,
  fontWeights: _typography.fontWeights,
  icons: icons,
  iconFontPrefix: 'ar',
  lineHeights: lineHeights,
  radii: borderRadius,
  shadows: boxShadows,
  space: spacings
};
exports["default"] = _default;