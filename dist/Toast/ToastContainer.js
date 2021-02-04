"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.minimal.css");

var _toastCSS = _interopRequireDefault(require("./toastCSS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var transition = (0, _reactToastify.cssTransition)({
  enter: 'toastSlideIn',
  exit: 'toastSlideOut'
});

var ToastContainer = function ToastContainer(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.Global, {
    styles: _toastCSS["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactToastify.ToastContainer, _extends({
    className: "arbor-toast-container",
    closeButton: false,
    hideProgressBar: true,
    toastClassName: "arbor-toast",
    transition: transition
  }, props)));
};

var _default = ToastContainer;
exports["default"] = _default;