"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopoverContent = (
/*#__PURE__*/
0, _styledBase["default"])(_Card["default"], {
  target: "exkv8pi0",
  label: "PopoverContent"
})("background:", function (props) {
  return props.theme.colors.monochrome.white;
}, ";box-shadow:", function (props) {
  return props.theme.shadows.elevation2;
}, ";min-height:40px;min-width:160px;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXJDb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUltQyIsImZpbGUiOiIuLi8uLi9zcmMvUG9wb3Zlci9Qb3BvdmVyQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IFBvcG92ZXJDb250ZW50ID0gc3R5bGVkKENhcmQpYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLndoaXRlfTtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaGFkb3dzLmVsZXZhdGlvbjJ9O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuYDtcblxuUG9wb3ZlckNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBvdmVyZmxvdzogJ2hpZGRlbidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJDb250ZW50O1xuIl19 */"));
PopoverContent.defaultProps = {
  overflow: 'hidden'
};
var _default = PopoverContent;
exports["default"] = _default;