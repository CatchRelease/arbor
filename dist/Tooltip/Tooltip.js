"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

require("tippy.js/dist/tippy.css");

var _tippy2 = require("tippy.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2lDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgLyogZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0JztcbmltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xuaW1wb3J0IHsgYW5pbWF0ZUZpbGwsIHN0aWNreSB9IGZyb20gJ3RpcHB5LmpzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuY29uc3QgU3R5bGVkVGlwcHkgPSBzdHlsZWQoVGlwcHkpYFxuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuXG4gICZbZGF0YS1wbGFjZW1lbnRePSd0b3AnXSA+IC50aXBweS1hcnJvdzo6YmVmb3JlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTkwfTtcbiAgfVxuXG4gICZbZGF0YS1wbGFjZW1lbnRePSdib3R0b20nXSA+IC50aXBweS1hcnJvdzo6YmVmb3JlIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTkwfTtcbiAgfVxuXG4gICZbZGF0YS1wbGFjZW1lbnRePSdsZWZ0J10gPiAudGlwcHktYXJyb3c6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5OTB9O1xuICB9XG5cbiAgJltkYXRhLXBsYWNlbWVudF49J3JpZ2h0J10gPiAudGlwcHktYXJyb3c6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTkwfTtcbiAgfVxuXG4gIC50aXBweS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTkwfTtcbiAgICBib3JkZXItcmFkaXVzOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGx9O1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1vbm9jaHJvbWUud2hpdGV9O1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplcy5zaXplNH07XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICAgIGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJhbmRGb250fTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsfTtcbiAgfVxuYDtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNvbnRlbnQsIGNoaWxkcmVuLCByZW5kZXIsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGxhenlQbHVnaW4gPSB7XG4gICAgZm46ICgpID0+ICh7XG4gICAgICBvblNob3c6ICgpID0+IHNldE1vdW50ZWQodHJ1ZSksXG4gICAgICBvbkhpZGRlbjogKCkgPT4gc2V0TW91bnRlZChmYWxzZSlcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclByb3BzID0ge307XG5cbiAgaWYgKHJlbmRlcikge1xuICAgIHJlbmRlclByb3BzLnJlbmRlciA9ICguLi5hcmdzKSA9PiAobW91bnRlZCA/IHJlbmRlciguLi5hcmdzKSA6ICcnKTtcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJQcm9wcy5jb250ZW50ID0gbW91bnRlZCA/IGNvbnRlbnQgOiAnJztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRpcHB5XG4gICAgICB7Li4ue1xuICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgYW5pbWF0aW9uOiAnZmFkZScsXG4gICAgICAgIGluZXJ0aWE6IHRydWUsXG4gICAgICAgIHBsdWdpbnM6IFthbmltYXRlRmlsbCwgc3RpY2t5LCBsYXp5UGx1Z2luXSxcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIC4uLnJlbmRlclByb3BzXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZFRpcHB5PlxuICApO1xufTtcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOb2RlIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGUgdG9vbHRpcC4gVGhpcyBzaG91bGQgYmUgZWl0aGVyIGFuIEljb24sIEJ1dHRvbixcbiAgICogb3IgTGluay5cbiAgICogKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gZGlzcGxheSB3aXRoaW4gdGhlIHRvb2x0aXAgd2hlbiBpdCBpcyBkaXNwbGF5ZWRcbiAgICogKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAvKipcbiAgICogUmVuZGVyIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgdGlwcHkgZWxlbWVudCBmcm9tIHNjcmF0Y2hcbiAgICovXG4gIHJlbmRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiBudWxsLFxuICByZW5kZXI6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */"));

var Tooltip = function Tooltip(_ref) {
  var content = _ref.content,
      children = _ref.children,
      render = _ref.render,
      props = _objectWithoutProperties(_ref, ["content", "children", "render"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var lazyPlugin = {
    fn: function fn() {
      return {
        onShow: function onShow() {
          return setMounted(true);
        },
        onHidden: function onHidden() {
          return setMounted(false);
        }
      };
    }
  };
  var renderProps = {};

  if (render) {
    renderProps.render = function () {
      return mounted ? render.apply(void 0, arguments) : '';
    };
  } else {
    renderProps.content = mounted ? content : '';
  }

  return (0, _core.jsx)(StyledTippy, _objectSpread(_objectSpread({
    arrow: true,
    duration: 300,
    animation: 'fade',
    inertia: true,
    plugins: [_tippy2.animateFill, _tippy2.sticky, lazyPlugin]
  }, props), renderProps), children);
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
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * Render function for rendering tippy element from scratch
   */
  render: _propTypes["default"].func
};
Tooltip.defaultProps = {
  content: null,
  render: null
};
var _default = Tooltip;
exports["default"] = _default;