"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _CheckboxIcon = _interopRequireDefault(require("./CheckboxIcon"));

var _CheckboxInput = _interopRequireDefault(require("./CheckboxInput"));

var _CheckboxLabel = _interopRequireDefault(require("./CheckboxLabel"));

var _StyledCheckbox = _interopRequireDefault(require("./StyledCheckbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      disabled = _ref.disabled,
      isInvalid = _ref.isInvalid,
      checked = _ref.checked,
      onChange = _ref.onChange,
      value = _ref.value,
      indeterminate = _ref.indeterminate,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate", "icon"]);

  return _react.default.createElement(_CheckboxLabel.default, _extends({
    alignItems: "center",
    my: "regular"
  }, props), _react.default.createElement(_CheckboxInput.default, {
    id: id,
    type: "checkbox",
    name: name,
    value: value,
    checked: checked || indeterminate,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": isInvalid
  }), _react.default.createElement(_StyledCheckbox.default, {
    disabled: disabled,
    checked: checked,
    indeterminate: indeterminate
  }, _react.default.createElement(_CheckboxIcon.default, {
    checked: checked,
    indeterminate: indeterminate
  })), icon && _react.default.createElement(_Icon.default, {
    fontSize: "24px",
    name: icon,
    color: disabled ? 'grey20' : 'grey50',
    ml: "smaller"
  }), _react.default.createElement(_Text.default.span, {
    fontSize: "size2",
    color: disabled ? 'grey40' : 'grey100',
    ml: icon ? 'smallest' : 'smaller'
  }, label));
};

Checkbox.propTypes = {
  /**
   * The checked attribute of the checkbox.
   */
  checked: _propTypes.default.bool,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The id attribute of the checkbox.
   */
  id: _propTypes.default.string.isRequired,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: _propTypes.default.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes.default.bool,

  /**
   * Label of the checkbox.
   */
  label: _propTypes.default.node.isRequired,

  /**
   * The name attribute of the checkbox.
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes.default.func,

  /**
   * The value attribute of the checkbox.
   */
  value: _propTypes.default.string
};
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  isInvalid: false,
  onChange: function onChange() {},
  value: ''
};
var _default = Checkbox;
exports.default = _default;