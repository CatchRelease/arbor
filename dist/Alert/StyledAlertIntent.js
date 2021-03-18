"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _intents = _interopRequireDefault(require("./intents"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getIconName = function getIconName(intent) {
  switch (intent) {
    case 'danger':
      return 'error';

    case 'info':
      return 'info-sign';

    case 'success':
      return 'tick-circle';

    case 'warning':
      return 'warning-sign';

    default:
      return '';
  }
};

var StyledAlertIntent = function StyledAlertIntent(_ref) {
  var intent = _ref.intent;
  return (0, _jsxRuntime.jsx)(_Box["default"], {
    "aria-label": intent,
    children: (0, _jsxRuntime.jsx)(_Icon["default"], {
      color: "intent.".concat(intent, ".default"),
      fontSize: "size4",
      name: getIconName(intent)
    })
  });
};

StyledAlertIntent.propTypes = {
  intent: _propTypes["default"].oneOf(_intents["default"]).isRequired
};
var _default = StyledAlertIntent;
exports["default"] = _default;