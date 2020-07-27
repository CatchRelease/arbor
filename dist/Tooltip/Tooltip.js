"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

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
  return /*#__PURE__*/(0, _core.css)(".tippy-popper{.tippy-tooltip.arbor-theme{background:none;padding:0;}}.tippy-popper[x-placement='bottom'] .tippy-tooltip.arbor-theme [x-arrow]{border-bottom-color:", arrowColor, ";}.tippy-popper[x-placement='top'] .tippy-tooltip.arbor-theme [x-arrow]{border-top-color:", arrowColor, ";}.tippy-popper[x-placement='left'] .tippy-tooltip.arbor-theme [x-arrow]{border-left-color:", arrowColor, ";}.tippy-popper[x-placement='right'] .tippy-tooltip.arbor-theme [x-arrow]{border-right-color:", arrowColor, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY1kiLCJmaWxlIjoiLi4vLi4vc3JjL1Rvb2x0aXAvVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLyogZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XG5pbXBvcnQgeyBhbmltYXRlRmlsbCwgc3RpY2t5IH0gZnJvbSAndGlwcHkuanMnO1xuXG5pbXBvcnQgU3R5bGVkVG9vbHRpcENvbnRlbnQgZnJvbSAnLi9TdHlsZWRUb29sdGlwQ29udGVudCc7XG5cbmNvbnN0IGdsb2JhbFRpcHB5U3R5bGVzID0gKHRoZW1lKSA9PiB7XG4gIGNvbnN0IGFycm93Q29sb3IgPSB0aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5OTA7XG5cbiAgcmV0dXJuIGNzc2BcbiAgICAudGlwcHktcG9wcGVyIHtcbiAgICAgIC50aXBweS10b29sdGlwLmFyYm9yLXRoZW1lIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGlwcHktcG9wcGVyW3gtcGxhY2VtZW50PSdib3R0b20nXSAudGlwcHktdG9vbHRpcC5hcmJvci10aGVtZSBbeC1hcnJvd10ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHthcnJvd0NvbG9yfTtcbiAgICB9XG5cbiAgICAudGlwcHktcG9wcGVyW3gtcGxhY2VtZW50PSd0b3AnXSAudGlwcHktdG9vbHRpcC5hcmJvci10aGVtZSBbeC1hcnJvd10ge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHthcnJvd0NvbG9yfTtcbiAgICB9XG5cbiAgICAudGlwcHktcG9wcGVyW3gtcGxhY2VtZW50PSdsZWZ0J10gLnRpcHB5LXRvb2x0aXAuYXJib3ItdGhlbWUgW3gtYXJyb3ddIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAke2Fycm93Q29sb3J9O1xuICAgIH1cblxuICAgIC50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnQ9J3JpZ2h0J10gLnRpcHB5LXRvb2x0aXAuYXJib3ItdGhlbWUgW3gtYXJyb3ddIHtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHthcnJvd0NvbG9yfTtcbiAgICB9XG4gIGA7XG59O1xuXG5jb25zdCBUb29sdGlwID0gKHsgY29udGVudCwgY2hpbGRyZW4sIHRoZW1lLCBwb3NpdGlvbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0b29sdGlwQ29udGVudCA9IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFN0eWxlZFRvb2x0aXBDb250ZW50Pntjb250ZW50fTwvU3R5bGVkVG9vbHRpcENvbnRlbnQ+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxUaXBweVN0eWxlc30gLz5cblxuICAgICAgPFRpcHB5XG4gICAgICAgIHsuLi57XG4gICAgICAgICAgdGhlbWU6ICdhcmJvcicsXG4gICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgY29udGVudDogdG9vbHRpcENvbnRlbnQsXG4gICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgICAgICBpbmVydGlhOiB0cnVlLFxuICAgICAgICAgIHBsdWdpbnM6IFthbmltYXRlRmlsbCwgc3RpY2t5XSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBvc2l0aW9uLFxuICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGlwcHk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE5vZGUgd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSB0b29sdGlwLiBUaGlzIHNob3VsZCBiZSBlaXRoZXIgYW4gSWNvbiwgQnV0dG9uLFxuICAgKiBvciBMaW5rLlxuICAgKiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ29udGVudCB0byBkaXNwbGF5IHdpdGhpbiB0aGUgdG9vbHRpcCB3aGVuIGl0IGlzIGRpc3BsYXllZFxuICAgKiAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIGZvciB0aGUgdG9vbHRpcCAoZGVwcmVjYXRlZCwgdXNlIHBsYWNlbWVudCBpbnN0ZWFkKVxuICAgKiAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlbWUgdXNlZCBmb3Igc3R5bGluZyB0aGUgVG9vbHRpcC5cbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xufTtcblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHBvc2l0aW9uOiAndG9wJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRvb2x0aXApO1xuIl19 */"));
};

var Tooltip = function Tooltip(_ref) {
  var content = _ref.content,
      children = _ref.children,
      theme = _ref.theme,
      position = _ref.position,
      props = _objectWithoutProperties(_ref, ["content", "children", "theme", "position"]);

  var tooltipContent = (0, _core.jsx)(_emotionTheming.ThemeProvider, {
    theme: theme
  }, (0, _core.jsx)(_StyledTooltipContent["default"], null, content));
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)(_core.Global, {
    styles: globalTippyStyles
  }), (0, _core.jsx)(_react2["default"], _objectSpread({
    theme: 'arbor',
    arrow: true,
    content: tooltipContent,
    duration: 300,
    animation: 'fade',
    inertia: true,
    plugins: [_tippy2.animateFill, _tippy2.sticky],
    placement: position
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
   * Position for the tooltip (deprecated, use placement instead)
   * */
  position: _propTypes["default"].string,

  /**
   * Theme used for styling the Tooltip.
   */
  theme: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

};
Tooltip.defaultProps = {
  position: 'top'
};

var _default = (0, _emotionTheming.withTheme)(Tooltip);

exports["default"] = _default;