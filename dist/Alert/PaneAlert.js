"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AlertContent = _interopRequireDefault(require("./AlertContent"));

var _IntentAlert = _interopRequireDefault(require("./IntentAlert"));

var _Pane = _interopRequireDefault(require("../Pane"));

var _intents = _interopRequireDefault(require("./intents"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["boxShadow", "intent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PaneAlert = function PaneAlert(_ref) {
  var boxShadow = _ref.boxShadow,
      intent = _ref.intent,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _jsxRuntime.jsx)(_IntentAlert["default"], {
    Component: _Pane["default"],
    boxShadow: boxShadow,
    intent: intent,
    children: (0, _jsxRuntime.jsx)(_AlertContent["default"], _objectSpread({}, _objectSpread({
      intent: intent
    }, props)))
  });
};

PaneAlert.propTypes = {
  boxShadow: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(_intents["default"])
};
PaneAlert.defaultProps = {
  boxShadow: 'elevation0',
  intent: undefined
};
var _default = PaneAlert;
exports["default"] = _default;