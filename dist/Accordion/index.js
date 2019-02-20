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
  target: "e1tusjiu0",
  label: "Accordion"
})("border:1px solid ", function (props) {
  return props.theme.colors.border.default;
}, ";border-radius:", function (props) {
  return props.theme.borderRadius.large;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSTZCIiwiZmlsZSI6Ii4uLy4uL3NyYy9BY2NvcmRpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgQWNjb3JkaW9uID0gc3R5bGVkKEJveClgXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXMubGFyZ2V9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl19 */"));
var _default = Accordion;
exports.default = _default;