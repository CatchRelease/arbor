"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _StyledSelect = _interopRequireDefault(require("./StyledSelect"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var caption = _ref.caption,
      children = _ref.children,
      label = _ref.label,
      labelAside = _ref.labelAside,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["caption", "children", "label", "labelAside", "id"]);

  var select = (0, _jsxRuntime.jsx)(_StyledSelect["default"], _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
    id: id,
    ref: ref
  })), {}, {
    children: children
  }));
  return caption || label ? (0, _jsxRuntime.jsx)(_FormField["default"], {
    caption: caption,
    id: id,
    label: label,
    labelAside: labelAside,
    children: select
  }) : select;
});
Select.propTypes = {
  /**
   * Help text to be displayed in the FormField for the Select.
   */
  caption: _propTypes["default"].string,

  /**
   * Select options to be displayed within the menu
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,

  /**
   * HTML ID for the select
   */
  id: _propTypes["default"].string,

  /**
   * Label text for the select
   */
  label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: _propTypes["default"].node
};
Select.defaultProps = {
  id: undefined,
  caption: '',
  label: '',
  labelAside: null
};
var _default = Select;
exports["default"] = _default;