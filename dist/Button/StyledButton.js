"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _styledSystem = require("styled-system");

var _textTransform = _interopRequireDefault(require("../utils/textTransform"));

var _variantStyles = _interopRequireDefault(require("./variantStyles"));

var _whiteSpace = _interopRequireDefault(require("../utils/whiteSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fullWidth = (0, _styledSystem.variant)({
  prop: 'fullWidth',
  variants: {
    "true": {
      width: '100%'
    },
    "false": {
      width: 'auto'
    }
  }
});
var size = (0, _styledSystem.variant)({
  prop: 'size',
  scale: 'buttons.sizes',
  variants: {
    small: {},
    medium: {},
    large: {},
    jumbo: {}
  }
});
var StyledButton = (0, _base["default"])("button", {
  target: "e1gh64dh0",
  label: "StyledButton"
})("appearance:none;outline:none;position:relative;text-align:center;&:disabled{background:", function (props) {
  return props.theme.colors.background.disabled;
}, ";border:1px solid transparent;color:", function (props) {
  return props.theme.colors.text.disabled;
}, ";cursor:not-allowed;}&:enabled{cursor:pointer;transition:all 0.3s ease;}i{transition:all 0.3s ease;vertical-align:middle;}", size, ";", _variantStyles["default"], ";", _styledSystem.fontWeight, ";", _styledSystem.fontSize, ";", fullWidth, ";", _styledSystem.lineHeight, ";", _styledSystem.space, ";", _textTransform["default"], ";", _whiteSpace["default"], ";", _styledSystem.borders, ";", _styledSystem.borderColor, ";", _styledSystem.color, ";", _styledSystem.display, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0MiLCJmaWxlIjoiLi4vLi4vc3JjL0J1dHRvbi9TdHlsZWRCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCB7XG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBjb2xvcixcbiAgZGlzcGxheSxcbiAgZm9udFdlaWdodCxcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICB2YXJpYW50XG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgdGV4dFRyYW5zZm9ybSBmcm9tICcuLi91dGlscy90ZXh0VHJhbnNmb3JtJztcbmltcG9ydCB2YXJpYW50U3R5bGVzIGZyb20gJy4vdmFyaWFudFN0eWxlcyc7XG5pbXBvcnQgd2hpdGVTcGFjZSBmcm9tICcuLi91dGlscy93aGl0ZVNwYWNlJztcblxuY29uc3QgZnVsbFdpZHRoID0gdmFyaWFudCh7XG4gIHByb3A6ICdmdWxsV2lkdGgnLFxuICB2YXJpYW50czoge1xuICAgIHRydWU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGZhbHNlOiB7XG4gICAgICB3aWR0aDogJ2F1dG8nXG4gICAgfVxuICB9XG59KTtcblxuY29uc3Qgc2l6ZSA9IHZhcmlhbnQoe1xuICBwcm9wOiAnc2l6ZScsXG4gIHNjYWxlOiAnYnV0dG9ucy5zaXplcycsXG4gIHZhcmlhbnRzOiB7XG4gICAgc21hbGw6IHt9LFxuICAgIG1lZGl1bToge30sXG4gICAgbGFyZ2U6IHt9LFxuICAgIGp1bWJvOiB7fVxuICB9XG59KTtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmRpc2FibGVkfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0LmRpc2FibGVkfTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJjplbmFibGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxuXG4gIGkge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICR7c2l6ZX07XG4gICR7dmFyaWFudFN0eWxlc307XG4gICR7Zm9udFdlaWdodH07XG4gICR7Zm9udFNpemV9O1xuICAke2Z1bGxXaWR0aH07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke3RleHRUcmFuc2Zvcm19O1xuICAke3doaXRlU3BhY2V9O1xuICAke2JvcmRlcnN9O1xuICAke2JvcmRlckNvbG9yfTtcbiAgJHtjb2xvcn07XG4gICR7ZGlzcGxheX07XG5gO1xuXG5TdHlsZWRCdXR0b24ucHJvcFR5cGVzID0ge1xuICAuLi5ib3JkZXJzLnByb3BUeXBlcyxcbiAgLi4uYm9yZGVyQ29sb3IucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRUcmFuc2Zvcm0ucHJvcFR5cGVzLFxuICAuLi53aGl0ZVNwYWNlLnByb3BUeXBlcyxcbiAgLi4uZGlzcGxheS5wcm9wVHlwZXNcbn07XG5cblN0eWxlZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gIGJvcmRlclJhZGl1czogJ3NtYWxsJyxcbiAgZm9udFdlaWdodDogJ21lZGl1bScsXG4gIGxpbmVIZWlnaHQ6ICdyZWd1bGFyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQnV0dG9uO1xuIl19 */"));
StyledButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.borders.propTypes), _styledSystem.borderColor.propTypes), _styledSystem.color.propTypes), _styledSystem.fontWeight.propTypes), _styledSystem.fontSize.propTypes), _styledSystem.lineHeight.propTypes), _styledSystem.space.propTypes), _textTransform["default"].propTypes), _whiteSpace["default"].propTypes), _styledSystem.display.propTypes);
StyledButton.defaultProps = {
  border: '1px solid transparent',
  borderRadius: 'small',
  fontWeight: 'medium',
  lineHeight: 'regular'
};
var _default = StyledButton;
exports["default"] = _default;