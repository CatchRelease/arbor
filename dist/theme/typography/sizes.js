"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _polished = require("polished");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var inputSizes = {
  "default": fontSizes.size4,
  mobile: fontSizes.size5
};

var _default = _objectSpread(_objectSpread({}, fontSizes), {}, {
  input: _objectSpread({}, inputSizes)
});

exports["default"] = _default;