"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _PopoverContent = _interopRequireDefault(require("../Popover/PopoverContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DatePickerInputOverlay = function DatePickerInputOverlay(_ref) {
  var classNames = _ref.classNames,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["classNames", "children"]);

  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    position: "absolute",
    zIndex: "100"
  }, /*#__PURE__*/_react["default"].createElement(_PopoverContent["default"], _extends({
    className: classNames.overlayWrapper
  }, props), /*#__PURE__*/_react["default"].createElement(_DatePicker["default"], children.props)));
};

DatePickerInputOverlay.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  classNames: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

};
var _default = DatePickerInputOverlay;
exports["default"] = _default;