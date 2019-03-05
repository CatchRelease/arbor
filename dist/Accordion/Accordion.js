"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accordion = (
/*#__PURE__*/
0, _styledBase.default)(_Box.default, {
  target: "eflawd80",
  label: "Accordion"
})("border:1px solid ", function (props) {
  return props.theme.colors.border.default;
}, ";border-radius:", function (props) {
  return props.theme.borderRadius.large;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vQWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUk2QiIsImZpbGUiOiIuLi8uLi9zcmMvQWNjb3JkaW9uL0FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuXG5jb25zdCBBY2NvcmRpb24gPSBzdHlsZWQoQm94KWBcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlclJhZGl1cy5sYXJnZX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXX0= */"));
var _default = Accordion;
exports.default = _default;