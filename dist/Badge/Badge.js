"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _palette = _interopRequireDefault(require("../theme/colors/palette"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _StyledBadge = _interopRequireDefault(require("./StyledBadge"));

var _Text = _interopRequireDefault(require("../Text"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["paletteColor", "children", "iconEnd", "iconStart", "subtle", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      props = _objectWithoutProperties(_ref, _excluded);

  var textColor = getTextColor(paletteColor, subtle);
  var gridTemplateColumns = getGridTemplateColumns(iconStart, iconEnd);
  return (0, _jsxRuntime.jsx)(_StyledBadge["default"], _objectSpread(_objectSpread({}, _objectSpread({
    paletteColor: paletteColor,
    subtle: subtle,
    variant: variant
  }, props)), {}, {
    children: (0, _jsxRuntime.jsxs)(_Grid["default"], {
      color: textColor,
      alignItems: "center",
      gridTemplateColumns: gridTemplateColumns,
      gridGap: "smallest",
      children: [iconStart, (0, _jsxRuntime.jsx)(_Text["default"], {
        as: 'span',
        color: textColor,
        fontSize: 'size3',
        fontWeight: 'medium',
        iconStart: undefined,
        lineHeight: 'large',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        children: children
      }), iconEnd]
    })
  }));
};

Badge.propTypes = {
  /**
   * Content to render within the badge
   */
  children: _propTypes["default"].string.isRequired,

  /**
   * Badge color as a key of the theme's color palette.
   * */
  paletteColor: _propTypes["default"].oneOf(_toConsumableArray(Object.keys(_palette["default"]))),

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
  paletteColor: 'neutral',
  subtle: false,
  iconEnd: undefined,
  iconStart: undefined,
  variant: 'default'
};
var _default = Badge;
exports["default"] = _default;