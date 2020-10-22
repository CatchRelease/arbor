"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _headless = _interopRequireDefault(require("@tippyjs/react/headless"));

var _tippy = require("tippy.js");

var _framerMotion = require("framer-motion");

var _Box = _interopRequireDefault(require("../Box"));

var _Card = _interopRequireDefault(require("../Card"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Heading = _interopRequireDefault(require("../Heading"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "542wex",
  styles: "word-break:break-word;"
} : {
  name: "542wex",
  styles: "word-break:break-word;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RnQiIsImZpbGUiOiIuLi8uLi9zcmMvVG9vbHRpcC9Ub29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgLyogZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QvaGVhZGxlc3MnO1xuaW1wb3J0IHsgc3RpY2t5IH0gZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi4vR3JpZCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9IZWFkaW5nJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBUb29sdGlwID0gKHsgdGl0bGUsIGNvbnRlbnQsIGNoaWxkcmVuLCByZW5kZXIsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGxhenlQbHVnaW4gPSB7XG4gICAgZm46ICgpID0+ICh7XG4gICAgICBvbk1vdW50OiAoKSA9PiBzZXRNb3VudGVkKHRydWUpLFxuICAgICAgb25IaWRlOiAoKSA9PiBzZXRNb3VudGVkKGZhbHNlKVxuICAgIH0pXG4gIH07XG4gIGNvbnN0IHNwcmluZ0NvbmZpZyA9IHtcbiAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICBkYW1waW5nOiAyNCxcbiAgICBzdGlmZm5lc3M6IDQ4MCxcbiAgICByZXN0U3BlZWQ6IDAuMSxcbiAgICByZXN0RGVsdGE6IDAuNlxuICB9O1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgc2NhbGU6IDEgfSxcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuNSB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVG9vbHRpcCA9IChhdHRycykgPT4gKFxuICAgIDxCb3hcbiAgICAgIGFzPXttb3Rpb24uZGl2fVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICBhbmltYXRlPXttb3VudGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG4gICAgICB0cmFuc2l0aW9uPXtzcHJpbmdDb25maWd9XG4gICAgICB7Li4uYXR0cnN9XG4gICAgPlxuICAgICAgPENhcmRcbiAgICAgICAgYmc9XCJtb25vY2hyb21lLmdyZXk5MFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cInNtYWxsXCJcbiAgICAgICAgYm94U2hhZG93PVwiZWxldmF0aW9uMVwiXG4gICAgICAgIGNvbG9yPVwibW9ub2Nocm9tZS53aGl0ZVwiXG4gICAgICAgIGdyaWRHYXA9XCJzbWFsbGVzdFwiXG4gICAgICAgIGZvbnRTaXplPVwic2l6ZTNcIlxuICAgICAgICBtYXhXaWR0aD1cIjIwMHB4XCJcbiAgICAgICAgcD1cInNtYWxsZXJcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICBgfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPEhlYWRpbmcuSDNcbiAgICAgICAgICAgIG1iPVwiMFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cImluaGVyaXRcIlxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImluaGVyaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmcuSDM+XG4gICAgICAgICl9XG4gICAgICAgIHtjb250ZW50ICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgYXM9e0dyaWR9XG4gICAgICAgICAgICBmb250U2l6ZT1cImluaGVyaXRcIlxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImluaGVyaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxUaXBweVxuICAgICAgcmVuZGVyPXsoYXR0cnMpID0+IChtb3VudGVkID8gcmVuZGVyVG9vbHRpcChhdHRycykgOiAnJyl9XG4gICAgICBvZmZzZXQ9e1swLCA0XX1cbiAgICAgIHBsdWdpbnM9e1tzdGlja3ksIGxhenlQbHVnaW5dfVxuICAgICAgcG9wcGVyT3B0aW9ucz17e1xuICAgICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaXBweT5cbiAgKTtcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogTm9kZSB3aGljaCB3aWxsIHRyaWdnZXIgdGhlIHRvb2x0aXAuIFRoaXMgc2hvdWxkIGJlIGVpdGhlciBhbiBJY29uLCBCdXR0b24sXG4gICAqIG9yIExpbmsuXG4gICAqICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGRpc3BsYXkgd2l0aGluIHRoZSB0b29sdGlwIHdoZW4gaXQgaXMgZGlzcGxheWVkXG4gICAqICovXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgLyoqXG4gICAqIFRpdGxlIHRvIGRpc3BsYXkgYWJvdmUgdGhlIHRvb2x0aXAgY29udGVudFxuICAgKiAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAvKipcbiAgICogUmVuZGVyIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgdGlwcHkgZWxlbWVudCBmcm9tIHNjcmF0Y2hcbiAgICovXG4gIHJlbmRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiBudWxsLFxuICB0aXRsZTogbnVsbCxcbiAgcmVuZGVyOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Tooltip = function Tooltip(_ref2) {
  var title = _ref2.title,
      content = _ref2.content,
      children = _ref2.children,
      render = _ref2.render,
      props = _objectWithoutProperties(_ref2, ["title", "content", "children", "render"]);

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
    return (0, _core.jsx)(_Box["default"], _extends({
      as: _framerMotion.motion.div,
      initial: "hidden",
      variants: variants,
      animate: mounted ? 'visible' : 'hidden',
      transition: springConfig
    }, attrs), (0, _core.jsx)(_Card["default"], _extends({
      bg: "monochrome.grey90",
      borderRadius: "small",
      boxShadow: "elevation1",
      color: "monochrome.white",
      gridGap: "smallest",
      fontSize: "size3",
      maxWidth: "200px",
      p: "smaller",
      css: _ref
    }, props), title && (0, _core.jsx)(_Heading["default"].H3, {
      mb: "0",
      fontSize: "inherit",
      color: "inherit",
      textAlign: "inherit"
    }, title), content && (0, _core.jsx)(_Text["default"], {
      as: _Grid["default"],
      fontSize: "inherit",
      color: "inherit",
      textAlign: "inherit"
    }, content)));
  };

  return (0, _core.jsx)(_headless["default"], {
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
    }
  }, children);
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