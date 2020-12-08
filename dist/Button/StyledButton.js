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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
}, ";cursor:not-allowed;}&:enabled{cursor:pointer;transition:all 0.3s ease;}i{transition:all 0.3s ease;vertical-align:middle;}", size, ";", _variantStyles["default"], ";", _styledSystem.fontWeight, ";", _styledSystem.fontSize, ";", fullWidth, ";", _styledSystem.lineHeight, ";", _styledSystem.space, ";", _textTransform["default"], ";", _whiteSpace["default"], ";", _styledSystem.borders, ";", _styledSystem.borderColor, ";", _styledSystem.display, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0MiLCJmaWxlIjoiLi4vLi4vc3JjL0J1dHRvbi9TdHlsZWRCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCB7XG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBkaXNwbGF5LFxuICBmb250V2VpZ2h0LFxuICBmb250U2l6ZSxcbiAgbGluZUhlaWdodCxcbiAgc3BhY2UsXG4gIHZhcmlhbnRcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCB0ZXh0VHJhbnNmb3JtIGZyb20gJy4uL3V0aWxzL3RleHRUcmFuc2Zvcm0nO1xuaW1wb3J0IHZhcmlhbnRTdHlsZXMgZnJvbSAnLi92YXJpYW50U3R5bGVzJztcbmltcG9ydCB3aGl0ZVNwYWNlIGZyb20gJy4uL3V0aWxzL3doaXRlU3BhY2UnO1xuXG5jb25zdCBmdWxsV2lkdGggPSB2YXJpYW50KHtcbiAgcHJvcDogJ2Z1bGxXaWR0aCcsXG4gIHZhcmlhbnRzOiB7XG4gICAgdHJ1ZToge1xuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgZmFsc2U6IHtcbiAgICAgIHdpZHRoOiAnYXV0bydcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBzaXplID0gdmFyaWFudCh7XG4gIHByb3A6ICdzaXplJyxcbiAgc2NhbGU6ICdidXR0b25zLnNpemVzJyxcbiAgdmFyaWFudHM6IHtcbiAgICBzbWFsbDoge30sXG4gICAgbWVkaXVtOiB7fSxcbiAgICBsYXJnZToge30sXG4gICAganVtYm86IHt9XG4gIH1cbn0pO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQuZGlzYWJsZWR9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQuZGlzYWJsZWR9O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmOmVuYWJsZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG5cbiAgaSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgJHtzaXplfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtmb250U2l6ZX07XG4gICR7ZnVsbFdpZHRofTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dFRyYW5zZm9ybX07XG4gICR7d2hpdGVTcGFjZX07XG4gICR7Ym9yZGVyc307XG4gICR7Ym9yZGVyQ29sb3J9O1xuICAke2Rpc3BsYXl9O1xuYDtcblxuU3R5bGVkQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlckNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4ubGluZUhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dFRyYW5zZm9ybS5wcm9wVHlwZXMsXG4gIC4uLndoaXRlU3BhY2UucHJvcFR5cGVzLFxuICAuLi5kaXNwbGF5LnByb3BUeXBlc1xufTtcblxuU3R5bGVkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgYm9yZGVyUmFkaXVzOiAnc21hbGwnLFxuICBmb250V2VpZ2h0OiAnbWVkaXVtJyxcbiAgbGluZUhlaWdodDogJ3JlZ3VsYXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRCdXR0b247XG4iXX0= */"));
StyledButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.borders.propTypes), _styledSystem.borderColor.propTypes), _styledSystem.fontWeight.propTypes), _styledSystem.fontSize.propTypes), _styledSystem.lineHeight.propTypes), _styledSystem.space.propTypes), _textTransform["default"].propTypes), _whiteSpace["default"].propTypes), _styledSystem.display.propTypes);
StyledButton.defaultProps = {
  border: '1px solid transparent',
  borderRadius: 'small',
  fontWeight: 'medium',
  lineHeight: 'regular'
};
var _default = StyledButton;
exports["default"] = _default;