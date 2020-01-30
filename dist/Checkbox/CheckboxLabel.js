"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckboxLabel = (
/*#__PURE__*/
0, _styledBase["default"])(_Flex["default"], {
  target: "eqny7xp0",
  label: "CheckboxLabel"
})("cursor:", function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, ";line-height:", function (_ref) {
  var theme = _ref.theme;
  return theme.lineHeights.small;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9DaGVja2JveExhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQyIsImZpbGUiOiIuLi8uLi9zcmMvQ2hlY2tib3gvQ2hlY2tib3hMYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IENoZWNrYm94TGFiZWwgPSBzdHlsZWQoRmxleClgXG4gIGN1cnNvcjogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInKX07XG4gIGxpbmUtaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmxpbmVIZWlnaHRzLnNtYWxsfTtcbmA7XG5cbkNoZWNrYm94TGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2xhYmVsJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hMYWJlbDtcbiJdfQ== */"));
CheckboxLabel.defaultProps = {
  as: 'label'
};
var _default = CheckboxLabel;
exports["default"] = _default;