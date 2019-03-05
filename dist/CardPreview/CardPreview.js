"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("../Box"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardPreview = (
/*#__PURE__*/
0, _styledBase.default)((0, _createWithComponent.default)(_Box.default, 'div', {
  defaultProps: {
    ratio: 9 / 16
  },
  propTypes: _objectSpread({
    image: _propTypes.default.string.isRequired
  }, _styledSystem.ratio.propTypes)
}), {
  target: "e181cw5e0",
  label: "CardPreview"
})("background:url(", function (props) {
  return props.image;
}, ") center center no-repeat ", function (props) {
  return props.theme.colors.black;
}, ";background-size:contain;", _styledSystem.ratio, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkUHJldmlldy9DYXJkUHJldmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkMiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRQcmV2aWV3L0NhcmRQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJhdGlvIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBjcmVhdGVXaXRoQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZVdpdGhDb21wb25lbnQnO1xuXG5jb25zdCBDYXJkUHJldmlldyA9IHN0eWxlZChcbiAgY3JlYXRlV2l0aENvbXBvbmVudChCb3gsICdkaXYnLCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICByYXRpbzogOSAvIDE2XG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAuLi5yYXRpby5wcm9wVHlwZXNcbiAgICB9XG4gIH0pXG4pYFxuICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9wcyA9PiBwcm9wcy5pbWFnZX0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICR7cmF0aW99O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByZXZpZXc7XG4iXX0= */"));
var _default = CardPreview;
exports.default = _default;