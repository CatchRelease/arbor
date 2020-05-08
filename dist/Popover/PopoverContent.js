"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopoverContent = ( /*#__PURE__*/0, _styledBase["default"])(_Card["default"], {
  target: "exkv8pi0",
  label: "PopoverContent"
})("background:", function (props) {
  return props.theme.colors.monochrome.white;
}, ";box-shadow:", function (props) {
  return props.theme.shadows.elevation2;
}, ";min-height:40px;min-width:160px;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXJDb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUltQyIsImZpbGUiOiIuLi8uLi9zcmMvUG9wb3Zlci9Qb3BvdmVyQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IFBvcG92ZXJDb250ZW50ID0gc3R5bGVkKENhcmQpYFxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUud2hpdGV9O1xuICBib3gtc2hhZG93OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2hhZG93cy5lbGV2YXRpb24yfTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbmA7XG5cblBvcG92ZXJDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyQ29udGVudDtcbiJdfQ== */"));
PopoverContent.defaultProps = {
  overflow: 'hidden'
};
var _default = PopoverContent;
exports["default"] = _default;