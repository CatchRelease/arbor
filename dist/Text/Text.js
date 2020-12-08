"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

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
  return /*#__PURE__*/(0, _react2.css)("font-family:", theme.brandFont, ";;label:baseStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJxQyIsImZpbGUiOiIuLi8uLi9zcmMvVGV4dC9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBmb250U2l6ZSxcbiAgZm9udFdlaWdodCxcbiAgbGluZUhlaWdodCxcbiAgbWF4V2lkdGgsXG4gIG1pbldpZHRoLFxuICBvdmVyZmxvdyxcbiAgc3BhY2UsXG4gIHRleHRBbGlnblxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHRleHRUcmFuc2Zvcm0gZnJvbSAnLi4vdXRpbHMvdGV4dFRyYW5zZm9ybSc7XG5pbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gJy4uL3V0aWxzL3RleHRPdmVyZmxvdyc7XG5pbXBvcnQgd2hpdGVTcGFjZSBmcm9tICcuLi91dGlscy93aGl0ZVNwYWNlJztcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWUuYnJhbmRGb250fTtcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgJHtiYXNlU3R5bGVzfTtcblxuICAke2NvbG9yfTtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7bWF4V2lkdGh9O1xuICAke21pbldpZHRofTtcbiAgJHtvdmVyZmxvd307XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7dGV4dFRyYW5zZm9ybX07XG4gICR7dGV4dE92ZXJmbG93fTtcbiAgJHt3aGl0ZVNwYWNlfTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5tYXhXaWR0aC5wcm9wVHlwZXMsXG4gIC4uLm1pbldpZHRoLnByb3BUeXBlcyxcbiAgLi4ub3ZlcmZsb3cucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLnRleHRUcmFuc2Zvcm0ucHJvcFR5cGVzLFxuICAuLi50ZXh0T3ZlcmZsb3cucHJvcFR5cGVzLFxuICAuLi53aGl0ZVNwYWNlLnByb3BUeXBlc1xufTtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAndGV4dC5kZWZhdWx0JyxcbiAgZm9udFNpemU6ICdzaXplNCcsXG4gIGxpbmVIZWlnaHQ6ICdzbWFsbCdcbn07XG5cbi8vIERlcHJlY2F0ZWQgLS0gdXNlIDxUZXh0IGFzPVwic3BhblwiPjwvVGV4dD5cblRleHQuU3BhbiA9IChwcm9wcykgPT4gPFRleHQgYXM9XCJzcGFuXCIgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"));
};

var Text = (0, _base["default"])("p", {
  target: "ebz29rx0",
  label: "Text"
})(baseStyles, ";", _styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.fontWeight, ";", _styledSystem.lineHeight, ";", _styledSystem.maxWidth, ";", _styledSystem.minWidth, ";", _styledSystem.overflow, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _textTransform["default"], ";", _textOverflow["default"], ";", _whiteSpace["default"], ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJxQiIsImZpbGUiOiIuLi8uLi9zcmMvVGV4dC9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBmb250U2l6ZSxcbiAgZm9udFdlaWdodCxcbiAgbGluZUhlaWdodCxcbiAgbWF4V2lkdGgsXG4gIG1pbldpZHRoLFxuICBvdmVyZmxvdyxcbiAgc3BhY2UsXG4gIHRleHRBbGlnblxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHRleHRUcmFuc2Zvcm0gZnJvbSAnLi4vdXRpbHMvdGV4dFRyYW5zZm9ybSc7XG5pbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gJy4uL3V0aWxzL3RleHRPdmVyZmxvdyc7XG5pbXBvcnQgd2hpdGVTcGFjZSBmcm9tICcuLi91dGlscy93aGl0ZVNwYWNlJztcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWUuYnJhbmRGb250fTtcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgJHtiYXNlU3R5bGVzfTtcblxuICAke2NvbG9yfTtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7bWF4V2lkdGh9O1xuICAke21pbldpZHRofTtcbiAgJHtvdmVyZmxvd307XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7dGV4dFRyYW5zZm9ybX07XG4gICR7dGV4dE92ZXJmbG93fTtcbiAgJHt3aGl0ZVNwYWNlfTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5tYXhXaWR0aC5wcm9wVHlwZXMsXG4gIC4uLm1pbldpZHRoLnByb3BUeXBlcyxcbiAgLi4ub3ZlcmZsb3cucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLnRleHRUcmFuc2Zvcm0ucHJvcFR5cGVzLFxuICAuLi50ZXh0T3ZlcmZsb3cucHJvcFR5cGVzLFxuICAuLi53aGl0ZVNwYWNlLnByb3BUeXBlc1xufTtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAndGV4dC5kZWZhdWx0JyxcbiAgZm9udFNpemU6ICdzaXplNCcsXG4gIGxpbmVIZWlnaHQ6ICdzbWFsbCdcbn07XG5cbi8vIERlcHJlY2F0ZWQgLS0gdXNlIDxUZXh0IGFzPVwic3BhblwiPjwvVGV4dD5cblRleHQuU3BhbiA9IChwcm9wcykgPT4gPFRleHQgYXM9XCJzcGFuXCIgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"));
Text.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.color.propTypes), _styledSystem.fontSize.propTypes), _styledSystem.fontWeight.propTypes), _styledSystem.lineHeight.propTypes), _styledSystem.maxWidth.propTypes), _styledSystem.minWidth.propTypes), _styledSystem.overflow.propTypes), _styledSystem.space.propTypes), _styledSystem.textAlign.propTypes), _textTransform["default"].propTypes), _textOverflow["default"].propTypes), _whiteSpace["default"].propTypes);
Text.defaultProps = {
  color: 'text.default',
  fontSize: 'size4',
  lineHeight: 'small'
}; // Deprecated -- use <Text as="span"></Text>

Text.Span = function (props) {
  return /*#__PURE__*/_react["default"].createElement(Text, _extends({
    as: "span"
  }, props));
};

var _default = Text;
exports["default"] = _default;