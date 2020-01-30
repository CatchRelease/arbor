"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var iconFontSize = '16px';

var CheckboxIcon = function CheckboxIcon(_ref) {
  var checked = _ref.checked,
      indeterminate = _ref.indeterminate;

  if (indeterminate) {
    return _react["default"].createElement(_Icon["default"], {
      name: "checkbox-indeterminate",
      fontSize: iconFontSize
    });
  }

  if (checked) {
    return _react["default"].createElement(_Icon["default"], {
      name: "checkbox-checked",
      fontSize: iconFontSize
    });
  }

  return null;
};

CheckboxIcon.propTypes = {
  /**
   * Whether or not the checkbox is checked.
   */
  checked: _propTypes["default"].bool,

  /**
   * Checkbox's indeterminate state.
   */
  indeterminate: _propTypes["default"].bool
};
CheckboxIcon.defaultProps = {
  checked: false,
  indeterminate: false
};
var _default = CheckboxIcon;
exports["default"] = _default;