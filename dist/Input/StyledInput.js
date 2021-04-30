"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _inputStyles = _interopRequireDefault(require("./inputStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var largeStyles = function largeStyles(_ref) {
  var theme = _ref.theme,
      large = _ref.large;
  return large && /*#__PURE__*/(0, _react.css)("padding:", theme.space.small, " ", theme.space.smaller, ";;label:largeStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9TdHlsZWRJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRSyIsImZpbGUiOiIuLi8uLi9zcmMvSW5wdXQvU3R5bGVkSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZGlzcGxheSwgbWF4V2lkdGggfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBpbnB1dFN0eWxlcyBmcm9tICcuL2lucHV0U3R5bGVzJztcblxuY29uc3QgbGFyZ2VTdHlsZXMgPSAoeyB0aGVtZSwgbGFyZ2UgfSkgPT5cbiAgbGFyZ2UgJiZcbiAgY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2Uuc21hbGx9ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIGA7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke2lucHV0U3R5bGVzfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtsYXJnZVN0eWxlc307XG4gICR7bWF4V2lkdGh9O1xuYDtcblxuU3R5bGVkSW5wdXQucHJvcFR5cGVzID0ge1xuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi5tYXhXaWR0aC5wcm9wVHlwZXNcbn07XG5cblN0eWxlZElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdpbnB1dCcsXG4gIGxhcmdlOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSW5wdXQ7XG4iXX0= */"));
};

var StyledInput = (0, _base["default"])("input", {
  target: "ed8ggha0",
  label: "StyledInput"
})(_inputStyles["default"], ";", _styledSystem.display, ";", largeStyles, ";", _styledSystem.maxWidth, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9TdHlsZWRJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0MiLCJmaWxlIjoiLi4vLi4vc3JjL0lucHV0L1N0eWxlZElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGRpc3BsYXksIG1heFdpZHRoIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgaW5wdXRTdHlsZXMgZnJvbSAnLi9pbnB1dFN0eWxlcyc7XG5cbmNvbnN0IGxhcmdlU3R5bGVzID0gKHsgdGhlbWUsIGxhcmdlIH0pID0+XG4gIGxhcmdlICYmXG4gIGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlLnNtYWxsfSAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICBgO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgJHtpbnB1dFN0eWxlc307XG4gICR7ZGlzcGxheX07XG4gICR7bGFyZ2VTdHlsZXN9O1xuICAke21heFdpZHRofTtcbmA7XG5cblN0eWxlZElucHV0LnByb3BUeXBlcyA9IHtcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sLFxuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbiAgLi4ubWF4V2lkdGgucHJvcFR5cGVzXG59O1xuXG5TdHlsZWRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnaW5wdXQnLFxuICBsYXJnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZElucHV0O1xuIl19 */"));
StyledInput.propTypes = _objectSpread(_objectSpread({
  large: _propTypes["default"].bool
}, _styledSystem.display.propTypes), _styledSystem.maxWidth.propTypes);
StyledInput.defaultProps = {
  as: 'input',
  large: false
};
var _default = StyledInput;
exports["default"] = _default;