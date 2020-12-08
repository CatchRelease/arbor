"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioButtonLabel = ( /*#__PURE__*/0, _base["default"])(_Flex["default"], {
  target: "eonocg80",
  label: "RadioButtonLabel"
})("cursor:", function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, ";line-height:", function (_ref) {
  var theme = _ref.theme;
  return theme.lineHeights.small;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvbkxhYmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlxQyIsImZpbGUiOiIuLi8uLi9zcmMvUmFkaW9CdXR0b24vUmFkaW9CdXR0b25MYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IFJhZGlvQnV0dG9uTGFiZWwgPSBzdHlsZWQoRmxleClgXG4gIGN1cnNvcjogJHsocHJvcHMpID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicpfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGluZUhlaWdodHMuc21hbGx9O1xuYDtcblxuUmFkaW9CdXR0b25MYWJlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnbGFiZWwnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbkxhYmVsO1xuIl19 */"));
RadioButtonLabel.defaultProps = {
  as: 'label'
};
var _default = RadioButtonLabel;
exports["default"] = _default;