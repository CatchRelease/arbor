"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CardAlert = _interopRequireDefault(require("./CardAlert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ToastAlert = function ToastAlert(props) {
  return _react["default"].createElement(_CardAlert["default"], props);
};

ToastAlert.defaultProps = {
  boxShadow: 'elevation3'
};
var _default = ToastAlert;
exports["default"] = _default;