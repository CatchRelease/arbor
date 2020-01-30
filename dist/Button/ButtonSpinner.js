"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var spinnerColor = function spinnerColor(disabled, variant, intent) {
  if (disabled) return 'text.muted';

  switch (variant) {
    case 'primary':
      return intent === 'brand' ? "intent.".concat(intent, ".light") : 'monochrome.white';

    default:
      return "intent.".concat(intent, ".default");
  }
};

var spinnerRadius = function spinnerRadius(size) {
  switch (size) {
    case 'small':
      return 5;

    case 'medium':
      return 6;

    case 'large':
      return 7;

    case 'jumbo':
      return 8;

    default:
      return 7;
  }
};

var spinnerWidth = function spinnerWidth(size) {
  switch (size) {
    case 'small':
      return 2;

    case 'medium':
      return 3;

    case 'large':
      return 4;

    case 'jumbo':
      return 4;

    default:
      return 4;
  }
};

var ButtonSpinner = function ButtonSpinner(_ref) {
  var disabled = _ref.disabled,
      intent = _ref.intent,
      size = _ref.size,
      variant = _ref.variant;
  return _react["default"].createElement(_Spinner["default"], {
    color: spinnerColor(disabled, variant, intent),
    length: 0,
    radius: spinnerRadius(size),
    spin: true,
    width: spinnerWidth(size)
  });
};

ButtonSpinner.propTypes = {
  disabled: _propTypes["default"].bool.isRequired,
  intent: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].string.isRequired,
  variant: _propTypes["default"].string.isRequired
};
var _default = ButtonSpinner;
exports["default"] = _default;