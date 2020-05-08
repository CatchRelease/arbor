"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var activeStyles = function activeStyles(_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  var color = theme.colors.intent.brand.dark;
  return active && /*#__PURE__*/(0, _core.css)("color:", color, ";border-color:", color, ";&:focus,&:hover{background:transparent;border-color:", color, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXTyIsImZpbGUiOiIuLi8uLi9zcmMvVGFicy9TdHlsZWRUYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgYWN0aXZlU3R5bGVzID0gKHsgYWN0aXZlLCB0aGVtZSB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JzLmludGVudC5icmFuZC5kYXJrO1xuXG4gIHJldHVybiAoXG4gICAgYWN0aXZlICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yfTtcblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgIH1cbiAgICBgXG4gICk7XG59O1xuXG5jb25zdCBTdHlsZWRUYWIgPSBzdHlsZWQoQm94KWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMuc21hbGx9O1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLm11dGVkfTtcbiAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYm9yZGVyLm11dGVkfTtcbiAgfVxuXG4gICR7YWN0aXZlU3R5bGVzfTtcbmA7XG5cblN0eWxlZFRhYi5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TdHlsZWRUYWIuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgY29sb3I6ICd0ZXh0Lm11dGVkJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGZvbnRTaXplOiAnc2l6ZTUnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIG1iOiAnLTRweCcsXG4gIG1yOiAnbGFyZ2UnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHB5OiAncmVndWxhcicsXG4gIHRhYkluZGV4OiAnMCcsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZFRhYjtcbiJdfQ== */"));
};

var StyledTab = ( /*#__PURE__*/0, _styledBase["default"])(_Box["default"], {
  target: "e87doix0",
  label: "StyledTab"
})("cursor:pointer;font-weight:", function (props) {
  return props.theme.fontWeights.medium;
}, ";line-height:", function (props) {
  return props.theme.lineHeights.small;
}, ";outline:none;&:last-child{margin-right:0;}&:focus,&:hover{background:", function (props) {
  return props.theme.colors.background.muted;
}, ";border-color:", function (props) {
  return props.theme.colors.border.muted;
}, ";}", activeStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjZCIiwiZmlsZSI6Ii4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuXG5jb25zdCBhY3RpdmVTdHlsZXMgPSAoeyBhY3RpdmUsIHRoZW1lIH0pID0+IHtcbiAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvcnMuaW50ZW50LmJyYW5kLmRhcms7XG5cbiAgcmV0dXJuIChcbiAgICBhY3RpdmUgJiZcbiAgICBjc3NgXG4gICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICBib3JkZXItY29sb3I6ICR7Y29sb3J9O1xuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7Y29sb3J9O1xuICAgICAgfVxuICAgIGBcbiAgKTtcbn07XG5cbmNvbnN0IFN0eWxlZFRhYiA9IHN0eWxlZChCb3gpYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodHMubWVkaXVtfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAmOmZvY3VzLFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQubXV0ZWR9O1xuICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ib3JkZXIubXV0ZWR9O1xuICB9XG5cbiAgJHthY3RpdmVTdHlsZXN9O1xuYDtcblxuU3R5bGVkVGFiLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblN0eWxlZFRhYi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBib3JkZXJCb3R0b206ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICBjb2xvcjogJ3RleHQubXV0ZWQnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgZm9udFNpemU6ICdzaXplNScsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgbWI6ICctNHB4JyxcbiAgbXI6ICdsYXJnZScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcHk6ICdyZWd1bGFyJyxcbiAgdGFiSW5kZXg6ICcwJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGFiO1xuIl19 */"));
StyledTab.propTypes = {
  active: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].string
};
StyledTab.defaultProps = {
  active: false,
  alignItems: 'center',
  borderBottom: '1px solid transparent',
  color: 'text.muted',
  display: 'inline-block',
  fontSize: 'size5',
  justifyContent: 'center',
  mb: '-4px',
  mr: 'large',
  overflow: 'hidden',
  py: 'regular',
  tabIndex: '0',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
var _default = StyledTab;
exports["default"] = _default;