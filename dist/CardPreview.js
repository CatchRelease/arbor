"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardPreview =
/*#__PURE__*/
(0, _reactEmotion.default)(_Box.default.withComponent('div', {
  target: "e1fysj6e1"
}), {
  label: "CardPreview",
  target: "e1fysj6e0"
})("background:url(", function (props) {
  return props.image;
}, ") center center no-repeat ", function (props) {
  return props.theme.colors.black;
}, ";background-size:contain;", _styledSystem.ratio, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkUHJldmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0QiLCJmaWxlIjoiLi4vc3JjL0NhcmRQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdyZWFjdC1lbW90aW9uJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyByYXRpbyB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcblxuY29uc3QgQ2FyZFByZXZpZXcgPSBzdHlsZWQoQm94LndpdGhDb21wb25lbnQoJ2RpdicpKWBcbiAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMgPT4gcHJvcHMuaW1hZ2V9KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAke3JhdGlvfTtcbmA7XG5cbkNhcmRQcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLi4ucmF0aW8ucHJvcFR5cGVcbn07XG5cbkNhcmRQcmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgcmF0aW86IDkgLyAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByZXZpZXc7XG4iXX0= */");
CardPreview.propTypes = _objectSpread({
  image: _propTypes.default.string.isRequired
}, _styledSystem.ratio.propType);
CardPreview.defaultProps = {
  ratio: 9 / 16
};
var _default = CardPreview;
exports.default = _default;