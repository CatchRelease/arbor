"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _StyledInput = _interopRequireDefault(require("./StyledInput"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["caption", "label", "labelAside", "id", "onBlur", "onChange", "validate", "value"];

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

var Input = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var caption = _ref.caption,
      label = _ref.label,
      labelAside = _ref.labelAside,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      validate = _ref.validate,
      propValue = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      touched = _useState2[0],
      setTouched = _useState2[1];

  var _useState3 = (0, _react.useState)(propValue),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var errorMessage = touched && validate(value);

  var handleBlur = function handleBlur(event) {
    setTouched(true);

    if (onBlur) {
      onBlur(event);
    }
  };

  var handleChange = function handleChange(event) {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (0, _jsxRuntime.jsx)(_FormField["default"], {
    caption: errorMessage || caption,
    id: id,
    label: label,
    labelAside: labelAside,
    children: (0, _jsxRuntime.jsx)(_StyledInput["default"], _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
      id: id,
      ref: ref
    })), {}, {
      value: propValue ? propValue.toString() : propValue,
      isInvalid: !!errorMessage,
      onBlur: handleBlur,
      onChange: handleChange
    }))
  });
});
Input.propTypes = {
  /**
   * The actualy HTML element tag to use when rendering.
   */
  as: _propTypes["default"].string,

  /**
   * Optional text to be displayed underneath the input.
   */
  caption: _propTypes["default"].string,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * Label text for the form field
   */
  label: _propTypes["default"].string,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: _propTypes["default"].node,

  /**
   * Function called when input loses focus.
   */
  onBlur: _propTypes["default"].func,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * HTML Input type
   */
  type: _propTypes["default"].string,

  /**
   * Optional validate function.
   */
  validate: _propTypes["default"].func,

  /**
   * HTML Input value
   */
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool])
};
Input.defaultProps = {
  as: 'input',
  caption: '',
  label: '',
  labelAside: null,
  onBlur: undefined,
  onChange: undefined,
  type: 'text',
  validate: function validate() {
    return undefined;
  },
  value: undefined
};
var _default = Input;
exports["default"] = _default;