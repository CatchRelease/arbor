"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _sizeStyles = _interopRequireDefault(require("./sizeStyles"));

var _textTransform = _interopRequireDefault(require("../utils/textTransform"));

var _variantStyles = _interopRequireDefault(require("./variantStyles"));

var _whiteSpace = _interopRequireDefault(require("../utils/whiteSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "8atqhb",
  styles: "width:100%;"
} : {
  name: "8atqhb",
  styles: "width:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCSyIsImZpbGUiOiIuLi8uLi9zcmMvQnV0dG9uL1N0eWxlZEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHtcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgc2l6ZVN0eWxlcyBmcm9tICcuL3NpemVTdHlsZXMnO1xuaW1wb3J0IHRleHRUcmFuc2Zvcm0gZnJvbSAnLi4vdXRpbHMvdGV4dFRyYW5zZm9ybSc7XG5pbXBvcnQgdmFyaWFudFN0eWxlcyBmcm9tICcuL3ZhcmlhbnRTdHlsZXMnO1xuaW1wb3J0IHdoaXRlU3BhY2UgZnJvbSAnLi4vdXRpbHMvd2hpdGVTcGFjZSc7XG5cbmNvbnN0IGZ1bGxXaWR0aFN0eWxlcyA9ICh7IGZ1bGxXaWR0aCB9KSA9PlxuICBmdWxsV2lkdGggJiZcbiAgY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICBgO1xuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmRpc2FibGVkfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0LmRpc2FibGVkfTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJjplbmFibGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxuXG4gIGkge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICR7c2l6ZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG4gICR7Zm9udFdlaWdodH07XG4gICR7ZnVsbFdpZHRoU3R5bGVzfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dFRyYW5zZm9ybX07XG4gICR7d2hpdGVTcGFjZX07XG4gICR7Ym9yZGVyc307XG4gICR7Ym9yZGVyQ29sb3J9O1xuYDtcblxuU3R5bGVkQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlckNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRUcmFuc2Zvcm0ucHJvcFR5cGVzLFxuICAuLi53aGl0ZVNwYWNlLnByb3BUeXBlc1xufTtcblxuU3R5bGVkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgYm9yZGVyUmFkaXVzOiAnc21hbGwnLFxuICBmb250V2VpZ2h0OiAnbWVkaXVtJyxcbiAgbGluZUhlaWdodDogJ3JlZ3VsYXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRCdXR0b247XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var fullWidthStyles = function fullWidthStyles(_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth && _ref;
};

var StyledButton = (0, _styledBase["default"])("button", {
  target: "e1gh64dh0",
  label: "StyledButton"
})("appearance:none;outline:none;position:relative;text-align:center;&:disabled{background:", function (props) {
  return props.theme.colors.background.disabled;
}, ";border:1px solid transparent;color:", function (props) {
  return props.theme.colors.text.disabled;
}, ";cursor:not-allowed;}&:enabled{cursor:pointer;transition:all 0.3s ease;}i{transition:all 0.3s ease;vertical-align:middle;}", _sizeStyles["default"], ";", _variantStyles["default"], ";", _styledSystem.fontWeight, ";", fullWidthStyles, ";", _styledSystem.lineHeight, ";", _styledSystem.space, ";", _textTransform["default"], ";", _whiteSpace["default"], ";", _styledSystem.borders, ";", _styledSystem.borderColor, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0MiLCJmaWxlIjoiLi4vLi4vc3JjL0J1dHRvbi9TdHlsZWRCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7XG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZVxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHNpemVTdHlsZXMgZnJvbSAnLi9zaXplU3R5bGVzJztcbmltcG9ydCB0ZXh0VHJhbnNmb3JtIGZyb20gJy4uL3V0aWxzL3RleHRUcmFuc2Zvcm0nO1xuaW1wb3J0IHZhcmlhbnRTdHlsZXMgZnJvbSAnLi92YXJpYW50U3R5bGVzJztcbmltcG9ydCB3aGl0ZVNwYWNlIGZyb20gJy4uL3V0aWxzL3doaXRlU3BhY2UnO1xuXG5jb25zdCBmdWxsV2lkdGhTdHlsZXMgPSAoeyBmdWxsV2lkdGggfSkgPT5cbiAgZnVsbFdpZHRoICYmXG4gIGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgYDtcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5kaXNhYmxlZH07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gICY6ZW5hYmxlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cblxuICBpIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAke3NpemVTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke2Z1bGxXaWR0aFN0eWxlc307XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke3RleHRUcmFuc2Zvcm19O1xuICAke3doaXRlU3BhY2V9O1xuICAke2JvcmRlcnN9O1xuICAke2JvcmRlckNvbG9yfTtcbmA7XG5cblN0eWxlZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC4uLmJvcmRlcnMucHJvcFR5cGVzLFxuICAuLi5ib3JkZXJDb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0VHJhbnNmb3JtLnByb3BUeXBlcyxcbiAgLi4ud2hpdGVTcGFjZS5wcm9wVHlwZXNcbn07XG5cblN0eWxlZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gIGJvcmRlclJhZGl1czogJ3NtYWxsJyxcbiAgZm9udFdlaWdodDogJ21lZGl1bScsXG4gIGxpbmVIZWlnaHQ6ICdyZWd1bGFyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQnV0dG9uO1xuIl19 */"));
StyledButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.borders.propTypes), _styledSystem.borderColor.propTypes), _styledSystem.fontWeight.propTypes), _styledSystem.lineHeight.propTypes), _styledSystem.space.propTypes), _textTransform["default"].propTypes), _whiteSpace["default"].propTypes);
StyledButton.defaultProps = {
  border: '1px solid transparent',
  borderRadius: 'small',
  fontWeight: 'medium',
  lineHeight: 'regular'
};
var _default = StyledButton;
exports["default"] = _default;