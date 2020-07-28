"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

require("tippy.js/dist/tippy.css");

var _tippy2 = require("tippy.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledTippy = ( /*#__PURE__*/0, _styledBase["default"])(_react2["default"], {
  target: "e1ntyi310",
  label: "StyledTippy"
})("background:none;padding:0;&[data-placement^='top'] > .tippy-arrow::before{border-top-color:", function (props) {
  return props.theme.colors.monochrome.grey90;
}, ";}&[data-placement^='bottom'] > .tippy-arrow::before{border-bottom-color:", function (props) {
  return props.theme.colors.monochrome.grey90;
}, ";}&[data-placement^='left'] > .tippy-arrow::before{border-left-color:", function (props) {
  return props.theme.colors.monochrome.grey90;
}, ";}&[data-placement^='right'] > .tippy-arrow::before{border-right-color:", function (props) {
  return props.theme.colors.monochrome.grey90;
}, ";}.tippy-content{background:", function (props) {
  return props.theme.colors.monochrome.grey90;
}, ";border-radius:", function (props) {
  return props.theme.space.small;
}, ";color:", function (props) {
  return props.theme.colors.monochrome.white;
}, ";font-size:", function (props) {
  return props.theme.fontSizes.size4;
}, ";padding:", function (props) {
  return props.theme.space.smaller;
}, ";font-family:", function (props) {
  return props.theme.brandFont;
}, ";line-height:", function (props) {
  return props.theme.space.small;
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2lDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUaXBweSBmcm9tICdAdGlwcHlqcy9yZWFjdCc7XG5pbXBvcnQgJ3RpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzJztcbmltcG9ydCB7IGFuaW1hdGVGaWxsLCBzdGlja3kgfSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmNvbnN0IFN0eWxlZFRpcHB5ID0gc3R5bGVkKFRpcHB5KWBcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcblxuICAmW2RhdGEtcGxhY2VtZW50Xj0ndG9wJ10gPiAudGlwcHktYXJyb3c6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXk5MH07XG4gIH1cblxuICAmW2RhdGEtcGxhY2VtZW50Xj0nYm90dG9tJ10gPiAudGlwcHktYXJyb3c6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXk5MH07XG4gIH1cblxuICAmW2RhdGEtcGxhY2VtZW50Xj0nbGVmdCddID4gLnRpcHB5LWFycm93OjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTkwfTtcbiAgfVxuXG4gICZbZGF0YS1wbGFjZW1lbnRePSdyaWdodCddID4gLnRpcHB5LWFycm93OjpiZWZvcmUge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXk5MH07XG4gIH1cblxuICAudGlwcHktY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXk5MH07XG4gICAgYm9yZGVyLXJhZGl1czogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsfTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLndoaXRlfTtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMuc2l6ZTR9O1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyYW5kRm9udH07XG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbH07XG4gIH1cbmA7XG5cbmNvbnN0IFRvb2x0aXAgPSAoeyBjb250ZW50LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRUaXBweVxuICAgICAgey4uLntcbiAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgIGFuaW1hdGlvbjogJ2ZhZGUnLFxuICAgICAgICBpbmVydGlhOiB0cnVlLFxuICAgICAgICBwbHVnaW5zOiBbYW5pbWF0ZUZpbGwsIHN0aWNreV0sXG4gICAgICAgIC4uLnByb3BzXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZFRpcHB5PlxuICApO1xufTtcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOb2RlIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGUgdG9vbHRpcC4gVGhpcyBzaG91bGQgYmUgZWl0aGVyIGFuIEljb24sIEJ1dHRvbixcbiAgICogb3IgTGluay5cbiAgICogKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gZGlzcGxheSB3aXRoaW4gdGhlIHRvb2x0aXAgd2hlbiBpdCBpcyBkaXNwbGF5ZWRcbiAgICogKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuIl19 */"));

var Tooltip = function Tooltip(_ref) {
  var content = _ref.content,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["content", "children"]);

  return (0, _core.jsx)(StyledTippy, _objectSpread({
    arrow: true,
    content: content,
    duration: 300,
    animation: 'fade',
    inertia: true,
    plugins: [_tippy2.animateFill, _tippy2.sticky]
  }, props), children);
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
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired
};
var _default = Tooltip;
exports["default"] = _default;