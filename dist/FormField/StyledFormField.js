"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFormField = (0, _styledBase["default"])("div", {
  target: "e1bwginl0",
  label: "StyledFormField"
})("margin-bottom:", function (props) {
  return props.caption ? props.theme.space.smaller : props.theme.space.regular;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRmllbGQvU3R5bGVkRm9ybUZpZWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQyIsImZpbGUiOiIuLi8uLi9zcmMvRm9ybUZpZWxkL1N0eWxlZEZvcm1GaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFN0eWxlZEZvcm1GaWVsZCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5jYXB0aW9uID8gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlciA6IHByb3BzLnRoZW1lLnNwYWNlLnJlZ3VsYXJ9O1xuYDtcblxuU3R5bGVkRm9ybUZpZWxkLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuU3R5bGVkRm9ybUZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FwdGlvbjogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEZvcm1GaWVsZDtcbiJdfQ== */"));
StyledFormField.propTypes = {
  caption: _propTypes["default"].string
};
StyledFormField.defaultProps = {
  caption: ''
};
var _default = StyledFormField;
exports["default"] = _default;