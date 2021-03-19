"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DayPickerInput = _interopRequireDefault(require("react-day-picker/DayPickerInput"));

var _datePickerDefaults = _interopRequireDefault(require("./datePickerDefaults"));

var _DatePickerInputOverlay = _interopRequireDefault(require("./DatePickerInputOverlay"));

var _Input = _interopRequireDefault(require("../Input"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultInputProps = {
  autoComplete: 'off'
};

var DatePickerInput = function DatePickerInput(_ref) {
  var dayPickerProps = _ref.dayPickerProps,
      inputProps = _ref.inputProps,
      props = _objectWithoutProperties(_ref, ["dayPickerProps", "inputProps"]);

  return (0, _jsxRuntime.jsx)(_DayPickerInput["default"], _objectSpread({
    component: _Input["default"],
    overlayComponent: _DatePickerInputOverlay["default"],
    dayPickerProps: _objectSpread(_objectSpread({}, _datePickerDefaults["default"]), dayPickerProps),
    inputProps: _objectSpread(_objectSpread({}, defaultInputProps), inputProps)
  }, props));
};

DatePickerInput.propTypes = {
  dayPickerProps: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  inputProps: _propTypes["default"].object // eslint-disable-line react/forbid-prop-types

};
DatePickerInput.defaultProps = {
  dayPickerProps: {},
  inputProps: {}
};
var _default = DatePickerInput;
exports["default"] = _default;