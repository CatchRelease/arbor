"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

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

var groupOnChange = function groupOnChange(e, setCheckedValueState, onChange) {
  var value = e.target.value;
  setCheckedValueState(value);
  onChange(e);
};

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var name = _ref.name,
      options = _ref.options,
      onChange = _ref.onChange,
      checkedValue = _ref.checkedValue,
      disabled = _ref.disabled,
      buttonProps = _ref.buttonProps;

  var _useState = (0, _react.useState)(checkedValue),
      _useState2 = _slicedToArray(_useState, 2),
      checkedValueState = _useState2[0],
      setCheckedValueState = _useState2[1];

  var buttonOnChange = function buttonOnChange(e) {
    groupOnChange(e, setCheckedValueState, onChange);
  };

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
        onChange: buttonOnChange,
        checked: checkedValueState ? checkedValueState === value : idx === 0
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