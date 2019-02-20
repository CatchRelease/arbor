"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonText = (0, _styledBase.default)("span", {
  target: "ebahbfb0",
  label: "ButtonText"
})("margin-left:", function (props) {
  return props.iconStart === undefined ? 0 : props.theme.space.smallest;
}, ";margin-right:", function (props) {
  return props.iconEnd === undefined ? 0 : props.theme.space.smallest;
}, ";vertical-align:middle;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uVGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFOEIiLCJmaWxlIjoiLi4vLi4vc3JjL0J1dHRvbi9CdXR0b25UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5jb25zdCBCdXR0b25UZXh0ID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuaWNvblN0YXJ0ID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pY29uRW5kID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uVGV4dDtcbiJdfQ== */"));
var _default = ButtonText;
exports.default = _default;