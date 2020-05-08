"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _textTransform = _interopRequireDefault(require("../utils/textTransform"));

var _textOverflow = _interopRequireDefault(require("../utils/textOverflow"));

var _whiteSpace = _interopRequireDefault(require("../utils/whiteSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return /*#__PURE__*/(0, _core.css)("font-family:", theme.brandFont, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJxQyIsImZpbGUiOiIuLi8uLi9zcmMvVGV4dC9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBtYXhXaWR0aCxcbiAgbWluV2lkdGgsXG4gIG92ZXJmbG93LFxuICBzcGFjZSxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgdGV4dFRyYW5zZm9ybSBmcm9tICcuLi91dGlscy90ZXh0VHJhbnNmb3JtJztcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAnLi4vdXRpbHMvdGV4dE92ZXJmbG93JztcbmltcG9ydCB3aGl0ZVNwYWNlIGZyb20gJy4uL3V0aWxzL3doaXRlU3BhY2UnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHt0ZXh0VHJhbnNmb3JtfTtcbiAgJHt0ZXh0T3ZlcmZsb3d9O1xuICAke3doaXRlU3BhY2V9O1xuYDtcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbiAgLi4ubGluZUhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLm1heFdpZHRoLnByb3BUeXBlcyxcbiAgLi4ubWluV2lkdGgucHJvcFR5cGVzLFxuICAuLi5vdmVyZmxvdy5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dEFsaWduLnByb3BUeXBlcyxcbiAgLi4udGV4dFRyYW5zZm9ybS5wcm9wVHlwZXMsXG4gIC4uLnRleHRPdmVyZmxvdy5wcm9wVHlwZXMsXG4gIC4uLndoaXRlU3BhY2UucHJvcFR5cGVzXG59O1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICd0ZXh0LmRlZmF1bHQnLFxuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgbGluZUhlaWdodDogJ3NtYWxsJ1xufTtcblxuLy8gRGVwcmVjYXRlZCAtLSB1c2UgPFRleHQgYXM9XCJzcGFuXCI+PC9UZXh0PlxuVGV4dC5zcGFuID0gKHByb3BzKSA9PiA8VGV4dCBhcz1cInNwYW5cIiB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIl19 */"));
};

var Text = (0, _styledBase["default"])("p", {
  target: "ebz29rx0",
  label: "Text"
})(baseStyles, ";", _styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.fontWeight, ";", _styledSystem.lineHeight, ";", _styledSystem.maxWidth, ";", _styledSystem.minWidth, ";", _styledSystem.overflow, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _textTransform["default"], ";", _textOverflow["default"], ";", _whiteSpace["default"], ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJxQiIsImZpbGUiOiIuLi8uLi9zcmMvVGV4dC9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBtYXhXaWR0aCxcbiAgbWluV2lkdGgsXG4gIG92ZXJmbG93LFxuICBzcGFjZSxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgdGV4dFRyYW5zZm9ybSBmcm9tICcuLi91dGlscy90ZXh0VHJhbnNmb3JtJztcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAnLi4vdXRpbHMvdGV4dE92ZXJmbG93JztcbmltcG9ydCB3aGl0ZVNwYWNlIGZyb20gJy4uL3V0aWxzL3doaXRlU3BhY2UnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHt0ZXh0VHJhbnNmb3JtfTtcbiAgJHt0ZXh0T3ZlcmZsb3d9O1xuICAke3doaXRlU3BhY2V9O1xuYDtcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbiAgLi4ubGluZUhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLm1heFdpZHRoLnByb3BUeXBlcyxcbiAgLi4ubWluV2lkdGgucHJvcFR5cGVzLFxuICAuLi5vdmVyZmxvdy5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dEFsaWduLnByb3BUeXBlcyxcbiAgLi4udGV4dFRyYW5zZm9ybS5wcm9wVHlwZXMsXG4gIC4uLnRleHRPdmVyZmxvdy5wcm9wVHlwZXMsXG4gIC4uLndoaXRlU3BhY2UucHJvcFR5cGVzXG59O1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICd0ZXh0LmRlZmF1bHQnLFxuICBmb250U2l6ZTogJ3NpemU0JyxcbiAgbGluZUhlaWdodDogJ3NtYWxsJ1xufTtcblxuLy8gRGVwcmVjYXRlZCAtLSB1c2UgPFRleHQgYXM9XCJzcGFuXCI+PC9UZXh0PlxuVGV4dC5zcGFuID0gKHByb3BzKSA9PiA8VGV4dCBhcz1cInNwYW5cIiB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIl19 */"));
Text.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.color.propTypes), _styledSystem.fontSize.propTypes), _styledSystem.fontWeight.propTypes), _styledSystem.lineHeight.propTypes), _styledSystem.maxWidth.propTypes), _styledSystem.minWidth.propTypes), _styledSystem.overflow.propTypes), _styledSystem.space.propTypes), _styledSystem.textAlign.propTypes), _textTransform["default"].propTypes), _textOverflow["default"].propTypes), _whiteSpace["default"].propTypes);
Text.defaultProps = {
  color: 'text.default',
  fontSize: 'size4',
  lineHeight: 'small'
}; // Deprecated -- use <Text as="span"></Text>

Text.span = function (props) {
  return /*#__PURE__*/_react["default"].createElement(Text, _extends({
    as: "span"
  }, props));
};

var _default = Text;
exports["default"] = _default;