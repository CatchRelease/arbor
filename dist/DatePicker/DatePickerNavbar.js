"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Button = _interopRequireDefault(require("../Button"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePickerNavbar = function DatePickerNavbar(_ref) {
  var onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      className = _ref.className;
  return (0, _jsxRuntime.jsxs)(_Flex["default"], {
    className: className,
    alignItems: "center",
    children: [(0, _jsxRuntime.jsx)(_Button["default"], {
      iconStart: (0, _jsxRuntime.jsx)(_Icon["default"], {
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
    }), (0, _jsxRuntime.jsx)(_Box["default"], {
      mr: "small",
      ml: "small",
      children: (0, _jsxRuntime.jsx)(_Icon["default"], {
        color: "icon.default",
        fontSize: "size5",
        name: "symbol-circle"
      })
    }), (0, _jsxRuntime.jsx)(_Button["default"], {
      iconStart: (0, _jsxRuntime.jsx)(_Icon["default"], {
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
    })]
  });
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