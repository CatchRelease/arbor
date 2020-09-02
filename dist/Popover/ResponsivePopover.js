"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Popover = _interopRequireDefault(require("./Popover"));

var _MobilePopover = _interopRequireDefault(require("./MobilePopover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ResponivePopover = _react["default"].forwardRef(function (_ref, ref) {
  var isMobileFullScreen = _ref.isMobileFullScreen,
      props = _objectWithoutProperties(_ref, ["isMobileFullScreen"]);

  var mobileRef = (0, _react.useRef)(null);
  var desktopRef = (0, _react.useRef)(null);
  var display = isMobileFullScreen ? ['none', 'block'] : undefined;
  (0, _react.useEffect)(function () {
    if (!ref) {
      return;
    } // eslint-disable-next-line no-param-reassign


    ref.current = {
      close: function close() {
        desktopRef.current.close();

        if (mobileRef && mobileRef.current) {
          mobileRef.current.close();
        }
      },
      open: function open() {
        desktopRef.current.open();

        if (mobileRef && mobileRef.current) {
          mobileRef.current.open();
        }
      }
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: display
  }, /*#__PURE__*/_react["default"].createElement(_Popover["default"], _extends({
    ref: desktopRef
  }, props))), isMobileFullScreen && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: ['block', 'none']
  }, /*#__PURE__*/_react["default"].createElement(_MobilePopover["default"], _extends({
    ref: mobileRef
  }, props))));
});

ResponivePopover.propTypes = {
  isMobileFullScreen: _propTypes["default"].bool
};
ResponivePopover.defaultProps = {
  isMobileFullScreen: false
};
var _default = ResponivePopover;
exports["default"] = _default;