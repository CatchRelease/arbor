"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ProgressBarContainer = ( /*#__PURE__*/0, _base["default"])(_Flex["default"], {
  target: "e1ftfzjq2",
  label: "ProgressBarContainer"
})("border-radius:", function (props) {
  return props.theme.radii.large;
}, ";height:16px;max-width:100%;align-items:center;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTeUMiLCJmaWxlIjoiLi4vLi4vc3JjL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBQcm9ncmVzc0JhckNvbnRhaW5lciA9IHN0eWxlZChGbGV4KWBcbiAgYm9yZGVyLXJhZGl1czogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJhZGlpLmxhcmdlfTtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBCYXJCYWNrZ3JvdW5kID0gc3R5bGVkKEJveClgXG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5NDB9O1xuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5gO1xuY29uc3QgQmFyRm9yZWdyb3VuZCA9IHN0eWxlZChCb3gpYFxuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dC5kZWZhdWx0fTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbmA7XG5cbmNvbnN0IHBlcmNlbnRhZ2VUZXh0ID0gKHBlcmNlbnRhZ2UpID0+IChcbiAgPFRleHQgZmxleD1cIjBcIiBtbD1cInNtYWxsZXJcIiBmb250U2l6ZT1cInNpemUzXCIgZm9udFdlaWdodD1cIm1lZGl1bVwiPlxuICAgIHtgJHtwZXJjZW50YWdlfSVgfVxuICA8L1RleHQ+XG4pO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7IHBlcmNlbnRhZ2UsIGljb25FbmROYW1lLCBzaG93UGVyY2VudGFnZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8UHJvZ3Jlc3NCYXJDb250YWluZXIgey4uLnByb3BzfT5cbiAgICA8QmFyQmFja2dyb3VuZCBjbGFzc05hbWU9XCJiYXItYmFja2dyb3VuZFwiPlxuICAgICAgPEJhckZvcmVncm91bmRcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFyLWZvcmVncm91bmRcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICB3aWR0aDogJHtwZXJjZW50YWdlfSU7XG4gICAgICAgIGB9XG4gICAgICAvPlxuICAgIDwvQmFyQmFja2dyb3VuZD5cbiAgICB7aWNvbkVuZE5hbWUgJiYgKFxuICAgICAgPEljb25cbiAgICAgICAgbWw9XCJzbWFsbGVyXCJcbiAgICAgICAgZmxleD1cIjBcIlxuICAgICAgICBmb250U2l6ZT1cInNpemU0XCJcbiAgICAgICAgbmFtZT17aWNvbkVuZE5hbWV9XG4gICAgICAgIGNvbG9yPXtwZXJjZW50YWdlIDwgMTAwID8gJ21vbm9jaHJvbWUuZ3JleTQwJyA6ICd0ZXh0LmRlZmF1bHQnfVxuICAgICAgLz5cbiAgICApfVxuICAgIHtzaG93UGVyY2VudGFnZSAmJiBwZXJjZW50YWdlVGV4dChwZXJjZW50YWdlKX1cbiAgPC9Qcm9ncmVzc0JhckNvbnRhaW5lcj5cbik7XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgLyogU2hvdyB0aGUgcGVyY2VudGFnZSBjb21wbGV0ZSwgb3Igbm90ICovXG4gIHNob3dQZXJjZW50YWdlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiBOYW1lIG9mIHRoZSBpY29uIHRvIHVzZSBhcyB0aGUgaW5kaWNhdG9yLCBpZiBkZXNpcmVkLiAqL1xuICBpY29uRW5kTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiBUaGUgYWN0dWFsIGN1cnJlbnQgcGVyY2VudGFnZSBjb21wbGV0ZWQgKi9cbiAgcGVyY2VudGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIC4uLkZsZXguZGVmYXVsdFByb3BzLFxuICBzaG93UGVyY2VudGFnZTogZmFsc2UsXG4gIGljb25FbmROYW1lOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */"));
var BarBackground = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
  target: "e1ftfzjq1",
  label: "BarBackground"
})("flex:1;background-color:", function (props) {
  return props.theme.colors.monochrome.grey40;
}, ";height:", function (props) {
  return props.theme.space.smallest;
}, ";border-radius:inherit;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yYWRpaS5sYXJnZX07XG4gIGhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQmFyQmFja2dyb3VuZCA9IHN0eWxlZChCb3gpYFxuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTQwfTtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcbmNvbnN0IEJhckZvcmVncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQuZGVmYXVsdH07XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5gO1xuXG5jb25zdCBwZXJjZW50YWdlVGV4dCA9IChwZXJjZW50YWdlKSA9PiAoXG4gIDxUZXh0IGZsZXg9XCIwXCIgbWw9XCJzbWFsbGVyXCIgZm9udFNpemU9XCJzaXplM1wiIGZvbnRXZWlnaHQ9XCJtZWRpdW1cIj5cbiAgICB7YCR7cGVyY2VudGFnZX0lYH1cbiAgPC9UZXh0PlxuKTtcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoeyBwZXJjZW50YWdlLCBpY29uRW5kTmFtZSwgc2hvd1BlcmNlbnRhZ2UsIC4uLnByb3BzIH0pID0+IChcbiAgPFByb2dyZXNzQmFyQ29udGFpbmVyIHsuLi5wcm9wc30+XG4gICAgPEJhckJhY2tncm91bmQgY2xhc3NOYW1lPVwiYmFyLWJhY2tncm91bmRcIj5cbiAgICAgIDxCYXJGb3JlZ3JvdW5kXG4gICAgICAgIGNsYXNzTmFtZT1cImJhci1mb3JlZ3JvdW5kXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7cGVyY2VudGFnZX0lO1xuICAgICAgICBgfVxuICAgICAgLz5cbiAgICA8L0JhckJhY2tncm91bmQ+XG4gICAge2ljb25FbmROYW1lICYmIChcbiAgICAgIDxJY29uXG4gICAgICAgIG1sPVwic21hbGxlclwiXG4gICAgICAgIGZsZXg9XCIwXCJcbiAgICAgICAgZm9udFNpemU9XCJzaXplNFwiXG4gICAgICAgIG5hbWU9e2ljb25FbmROYW1lfVxuICAgICAgICBjb2xvcj17cGVyY2VudGFnZSA8IDEwMCA/ICdtb25vY2hyb21lLmdyZXk0MCcgOiAndGV4dC5kZWZhdWx0J31cbiAgICAgIC8+XG4gICAgKX1cbiAgICB7c2hvd1BlcmNlbnRhZ2UgJiYgcGVyY2VudGFnZVRleHQocGVyY2VudGFnZSl9XG4gIDwvUHJvZ3Jlc3NCYXJDb250YWluZXI+XG4pO1xuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIC8qIFNob3cgdGhlIHBlcmNlbnRhZ2UgY29tcGxldGUsIG9yIG5vdCAqL1xuICBzaG93UGVyY2VudGFnZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyogTmFtZSBvZiB0aGUgaWNvbiB0byB1c2UgYXMgdGhlIGluZGljYXRvciwgaWYgZGVzaXJlZC4gKi9cbiAgaWNvbkVuZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyogVGhlIGFjdHVhbCBjdXJyZW50IHBlcmNlbnRhZ2UgY29tcGxldGVkICovXG4gIHBlcmNlbnRhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICAuLi5GbGV4LmRlZmF1bHRQcm9wcyxcbiAgc2hvd1BlcmNlbnRhZ2U6IGZhbHNlLFxuICBpY29uRW5kTmFtZTogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */"));
var BarForeground = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
  target: "e1ftfzjq0",
  label: "BarForeground"
})("height:100%;background-color:", function (props) {
  return props.theme.colors.text["default"];
}, ";border-radius:inherit;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yYWRpaS5sYXJnZX07XG4gIGhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQmFyQmFja2dyb3VuZCA9IHN0eWxlZChCb3gpYFxuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTQwfTtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcbmNvbnN0IEJhckZvcmVncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQuZGVmYXVsdH07XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5gO1xuXG5jb25zdCBwZXJjZW50YWdlVGV4dCA9IChwZXJjZW50YWdlKSA9PiAoXG4gIDxUZXh0IGZsZXg9XCIwXCIgbWw9XCJzbWFsbGVyXCIgZm9udFNpemU9XCJzaXplM1wiIGZvbnRXZWlnaHQ9XCJtZWRpdW1cIj5cbiAgICB7YCR7cGVyY2VudGFnZX0lYH1cbiAgPC9UZXh0PlxuKTtcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoeyBwZXJjZW50YWdlLCBpY29uRW5kTmFtZSwgc2hvd1BlcmNlbnRhZ2UsIC4uLnByb3BzIH0pID0+IChcbiAgPFByb2dyZXNzQmFyQ29udGFpbmVyIHsuLi5wcm9wc30+XG4gICAgPEJhckJhY2tncm91bmQgY2xhc3NOYW1lPVwiYmFyLWJhY2tncm91bmRcIj5cbiAgICAgIDxCYXJGb3JlZ3JvdW5kXG4gICAgICAgIGNsYXNzTmFtZT1cImJhci1mb3JlZ3JvdW5kXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7cGVyY2VudGFnZX0lO1xuICAgICAgICBgfVxuICAgICAgLz5cbiAgICA8L0JhckJhY2tncm91bmQ+XG4gICAge2ljb25FbmROYW1lICYmIChcbiAgICAgIDxJY29uXG4gICAgICAgIG1sPVwic21hbGxlclwiXG4gICAgICAgIGZsZXg9XCIwXCJcbiAgICAgICAgZm9udFNpemU9XCJzaXplNFwiXG4gICAgICAgIG5hbWU9e2ljb25FbmROYW1lfVxuICAgICAgICBjb2xvcj17cGVyY2VudGFnZSA8IDEwMCA/ICdtb25vY2hyb21lLmdyZXk0MCcgOiAndGV4dC5kZWZhdWx0J31cbiAgICAgIC8+XG4gICAgKX1cbiAgICB7c2hvd1BlcmNlbnRhZ2UgJiYgcGVyY2VudGFnZVRleHQocGVyY2VudGFnZSl9XG4gIDwvUHJvZ3Jlc3NCYXJDb250YWluZXI+XG4pO1xuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIC8qIFNob3cgdGhlIHBlcmNlbnRhZ2UgY29tcGxldGUsIG9yIG5vdCAqL1xuICBzaG93UGVyY2VudGFnZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyogTmFtZSBvZiB0aGUgaWNvbiB0byB1c2UgYXMgdGhlIGluZGljYXRvciwgaWYgZGVzaXJlZC4gKi9cbiAgaWNvbkVuZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyogVGhlIGFjdHVhbCBjdXJyZW50IHBlcmNlbnRhZ2UgY29tcGxldGVkICovXG4gIHBlcmNlbnRhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICAuLi5GbGV4LmRlZmF1bHRQcm9wcyxcbiAgc2hvd1BlcmNlbnRhZ2U6IGZhbHNlLFxuICBpY29uRW5kTmFtZTogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */"));

