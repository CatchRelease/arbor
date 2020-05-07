"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.yellow = exports.teal = exports.red = exports.purple = exports.pink = exports.orange = exports.neutral = exports.green = exports.cyan = exports.blue = void 0;

var _polished = require("polished");

var _primary = _interopRequireDefault(require("./primary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var generateColorModifiers = function generateColorModifiers(color) {
  return {
    lighter: (0, _polished.tint)(0.9, color),
    light: (0, _polished.tint)(0.7, color),
    "default": color,
    dark: (0, _polished.shade)(0.5, color),
    darker: (0, _polished.shade)(0.8, color)
  };
};

var paletteReducer = function paletteReducer(palette, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      color = _ref2[0],
      value = _ref2[1];

  return Object.assign(palette, _defineProperty({}, color, generateColorModifiers(value)));
};

var palette = Object.entries(_primary["default"]).reduce(paletteReducer, {});
var blue = palette.blue,
    cyan = palette.cyan,
    green = palette.green,
    neutral = palette.neutral,
    orange = palette.orange,
    pink = palette.pink,
    purple = palette.purple,
    red = palette.red,
    teal = palette.teal,
    yellow = palette.yellow;
exports.yellow = yellow;
exports.teal = teal;
exports.red = red;
exports.purple = purple;
exports.pink = pink;
exports.orange = orange;
exports.neutral = neutral;
exports.green = green;
exports.cyan = cyan;
exports.blue = blue;
var _default = palette;
exports["default"] = _default;