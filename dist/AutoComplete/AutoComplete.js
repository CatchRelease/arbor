"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _StyledAutoComplete = _interopRequireDefault(require("./StyledAutoComplete"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AutoComplete = function AutoComplete(_ref) {
  var caption = _ref.caption,
      id = _ref.id,
      label = _ref.label,
      labelAside = _ref.labelAside,
      props = _objectWithoutProperties(_ref, ["caption", "id", "label", "labelAside"]);

  return (0, _jsxRuntime.jsx)(_FormField["default"], {
    caption: caption,
    id: id,
    label: label,
    labelAside: labelAside,
    children: (0, _jsxRuntime.jsx)(_StyledAutoComplete["default"], _objectSpread({
      "aria-label": label
    }, props))
  });
};

AutoComplete.propTypes = {
  /**
   * Optional text to be displayed underneath the input.
   */
  caption: _propTypes["default"].string,

  /**
   * Boolean to hide the dropdown indicator in the input field.
   */
  hideDropdownIndicator: _propTypes["default"].bool,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * Label text for the form field
   */
  label: _propTypes["default"].string.isRequired,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: _propTypes["default"].node
  /**
   * All react-select props can be passed through to customize ReactSelect Components
   */

};
AutoComplete.defaultProps = {
  caption: '',
  hideDropdownIndicator: false,
  labelAside: null
};
var _default = AutoComplete;
exports["default"] = _default;