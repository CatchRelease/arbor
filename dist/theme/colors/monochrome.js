"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.greys = exports.white = exports.black = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var black = '#000000';
exports.black = black;
var white = '#FFFFFF';
exports.white = white;
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

var _default = _objectSpread(_objectSpread({}, greys), {}, {
  black: black,
  white: white
});

exports["default"] = _default;