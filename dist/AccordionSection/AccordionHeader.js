"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledAccordionHeader = _interopRequireDefault(require("./StyledAccordionHeader"));

var _StyledAccordionHeading = _interopRequireDefault(require("./StyledAccordionHeading"));

var _StyledAccordionHeadingText = _interopRequireDefault(require("./StyledAccordionHeadingText"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _variants = _interopRequireDefault(require("./variants"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AccordionHeaderIcon = function AccordionHeaderIcon(_ref) {
  var isOpen = _ref.isOpen;
  return (0, _jsxRuntime.jsx)(_Icon["default"], {
    mr: "small",
    name: "chevron",
    rotation: isOpen ? null : '270'
  });
};

AccordionHeaderIcon.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired
};

var AccordionHeader = function AccordionHeader(_ref2) {
  var isOpen = _ref2.isOpen,
      note = _ref2.note,
      onClick = _ref2.onClick,
      panelId = _ref2.panelId,
      text = _ref2.text,
      props = _objectWithoutProperties(_ref2, ["isOpen", "note", "onClick", "panelId", "text"]);

  return (0, _jsxRuntime.jsxs)(_StyledAccordionHeader["default"], _objectSpread(_objectSpread({
    alignItems: "center",
    justifyContent: "space-between",
    px: "regular",
    onClick: onClick,
    "aria-controls": panelId,
    "aria-expanded": isOpen
  }, props), {}, {
    children: [(0, _jsxRuntime.jsx)(_StyledAccordionHeading["default"], {
      fontWeight: "medium",
      mr: "regular",
      children: (0, _jsxRuntime.jsxs)(_StyledAccordionHeadingText["default"], {
        alignItems: "center",
        "aria-controls": panelId,
        "aria-expanded": isOpen,
        children: [(0, _jsxRuntime.jsx)(AccordionHeaderIcon, {
          isOpen: isOpen
        }), text]
      })
    }), note]
  }));
};

AccordionHeader.propTypes = {
  /**
   * Whether or not the AccordionSection this header resides in is open or not.
   */
  isOpen: _propTypes["default"].bool.isRequired,

  /**
   * Optional note to render within the AccordionHeader
   */
  note: _propTypes["default"].node,

  /**
   * Callback to call whenever the StyledAccordionHeadingButton is clicked
   */
  onClick: _propTypes["default"].func,

  /**
   * ID of the AccordionPanel that holds the content of the AccordionSection.
   * Used to specify aria-controls for accessbility.
   */
  panelId: _propTypes["default"].string.isRequired,

  /**
   * Header text for the section
   */
  text: _propTypes["default"].node.isRequired,

  /**
   * Link variant for styling. See storybook for examples.
   */
  variant: _propTypes["default"].oneOf(_variants["default"]).isRequired
};
AccordionHeader.defaultProps = {
  note: null,
  onClick: function onClick() {}
};
var _default = AccordionHeader;
exports["default"] = _default;