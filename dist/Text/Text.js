"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _core.css)("font-family:", theme.brandFont, ";label:baseStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JxQyIsImZpbGUiOiIuLi8uLi9zcmMvVGV4dC9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgZm9udFNpemUsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIG1heFdpZHRoLFxuICBtaW5XaWR0aCxcbiAgb3ZlcmZsb3csXG4gIHNwYWNlLFxuICB0ZXh0QWxpZ25cbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBjcmVhdGVXaXRoQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZVdpdGhDb21wb25lbnQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5tYXhXaWR0aC5wcm9wVHlwZXMsXG4gIC4uLm1pbldpZHRoLnByb3BUeXBlcyxcbiAgLi4ub3ZlcmZsb3cucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ3RleHQuZGVmYXVsdCdcbn07XG5cblRleHQucCA9IGNyZWF0ZVdpdGhDb21wb25lbnQoVGV4dCwgJ3AnKTtcblRleHQuc3BhbiA9IGNyZWF0ZVdpdGhDb21wb25lbnQoVGV4dCwgJ3NwYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"))
  );
};

var Text = (0, _styledBase.default)("p", {
  target: "ebz29rx0",
  label: "Text"
})(baseStyles, ";", _styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.fontWeight, ";", _styledSystem.lineHeight, ";", _styledSystem.maxWidth, ";", _styledSystem.minWidth, ";", _styledSystem.overflow, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0L1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JxQiIsImZpbGUiOiIuLi8uLi9zcmMvVGV4dC9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgZm9udFNpemUsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIG1heFdpZHRoLFxuICBtaW5XaWR0aCxcbiAgb3ZlcmZsb3csXG4gIHNwYWNlLFxuICB0ZXh0QWxpZ25cbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBjcmVhdGVXaXRoQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZVdpdGhDb21wb25lbnQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5tYXhXaWR0aC5wcm9wVHlwZXMsXG4gIC4uLm1pbldpZHRoLnByb3BUeXBlcyxcbiAgLi4ub3ZlcmZsb3cucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ3RleHQuZGVmYXVsdCdcbn07XG5cblRleHQucCA9IGNyZWF0ZVdpdGhDb21wb25lbnQoVGV4dCwgJ3AnKTtcblRleHQuc3BhbiA9IGNyZWF0ZVdpdGhDb21wb25lbnQoVGV4dCwgJ3NwYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"));
Text.propTypes = _objectSpread({}, _styledSystem.color.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.fontWeight.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.overflow.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes);
Text.defaultProps = {
  color: 'text.default'
};
Text.p = (0, _createWithComponent.default)(Text, 'p');
Text.span = (0, _createWithComponent.default)(Text, 'span');
var _default = Text;
exports.default = _default;