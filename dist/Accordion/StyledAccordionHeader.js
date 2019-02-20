"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledHeader = (
/*#__PURE__*/
0, _styledBase.default)(_Flex.default.withComponent('header', {
  target: "e1ffte0a1",
  label: "StyledHeader"
}), {
  target: "e1ffte0a0",
  label: "StyledHeader"
})("background:", function (props) {
  return props.theme.colors.background.default;
}, ";border-bottom:1px solid ", function (props) {
  return props.theme.borderColors.default;
}, ";section:last-child &{border-bottom:none;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vU3R5bGVkQWNjb3JkaW9uSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl5RCIsImZpbGUiOiIuLi8uLi9zcmMvQWNjb3JkaW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZChGbGV4LndpdGhDb21wb25lbnQoJ2hlYWRlcicpKWBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5kZWZhdWx0fTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyQ29sb3JzLmRlZmF1bHR9O1xuXG4gIHNlY3Rpb246bGFzdC1jaGlsZCAmIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRIZWFkZXI7XG4iXX0= */"));
var _default = StyledHeader;
exports.default = _default;