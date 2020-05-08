"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledAvatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _avatars = require("../theme/avatars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledAvatar = function StyledAvatar(_ref) {
  var baseColor = _ref.baseColor,
      border = _ref.border,
      size = _ref.size,
      subtle = _ref.subtle,
      avatarSizes = _ref.theme.avatarSizes,
      props = _objectWithoutProperties(_ref, ["baseColor", "border", "size", "subtle", "theme"]);

  var bg = subtle ? "monochrome.white" : baseColor;
  var borderColor = baseColor;
  return /*#__PURE__*/_react["default"].createElement(_Flex["default"], _objectSpread({
    width: avatarSizes[size],
    height: avatarSizes[size],
    bg: bg,
    border: border,
    borderColor: borderColor
  }, props));
};

exports.StyledAvatar = StyledAvatar;
StyledAvatar.propTypes = {
  baseColor: _propTypes["default"].string.isRequired,
  border: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(Object.keys(_avatars.sizes)).isRequired,
  subtle: _propTypes["default"].bool.isRequired
};

var _default = (0, _emotionTheming.withTheme)(StyledAvatar);

exports["default"] = _default;