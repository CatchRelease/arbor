"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Button = _interopRequireDefault(require("../Button"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePickerNavbar = function DatePickerNavbar(_ref) {
  var onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_Flex["default"], {
    className: className,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    iconStart: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      color: "icon.default",
      name: "chevron",
      rotation: "90"
    }),
    onClick: function onClick() {
      return onPreviousClick();
    },
    size: "small",
    variant: "minimal",
    "aria-label": "Previous Month",
    type: "button"
  }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mr: "small",
    ml: "small"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    color: "icon.default",
    fontSize: "size5",
    name: "symbol-circle"
  })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    iconStart: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      color: "icon.default",
      name: "chevron",
      rotation: "270"
    }),
    onClick: function onClick() {
      return onNextClick();
    },
    size: "small",
    variant: "minimal",
    "aria-label": "Next Month",
    type: "button"
  }));
};

DatePickerNavbar.propTypes = {
  /**
   * Classname to aply to the wrapping container of the DatePickerNavbar content
   */
  className: _propTypes["default"].string.isRequired,

  /**
   * Callback called when the user clicks on the 'Next Month' button
   */
  onNextClick: _propTypes["default"].func.isRequired,

  /**
   * Callback called when the user clicks on the 'Previous Month' button
   */
  onPreviousClick: _propTypes["default"].func.isRequired
};
var _default = DatePickerNavbar;
exports["default"] = _default;