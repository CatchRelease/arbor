"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _themeGet = require("@styled-system/theme-get");

var _emotionTheming = require("emotion-theming");

var _reactLoader = _interopRequireDefault(require("react-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Spinner = function Spinner(_ref) {
  var children = _ref.children,
      color = _ref.color,
      spin = _ref.spin,
      props = _objectWithoutProperties(_ref, ["children", "color", "spin"]);

  var themedColor = (0, _themeGet.themeGet)("colors.".concat(color), color)(props);
  return /*#__PURE__*/_react["default"].createElement(_reactLoader["default"], _objectSpread({
    color: themedColor,
    loaded: !spin
  }, props), children);
};

Spinner.propTypes = {
  /**
   * All Spin.js options are supported as props via react-loader
   * https://www.npmjs.com/package/react-loader
   */

  /**
   * Content to render inside the loader when loaded
   * */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),

  /**
   * Color for the spinner, supports colors from theme.
   */
  color: _propTypes["default"].string,

  /**
   * Whether or not to show the spinner.
   */
  spin: _propTypes["default"].bool
};
Spinner.defaultProps = {
  children: undefined,
  color: 'monochrome.black',
  spin: false
};

var _default = (0, _emotionTheming.withTheme)(Spinner);

exports["default"] = _default;