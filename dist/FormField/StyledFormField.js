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
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRmllbGQvU3R5bGVkRm9ybUZpZWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQyIsImZpbGUiOiIuLi8uLi9zcmMvRm9ybUZpZWxkL1N0eWxlZEZvcm1GaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFN0eWxlZEZvcm1GaWVsZCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmNhcHRpb24gPyBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyIDogcHJvcHMudGhlbWUuc3BhY2UucmVndWxhcn07XG5gO1xuXG5TdHlsZWRGb3JtRmllbGQucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TdHlsZWRGb3JtRmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBjYXB0aW9uOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkRm9ybUZpZWxkO1xuIl19 */"));
StyledFormField.propTypes = {
  caption: _propTypes["default"].string
};
StyledFormField.defaultProps = {
  caption: ''
};
var _default = StyledFormField;
exports["default"] = _default;