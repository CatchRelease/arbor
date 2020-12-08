"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@emotion/react");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var activeStyles = function activeStyles(_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  var color = theme.colors.intent.brand.dark;
  return active && /*#__PURE__*/(0, _react.css)("color:", color, ";border-color:", color, ";&:focus,&:hover{background:transparent;border-color:", color, ";};label:activeStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXTyIsImZpbGUiOiIuLi8uLi9zcmMvVGFicy9TdHlsZWRUYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IGFjdGl2ZVN0eWxlcyA9ICh7IGFjdGl2ZSwgdGhlbWUgfSkgPT4ge1xuICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9ycy5pbnRlbnQuYnJhbmQuZGFyaztcblxuICByZXR1cm4gKFxuICAgIGFjdGl2ZSAmJlxuICAgIGNzc2BcbiAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtjb2xvcn07XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtjb2xvcn07XG4gICAgICB9XG4gICAgYFxuICApO1xufTtcblxuY29uc3QgU3R5bGVkVGFiID0gc3R5bGVkKEJveClgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLnNtYWxsfTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5tdXRlZH07XG4gICAgYm9yZGVyLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJvcmRlci5tdXRlZH07XG4gIH1cblxuICAke2FjdGl2ZVN0eWxlc307XG5gO1xuXG5TdHlsZWRUYWIucHJvcFR5cGVzID0ge1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICB0YWJJbmRleDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuU3R5bGVkVGFiLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gIGNvbG9yOiAndGV4dC5tdXRlZCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBmb250U2l6ZTogJ3NpemU1JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBtYjogJy00cHgnLFxuICBtcjogJ2xhcmdlJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBweTogJ3JlZ3VsYXInLFxuICB0YWJJbmRleDogJzAnLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRUYWI7XG4iXX0= */"));
};

var StyledTab = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
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
}, ";}", activeStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjZCIiwiZmlsZSI6Ii4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgYWN0aXZlU3R5bGVzID0gKHsgYWN0aXZlLCB0aGVtZSB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JzLmludGVudC5icmFuZC5kYXJrO1xuXG4gIHJldHVybiAoXG4gICAgYWN0aXZlICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yfTtcblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgIH1cbiAgICBgXG4gICk7XG59O1xuXG5jb25zdCBTdHlsZWRUYWIgPSBzdHlsZWQoQm94KWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMuc21hbGx9O1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLm11dGVkfTtcbiAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYm9yZGVyLm11dGVkfTtcbiAgfVxuXG4gICR7YWN0aXZlU3R5bGVzfTtcbmA7XG5cblN0eWxlZFRhYi5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TdHlsZWRUYWIuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgY29sb3I6ICd0ZXh0Lm11dGVkJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGZvbnRTaXplOiAnc2l6ZTUnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIG1iOiAnLTRweCcsXG4gIG1yOiAnbGFyZ2UnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHB5OiAncmVndWxhcicsXG4gIHRhYkluZGV4OiAnMCcsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZFRhYjtcbiJdfQ== */"));
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