var percentageText = function percentageText(percentage) {
  return (0, _jsxRuntime.jsx)(_Text["default"], {
    flex: "0",
    ml: "smaller",
    fontSize: "size3",
    fontWeight: "medium",
    children: "".concat(percentage, "%")
  });
};

var ProgressBar = function ProgressBar(_ref) {
  var percentage = _ref.percentage,
      iconEndName = _ref.iconEndName,
      showPercentage = _ref.showPercentage,
      props = _objectWithoutProperties(_ref, ["percentage", "iconEndName", "showPercentage"]);

  return (0, _jsxRuntime.jsxs)(ProgressBarContainer, _objectSpread(_objectSpread({}, props), {}, {
    children: [(0, _jsxRuntime.jsx)(BarBackground, {
      className: "bar-background",
      children: (0, _jsxRuntime.jsx)(BarForeground, {
        className: "bar-foreground",
        css: /*#__PURE__*/(0, _react.css)("width:", percentage, "%;;label:ProgressBar;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoRmxleClgXG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yYWRpaS5sYXJnZX07XG4gIGhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQmFyQmFja2dyb3VuZCA9IHN0eWxlZChCb3gpYFxuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTQwfTtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcbmNvbnN0IEJhckZvcmVncm91bmQgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQuZGVmYXVsdH07XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5gO1xuXG5jb25zdCBwZXJjZW50YWdlVGV4dCA9IChwZXJjZW50YWdlKSA9PiAoXG4gIDxUZXh0IGZsZXg9XCIwXCIgbWw9XCJzbWFsbGVyXCIgZm9udFNpemU9XCJzaXplM1wiIGZvbnRXZWlnaHQ9XCJtZWRpdW1cIj5cbiAgICB7YCR7cGVyY2VudGFnZX0lYH1cbiAgPC9UZXh0PlxuKTtcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoeyBwZXJjZW50YWdlLCBpY29uRW5kTmFtZSwgc2hvd1BlcmNlbnRhZ2UsIC4uLnByb3BzIH0pID0+IChcbiAgPFByb2dyZXNzQmFyQ29udGFpbmVyIHsuLi5wcm9wc30+XG4gICAgPEJhckJhY2tncm91bmQgY2xhc3NOYW1lPVwiYmFyLWJhY2tncm91bmRcIj5cbiAgICAgIDxCYXJGb3JlZ3JvdW5kXG4gICAgICAgIGNsYXNzTmFtZT1cImJhci1mb3JlZ3JvdW5kXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7cGVyY2VudGFnZX0lO1xuICAgICAgICBgfVxuICAgICAgLz5cbiAgICA8L0JhckJhY2tncm91bmQ+XG4gICAge2ljb25FbmROYW1lICYmIChcbiAgICAgIDxJY29uXG4gICAgICAgIG1sPVwic21hbGxlclwiXG4gICAgICAgIGZsZXg9XCIwXCJcbiAgICAgICAgZm9udFNpemU9XCJzaXplNFwiXG4gICAgICAgIG5hbWU9e2ljb25FbmROYW1lfVxuICAgICAgICBjb2xvcj17cGVyY2VudGFnZSA8IDEwMCA/ICdtb25vY2hyb21lLmdyZXk0MCcgOiAndGV4dC5kZWZhdWx0J31cbiAgICAgIC8+XG4gICAgKX1cbiAgICB7c2hvd1BlcmNlbnRhZ2UgJiYgcGVyY2VudGFnZVRleHQocGVyY2VudGFnZSl9XG4gIDwvUHJvZ3Jlc3NCYXJDb250YWluZXI+XG4pO1xuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIC8qIFNob3cgdGhlIHBlcmNlbnRhZ2UgY29tcGxldGUsIG9yIG5vdCAqL1xuICBzaG93UGVyY2VudGFnZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyogTmFtZSBvZiB0aGUgaWNvbiB0byB1c2UgYXMgdGhlIGluZGljYXRvciwgaWYgZGVzaXJlZC4gKi9cbiAgaWNvbkVuZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyogVGhlIGFjdHVhbCBjdXJyZW50IHBlcmNlbnRhZ2UgY29tcGxldGVkICovXG4gIHBlcmNlbnRhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICAuLi5GbGV4LmRlZmF1bHRQcm9wcyxcbiAgc2hvd1BlcmNlbnRhZ2U6IGZhbHNlLFxuICBpY29uRW5kTmFtZTogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iXX0= */"))
      })
    }), iconEndName && (0, _jsxRuntime.jsx)(_Icon["default"], {
      ml: "smaller",
      flex: "0",
      fontSize: "size4",
      name: iconEndName,
      color: percentage < 100 ? 'monochrome.grey40' : 'text.default'
    }), showPercentage && percentageText(percentage)]
  }));
};

ProgressBar.propTypes = {
  /* Show the percentage complete, or not */
  showPercentage: _propTypes["default"].bool,

  /* Name of the icon to use as the indicator, if desired. */
  iconEndName: _propTypes["default"].string,

  /* The actual current percentage completed */
  percentage: _propTypes["default"].number.isRequired
};
ProgressBar.defaultProps = _objectSpread(_objectSpread({}, _Flex["default"].defaultProps), {}, {
  showPercentage: false,
  iconEndName: null
});
var _default = ProgressBar;
exports["default"] = _default;