"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _polished = require("polished");

var _sizes = _interopRequireDefault(require("./sizes"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var StyledButtonSpinner = ( /*#__PURE__*/0, _base["default"])(_Spinner["default"], {
  target: "e1k455vj0",
  label: "StyledButtonSpinner"
})(process.env.NODE_ENV === "production" ? {
  name: "fdlh4",
  styles: "position:absolute;margin:auto;top:0;left:0;right:0;bottom:0"
} : {
  name: "fdlh4",
  styles: "position:absolute;margin:auto;top:0;left:0;right:0;bottom:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uU3Bpbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPMkMiLCJmaWxlIjoiLi4vLi4vc3JjL0J1dHRvbi9CdXR0b25TcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgU0laRVMgZnJvbSAnLi9zaXplcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9TcGlubmVyJztcblxuY29uc3QgU3R5bGVkQnV0dG9uU3Bpbm5lciA9IHN0eWxlZChTcGlubmVyKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IHNwaW5uZXJDb2xvciA9IChkaXNhYmxlZCwgdmFyaWFudCwgaW50ZW50KSA9PiB7XG4gIGlmIChkaXNhYmxlZCkgcmV0dXJuICd0ZXh0Lm11dGVkJztcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgIHJldHVybiBpbnRlbnQgPT09ICdicmFuZCcgPyBgaW50ZW50LiR7aW50ZW50fS5saWdodGAgOiAnbW9ub2Nocm9tZS53aGl0ZSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgaW50ZW50LiR7aW50ZW50fS5kZWZhdWx0YDtcbiAgfVxufTtcblxuY29uc3Qgc3Bpbm5lckRpYW1ldGVycyA9IHtcbiAgc21hbGw6IDgsXG4gIG1lZGl1bTogMTIsXG4gIGxhcmdlOiAxNixcbiAganVtYm86IDI0XG59O1xuXG5jb25zdCBCdXR0b25TcGlubmVyID0gKHsgZGlzYWJsZWQsIGludGVudCwgc2l6ZSwgdmFyaWFudCB9KSA9PiB7XG4gIGNvbnN0IGRpYW1ldGVyID0gQXJyYXkuaXNBcnJheShzaXplKVxuICAgID8gc2l6ZS5tYXAoKHZhbHVlKSA9PiByZW0oYCR7c3Bpbm5lckRpYW1ldGVyc1t2YWx1ZV19cHhgKSlcbiAgICA6IHJlbShgJHtzcGlubmVyRGlhbWV0ZXJzW3NpemVdfXB4YCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQnV0dG9uU3Bpbm5lclxuICAgICAgZGlhbWV0ZXI9e2RpYW1ldGVyfVxuICAgICAgY29sb3I9e3NwaW5uZXJDb2xvcihkaXNhYmxlZCwgdmFyaWFudCwgaW50ZW50KX1cbiAgICAvPlxuICApO1xufTtcblxuQnV0dG9uU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFNJWkVTKSksXG4gICAgUHJvcFR5cGVzLm9uZU9mKFNJWkVTKVxuICBdKS5pc1JlcXVpcmVkLFxuICB2YXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblNwaW5uZXI7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var spinnerColor = function spinnerColor(disabled, variant, intent) {
  if (disabled) return 'text.muted';

  switch (variant) {
    case 'primary':
      return intent === 'brand' ? "intent.".concat(intent, ".light") : 'monochrome.white';

    default:
      return "intent.".concat(intent, ".default");
  }
};

var spinnerDiameters = {
  small: 8,
  medium: 12,
  large: 16,
  jumbo: 24
};

var ButtonSpinner = function ButtonSpinner(_ref) {
  var disabled = _ref.disabled,
      intent = _ref.intent,
      size = _ref.size,
      variant = _ref.variant;
  var diameter = Array.isArray(size) ? size.map(function (value) {
    return (0, _polished.rem)("".concat(spinnerDiameters[value], "px"));
  }) : (0, _polished.rem)("".concat(spinnerDiameters[size], "px"));
  return (0, _jsxRuntime.jsx)(StyledButtonSpinner, {
    diameter: diameter,
    color: spinnerColor(disabled, variant, intent)
  });
};

ButtonSpinner.propTypes = {
  disabled: _propTypes["default"].bool.isRequired,
  intent: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].oneOf(_sizes["default"])), _propTypes["default"].oneOf(_sizes["default"])]).isRequired,
  variant: _propTypes["default"].string.isRequired
};
var _default = ButtonSpinner;
exports["default"] = _default;