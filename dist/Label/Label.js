"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = (0, _styledBase["default"])("label", {
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
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MYWJlbC9MYWJlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMEIiLCJmaWxlIjoiLi4vLi4vc3JjL0xhYmVsL0xhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0Lm11dGVkfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyYW5kRm9udH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMuc2l6ZTR9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5sYXJnZX07XG5gO1xuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBJRCBvZiB0aGUgaW5wdXQgdGhhdCB0aGUgbGFiZWwgaXMgcmVsYXRlZCB0b1xuICAgKi9cbiAgaHRtbEZvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcbiJdfQ== */"));
Label.propTypes = {
  /**
   * ID of the input that the label is related to
   */
  htmlFor: _propTypes["default"].string.isRequired
};
var _default = Label;
exports["default"] = _default;