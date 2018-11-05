"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label =
/*#__PURE__*/
(0, _reactEmotion.default)("label", {
  label: "Label",
  target: "e2i3bnd0"
})("color:", function (props) {
  return props.theme.colors.grey80;
}, ";display:block;font-family:", function (props) {
  return props.theme.brandFont;
}, ";font-size:", function (props) {
  return props.theme.fontSizes.size2;
}, ";line-height:", function (props) {
  return props.theme.lineHeights.large;
}, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMEIiLCJmaWxlIjoiLi4vc3JjL0xhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdyZWFjdC1lbW90aW9uJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTgwfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyYW5kRm9udH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMuc2l6ZTJ9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5sYXJnZX07XG5gO1xuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGh0bWxGb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iXX0= */");
Label.propTypes = {
  htmlFor: _propTypes.default.string.isRequired
};
var _default = Label;
exports.default = _default;