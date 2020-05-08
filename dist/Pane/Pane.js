"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = require("@styled-system/prop-types");

var _Grid = _interopRequireDefault(require("../Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Pane = function Pane(_ref) {
  var innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, ["innerRef"]);

  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], _extends({
    ref: innerRef
  }, props));
};

Pane.propTypes = {
  bg: _propTypes2.propType,
  boxShadow: _propTypes2.propType,
  innerRef: _propTypes["default"].func,
  overflow: _propTypes2.propType,
  width: _propTypes2.propType
};
Pane.defaultProps = {
  bg: 'background.white',
  boxShadow: 'elevation0',
  innerRef: undefined,
  overflow: 'hidden',
  width: '100%'
};
var _default = Pane;
exports["default"] = _default;