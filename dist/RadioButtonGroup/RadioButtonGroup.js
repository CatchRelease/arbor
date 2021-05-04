"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var name = _ref.name,
      options = _ref.options,
      onChange = _ref.onChange,
      checkedValue = _ref.checkedValue,
      disabled = _ref.disabled,
      buttonProps = _ref.buttonProps;
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: options.map(function (_ref2, idx) {
      var label = _ref2.label,
          value = _ref2.value,
          optionDisabled = _ref2.disabled;
      return (0, _jsxRuntime.jsx)(_RadioButton["default"], _objectSpread({}, _objectSpread({
        id: "".concat(name, ":").concat(value),
        key: "".concat(name, ":").concat(value),
        name: name,
        disabled: disabled || optionDisabled,
        label: label,
        value: value,
        onChange: onChange,
        checked: checkedValue ? checkedValue === value : idx === 0
      }, buttonProps)));
    })
  });
};

RadioButtonGroup.propTypes = {
  name: _propTypes["default"].string.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node.isRequired,
    value: _propTypes["default"].string.isRequired,
    disabled: _propTypes["default"].bool
  })).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  checkedValue: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  buttonProps: _propTypes["default"].object // eslint-disable-line react/forbid-prop-types

};
RadioButtonGroup.defaultProps = {
  checkedValue: null,
  buttonProps: {},
  disabled: false
};
var _default = RadioButtonGroup;
exports["default"] = _default;