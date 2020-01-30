"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledAlertContent = _interopRequireDefault(require("./StyledAlertContent"));

var _StyledAlertAction = _interopRequireDefault(require("./StyledAlertAction"));

var _StyledAlertDetails = _interopRequireDefault(require("./StyledAlertDetails"));

var _StyledAlertIntent = _interopRequireDefault(require("./StyledAlertIntent"));

var _StyledAlertMessage = _interopRequireDefault(require("./StyledAlertMessage"));

var _intents = _interopRequireDefault(require("./intents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var gridPlaceholder = _react["default"].createElement("span", {
  "aria-hidden": true
});

var AlertContent = function AlertContent(_ref) {
  var details = _ref.details,
      intent = _ref.intent,
      message = _ref.message,
      oneLine = _ref.oneLine,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, ["details", "intent", "message", "oneLine", "onClose"]);

  return _react["default"].createElement(_StyledAlertContent["default"], _extends({
    details: details,
    intent: intent,
    onClose: onClose
  }, props), intent && _react["default"].createElement(_StyledAlertIntent["default"], {
    intent: intent
  }), _react["default"].createElement(_StyledAlertMessage["default"], null, message, oneLine && details && _react["default"].createElement(_StyledAlertDetails["default"], {
    as: "span"
  }, "\xA0", details)), onClose && _react["default"].createElement(_StyledAlertAction["default"], {
    onClose: onClose
  }), !oneLine && _react["default"].createElement(_react["default"].Fragment, null, details && intent && gridPlaceholder, details && _react["default"].createElement(_StyledAlertDetails["default"], null, details), details && onClose && gridPlaceholder));
};

AlertContent.propTypes = {
  /**
   * More details about the alert.
   * */
  details: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /**
   * Specify an intent to visualize meaning.
   * */
  intent: _propTypes["default"].oneOf(_intents["default"]),

  /**
   * Main message of the alert.
   * */
  message: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Callback for the alert close button.
   * */
  onClose: _propTypes["default"].func,

  /**
   * Should the messages and details appear on one line
   */
  oneLine: _propTypes["default"].bool
};
AlertContent.defaultProps = {
  details: undefined,
  intent: undefined,
  onClose: undefined,
  oneLine: false
};
var _default = AlertContent;
exports["default"] = _default;