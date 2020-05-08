"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AlertContent = _interopRequireDefault(require("./AlertContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var InlineAlert = function InlineAlert(props) {
  return /*#__PURE__*/_react["default"].createElement(_AlertContent["default"], _extends({
    oneLine: true,
    p: "0"
  }, props));
};

var _default = InlineAlert;
exports["default"] = _default;