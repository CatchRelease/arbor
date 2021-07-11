"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _ButtonContent = _interopRequireDefault(require("./ButtonContent"));

var _ButtonSpinner = _interopRequireDefault(require("./ButtonSpinner"));

var _StyledButton = _interopRequireDefault(require("./StyledButton"));

var _Text = _interopRequireDefault(require("../Text"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["bg", "children", "disabled", "fullWidth", "iconEnd", "iconStart", "intent", "paletteColor", "size", "spin", "type", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? null : _ref$bg,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      iconEnd = _ref.iconEnd,
      iconStart = _ref.iconStart,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? 'brand' : _ref$intent,
      _ref$paletteColor = _ref.paletteColor,
      paletteColor = _ref$paletteColor === void 0 ? '' : _ref$paletteColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$spin = _ref.spin,
      spin = _ref$spin === void 0 ? false : _ref$spin,
      type = _ref.type,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _jsxRuntime.jsxs)(_StyledButton["default"], _objectSpread(_objectSpread({}, _objectSpread({
    bg: bg,
    className: "button--".concat(variant),
    disabled: disabled,
    fullWidth: fullWidth,
    iconEnd: iconEnd,
    iconStart: iconStart,
    intent: intent,
    paletteColor: paletteColor,
    ref: ref,
    size: size,
    type: type,
    variant: variant
  }, props)), {}, {
    children: [spin && (0, _jsxRuntime.jsx)(_ButtonSpinner["default"], {
      disabled: disabled,
      intent: intent,
      size: size,
      variant: variant
    }), (0, _jsxRuntime.jsxs)(_ButtonContent["default"], {
      hasText: !!children,
      iconStart: iconStart,
      iconEnd: iconEnd,
      spin: spin,
      children: [iconStart, children && (0, _jsxRuntime.jsx)(_Text["default"], {
        color: "inherit",
        fontSize: "inherit",
        children: children
      }), iconEnd]
    })]
  }));
});
var _default = Button;
exports["default"] = _default;