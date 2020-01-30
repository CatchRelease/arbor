"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Label = _interopRequireDefault(require("../Label"));

var _Paragraph = _interopRequireDefault(require("../Paragraph"));

var _StyledFormField = _interopRequireDefault(require("./StyledFormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormField = function FormField(_ref) {
  var caption = _ref.caption,
      children = _ref.children,
      label = _ref.label,
      labelAside = _ref.labelAside,
      id = _ref.id;
  return _react["default"].createElement(_StyledFormField["default"], {
    caption: caption
  }, _react["default"].createElement(_Flex["default"], {
    alignItems: "center"
  }, label && _react["default"].createElement(_Flex["default"], {
    flex: "1",
    alignItems: "center"
  }, _react["default"].createElement(_Label["default"], {
    htmlFor: id
  }, label)), labelAside && _react["default"].createElement(_Flex["default"], {
    color: "text.muted",
    fontSize: "size4"
  }, labelAside)), children, caption && _react["default"].createElement(_Paragraph["default"], {
    as: "span",
    variant: "tiny",
    color: "palette.red.default"
  }, caption));
};

FormField.propTypes = {
  /**
   * Optional text to be displayed underneath the input.
   */
  caption: _propTypes["default"].string,

  /** Field to be rendered within the FormField component
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * Label text for the form field
   */
  label: _propTypes["default"].string,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: _propTypes["default"].node
};
FormField.defaultProps = {
  caption: '',
  label: '',
  labelAside: null
};
var _default = FormField;
exports["default"] = _default;