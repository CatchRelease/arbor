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

var RadioButtonIcon = function RadioButtonIcon(_ref) {
  var checked = _ref.checked;

  if (checked) {
    return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "radio-checked",
      fontSize: iconFontSize
    });
  }

  return null;
};

RadioButtonIcon.propTypes = {
  /**
   * Whether or not the checkbox is checked.
   */
  checked: _propTypes["default"].bool
};
RadioButtonIcon.defaultProps = {
  checked: false
};
var _default = RadioButtonIcon;
exports["default"] = _default;