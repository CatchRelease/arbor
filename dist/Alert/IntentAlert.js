"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _intents = _interopRequireDefault(require("./intents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IntentAlert = function IntentAlert(_ref) {
  var intent = _ref.intent,
      children = _ref.children,
      Component = _ref.Component,
      props = _objectWithoutProperties(_ref, ["intent", "children", "Component"]);

  return /*#__PURE__*/_react["default"].createElement(Component, _extends({
    borderLeft: intent ? '3px solid' : null,
    borderColor: "intent.".concat(intent, ".default")
  }, props), children);
};

IntentAlert.propTypes = {
  intent: _propTypes["default"].oneOf(_intents["default"]),
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  Component: _propTypes["default"].elementType.isRequired
};
IntentAlert.defaultProps = {
  intent: undefined
};
var _default = IntentAlert;
exports["default"] = _default;