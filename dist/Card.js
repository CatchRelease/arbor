"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card =
/*#__PURE__*/
(0, _reactEmotion.default)(_Box.default.withComponent('div', {
  target: "e1e4kr3g1"
}), {
  label: "Card",
  target: "e1e4kr3g0"
})("border-radius:", function (props) {
  return props.theme.borderRadius.large;
}, ";border:1px solid ", function (props) {
  return props.theme.colors.grey20;
}, ";width:100%;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc2QyIsImZpbGUiOiIuLi9zcmMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZChCb3gud2l0aENvbXBvbmVudCgnZGl2JykpYFxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlclJhZGl1cy5sYXJnZX07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkyMH07XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */");
var _default = Card;
exports.default = _default;