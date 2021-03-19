"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledInput = _interopRequireDefault(require("../Input/StyledInput"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledSelectInput = ( /*#__PURE__*/0, _base["default"])(_StyledInput["default"], {
  target: "e1xemphv1",
  label: "StyledSelectInput"
})("appearance:none;background:", function (props) {
  return props.theme.colors.background.white;
}, ";&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3QvU3R5bGVkU2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUs2QyIsImZpbGUiOiIuLi8uLi9zcmMvU2VsZWN0L1N0eWxlZFNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBTdHlsZWRJbnB1dCBmcm9tICcuLi9JbnB1dC9TdHlsZWRJbnB1dCc7XG5cbmNvbnN0IFN0eWxlZFNlbGVjdElucHV0ID0gc3R5bGVkKFN0eWxlZElucHV0KWBcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLndoaXRlfTtcblxuICAmOi1tb3otZm9jdXNyaW5nIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwICMwMDA7XG4gIH1cbmA7XG5cblN0eWxlZFNlbGVjdElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdzZWxlY3QnXG59O1xuXG5jb25zdCBTdHlsZWRTZWxlY3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YWZ0ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmljb24uZGVmYXVsdH07XG4gICAgY29udGVudDogJyR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5pY29ucy5jYXJldH0nO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5pY29ufTtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMuc2l6ZTV9O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICAgIHRvcDogMDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkU2VsZWN0ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBsYXJnZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2VsZWN0V3JhcHBlciBsYXJnZT17bGFyZ2V9PlxuICAgICAgPFN0eWxlZFNlbGVjdElucHV0IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvU3R5bGVkU2VsZWN0SW5wdXQ+XG4gICAgPC9TdHlsZWRTZWxlY3RXcmFwcGVyPlxuICApO1xufTtcblxuU3R5bGVkU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKVxuICBdKS5pc1JlcXVpcmVkLFxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cblN0eWxlZFNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhcmdlOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkU2VsZWN0O1xuIl19 */"));
StyledSelectInput.defaultProps = {
  as: 'select'
};
var StyledSelectWrapper = (0, _base["default"])("div", {
  target: "e1xemphv0",
  label: "StyledSelectWrapper"
})("position:relative;&:after{align-items:center;bottom:0;color:", function (props) {
  return props.theme.colors.icon["default"];
}, ";content:'", function (props) {
  return props.theme.icons.caret;
}, "';display:flex;font-family:", function (props) {
  return props.theme.fonts.icon;
}, ";font-size:", function (props) {
  return props.theme.fontSizes.size5;
}, ";pointer-events:none;position:absolute;right:", function (props) {
  return props.theme.space.smaller;
}, ";top:0;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3QvU3R5bGVkU2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cc0MiLCJmaWxlIjoiLi4vLi4vc3JjL1NlbGVjdC9TdHlsZWRTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgU3R5bGVkSW5wdXQgZnJvbSAnLi4vSW5wdXQvU3R5bGVkSW5wdXQnO1xuXG5jb25zdCBTdHlsZWRTZWxlY3RJbnB1dCA9IHN0eWxlZChTdHlsZWRJbnB1dClgXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC53aGl0ZX07XG5cbiAgJjotbW96LWZvY3VzcmluZyB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiAwIDAgMCAjMDAwO1xuICB9XG5gO1xuXG5TdHlsZWRTZWxlY3RJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnc2VsZWN0J1xufTtcblxuY29uc3QgU3R5bGVkU2VsZWN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmFmdGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5pY29uLmRlZmF1bHR9O1xuICAgIGNvbnRlbnQ6ICckeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuaWNvbnMuY2FyZXR9JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuaWNvbn07XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLnNpemU1fTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNlbGVjdCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgbGFyZ2UgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNlbGVjdFdyYXBwZXIgbGFyZ2U9e2xhcmdlfT5cbiAgICAgIDxTdHlsZWRTZWxlY3RJbnB1dCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1N0eWxlZFNlbGVjdElucHV0PlxuICAgIDwvU3R5bGVkU2VsZWN0V3JhcHBlcj5cbiAgKTtcbn07XG5cblN0eWxlZFNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSlcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sXG59O1xuXG5TdHlsZWRTZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICBsYXJnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZFNlbGVjdDtcbiJdfQ== */"));

var StyledSelect = function StyledSelect(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var large = props.large;
  return (0, _jsxRuntime.jsx)(StyledSelectWrapper, {
    large: large,
    children: (0, _jsxRuntime.jsx)(StyledSelectInput, _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }))
  });
};

StyledSelect.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  large: _propTypes["default"].bool
};
StyledSelect.defaultProps = {
  large: false
};
var _default = StyledSelect;
exports["default"] = _default;