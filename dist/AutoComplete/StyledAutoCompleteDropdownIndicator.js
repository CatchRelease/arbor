"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["cx", "innerProps", "selectProps"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledAutoCompleteDropdownIndicator = function StyledAutoCompleteDropdownIndicator(_ref) {
  var cx = _ref.cx,
      innerProps = _ref.innerProps,
      hideDropdownIndicator = _ref.selectProps.hideDropdownIndicator,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _jsxRuntime.jsx)(_Icon["default"], _objectSpread({
    display: hideDropdownIndicator ? 'none' : 'block',
    "aria-label": "show options",
    name: "chevron"
  }, _objectSpread(_objectSpread({}, innerProps), props)));
};

StyledAutoCompleteDropdownIndicator.propTypes = {
  cx: _propTypes["default"].func.isRequired,
  innerProps: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  selectProps: _propTypes["default"].shape({
    hideDropdownIndicator: _propTypes["default"].bool
  }).isRequired
};
StyledAutoCompleteDropdownIndicator.defaultProps = {
  innerProps: {}
};
var _default = StyledAutoCompleteDropdownIndicator;
exports["default"] = _default;