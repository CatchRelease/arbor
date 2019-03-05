"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledHeader = (
/*#__PURE__*/
0, _styledBase.default)((0, _createWithComponent.default)(_Flex.default, 'header'), {
  target: "e1ffte0a0",
  label: "StyledHeader"
})("background:", function (props) {
  return props.theme.colors.background.default;
}, ";border-bottom:1px solid ", function (props) {
  return props.theme.borderColors.default;
}, ";section:last-child &{border-bottom:none;}.button--minimal:last-of-type{margin-right:-", function (props) {
  return props.theme.space.small;
}, ";+:not(object){margin-left:", function (props) {
  return props.theme.space.small;
}, ";}}button + .button--secondary,button + .button--primary{margin-left:", function (props) {
  return props.theme.space.smaller;
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vU3R5bGVkQWNjb3JkaW9uSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnRSIsImZpbGUiOiIuLi8uLi9zcmMvQWNjb3JkaW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IGNyZWF0ZVdpdGhDb21wb25lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlV2l0aENvbXBvbmVudCc7XG5pbXBvcnQgRmxleCBmcm9tICcuLi9GbGV4JztcblxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkKGNyZWF0ZVdpdGhDb21wb25lbnQoRmxleCwgJ2hlYWRlcicpKWBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5kZWZhdWx0fTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyQ29sb3JzLmRlZmF1bHR9O1xuXG4gIHNlY3Rpb246bGFzdC1jaGlsZCAmIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgLmJ1dHRvbi0tbWluaW1hbDpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogLSR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGx9O1xuXG4gICAgKyA6bm90KG9iamVjdCkge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGx9O1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiArIC5idXR0b24tLXNlY29uZGFyeSxcbiAgYnV0dG9uICsgLmJ1dHRvbi0tcHJpbWFyeSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEhlYWRlcjtcbiJdfQ== */"));
var _default = StyledHeader;
exports.default = _default;