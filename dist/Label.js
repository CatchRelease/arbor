"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("./theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label =
/*#__PURE__*/
(0, _reactEmotion.default)("label", {
  label: "Label",
  target: "e2i3bnd0"
})("color:", _theme.colors.grey80, ";display:block;font-family:", _theme.brandFont, ";font-size:", _theme.fontSizes.size2, ";line-height:", _theme.lineHeights.large, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLMEIiLCJmaWxlIjoiLi4vc3JjL0xhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdyZWFjdC1lbW90aW9uJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGJyYW5kRm9udCwgY29sb3JzLCBmb250U2l6ZXMsIGxpbmVIZWlnaHRzIH0gZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogJHtjb2xvcnMuZ3JleTgwfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAke2JyYW5kRm9udH07XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc2l6ZTJ9O1xuICBsaW5lLWhlaWdodDogJHtsaW5lSGVpZ2h0cy5sYXJnZX07XG5gO1xuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGh0bWxGb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iXX0= */");
Label.propTypes = {
  htmlFor: _propTypes.default.string.isRequired
};
var _default = Label;
exports.default = _default;