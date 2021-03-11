"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonContent = _interopRequireDefault(require("./ButtonContent"));

var _ButtonSpinner = _interopRequireDefault(require("./ButtonSpinner"));

var _sizes = _interopRequireDefault(require("./sizes"));

var _StyledButton = _interopRequireDefault(require("./StyledButton"));

var _Text = _interopRequireDefault(require("../Text"));

var _variants = _interopRequireDefault(require("./variants"));

var _intent = _interopRequireDefault(require("../theme/colors/intent"));

var _palette = _interopRequireDefault(require("../theme/colors/palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var INTENTS = Object.keys(_intent["default"]);

var Button = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      iconStart = _ref.iconStart,
      iconEnd = _ref.iconEnd,
      spin = _ref.spin,
      variant = _ref.variant,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["children", "iconStart", "iconEnd", "spin", "variant", "type"]);

  return /*#__PURE__*/_react["default"].createElement(_StyledButton["default"], _objectSpread({
    className: "button--".concat(variant),
    iconEnd: iconEnd,
    iconStart: iconStart,
    ref: ref,
    type: type,
    variant: variant
  }, props), spin && /*#__PURE__*/_react["default"].createElement(_ButtonSpinner["default"], _objectSpread({
    variant: variant
  }, props)), /*#__PURE__*/_react["default"].createElement(_ButtonContent["default"], {
    hasText: !!children,
    iconStart: iconStart,
    iconEnd: iconEnd,
    spin: spin
  }, iconStart, children && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    as: "span",
    color: "inherit",
    fontSize: "inherit"
  }, children), iconEnd));
});

Button.propTypes = {
  /**
   * Content to render inside the button.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),

  /**
   * Disabled state of button
   * */
  disabled: _propTypes["default"].bool,

  /**
   * Property to set for a button to take the full width of it's parent
   * container.
   * */
  fullWidth: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].bool), _propTypes["default"].bool]),

  /**
   * Icon to render after the button text.
   */
  iconEnd: _propTypes["default"].element,

  /**
   * Icon to render before the button text.
   */
  iconStart: _propTypes["default"].element,

  /**
   * Intent color to use in conjunction with variant
   * */
  intent: _propTypes["default"].oneOf(INTENTS),

  /**
   * Button color as a key of the theme's color palette, for overriding variant styles.
   * */
  paletteColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(Object.keys(_palette["default"])))),

  /**
   * Indicate if the spinner should display.
   */
  spin: _propTypes["default"].bool,

  /**
   * Button size
   * */
  size: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].oneOf(_sizes["default"])), _propTypes["default"].oneOf(_sizes["default"])]),

  /**
   * Button type.
   */
  type: _propTypes["default"].string,

  /**
   * Button variant.
   * */
  variant: _propTypes["default"].oneOf(_variants["default"])
};
Button.defaultProps = {
  children: undefined,
  disabled: false,
  fullWidth: false,
  iconEnd: undefined,
  iconStart: undefined,
  intent: 'brand',
  paletteColor: '',
  size: 'large',
  spin: false,
  type: undefined,
  variant: 'primary'
};
var _default = Button;
exports["default"] = _default;