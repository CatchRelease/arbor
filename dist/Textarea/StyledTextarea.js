"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledInput = _interopRequireDefault(require("../Input/StyledInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledTextarea = function StyledTextarea(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledInput["default"], props);
};

StyledTextarea.defaultProps = {
  as: 'textarea'
};
var _default = StyledTextarea;
exports["default"] = _default;