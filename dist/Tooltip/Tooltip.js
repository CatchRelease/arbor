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
  return /*#__PURE__*/(0, _core.css)(".tippy-popper{.tippy-tooltip.arbor-theme{background:none;padding:0;}}.tippy-popper[x-placement='bottom'] .tippy-tooltip.arbor-theme [x-arrow]{border-bottom-color:", arrowColor, ";}.tippy-popper[x-placement='top'] .tippy-tooltip.arbor-theme [x-arrow]{border-top-color:", arrowColor, ";}.tippy-popper[x-placement='left'] .tippy-tooltip.arbor-theme [x-arrow]{border-left-color:", arrowColor, ";}.tippy-popper[x-placement='right'] .tippy-tooltip.arbor-theme [x-arrow]{border-right-color:", arrowColor, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY1kiLCJmaWxlIjoiLi4vLi4vc3JjL1Rvb2x0aXAvVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLyogZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5LmpzL3JlYWN0JztcbmltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xuaW1wb3J0IHsgYW5pbWF0ZUZpbGwgfSBmcm9tICd0aXBweS5qcyc7XG5cbmltcG9ydCBTdHlsZWRUb29sdGlwQ29udGVudCBmcm9tICcuL1N0eWxlZFRvb2x0aXBDb250ZW50JztcblxuY29uc3QgZ2xvYmFsVGlwcHlTdHlsZXMgPSAodGhlbWUpID0+IHtcbiAgY29uc3QgYXJyb3dDb2xvciA9IHRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXk5MDtcblxuICByZXR1cm4gY3NzYFxuICAgIC50aXBweS1wb3BwZXIge1xuICAgICAgLnRpcHB5LXRvb2x0aXAuYXJib3ItdGhlbWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnQ9J2JvdHRvbSddIC50aXBweS10b29sdGlwLmFyYm9yLXRoZW1lIFt4LWFycm93XSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAke2Fycm93Q29sb3J9O1xuICAgIH1cblxuICAgIC50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnQ9J3RvcCddIC50aXBweS10b29sdGlwLmFyYm9yLXRoZW1lIFt4LWFycm93XSB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAke2Fycm93Q29sb3J9O1xuICAgIH1cblxuICAgIC50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnQ9J2xlZnQnXSAudGlwcHktdG9vbHRpcC5hcmJvci10aGVtZSBbeC1hcnJvd10ge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7YXJyb3dDb2xvcn07XG4gICAgfVxuXG4gICAgLnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudD0ncmlnaHQnXSAudGlwcHktdG9vbHRpcC5hcmJvci10aGVtZSBbeC1hcnJvd10ge1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke2Fycm93Q29sb3J9O1xuICAgIH1cbiAgYDtcbn07XG5cbmNvbnN0IFRvb2x0aXAgPSAoeyBjb250ZW50LCBjaGlsZHJlbiwgdGhlbWUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgdG9vbHRpcENvbnRlbnQgPSAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxTdHlsZWRUb29sdGlwQ29udGVudD57Y29udGVudH08L1N0eWxlZFRvb2x0aXBDb250ZW50PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsVGlwcHlTdHlsZXN9IC8+XG5cbiAgICAgIDxUaXBweVxuICAgICAgICB7Li4ue1xuICAgICAgICAgIHRoZW1lOiAnYXJib3InLFxuICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgIGNvbnRlbnQ6IHRvb2x0aXBDb250ZW50LFxuICAgICAgICAgIGRpc3RhbmNlOiA4LFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgdXBkYXRlRHVyYXRpb246IDAsXG4gICAgICAgICAgYW5pbWF0aW9uOiAnZmFkZScsXG4gICAgICAgICAgaW5lcnRpYTogdHJ1ZSxcbiAgICAgICAgICBwbHVnaW5zOiBbYW5pbWF0ZUZpbGxdLFxuICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGlwcHk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE5vZGUgd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSB0b29sdGlwLiBUaGlzIHNob3VsZCBiZSBlaXRoZXIgYW4gSWNvbiwgQnV0dG9uLFxuICAgKiBvciBMaW5rLlxuICAgKiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ29udGVudCB0byBkaXNwbGF5IHdpdGhpbiB0aGUgdG9vbHRpcCB3aGVuIGl0IGlzIGRpc3BsYXllZFxuICAgKiAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZW1lIHVzZWQgZm9yIHN0eWxpbmcgdGhlIFRvb2x0aXAuXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUb29sdGlwKTtcbiJdfQ== */"));
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
    plugins: [_tippy2.animateFill]
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