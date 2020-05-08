"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("../Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledHeader = function StyledHeader(props) {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], props);
};

StyledHeader.defaultProps = {
  as: 'header'
};
var _default = StyledHeader;
exports["default"] = _default;