"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactPopover = _interopRequireDefault(require("react-popover"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUse = require("react-use");

var _PopoverContent = _interopRequireDefault(require("./PopoverContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Popover = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      content = _ref.content,
      contentProps = _ref.contentProps,
      preferPlace = _ref.preferPlace,
      place = _ref.place,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      popoverProps = _objectWithoutProperties(_ref, ["children", "content", "contentProps", "preferPlace", "place", "onOpen", "onClose"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var popoverEl = (0, _react.useRef)(null);
  var isEscapePressed = (0, _reactUse.useKeyPress)('Escape');
  var isFirstRun = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isOpen]);

  var open = function open() {
    setIsOpen(true);
  };

  var close = function close() {
    setIsOpen(false);
  };

  var handleOutsideClick = function handleOutsideClick(e) {
    var currentRef = popoverEl.current;

    if (currentRef.containerEl && !currentRef.containerEl.contains(e.target) && currentRef.targetEl && !currentRef.targetEl.contains(e.target)) {
      close();
    }
  };

  (0, _react.useEffect)(function () {
    if (ref) {
      // eslint-disable-next-line no-param-reassign
      ref.current = {
        open: open,
        close: close
      };
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (isEscapePressed) {
      close();
    }
  }, [isEscapePressed]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleOutsideClick, true);
    return function () {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  var toggle = function toggle(e) {
    e.preventDefault();
    e.stopPropagation();

    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  var styledContent = (0, _core.jsx)(_PopoverContent["default"], contentProps, content);

  var trigger = _react["default"].cloneElement(children, {
    onClick: toggle
  });

  return (0, _core.jsx)(_reactPopover["default"], _extends({
    ref: popoverEl,
    isOpen: isOpen,
    body: styledContent,
    preferPlace: preferPlace,
    place: place,
    tipSize: 0.01,
    enterExitTransitionDurationMs: 0
  }, popoverProps), trigger);
});
Popover.propTypes = {
  /**
   * Content to display within the Popover
   */
  content: _propTypes["default"].node.isRequired,

  /**
   * Props to be passed to the PopoverContent component
   */
  contentProps: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types

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
  onClose: _propTypes["default"].func,

  /**
   * Preferred location to place the popover when it's opened in the event that
   * there are multiple available areas where the popover would fit. This list
   * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#preferplace--enum-string--null)
   */
  preferPlace: _propTypes["default"].oneOf(['above', 'right', 'below', 'left', 'row', 'column', 'start', 'end']),

  /**
   * Required location or scope to place the popover when it's opened in the event that
   * there are multiple available areas where the popover would fit. This list
   * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#code-place-string-null-code)
   */
  place: _propTypes["default"].oneOf(['above', 'right', 'below', 'left', 'row', 'column', 'start', 'end'])
};
Popover.defaultProps = {
  contentProps: {},
  preferPlace: 'below',
  place: 'column',
  onOpen: function onOpen() {
    return null;
  },
  onClose: function onClose() {
    return null;
  }
};
var _default = Popover;
exports["default"] = _default;