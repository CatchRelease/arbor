"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styledSystem = require("styled-system");

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box = (0, _styledBase.default)("div", {
  target: "eo7fp000",
  label: "Box"
})("box-sizing:border-box;", _styledSystem.borders, ";", _styledSystem.borderColor, ";", _styledSystem.borderRadius, ";", _styledSystem.boxShadow, ";", _styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.height, ";", _styledSystem.maxWidth, ";", _styledSystem.minWidth, ";", _styledSystem.overflow, ";", _styledSystem.position, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _styledSystem.width, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Cb3gvQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cc0IiLCJmaWxlIjoiLi4vLi4vc3JjL0JveC9Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBib3JkZXJzLFxuICBib3JkZXJDb2xvcixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG4gIGNvbG9yLFxuICBkaXNwbGF5LFxuICBwb3NpdGlvbixcbiAgc3BhY2UsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG1heFdpZHRoLFxuICBtaW5XaWR0aCxcbiAgb3ZlcmZsb3csXG4gIHRleHRBbGlnblxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IGNyZWF0ZVdpdGhDb21wb25lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlV2l0aENvbXBvbmVudCc7XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICR7Ym9yZGVyc307XG4gICR7Ym9yZGVyQ29sb3J9O1xuICAke2JvcmRlclJhZGl1c307XG4gICR7Ym94U2hhZG93fTtcbiAgJHtjb2xvcn07XG4gICR7ZGlzcGxheX07XG4gICR7aGVpZ2h0fTtcbiAgJHttYXhXaWR0aH07XG4gICR7bWluV2lkdGh9O1xuICAke292ZXJmbG93fTtcbiAgJHtwb3NpdGlvbn07XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7d2lkdGh9O1xuYDtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlckNvbG9yLnByb3BUeXBlcyxcbiAgLi4uYm94U2hhZG93LnByb3BUeXBlcyxcbiAgLi4uYm9yZGVyUmFkaXVzLnByb3BUeXBlcyxcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbiAgLi4uaGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4ubWF4V2lkdGgucHJvcFR5cGVzLFxuICAuLi5taW5XaWR0aC5wcm9wVHlwZXMsXG4gIC4uLm92ZXJmbG93LnByb3BUeXBlcyxcbiAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLndpZHRoLnByb3BUeXBlc1xufTtcblxuQm94LnNlY3Rpb24gPSBjcmVhdGVXaXRoQ29tcG9uZW50KEJveCwgJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl19 */"));
Box.propTypes = _objectSpread({}, _styledSystem.borders.propTypes, _styledSystem.borderColor.propTypes, _styledSystem.boxShadow.propTypes, _styledSystem.borderRadius.propTypes, _styledSystem.color.propTypes, _styledSystem.display.propTypes, _styledSystem.height.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.overflow.propTypes, _styledSystem.position.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.width.propTypes);
Box.section = (0, _createWithComponent.default)(Box, 'section');
var _default = Box;
exports.default = _default;