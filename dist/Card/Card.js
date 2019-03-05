"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Box = _interopRequireDefault(require("../Box"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = (
/*#__PURE__*/
0, _styledBase.default)((0, _createWithComponent.default)(_Box.default, 'div', {
  defaultProps: {
    boxShadow: 'elevation0'
  }
}), {
  target: "evf3aeh0",
  label: "Card"
})("border-radius:", function (props) {
  return props.theme.borderRadius.large;
}, ";border:1px solid ", function (props) {
  return props.theme.colors.border.default;
}, ";width:100%;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0MiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmQvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IGNyZWF0ZVdpdGhDb21wb25lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlV2l0aENvbXBvbmVudCc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoXG4gIGNyZWF0ZVdpdGhDb21wb25lbnQoQm94LCAnZGl2Jywge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgYm94U2hhZG93OiAnZWxldmF0aW9uMCdcbiAgICB9XG4gIH0pXG4pYFxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlclJhZGl1cy5sYXJnZX07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */"));
var _default = Card;
exports.default = _default;