"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioButtonLabel = (
/*#__PURE__*/
0, _styledBase["default"])(_Flex["default"], {
  target: "eonocg80",
  label: "RadioButtonLabel"
})("cursor:", function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, ";line-height:", function (_ref) {
  var theme = _ref.theme;
  return theme.lineHeights.small;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvbkxhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlxQyIsImZpbGUiOiIuLi8uLi9zcmMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b25MYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IFJhZGlvQnV0dG9uTGFiZWwgPSBzdHlsZWQoRmxleClgXG4gIGN1cnNvcjogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInKX07XG4gIGxpbmUtaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmxpbmVIZWlnaHRzLnNtYWxsfTtcbmA7XG5cblJhZGlvQnV0dG9uTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2xhYmVsJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b25MYWJlbDtcbiJdfQ== */"));
RadioButtonLabel.defaultProps = {
  as: 'label'
};
var _default = RadioButtonLabel;
exports["default"] = _default;