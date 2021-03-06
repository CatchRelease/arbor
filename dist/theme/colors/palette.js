"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.yellow = exports.teal = exports.red = exports.purple = exports.pink = exports.orange = exports.neutral = exports.green = exports.cyan = exports.brand = exports.blue = void 0;

var _polished = require("polished");

var _primary = _interopRequireDefault(require("./primary"));

var _brand = _interopRequireDefault(require("./brand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
palette.brand = generateColorModifiers(_brand["default"]["default"]);
var blue = palette.blue,
    brand = palette.brand,
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
exports.brand = brand;
exports.blue = blue;
var _default = palette;
exports["default"] = _default;