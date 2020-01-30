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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "8atqhb",
  styles: "width:100%;"
} : {
  name: "8atqhb",
  styles: "width:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCSyIsImZpbGUiOiIuLi8uLi9zcmMvQnV0dG9uL1N0eWxlZEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHtcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgc2l6ZVN0eWxlcyBmcm9tICcuL3NpemVTdHlsZXMnO1xuaW1wb3J0IHRleHRUcmFuc2Zvcm0gZnJvbSAnLi4vdXRpbHMvdGV4dFRyYW5zZm9ybSc7XG5pbXBvcnQgdmFyaWFudFN0eWxlcyBmcm9tICcuL3ZhcmlhbnRTdHlsZXMnO1xuaW1wb3J0IHdoaXRlU3BhY2UgZnJvbSAnLi4vdXRpbHMvd2hpdGVTcGFjZSc7XG5cbmNvbnN0IGZ1bGxXaWR0aFN0eWxlcyA9ICh7IGZ1bGxXaWR0aCB9KSA9PlxuICBmdWxsV2lkdGggJiZcbiAgY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICBgO1xuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5kaXNhYmxlZH07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQuZGlzYWJsZWR9O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmOmVuYWJsZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG5cbiAgaSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgJHtzaXplU3R5bGVzfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtmdWxsV2lkdGhTdHlsZXN9O1xuICAke2xpbmVIZWlnaHR9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0VHJhbnNmb3JtfTtcbiAgJHt3aGl0ZVNwYWNlfTtcbiAgJHtib3JkZXJzfTtcbiAgJHtib3JkZXJDb2xvcn07XG5gO1xuXG5TdHlsZWRCdXR0b24ucHJvcFR5cGVzID0ge1xuICAuLi5ib3JkZXJzLnByb3BUeXBlcyxcbiAgLi4uYm9yZGVyQ29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbiAgLi4ubGluZUhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dFRyYW5zZm9ybS5wcm9wVHlwZXMsXG4gIC4uLndoaXRlU3BhY2UucHJvcFR5cGVzXG59O1xuXG5TdHlsZWRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICBib3JkZXJSYWRpdXM6ICdzbWFsbCcsXG4gIGZvbnRXZWlnaHQ6ICdtZWRpdW0nLFxuICBsaW5lSGVpZ2h0OiAncmVndWxhcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEJ1dHRvbjtcbiJdfQ== */",
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
}, ";cursor:not-allowed;}&:enabled{cursor:pointer;transition:all 0.3s ease;}i{transition:all 0.3s ease;vertical-align:middle;}", _sizeStyles["default"], ";", _variantStyles["default"], ";", _styledSystem.fontWeight, ";", fullWidthStyles, ";", _styledSystem.lineHeight, ";", _styledSystem.space, ";", _textTransform["default"], ";", _whiteSpace["default"], ";", _styledSystem.borders, ";", _styledSystem.borderColor, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0MiLCJmaWxlIjoiLi4vLi4vc3JjL0J1dHRvbi9TdHlsZWRCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7XG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZVxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHNpemVTdHlsZXMgZnJvbSAnLi9zaXplU3R5bGVzJztcbmltcG9ydCB0ZXh0VHJhbnNmb3JtIGZyb20gJy4uL3V0aWxzL3RleHRUcmFuc2Zvcm0nO1xuaW1wb3J0IHZhcmlhbnRTdHlsZXMgZnJvbSAnLi92YXJpYW50U3R5bGVzJztcbmltcG9ydCB3aGl0ZVNwYWNlIGZyb20gJy4uL3V0aWxzL3doaXRlU3BhY2UnO1xuXG5jb25zdCBmdWxsV2lkdGhTdHlsZXMgPSAoeyBmdWxsV2lkdGggfSkgPT5cbiAgZnVsbFdpZHRoICYmXG4gIGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgYDtcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQuZGlzYWJsZWR9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0LmRpc2FibGVkfTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJjplbmFibGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxuXG4gIGkge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICR7c2l6ZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG4gICR7Zm9udFdlaWdodH07XG4gICR7ZnVsbFdpZHRoU3R5bGVzfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dFRyYW5zZm9ybX07XG4gICR7d2hpdGVTcGFjZX07XG4gICR7Ym9yZGVyc307XG4gICR7Ym9yZGVyQ29sb3J9O1xuYDtcblxuU3R5bGVkQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlckNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRUcmFuc2Zvcm0ucHJvcFR5cGVzLFxuICAuLi53aGl0ZVNwYWNlLnByb3BUeXBlc1xufTtcblxuU3R5bGVkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgYm9yZGVyUmFkaXVzOiAnc21hbGwnLFxuICBmb250V2VpZ2h0OiAnbWVkaXVtJyxcbiAgbGluZUhlaWdodDogJ3JlZ3VsYXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRCdXR0b247XG4iXX0= */"));
StyledButton.propTypes = _objectSpread({}, _styledSystem.borders.propTypes, {}, _styledSystem.borderColor.propTypes, {}, _styledSystem.fontWeight.propTypes, {}, _styledSystem.lineHeight.propTypes, {}, _styledSystem.space.propTypes, {}, _textTransform["default"].propTypes, {}, _whiteSpace["default"].propTypes);
StyledButton.defaultProps = {
  border: '1px solid transparent',
  borderRadius: 'small',
  fontWeight: 'medium',
  lineHeight: 'regular'
};
var _default = StyledButton;
exports["default"] = _default;