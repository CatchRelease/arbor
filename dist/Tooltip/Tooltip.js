"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = _interopRequireDefault(require("@tippy.js/react"));

require("tippy.js/dist/tippy.css");

var _tippy2 = require("tippy.js");

var _StyledTooltipContent = _interopRequireDefault(require("./StyledTooltipContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var globalTippyStyles = function globalTippyStyles(theme) {
  var arrowColor = theme.colors.monochrome.grey90;
  return /*#__PURE__*/(0, _core.css)(".tippy-popper{.tippy-tooltip.arbor-theme{background:none;padding:0;}}.tippy-popper[x-placement='bottom'] .tippy-tooltip.arbor-theme [x-arrow]{border-bottom-color:", arrowColor, ";}.tippy-popper[x-placement='top'] .tippy-tooltip.arbor-theme [x-arrow]{border-top-color:", arrowColor, ";}.tippy-popper[x-placement='left'] .tippy-tooltip.arbor-theme [x-arrow]{border-left-color:", arrowColor, ";}.tippy-popper[x-placement='right'] .tippy-tooltip.arbor-theme [x-arrow]{border-right-color:", arrowColor, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY1kiLCJmaWxlIjoiLi4vLi4vc3JjL1Rvb2x0aXAvVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLyogZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5LmpzL3JlYWN0JztcbmltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xuaW1wb3J0IHsgYW5pbWF0ZUZpbGwsIHN0aWNreSB9IGZyb20gJ3RpcHB5LmpzJztcblxuaW1wb3J0IFN0eWxlZFRvb2x0aXBDb250ZW50IGZyb20gJy4vU3R5bGVkVG9vbHRpcENvbnRlbnQnO1xuXG5jb25zdCBnbG9iYWxUaXBweVN0eWxlcyA9ICh0aGVtZSkgPT4ge1xuICBjb25zdCBhcnJvd0NvbG9yID0gdGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTkwO1xuXG4gIHJldHVybiBjc3NgXG4gICAgLnRpcHB5LXBvcHBlciB7XG4gICAgICAudGlwcHktdG9vbHRpcC5hcmJvci10aGVtZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudD0nYm90dG9tJ10gLnRpcHB5LXRvb2x0aXAuYXJib3ItdGhlbWUgW3gtYXJyb3ddIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7YXJyb3dDb2xvcn07XG4gICAgfVxuXG4gICAgLnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudD0ndG9wJ10gLnRpcHB5LXRvb2x0aXAuYXJib3ItdGhlbWUgW3gtYXJyb3ddIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICR7YXJyb3dDb2xvcn07XG4gICAgfVxuXG4gICAgLnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudD0nbGVmdCddIC50aXBweS10b29sdGlwLmFyYm9yLXRoZW1lIFt4LWFycm93XSB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogJHthcnJvd0NvbG9yfTtcbiAgICB9XG5cbiAgICAudGlwcHktcG9wcGVyW3gtcGxhY2VtZW50PSdyaWdodCddIC50aXBweS10b29sdGlwLmFyYm9yLXRoZW1lIFt4LWFycm93XSB7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7YXJyb3dDb2xvcn07XG4gICAgfVxuICBgO1xufTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNvbnRlbnQsIGNoaWxkcmVuLCB0aGVtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0b29sdGlwQ29udGVudCA9IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFN0eWxlZFRvb2x0aXBDb250ZW50Pntjb250ZW50fTwvU3R5bGVkVG9vbHRpcENvbnRlbnQ+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxUaXBweVN0eWxlc30gLz5cblxuICAgICAgPFRpcHB5XG4gICAgICAgIHsuLi57XG4gICAgICAgICAgdGhlbWU6ICdhcmJvcicsXG4gICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgY29udGVudDogdG9vbHRpcENvbnRlbnQsXG4gICAgICAgICAgZGlzdGFuY2U6IDgsXG4gICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogMCxcbiAgICAgICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgICAgICBpbmVydGlhOiB0cnVlLFxuICAgICAgICAgIHBsdWdpbnM6IFthbmltYXRlRmlsbCwgc3RpY2t5XSxcbiAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RpcHB5PlxuICAgIDwvPlxuICApO1xufTtcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOb2RlIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGUgdG9vbHRpcC4gVGhpcyBzaG91bGQgYmUgZWl0aGVyIGFuIEljb24sIEJ1dHRvbixcbiAgICogb3IgTGluay5cbiAgICogKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gZGlzcGxheSB3aXRoaW4gdGhlIHRvb2x0aXAgd2hlbiBpdCBpcyBkaXNwbGF5ZWRcbiAgICogKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGVtZSB1c2VkIGZvciBzdHlsaW5nIHRoZSBUb29sdGlwLlxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVG9vbHRpcCk7XG4iXX0= */"));
};

var Tooltip = function Tooltip(_ref) {
  var content = _ref.content,
      children = _ref.children,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["content", "children", "theme"]);

  var tooltipContent = (0, _core.jsx)(_emotionTheming.ThemeProvider, {
    theme: theme
  }, (0, _core.jsx)(_StyledTooltipContent["default"], null, content));
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)(_core.Global, {
    styles: globalTippyStyles
  }), (0, _core.jsx)(_react2["default"], _objectSpread({
    theme: 'arbor',
    arrow: true,
    content: tooltipContent,
    distance: 8,
    duration: 300,
    updateDuration: 0,
    animation: 'fade',
    inertia: true,
    plugins: [_tippy2.animateFill, _tippy2.sticky]
  }, props), children));
};

Tooltip.propTypes = {
  /**
   * Node which will trigger the tooltip. This should be either an Icon, Button,
   * or Link.
   * */
  children: _propTypes["default"].element.isRequired,

  /**
   * Content to display within the tooltip when it is displayed
   * */
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,

  /**
   * Theme used for styling the Tooltip.
   */
  theme: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

};

var _default = (0, _emotionTheming.withTheme)(Tooltip);

exports["default"] = _default;