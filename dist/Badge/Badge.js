"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _palette = _interopRequireDefault(require("../theme/colors/palette"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _StyledBadge = _interopRequireDefault(require("./StyledBadge"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getTextColor = function getTextColor(color, subtle) {
  if (color) {
    return subtle ? "palette.".concat(color, ".dark") : 'monochrome.white';
  }

  return subtle ? 'monochrome.grey80' : 'monochrome.white';
};

var getGridTemplateColumns = function getGridTemplateColumns(iconStart, iconEnd) {
  if (iconStart && iconEnd) {
    return '0fr 1fr 0fr';
  }

  if (iconStart) {
    return '0fr 1fr';
  }

  if (iconEnd) {
    return '1fr 0fr';
  }

  return '1fr';
};

var Badge = function Badge(_ref) {
  var paletteColor = _ref.paletteColor,
      children = _ref.children,
      iconEnd = _ref.iconEnd,
      iconStart = _ref.iconStart,
      subtle = _ref.subtle,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["paletteColor", "children", "iconEnd", "iconStart", "subtle", "variant"]);

  var textColor = getTextColor(paletteColor, subtle);
  var gridTemplateColumns = getGridTemplateColumns(iconStart, iconEnd);
  return _react["default"].createElement(_StyledBadge["default"], _objectSpread({
    paletteColor: paletteColor,
    subtle: subtle,
    variant: variant
  }, props), _react["default"].createElement(_Grid["default"], {
    color: textColor,
    alignItems: "center",
    gridTemplateColumns: gridTemplateColumns,
    gridGap: "smallest"
  }, iconStart, _react["default"].createElement(_Text["default"], {
    as: 'span',
    color: textColor,
    fontSize: 'size3',
    fontWeight: 'medium',
    iconStart: undefined,
    lineHeight: 'large',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, children), iconEnd));
};

Badge.propTypes = {
  /**
   * Content to render within the badge
   */
  children: _propTypes["default"].string.isRequired,

  /**
   * Badge color as a key of the theme's color palette.
   * */
  paletteColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(Object.keys(_palette["default"])))),

  /**
   * Arbor icon to insert after badge text.
   * */
  iconEnd: _propTypes["default"].node,

  /**
   * Arbor icon to insert before badge text.
   * */
  iconStart: _propTypes["default"].node,

  /**
   * Use a subtle version of the badge's color styling.
   * */
  subtle: _propTypes["default"].bool,

  /**
   * Badge variant.
   * */
  variant: _propTypes["default"].oneOf(['default', 'pill'])
};
Badge.defaultProps = {
  paletteColor: '',
  subtle: false,
  iconEnd: undefined,
  iconStart: undefined,
  variant: 'default'
};
var _default = Badge;
exports["default"] = _default;