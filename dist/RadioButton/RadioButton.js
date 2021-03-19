"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _RadioButtonIcon = _interopRequireDefault(require("./RadioButtonIcon"));

var _RadioButtonInput = _interopRequireDefault(require("./RadioButtonInput"));

var _RadioButtonLabel = _interopRequireDefault(require("./RadioButtonLabel"));

var _StyledRadioButton = _interopRequireDefault(require("./StyledRadioButton"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      disabled = _ref.disabled,
      isInvalid = _ref.isInvalid,
      checked = _ref.checked,
      onChange = _ref.onChange,
      value = _ref.value,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "icon"]);

  return (0, _jsxRuntime.jsxs)(_RadioButtonLabel["default"], _objectSpread(_objectSpread({
    alignItems: "center",
    my: "regular"
  }, props), {}, {
    children: [(0, _jsxRuntime.jsx)(_RadioButtonInput["default"], {
      id: id,
      type: "radio",
      name: name,
      value: value,
      checked: checked,
      onChange: onChange,
      disabled: disabled,
      "aria-invalid": isInvalid
    }), (0, _jsxRuntime.jsx)(_StyledRadioButton["default"], {
      disabled: disabled,
      checked: checked,
      children: (0, _jsxRuntime.jsx)(_RadioButtonIcon["default"], {
        checked: checked
      })
    }), icon && (0, _jsxRuntime.jsx)(_Icon["default"], {
      fontSize: "24px",
      name: icon,
      color: disabled ? 'icon.disabled' : 'icon.default',
      ml: "smaller"
    }), (0, _jsxRuntime.jsx)(_Text["default"], {
      as: "span",
      fontSize: "size4",
      color: disabled ? 'text.disabled' : 'text.default',
      ml: icon ? 'smallest' : 'smaller',
      children: label
    })]
  }));
};

RadioButton.propTypes = {
  /**
   * The checked attribute of the checkbox.
   */
  checked: _propTypes["default"].bool,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * The icon to display alongside the label.
   */
  icon: _propTypes["default"].elementType,

  /**
   * The id attribute of the checkbox.
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * Label of the checkbox.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * The name attribute of the checkbox.
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * The value attribute of the checkbox.
   */
  value: _propTypes["default"].string
};
RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  icon: undefined,
  isInvalid: false,
  onChange: function onChange() {},
  value: ''
};
var _default = RadioButton;
exports["default"] = _default;