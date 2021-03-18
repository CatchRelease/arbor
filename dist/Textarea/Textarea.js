"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _StyledTextarea = _interopRequireDefault(require("./StyledTextarea"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Textarea = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var caption = _ref.caption,
      label = _ref.label,
      labelAside = _ref.labelAside,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["caption", "label", "labelAside", "id"]);

  return (0, _jsxRuntime.jsx)(_FormField["default"], {
    caption: caption,
    id: id,
    label: label,
    labelAside: labelAside,
    children: (0, _jsxRuntime.jsx)(_StyledTextarea["default"], _objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
      id: id,
      ref: ref
    })))
  });
});

Textarea.propTypes = {
  /**
   * Optional help text to be rendered within the FormField component
   */
  caption: _propTypes["default"].string,

  /**
   * HTML ID attribute for the inpt
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * Label text for the input
   */
  label: _propTypes["default"].string,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: _propTypes["default"].node
};
Textarea.defaultProps = {
  caption: '',
  label: '',
  labelAside: null
};
var _default = Textarea;
exports["default"] = _default;