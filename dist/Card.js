"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = (
/*#__PURE__*/
0, _styledBase.default)(_Box.default.withComponent('div', {
  target: "e1e4kr3g1",
  label: "Card"
}), {
  target: "e1e4kr3g0",
  label: "Card"
})("border-radius:", function (props) {
  return props.theme.borderRadius.large;
}, ";border:1px solid ", function (props) {
  return props.theme.colors.border.default;
}, ";width:100%;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc2QyIsImZpbGUiOiIuLi9zcmMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKEJveC53aXRoQ29tcG9uZW50KCdkaXYnKSlgXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyUmFkaXVzLmxhcmdlfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbkNhcmQuZGVmYXVsdFByb3BzID0ge1xuICBib3hTaGFkb3c6ICdlbGV2YXRpb24wJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */"));
Card.defaultProps = {
  boxShadow: 'elevation0'
};
var _default = Card;
exports.default = _default;