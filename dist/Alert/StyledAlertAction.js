"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledAlertAction = function StyledAlertAction(_ref) {
  var onClose = _ref.onClose;
  return _react["default"].createElement(_Box["default"], null, _react["default"].createElement(_Button["default"], {
    "aria-label": "close",
    iconStart: _react["default"].createElement(_Icon["default"], {
      fontSize: "larger",
      name: "cross"
    }),
    onClick: onClose,
    size: "small",
    variant: "minimal"
  }));
};

StyledAlertAction.propTypes = {
  onClose: _propTypes["default"].func.isRequired
};
var _default = StyledAlertAction;
exports["default"] = _default;