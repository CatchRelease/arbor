"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VARIANT_MAPPING = {
  ui: 'size4',
  longForm: 'size5',
  tiny: 'size3'
};

var variantStyles = function variantStyles(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      fontSize = _ref.fontSize;
  var fontSizeOverride = fontSize && theme.fontSizes[fontSize] ? theme.fontSizes[fontSize] : fontSize;
  return /*#__PURE__*/(0, _react.css)("font-size:", fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]], ";;label:variantStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCWSIsImZpbGUiOiIuLi8uLi9zcmMvUGFyYWdyYXBoL1BhcmFncmFwaC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuaW1wb3J0IHsgRm9udFNpemUgfSBmcm9tICcuLi90aGVtZS90eXBvZ3JhcGh5JztcblxuY29uc3QgVkFSSUFOVF9NQVBQSU5HID0ge1xuICB1aTogJ3NpemU0JyxcbiAgbG9uZ0Zvcm06ICdzaXplNScsXG4gIHRpbnk6ICdzaXplMydcbn0gYXMgY29uc3Q7XG5cbnR5cGUgVmFyaWFudCA9ICd1aScgfCAnbG9uZ0Zvcm0nIHwgJ3RpbnknO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHtcbiAgdGhlbWUsXG4gIHZhcmlhbnQsXG4gIGZvbnRTaXplXG59OiB7XG4gIHRoZW1lOiBUaGVtZTtcbiAgdmFyaWFudDogVmFyaWFudDtcbiAgZm9udFNpemU/OiBGb250U2l6ZTtcbn0pID0+IHtcbiAgY29uc3QgZm9udFNpemVPdmVycmlkZSA9XG4gICAgZm9udFNpemUgJiYgdGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXVxuICAgICAgPyB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgICA6IGZvbnRTaXplO1xuXG4gIHJldHVybiBjc3NgXG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplT3ZlcnJpZGUgfHwgdGhlbWUuZm9udFNpemVzW1ZBUklBTlRfTUFQUElOR1t2YXJpYW50XV19O1xuICBgO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgZm9udFNpemU/OiBGb250U2l6ZTtcbiAgdmFyaWFudDogVmFyaWFudDtcbn07XG5cbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZChUZXh0KTxQcm9wcz5gXG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5QYXJhZ3JhcGguZGVmYXVsdFByb3BzID0ge1xuICBsaW5lSGVpZ2h0OiAnbGFyZ2UnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4iXX0= */"));
};

var Paragraph = ( /*#__PURE__*/0, _base["default"])(_Text["default"], {
  target: "ejchom0",
  label: "Paragraph"
})(variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDcUMiLCJmaWxlIjoiLi4vLi4vc3JjL1BhcmFncmFwaC9QYXJhZ3JhcGgudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcbmltcG9ydCB7IEZvbnRTaXplIH0gZnJvbSAnLi4vdGhlbWUvdHlwb2dyYXBoeSc7XG5cbmNvbnN0IFZBUklBTlRfTUFQUElORyA9IHtcbiAgdWk6ICdzaXplNCcsXG4gIGxvbmdGb3JtOiAnc2l6ZTUnLFxuICB0aW55OiAnc2l6ZTMnXG59IGFzIGNvbnN0O1xuXG50eXBlIFZhcmlhbnQgPSAndWknIHwgJ2xvbmdGb3JtJyB8ICd0aW55JztcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7XG4gIHRoZW1lLFxuICB2YXJpYW50LFxuICBmb250U2l6ZVxufToge1xuICB0aGVtZTogVGhlbWU7XG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XG4gIGZvbnRTaXplPzogRm9udFNpemU7XG59KSA9PiB7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPVxuICAgIGZvbnRTaXplICYmIHRoZW1lLmZvbnRTaXplc1tmb250U2l6ZV1cbiAgICAgID8gdGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXVxuICAgICAgOiBmb250U2l6ZTtcblxuICByZXR1cm4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZU92ZXJyaWRlIHx8IHRoZW1lLmZvbnRTaXplc1tWQVJJQU5UX01BUFBJTkdbdmFyaWFudF1dfTtcbiAgYDtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZvbnRTaXplPzogRm9udFNpemU7XG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XG59O1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoVGV4dCk8UHJvcHM+YFxuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuUGFyYWdyYXBoLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGluZUhlaWdodDogJ2xhcmdlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIl19 */"));
Paragraph.defaultProps = {
  lineHeight: 'large'
};
var _default = Paragraph;
exports["default"] = _default;