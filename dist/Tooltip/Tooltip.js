"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _react2 = require("@emotion/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _headless = _interopRequireDefault(require("@tippyjs/react/headless"));

var _tippy = require("tippy.js");

var _framerMotion = require("framer-motion");

var _Box = _interopRequireDefault(require("../Box"));

var _Card = _interopRequireDefault(require("../Card"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Heading = _interopRequireDefault(require("../Heading"));

var _Text = _interopRequireDefault(require("../Text"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["title", "content", "children", "render"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1oig8th-renderTooltip",
  styles: "word-break:break-word;label:renderTooltip;"
} : {
  name: "1oig8th-renderTooltip",
  styles: "word-break:break-word;label:renderTooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERnQiIsImZpbGUiOiIuLi8uLi9zcmMvVG9vbHRpcC9Ub29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0L2hlYWRsZXNzJztcbmltcG9ydCB7IHN0aWNreSB9IGZyb20gJ3RpcHB5LmpzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcbmltcG9ydCBHcmlkIGZyb20gJy4uL0dyaWQnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vSGVhZGluZyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgVG9vbHRpcCA9ICh7XG4gIHRpdGxlLFxuICBjb250ZW50LFxuICBjaGlsZHJlbixcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICByZW5kZXIsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBsYXp5UGx1Z2luID0ge1xuICAgIGZuOiAoKSA9PiAoe1xuICAgICAgb25Nb3VudDogKCkgPT4gc2V0TW91bnRlZCh0cnVlKSxcbiAgICAgIG9uSGlkZTogKCkgPT4gc2V0TW91bnRlZChmYWxzZSlcbiAgICB9KVxuICB9O1xuICBjb25zdCBzcHJpbmdDb25maWcgPSB7XG4gICAgdHlwZTogJ3NwcmluZycsXG4gICAgZGFtcGluZzogMjQsXG4gICAgc3RpZmZuZXNzOiA0ODAsXG4gICAgcmVzdFNwZWVkOiAwLjEsXG4gICAgcmVzdERlbHRhOiAwLjZcbiAgfTtcblxuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH0sXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjUgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRvb2x0aXAgPSAoYXR0cnMpID0+IChcbiAgICA8Qm94XG4gICAgICBhcz17bW90aW9uLmRpdn1cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgYW5pbWF0ZT17bW91bnRlZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfVxuICAgICAgdHJhbnNpdGlvbj17c3ByaW5nQ29uZmlnfVxuICAgICAgey4uLmF0dHJzfVxuICAgID5cbiAgICAgIDxDYXJkXG4gICAgICAgIGJnPVwibW9ub2Nocm9tZS5ncmV5OTBcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJzbWFsbFwiXG4gICAgICAgIGJveFNoYWRvdz1cImVsZXZhdGlvbjFcIlxuICAgICAgICBjb2xvcj1cIm1vbm9jaHJvbWUud2hpdGVcIlxuICAgICAgICBncmlkR2FwPVwic21hbGxlc3RcIlxuICAgICAgICBmb250U2l6ZT1cInNpemUzXCJcbiAgICAgICAgbWF4V2lkdGg9XCIyMDBweFwiXG4gICAgICAgIHA9XCJzbWFsbGVyXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgYH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkaW5nLkgzXG4gICAgICAgICAgICBtYj1cIjBcIlxuICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJpbmhlcml0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nLkgzPlxuICAgICAgICApfVxuICAgICAgICB7Y29udGVudCAmJiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGFzPXtHcmlkfVxuICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJpbmhlcml0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Cb3g+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGlwcHlcbiAgICAgIHJlbmRlcj17KGF0dHJzKSA9PiAobW91bnRlZCA/IHJlbmRlclRvb2x0aXAoYXR0cnMpIDogJycpfVxuICAgICAgb2Zmc2V0PXtbMCwgNF19XG4gICAgICBwbHVnaW5zPXtbc3RpY2t5LCBsYXp5UGx1Z2luXX1cbiAgICAgIHBvcHBlck9wdGlvbnM9e3tcbiAgICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGlwcHk+XG4gICk7XG59O1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE5vZGUgd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSB0b29sdGlwLiBUaGlzIHNob3VsZCBiZSBlaXRoZXIgYW4gSWNvbiwgQnV0dG9uLFxuICAgKiBvciBMaW5rLlxuICAgKiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ29udGVudCB0byBkaXNwbGF5IHdpdGhpbiB0aGUgdG9vbHRpcCB3aGVuIGl0IGlzIGRpc3BsYXllZFxuICAgKiAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gIC8qKlxuICAgKiBUaXRsZSB0byBkaXNwbGF5IGFib3ZlIHRoZSB0b29sdGlwIGNvbnRlbnRcbiAgICogKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgLyoqXG4gICAqIFJlbmRlciBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIHRpcHB5IGVsZW1lbnQgZnJvbSBzY3JhdGNoXG4gICAqL1xuICByZW5kZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudDogbnVsbCxcbiAgdGl0bGU6IG51bGwsXG4gIHJlbmRlcjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Tooltip = function Tooltip(_ref2) {
  var title = _ref2.title,
      content = _ref2.content,
      children = _ref2.children,
      render = _ref2.render,
      props = _objectWithoutProperties(_ref2, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var lazyPlugin = {
    fn: function fn() {
      return {
        onMount: function onMount() {
          return setMounted(true);
        },
        onHide: function onHide() {
          return setMounted(false);
        }
      };
    }
  };
  var springConfig = {
    type: 'spring',
    damping: 24,
    stiffness: 480,
    restSpeed: 0.1,
    restDelta: 0.6
  };
  var variants = {
    visible: {
      opacity: 1,
      scale: 1
    },
    hidden: {
      opacity: 0,
      scale: 0.5
    }
  };

  var renderTooltip = function renderTooltip(attrs) {
    return (0, _jsxRuntime.jsx)(_Box["default"], _objectSpread(_objectSpread({
      as: _framerMotion.motion.div,
      initial: "hidden",
      variants: variants,
      animate: mounted ? 'visible' : 'hidden',
      transition: springConfig
    }, attrs), {}, {
      children: (0, _jsxRuntime.jsxs)(_Card["default"], _objectSpread(_objectSpread({
        bg: "monochrome.grey90",
        borderRadius: "small",
        boxShadow: "elevation1",
        color: "monochrome.white",
        gridGap: "smallest",
        fontSize: "size3",
        maxWidth: "200px",
        p: "smaller",
        css: _ref
      }, props), {}, {
        children: [title && (0, _jsxRuntime.jsx)(_Heading["default"].H3, {
          mb: "0",
          fontSize: "inherit",
          color: "inherit",
          textAlign: "inherit",
          children: title
        }), content && (0, _jsxRuntime.jsx)(_Text["default"], {
          as: _Grid["default"],
          fontSize: "inherit",
          color: "inherit",
          textAlign: "inherit",
          children: content
        })]
      }))
    }));
  };

  return (0, _jsxRuntime.jsx)(_headless["default"], {
    render: function render(attrs) {
      return mounted ? renderTooltip(attrs) : '';
    },
    offset: [0, 4],
    plugins: [_tippy.sticky, lazyPlugin],
    popperOptions: {
      modifiers: [{
        name: 'preventOverflow',
        options: {
          padding: 4
        }
      }]
    },
    children: children
  });
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
   * Title to display above the tooltip content
   * */
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * Render function for rendering tippy element from scratch
   */
  render: _propTypes["default"].func
};
Tooltip.defaultProps = {
  content: null,
  title: null,
  render: null
};
var _default = Tooltip;
exports["default"] = _default;