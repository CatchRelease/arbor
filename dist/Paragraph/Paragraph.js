"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _Text = _interopRequireDefault(require("../Text"));

var _typography = require("../theme/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VARIANT_MAPPING = {
  ui: 'size4',
  longForm: 'size5',
  tiny: 'size3'
};

var isFontSize = function isFontSize(value) {
  return _typography.fontSizeKeys.includes(value);
};

var variantStyles = function variantStyles(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      fontSize = _ref.fontSize;
  var fontSizeOverride = fontSize && isFontSize(fontSize) && theme.fontSizes[fontSize] ? theme.fontSizes[fontSize] : fontSize;
  return /*#__PURE__*/(0, _react.css)("font-size:", fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]], ";;label:variantStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDWSIsImZpbGUiOiIuLi8uLi9zcmMvUGFyYWdyYXBoL1BhcmFncmFwaC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBMaXRlcmFsVW5pb24gfSBmcm9tICd0eXBlLWZlc3QnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcbmltcG9ydCB7IEZvbnRTaXplLCBmb250U2l6ZUtleXMgfSBmcm9tICcuLi90aGVtZS90eXBvZ3JhcGh5JztcblxuY29uc3QgVkFSSUFOVF9NQVBQSU5HID0ge1xuICB1aTogJ3NpemU0JyxcbiAgbG9uZ0Zvcm06ICdzaXplNScsXG4gIHRpbnk6ICdzaXplMydcbn0gYXMgY29uc3Q7XG5cbnR5cGUgVmFyaWFudCA9ICd1aScgfCAnbG9uZ0Zvcm0nIHwgJ3RpbnknO1xuXG5jb25zdCBpc0ZvbnRTaXplID0gKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBGb250U2l6ZSA9PlxuICBmb250U2l6ZUtleXMuaW5jbHVkZXModmFsdWUpO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHtcbiAgdGhlbWUsXG4gIHZhcmlhbnQsXG4gIGZvbnRTaXplXG59OiB7XG4gIHRoZW1lOiBUaGVtZTtcbiAgdmFyaWFudDogVmFyaWFudDtcbiAgZm9udFNpemU/OiBMaXRlcmFsVW5pb248Rm9udFNpemUsIHN0cmluZz47XG59KSA9PiB7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPVxuICAgIGZvbnRTaXplICYmIGlzRm9udFNpemUoZm9udFNpemUpICYmIHRoZW1lLmZvbnRTaXplc1tmb250U2l6ZV1cbiAgICAgID8gdGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXVxuICAgICAgOiBmb250U2l6ZTtcblxuICByZXR1cm4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZU92ZXJyaWRlIHx8IHRoZW1lLmZvbnRTaXplc1tWQVJJQU5UX01BUFBJTkdbdmFyaWFudF1dfTtcbiAgYDtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZvbnRTaXplPzogTGl0ZXJhbFVuaW9uPEZvbnRTaXplLCBzdHJpbmc+O1xuICB2YXJpYW50OiBWYXJpYW50O1xufTtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFRleHQpPFByb3BzPmBcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblBhcmFncmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxpbmVIZWlnaHQ6ICdsYXJnZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */"));
};

var Paragraph = ( /*#__PURE__*/0, _base["default"])(_Text["default"], {
  target: "ejchom0",
  label: "Paragraph"
})(variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDcUMiLCJmaWxlIjoiLi4vLi4vc3JjL1BhcmFncmFwaC9QYXJhZ3JhcGgudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgTGl0ZXJhbFVuaW9uIH0gZnJvbSAndHlwZS1mZXN0JztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5pbXBvcnQgeyBGb250U2l6ZSwgZm9udFNpemVLZXlzIH0gZnJvbSAnLi4vdGhlbWUvdHlwb2dyYXBoeSc7XG5cbmNvbnN0IFZBUklBTlRfTUFQUElORyA9IHtcbiAgdWk6ICdzaXplNCcsXG4gIGxvbmdGb3JtOiAnc2l6ZTUnLFxuICB0aW55OiAnc2l6ZTMnXG59IGFzIGNvbnN0O1xuXG50eXBlIFZhcmlhbnQgPSAndWknIHwgJ2xvbmdGb3JtJyB8ICd0aW55JztcblxuY29uc3QgaXNGb250U2l6ZSA9ICh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgRm9udFNpemUgPT5cbiAgZm9udFNpemVLZXlzLmluY2x1ZGVzKHZhbHVlKTtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7XG4gIHRoZW1lLFxuICB2YXJpYW50LFxuICBmb250U2l6ZVxufToge1xuICB0aGVtZTogVGhlbWU7XG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XG4gIGZvbnRTaXplPzogTGl0ZXJhbFVuaW9uPEZvbnRTaXplLCBzdHJpbmc+O1xufSkgPT4ge1xuICBjb25zdCBmb250U2l6ZU92ZXJyaWRlID1cbiAgICBmb250U2l6ZSAmJiBpc0ZvbnRTaXplKGZvbnRTaXplKSAmJiB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgICA/IHRoZW1lLmZvbnRTaXplc1tmb250U2l6ZV1cbiAgICAgIDogZm9udFNpemU7XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVPdmVycmlkZSB8fCB0aGVtZS5mb250U2l6ZXNbVkFSSUFOVF9NQVBQSU5HW3ZhcmlhbnRdXX07XG4gIGA7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBmb250U2l6ZT86IExpdGVyYWxVbmlvbjxGb250U2l6ZSwgc3RyaW5nPjtcbiAgdmFyaWFudDogVmFyaWFudDtcbn07XG5cbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZChUZXh0KTxQcm9wcz5gXG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5QYXJhZ3JhcGguZGVmYXVsdFByb3BzID0ge1xuICBsaW5lSGVpZ2h0OiAnbGFyZ2UnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4iXX0= */"));
Paragraph.defaultProps = {
  lineHeight: 'large'
};
var _default = Paragraph;
exports["default"] = _default;