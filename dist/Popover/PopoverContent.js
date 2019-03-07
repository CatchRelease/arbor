"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _polished = require("polished");

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverContent = (
/*#__PURE__*/
0, _styledBase.default)(_Card.default, {
  target: "exkv8pi0",
  label: "PopoverContent"
})("background:", function (props) {
  return props.theme.colors.white;
}, ";box-shadow:0 4px 8px ", function (props) {
  return (0, _polished.transparentize)(0.9, props.theme.colors.black);
}, ",0 0 1px ", function (props) {
  return props.theme.colors.grey20;
}, ";min-height:40px;min-width:200px;overflow:hidden;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXJDb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUttQyIsImZpbGUiOiIuLi8uLi9zcmMvUG9wb3Zlci9Qb3BvdmVyQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3QgUG9wb3ZlckNvbnRlbnQgPSBzdHlsZWQoQ2FyZClgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4XG4gICAgICAke3Byb3BzID0+IHRyYW5zcGFyZW50aXplKDAuOSwgcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrKX0sXG4gICAgMCAwIDFweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5MjB9O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlckNvbnRlbnQ7XG4iXX0= */"));
var _default = PopoverContent;
exports.default = _default;