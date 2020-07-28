"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = require("react");

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

require("tippy.js/dist/tippy.css");

var _tippy2 = require("tippy.js");

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
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2lDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyAvKiBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XG5pbXBvcnQgeyBhbmltYXRlRmlsbCwgc3RpY2t5IH0gZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5jb25zdCBTdHlsZWRUaXBweSA9IHN0eWxlZChUaXBweSlgXG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG5cbiAgJltkYXRhLXBsYWNlbWVudF49J3RvcCddID4gLnRpcHB5LWFycm93OjpiZWZvcmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5OTB9O1xuICB9XG5cbiAgJltkYXRhLXBsYWNlbWVudF49J2JvdHRvbSddID4gLnRpcHB5LWFycm93OjpiZWZvcmUge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5OTB9O1xuICB9XG5cbiAgJltkYXRhLXBsYWNlbWVudF49J2xlZnQnXSA+IC50aXBweS1hcnJvdzo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXk5MH07XG4gIH1cblxuICAmW2RhdGEtcGxhY2VtZW50Xj0ncmlnaHQnXSA+IC50aXBweS1hcnJvdzo6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5OTB9O1xuICB9XG5cbiAgLnRpcHB5LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS5ncmV5OTB9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbH07XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubW9ub2Nocm9tZS53aGl0ZX07XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLnNpemU0fTtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gICAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmFuZEZvbnR9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGx9O1xuICB9XG5gO1xuXG5jb25zdCBUb29sdGlwID0gKHsgY29udGVudCwgY2hpbGRyZW4sIHJlbmRlciwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbGF6eVBsdWdpbiA9IHtcbiAgICBmbjogKCkgPT4gKHtcbiAgICAgIG9uU2hvdzogKCkgPT4gc2V0TW91bnRlZCh0cnVlKSxcbiAgICAgIG9uSGlkZGVuOiAoKSA9PiBzZXRNb3VudGVkKGZhbHNlKVxuICAgIH0pXG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvcHMgPSB7fTtcblxuICBpZiAocmVuZGVyKSB7XG4gICAgcmVuZGVyUHJvcHMucmVuZGVyID0gKC4uLmFyZ3MpID0+IChtb3VudGVkID8gcmVuZGVyKC4uLmFyZ3MpIDogJycpO1xuICB9IGVsc2Uge1xuICAgIHJlbmRlclByb3BzLmNvbnRlbnQgPSBtb3VudGVkID8gY29udGVudCA6ICcnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkVGlwcHlcbiAgICAgIHsuLi57XG4gICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgICAgaW5lcnRpYTogdHJ1ZSxcbiAgICAgICAgcGx1Z2luczogW2FuaW1hdGVGaWxsLCBzdGlja3ksIGxhenlQbHVnaW5dLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgLi4ucmVuZGVyUHJvcHNcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkVGlwcHk+XG4gICk7XG59O1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE5vZGUgd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSB0b29sdGlwLiBUaGlzIHNob3VsZCBiZSBlaXRoZXIgYW4gSWNvbiwgQnV0dG9uLFxuICAgKiBvciBMaW5rLlxuICAgKiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ29udGVudCB0byBkaXNwbGF5IHdpdGhpbiB0aGUgdG9vbHRpcCB3aGVuIGl0IGlzIGRpc3BsYXllZFxuICAgKiAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgZnVuY3Rpb24gZm9yIHJlbmRlcmluZyB0aXBweSBlbGVtZW50IGZyb20gc2NyYXRjaFxuICAgKi9cbiAgcmVuZGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnQ6IG51bGwsXG4gIHJlbmRlcjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiJdfQ== */"));

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