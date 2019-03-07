"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Box = _interopRequireDefault(require("../Box"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledAccordionPanel = (
/*#__PURE__*/
0, _styledBase.default)((0, _createWithComponent.default)(_Box.default, 'div'), {
  target: "e1685vxk0",
  label: "StyledAccordionPanel"
})("border-bottom:1px solid ", function (props) {
  return props.theme.borderColors.default;
}, ";section:last-child &{border-bottom:none;border-top:1px solid ", function (props) {
  return props.theme.borderColors.default;
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvblBhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvRSIsImZpbGUiOiIuLi8uLi9zcmMvQWNjb3JkaW9uU2VjdGlvbi9TdHlsZWRBY2NvcmRpb25QYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IGNyZWF0ZVdpdGhDb21wb25lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlV2l0aENvbXBvbmVudCc7XG5cbmNvbnN0IFN0eWxlZEFjY29yZGlvblBhbmVsID0gc3R5bGVkKGNyZWF0ZVdpdGhDb21wb25lbnQoQm94LCAnZGl2JykpYFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJDb2xvcnMuZGVmYXVsdH07XG5cbiAgc2VjdGlvbjpsYXN0LWNoaWxkICYge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyQ29sb3JzLmRlZmF1bHR9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRBY2NvcmRpb25QYW5lbDtcbiJdfQ== */"));
var _default = StyledAccordionPanel;
exports.default = _default;