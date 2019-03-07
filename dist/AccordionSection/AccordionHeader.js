"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledAccordionHeader = _interopRequireDefault(require("./StyledAccordionHeader"));

var _StyledAccordionHeading = _interopRequireDefault(require("./StyledAccordionHeading"));

var _StyledAccordionHeadingButton = _interopRequireDefault(require("./StyledAccordionHeadingButton"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionHeaderIcon = function AccordionHeaderIcon(_ref) {
  var isOpen = _ref.isOpen;
  return _react.default.createElement(_Icon.default, {
    mr: "small",
    name: "caret",
    rotation: isOpen ? null : '270'
  });
};

AccordionHeaderIcon.propTypes = {
  isOpen: _propTypes.default.bool.isRequired
};

var AccordionHeader = function AccordionHeader(_ref2) {
  var isOpen = _ref2.isOpen,
      note = _ref2.note,
      onClick = _ref2.onClick,
      panelId = _ref2.panelId,
      text = _ref2.text;
  return _react.default.createElement(_StyledAccordionHeader.default, {
    alignItems: "center",
    justifyContent: "space-between",
    px: "regular"
  }, _react.default.createElement(_StyledAccordionHeading.default, {
    fontWeight: "medium",
    mr: "regular"
  }, _react.default.createElement(_StyledAccordionHeadingButton.default, {
    alignItems: "center",
    "aria-controls": panelId,
    "aria-expanded": isOpen,
    onClick: onClick,
    type: "button"
  }, _react.default.createElement(AccordionHeaderIcon, {
    isOpen: isOpen
  }), text)), note);
};

AccordionHeader.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  note: _propTypes.default.node,
  onClick: _propTypes.default.func,
  panelId: _propTypes.default.string.isRequired,
  text: _propTypes.default.node.isRequired
};
AccordionHeader.defaultProps = {
  note: null,
  onClick: function onClick() {}
};
var _default = AccordionHeader;
exports.default = _default;