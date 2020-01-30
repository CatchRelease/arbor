"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("../Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gridTemplateColumns = function gridTemplateColumns(_ref) {
  var hasText = _ref.hasText,
      iconStart = _ref.iconStart,
      iconEnd = _ref.iconEnd;

  if (hasText) {
    if (iconStart && iconEnd) {
      return '0fr 1fr 0fr';
    }

    if (iconStart) {
      return '0fr 1fr';
    }

    if (iconEnd) {
      return '1fr 0fr';
    }

    return '1fr';
  }

  if (iconStart && iconEnd) {
    return '0fr 0fr';
  }

  return '0fr';
};

var ButtonContent = (
/*#__PURE__*/
0, _styledBase["default"])(_Grid["default"], {
  target: "ejoqakm0",
  label: "ButtonContent"
})("grid-template-columns:", gridTemplateColumns, ";visibility:", function (props) {
  return props.spin ? 'hidden' : 'visible';
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtDIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vQnV0dG9uQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4uL0dyaWQnO1xuXG5jb25zdCBncmlkVGVtcGxhdGVDb2x1bW5zID0gKHsgaGFzVGV4dCwgaWNvblN0YXJ0LCBpY29uRW5kIH0pID0+IHtcbiAgaWYgKGhhc1RleHQpIHtcbiAgICBpZiAoaWNvblN0YXJ0ICYmIGljb25FbmQpIHtcbiAgICAgIHJldHVybiAnMGZyIDFmciAwZnInO1xuICAgIH1cblxuICAgIGlmIChpY29uU3RhcnQpIHtcbiAgICAgIHJldHVybiAnMGZyIDFmcic7XG4gICAgfVxuXG4gICAgaWYgKGljb25FbmQpIHtcbiAgICAgIHJldHVybiAnMWZyIDBmcic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcxZnInO1xuICB9XG5cbiAgaWYgKGljb25TdGFydCAmJiBpY29uRW5kKSB7XG4gICAgcmV0dXJuICcwZnIgMGZyJztcbiAgfVxuXG4gIHJldHVybiAnMGZyJztcbn07XG5cbmNvbnN0IEJ1dHRvbkNvbnRlbnQgPSBzdHlsZWQoR3JpZClgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHtncmlkVGVtcGxhdGVDb2x1bW5zfTtcbiAgdmlzaWJpbGl0eTogJHtwcm9wcyA9PiAocHJvcHMuc3BpbiA/ICdoaWRkZW4nIDogJ3Zpc2libGUnKX07XG5gO1xuXG5CdXR0b25Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgaGFzVGV4dDogUHJvcFR5cGVzLmJvb2wsXG4gIGljb25FbmQ6IFByb3BUeXBlcy5lbGVtZW50LFxuICBpY29uU3RhcnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuICBzcGluOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG5CdXR0b25Db250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uR3JpZC5kZWZhdWx0UHJvcHMsXG4gIGRpc3BsYXk6ICdpbmxpbmUtZ3JpZCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBoYXNUZXh0OiBmYWxzZSxcbiAgaWNvbkVuZDogdW5kZWZpbmVkLFxuICBpY29uU3RhcnQ6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29udGVudDtcbiJdfQ== */"));
ButtonContent.propTypes = {
  hasText: _propTypes["default"].bool,
  iconEnd: _propTypes["default"].element,
  iconStart: _propTypes["default"].element,
  spin: _propTypes["default"].bool.isRequired
};
ButtonContent.defaultProps = _objectSpread({}, _Grid["default"].defaultProps, {
  display: 'inline-grid',
  alignItems: 'center',
  hasText: false,
  iconEnd: undefined,
  iconStart: undefined
});
var _default = ButtonContent;
exports["default"] = _default;