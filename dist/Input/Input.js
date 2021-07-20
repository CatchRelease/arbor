"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _FormField = _interopRequireDefault(require("../FormField"));

var _StyledInput = _interopRequireDefault(require("./StyledInput"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["caption", "label", "labelAside", "id", "onBlur", "onChange", "type", "validate", "value"];

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
  var _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$labelAside = _ref.labelAside,
      labelAside = _ref$labelAside === void 0 ? null : _ref$labelAside,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$validate = _ref.validate,
      validate = _ref$validate === void 0 ? function () {
    return undefined;
  } : _ref$validate,
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
      ref: ref,
      type: type
    })), {}, {
      value: propValue ? propValue.toString() : propValue,
      isInvalid: !!errorMessage,
      onBlur: handleBlur,
      onChange: handleChange
    }))
  });
});
var _default = Input;
exports["default"] = _default;