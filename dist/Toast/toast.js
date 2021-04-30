"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactToastify = require("react-toastify");

var _Alert = require("../Alert");

var _intents = _interopRequireDefault(require("../Alert/intents"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildToast = function buildToast(intent) {
  return function (message, details) {
    var toastifyOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var toastId = (0, _reactToastify.toast)((0, _jsxRuntime.jsx)(_Alert.ToastAlert, {
      details: details,
      intent: intent,
      message: message,
      onClose: function onClose() {
        return _reactToastify.toast.dismiss(toastId);
      }
    }), toastifyOptions);
  };
};

var toast = _intents["default"].reduce(function (memo, intent) {
  return _objectSpread(_objectSpread({}, memo), {}, _defineProperty({}, intent, buildToast(intent)));
}, {});

var _default = toast;
exports["default"] = _default;