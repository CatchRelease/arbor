"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _styledSystem = require("styled-system");

var _textTransform = _interopRequireDefault(require("../utils/textTransform"));

var _textOverflow = _interopRequireDefault(require("../utils/textOverflow"));

var _whiteSpace = _interopRequireDefault(require("../utils/whiteSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return /*#__PURE__*/(0, _react.css)("font-family:", theme.brandFont, ";;label:baseStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCdUQiLCJmaWxlIjoiLi4vLi4vc3JjL1RleHQvVGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBtYXhXaWR0aCxcbiAgbWluV2lkdGgsXG4gIG92ZXJmbG93LFxuICBzcGFjZSxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgdGV4dFRyYW5zZm9ybSBmcm9tICcuLi91dGlscy90ZXh0VHJhbnNmb3JtJztcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAnLi4vdXRpbHMvdGV4dE92ZXJmbG93JztcbmltcG9ydCB3aGl0ZVNwYWNlIGZyb20gJy4uL3V0aWxzL3doaXRlU3BhY2UnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfTogeyB0aGVtZTogVGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxudHlwZSBQcm9wcyA9IHtcbiAgZm9udFNpemU/OiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnA8UHJvcHM+YFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHt0ZXh0VHJhbnNmb3JtfTtcbiAgJHt0ZXh0T3ZlcmZsb3d9O1xuICAke3doaXRlU3BhY2V9O1xuYDtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAndGV4dC5kZWZhdWx0JyxcbiAgZm9udFNpemU6ICdzaXplNCcsXG4gIGxpbmVIZWlnaHQ6ICdzbWFsbCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */"));
};

var Text = (0, _base["default"])("p", {
  target: "e1mef7x30",
  label: "Text"
})(baseStyles, ";", _styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.fontWeight, ";", _styledSystem.lineHeight, ";", _styledSystem.maxWidth, ";", _styledSystem.minWidth, ";", _styledSystem.overflow, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _textTransform["default"], ";", _textOverflow["default"], ";", _whiteSpace["default"], ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCNEIiLCJmaWxlIjoiLi4vLi4vc3JjL1RleHQvVGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBtYXhXaWR0aCxcbiAgbWluV2lkdGgsXG4gIG92ZXJmbG93LFxuICBzcGFjZSxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgdGV4dFRyYW5zZm9ybSBmcm9tICcuLi91dGlscy90ZXh0VHJhbnNmb3JtJztcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAnLi4vdXRpbHMvdGV4dE92ZXJmbG93JztcbmltcG9ydCB3aGl0ZVNwYWNlIGZyb20gJy4uL3V0aWxzL3doaXRlU3BhY2UnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfTogeyB0aGVtZTogVGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxudHlwZSBQcm9wcyA9IHtcbiAgZm9udFNpemU/OiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnA8UHJvcHM+YFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHt0ZXh0VHJhbnNmb3JtfTtcbiAgJHt0ZXh0T3ZlcmZsb3d9O1xuICAke3doaXRlU3BhY2V9O1xuYDtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAndGV4dC5kZWZhdWx0JyxcbiAgZm9udFNpemU6ICdzaXplNCcsXG4gIGxpbmVIZWlnaHQ6ICdzbWFsbCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */"));
Text.defaultProps = {
  color: 'text.default',
  fontSize: 'size4',
  lineHeight: 'small'
};
var _default = Text;
exports["default"] = _default;