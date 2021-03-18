"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _async = _interopRequireDefault(require("react-select/async"));

var _asyncCreatable = _interopRequireDefault(require("react-select/async-creatable"));

var _creatable = _interopRequireDefault(require("react-select/creatable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@emotion/react");

var _buildReactSelectThemeOverrides = _interopRequireDefault(require("./buildReactSelectThemeOverrides"));

var _styledAutoCompleteComponents = _interopRequireDefault(require("./styledAutoCompleteComponents"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getReactSelectComponent = function getReactSelectComponent(variant) {
  switch (variant) {
    case 'async':
      return _async["default"];

    case 'asyncCreatable':
      return _asyncCreatable["default"];

    case 'creatable':
      return _creatable["default"];

    default:
      return _reactSelect["default"];
  }
};

var StyledAutoComplete = function StyledAutoComplete(_ref) {
  var components = _ref.components,
      _theme = _ref.theme,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["components", "theme", "variant"]);

  var SelectComponent = getReactSelectComponent(variant);

  var reactSelectProps = _objectSpread({
    components: _objectSpread(_objectSpread({}, _styledAutoCompleteComponents["default"]), components),
    theme: function theme(reactSelectTheme) {
      return _objectSpread(_objectSpread(_objectSpread({}, reactSelectTheme), (0, _buildReactSelectThemeOverrides["default"])(_theme)), _theme);
    }
  }, props);

  return (0, _jsxRuntime.jsx)(SelectComponent, _objectSpread({}, _objectSpread(_objectSpread({}, reactSelectProps), props)));
};

StyledAutoComplete.propTypes = {
  components: _propTypes["default"].objectOf(_propTypes["default"].elementType),
  theme: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  variant: _propTypes["default"].oneOf(['async', 'asyncCreatable', 'creatable', 'default'])
};
StyledAutoComplete.defaultProps = {
  components: {},
  variant: 'default'
};

var _default = (0, _react2.withTheme)(StyledAutoComplete);

exports["default"] = _default;