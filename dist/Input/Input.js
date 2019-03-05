"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputContainer = _interopRequireDefault(require("./InputContainer"));

var _StyledInput = _interopRequireDefault(require("./StyledInput"));

var _Label = _interopRequireDefault(require("../Label"));

var _Paragraph = _interopRequireDefault(require("../Paragraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(_ref) {
  var caption = _ref.caption,
      label = _ref.label,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["caption", "label", "id"]);

  return _react.default.createElement(_InputContainer.default, {
    caption: caption
  }, _react.default.createElement(_Label.default, {
    htmlFor: id
  }, label), _react.default.createElement(_StyledInput.default, _objectSpread({}, props, {
    id: id
  })), caption && _react.default.createElement(_Paragraph.default.span, {
    variant: "tiny",
    color: "red"
  }, caption));
};

Input.propTypes = {
  caption: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  large: _propTypes.default.bool
};
Input.defaultProps = {
  caption: '',
  large: false
};
var _default = Input;
exports.default = _default;