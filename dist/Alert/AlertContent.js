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

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var gridPlaceholder = (0, _jsxRuntime.jsx)("span", {
  "aria-hidden": true
});

var AlertContent = function AlertContent(_ref) {
  var details = _ref.details,
      intent = _ref.intent,
      message = _ref.message,
      oneLine = _ref.oneLine,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, ["details", "intent", "message", "oneLine", "onClose"]);

  return (0, _jsxRuntime.jsxs)(_StyledAlertContent["default"], _objectSpread(_objectSpread({
    details: details,
    intent: intent,
    onClose: onClose
  }, props), {}, {
    children: [intent && (0, _jsxRuntime.jsx)(_StyledAlertIntent["default"], {
      intent: intent
    }), (0, _jsxRuntime.jsxs)(_StyledAlertMessage["default"], {
      children: [message, oneLine && details && (0, _jsxRuntime.jsxs)(_StyledAlertDetails["default"], {
        as: "span",
        children: ["\xA0", details]
      })]
    }), onClose && (0, _jsxRuntime.jsx)(_StyledAlertAction["default"], {
      onClose: onClose
    }), !oneLine && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [details && intent && gridPlaceholder, details && (0, _jsxRuntime.jsx)(_StyledAlertDetails["default"], {
        children: details
      }), details && onClose && gridPlaceholder]
    })]
  }));
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