"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uU3Bpbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNMkMiLCJmaWxlIjoiLi4vLi4vc3JjL0J1dHRvbi9CdXR0b25TcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBTSVpFUyBmcm9tICcuL3NpemVzJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL1NwaW5uZXInO1xuXG5jb25zdCBTdHlsZWRCdXR0b25TcGlubmVyID0gc3R5bGVkKFNwaW5uZXIpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuYDtcblxuY29uc3Qgc3Bpbm5lckNvbG9yID0gKGRpc2FibGVkLCB2YXJpYW50LCBpbnRlbnQpID0+IHtcbiAgaWYgKGRpc2FibGVkKSByZXR1cm4gJ3RleHQubXV0ZWQnO1xuXG4gIHN3aXRjaCAodmFyaWFudCkge1xuICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgcmV0dXJuIGludGVudCA9PT0gJ2JyYW5kJyA/IGBpbnRlbnQuJHtpbnRlbnR9LmxpZ2h0YCA6ICdtb25vY2hyb21lLndoaXRlJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGBpbnRlbnQuJHtpbnRlbnR9LmRlZmF1bHRgO1xuICB9XG59O1xuXG5jb25zdCBzcGlubmVyRGlhbWV0ZXJzID0ge1xuICBzbWFsbDogOCxcbiAgbWVkaXVtOiAxMixcbiAgbGFyZ2U6IDE2LFxuICBqdW1ibzogMjRcbn07XG5cbmNvbnN0IEJ1dHRvblNwaW5uZXIgPSAoeyBkaXNhYmxlZCwgaW50ZW50LCBzaXplLCB2YXJpYW50IH0pID0+IHtcbiAgY29uc3QgZGlhbWV0ZXIgPSBBcnJheS5pc0FycmF5KHNpemUpXG4gICAgPyBzaXplLm1hcCgodmFsdWUpID0+IHJlbShgJHtzcGlubmVyRGlhbWV0ZXJzW3ZhbHVlXX1weGApKVxuICAgIDogcmVtKGAke3NwaW5uZXJEaWFtZXRlcnNbc2l6ZV19cHhgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCdXR0b25TcGlubmVyXG4gICAgICBkaWFtZXRlcj17ZGlhbWV0ZXJ9XG4gICAgICBjb2xvcj17c3Bpbm5lckNvbG9yKGRpc2FibGVkLCB2YXJpYW50LCBpbnRlbnQpfVxuICAgIC8+XG4gICk7XG59O1xuXG5CdXR0b25TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGludGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoU0laRVMpKSxcbiAgICBQcm9wVHlwZXMub25lT2YoU0laRVMpXG4gIF0pLmlzUmVxdWlyZWQsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uU3Bpbm5lcjtcbiJdfQ== */",
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