"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = (0, _base["default"])("label", {
  target: "edyylss0",
  label: "Label"
})("color:", function (props) {
  return props.theme.colors.text.muted;
}, ";display:block;font-family:", function (props) {
  return props.theme.brandFont;
}, ";font-size:", function (props) {
  return props.theme.fontSizes.size4;
}, ";line-height:", function (props) {
  return props.theme.lineHeights.large;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MYWJlbC9MYWJlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMEIiLCJmaWxlIjoiLi4vLi4vc3JjL0xhYmVsL0xhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQubXV0ZWR9O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmFuZEZvbnR9O1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMuc2l6ZTR9O1xuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbmA7XG5cbkxhYmVsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIElEIG9mIHRoZSBpbnB1dCB0aGF0IHRoZSBsYWJlbCBpcyByZWxhdGVkIHRvXG4gICAqL1xuICBodG1sRm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIl19 */"));
Label.propTypes = {
  /**
   * ID of the input that the label is related to
   */
  htmlFor: _propTypes["default"].string.isRequired
};
var _default = Label;
exports["default"] = _default;