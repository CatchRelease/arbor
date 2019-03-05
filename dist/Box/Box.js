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
})("box-sizing:border-box;", _styledSystem.borders, ";", _styledSystem.borderColor, ";", _styledSystem.borderRadius, ";", _styledSystem.boxShadow, ";", _styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.height, ";", _styledSystem.maxWidth, ";", _styledSystem.minWidth, ";", _styledSystem.overflow, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _styledSystem.width, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Cb3gvQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cc0IiLCJmaWxlIjoiLi4vLi4vc3JjL0JveC9Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBib3JkZXJzLFxuICBib3JkZXJDb2xvcixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG4gIGNvbG9yLFxuICBkaXNwbGF5LFxuICBzcGFjZSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgbWF4V2lkdGgsXG4gIG1pbldpZHRoLFxuICBvdmVyZmxvdyxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgY3JlYXRlV2l0aENvbXBvbmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVXaXRoQ29tcG9uZW50JztcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJHtib3JkZXJzfTtcbiAgJHtib3JkZXJDb2xvcn07XG4gICR7Ym9yZGVyUmFkaXVzfTtcbiAgJHtib3hTaGFkb3d9O1xuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtoZWlnaHR9O1xuICAke21heFdpZHRofTtcbiAgJHttaW5XaWR0aH07XG4gICR7b3ZlcmZsb3d9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke3dpZHRofTtcbmA7XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC4uLmJvcmRlcnMucHJvcFR5cGVzLFxuICAuLi5ib3JkZXJDb2xvci5wcm9wVHlwZXMsXG4gIC4uLmJveFNoYWRvdy5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlclJhZGl1cy5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZGlzcGxheS5wcm9wVHlwZXMsXG4gIC4uLmhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLm1heFdpZHRoLnByb3BUeXBlcyxcbiAgLi4ubWluV2lkdGgucHJvcFR5cGVzLFxuICAuLi5vdmVyZmxvdy5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dEFsaWduLnByb3BUeXBlcyxcbiAgLi4ud2lkdGgucHJvcFR5cGVzXG59O1xuXG5Cb3guc2VjdGlvbiA9IGNyZWF0ZVdpdGhDb21wb25lbnQoQm94LCAnc2VjdGlvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iXX0= */"));
Box.propTypes = _objectSpread({}, _styledSystem.borders.propTypes, _styledSystem.borderColor.propTypes, _styledSystem.boxShadow.propTypes, _styledSystem.borderRadius.propTypes, _styledSystem.color.propTypes, _styledSystem.display.propTypes, _styledSystem.height.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.overflow.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.width.propTypes);
Box.section = (0, _createWithComponent.default)(Box, 'section');
var _default = Box;
exports.default = _default;