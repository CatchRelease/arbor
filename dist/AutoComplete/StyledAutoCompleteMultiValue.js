"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _colors = require("../theme/colors");

var _Badge = _interopRequireDefault(require("../Badge"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledAutoCompleteMultiValue = function StyledAutoCompleteMultiValue(_ref) {
  var data = _ref.data,
      label = _ref.data.label,
      paletteColor = _ref.paletteColor,
      removeProps = _ref.removeProps;
  var color = paletteColor === null ? (0, _utils.colorForString)(label, Object.keys(_colors.palette)) : paletteColor;

  var iconEnd = _react["default"].createElement(_Icon["default"], _extends({
    "aria-label": "remove",
    css: {
      cursor: 'pointer'
    },
    fontSize: "size3",
    name: "cross"
  }, removeProps));

  return _react["default"].createElement(_Badge["default"], _objectSpread({
    iconEnd: iconEnd,
    paletteColor: color,
    subtle: true,
    variant: 'pill'
  }, data), label);
};

StyledAutoCompleteMultiValue.propTypes = {
  data: _propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired
  }).isRequired,
  removeProps: _propTypes["default"].shape({
    onClick: _propTypes["default"].func.isRequired,
    onMouseDown: _propTypes["default"].func.isRequired,
    onTouchEnd: _propTypes["default"].func.isRequired
  }).isRequired,
  paletteColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(Object.keys(_colors.palette))))
};
StyledAutoCompleteMultiValue.defaultProps = {
  paletteColor: null
};
var _default = StyledAutoCompleteMultiValue;
exports["default"] = _default;