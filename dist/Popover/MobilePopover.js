"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var ContentContainer = ( /*#__PURE__*/0, _styledBase["default"])(_Box["default"], {
  target: "e1mlocxb0",
  label: "ContentContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "1kcp9p",
  styles: "position:absolute;z-index:10;top:0;left:0;width:100%;height:100vh;"
} : {
  name: "1kcp9p",
  styles: "position:absolute;z-index:10;top:0;left:0;width:100%;height:100vh;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL01vYmlsZVBvcG92ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qb3BvdmVyL01vYmlsZVBvcG92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgTW9iaWxlUG9wb3ZlciA9IGZvcndhcmRSZWYoXG4gICh7IGNoaWxkcmVuLCBjb250ZW50LCBvbk9wZW4sIG9uQ2xvc2UgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgcmVmLmN1cnJlbnQgPSB7IG9wZW4sIGNsb3NlIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgb25PcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfSwgW2lzT3Blbiwgb25PcGVuLCBvbkNsb3NlXSk7XG5cbiAgICBjb25zdCB0cmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICBvbkNsaWNrOiBvcGVuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RyaWdnZXJ9XG4gICAgICAgIHtpc09wZW4gJiYgPENvbnRlbnRDb250YWluZXIgYmc9XCJ3aGl0ZVwiPntjb250ZW50fTwvQ29udGVudENvbnRhaW5lcj59XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4pO1xuXG5Nb2JpbGVQb3BvdmVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gZGlzcGxheSB3aXRoaW4gdGhlIFBvcG92ZXJcbiAgICovXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUaGUgdHJpZ2dlciB3aGljaCB3aWxsIG9wZW4gdGhlIHBvcG92ZXIgd2hlbiBpdCBpcyBjbGlja2VkLiBCeSBkZWZhdWx0LFxuICAgKiB0aGUgY2hpbGQgd2lsbCBiZSBjbG9uZWQgYW5kIGFuIG9uQ2xpY2sgaGFuZGxlciB3aWxsIGJlIGF0dGFjaGVkIHRvIG9wZW5cbiAgICogdGhlIHBvcG92ZXIgd2hlbiBpdCBpcyBjbGlja2VkLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZmlyZWQgb25jZSB0aGUgUG9wb3ZlcidzIHN0YXRlIGlzIHNldCB0byBvcGVuZWRcbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBmaXJlZCBvbmNlIHRoZSBQb3BvdmVyJ3Mgc3RhdGUgaXMgc2V0IHRvIGNsb3NlZFxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbk1vYmlsZVBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xuICBvbk9wZW46ICgpID0+IG51bGwsXG4gIG9uQ2xvc2U6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVBvcG92ZXI7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var MobilePopover = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      content = _ref.content,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var open = function open() {
    setIsOpen(true);
  };

  var close = function close() {
    setIsOpen(false);
  };

  (0, _react.useEffect)(function () {
    // eslint-disable-next-line no-param-reassign
    ref.current = {
      open: open,
      close: close
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isOpen, onOpen, onClose]);

  var trigger = _react["default"].cloneElement(children, {
    onClick: open
  });

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, trigger, isOpen && /*#__PURE__*/_react["default"].createElement(ContentContainer, {
    bg: "white"
  }, content));
});
MobilePopover.propTypes = {
  /**
   * Content to display within the Popover
   */
  content: _propTypes["default"].node.isRequired,

  /**
   * The trigger which will open the popover when it is clicked. By default,
   * the child will be cloned and an onClick handler will be attached to open
   * the popover when it is clicked.
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Optional callback that will be fired once the Popover's state is set to opened
   */
  onOpen: _propTypes["default"].func,

  /**
   * Optional callback that will be fired once the Popover's state is set to closed
   */
  onClose: _propTypes["default"].func
};
MobilePopover.defaultProps = {
  onOpen: function onOpen() {
    return null;
  },
  onClose: function onClose() {
    return null;
  }
};
var _default = MobilePopover;
exports["default"] = _default;