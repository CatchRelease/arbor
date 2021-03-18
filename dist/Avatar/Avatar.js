"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _avatars = require("../theme/avatars");

var _colors = require("../theme/colors");

var _utils = require("../utils");

var _StyledAvatar = _interopRequireDefault(require("./StyledAvatar"));

var _StyledAvatarText = _interopRequireDefault(require("./StyledAvatarText"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AVATAR_COLORS = Object.keys(_colors.palette).map(function (color) {
  return "palette.".concat(color, ".default");
});

var getInitials = function getInitials(name) {
  var _name$split = name.split(' '),
      _name$split2 = _toArray(_name$split),
      firstName = _name$split2[0],
      additionalNames = _name$split2.slice(1);

  var firstInitial = firstName[0];

  if (additionalNames.length) {
    var lastName = additionalNames[additionalNames.length - 1];
    var lastInitial = lastName[0];
    return "".concat(firstInitial).concat(lastInitial);
  }

  return firstInitial;
};

var getText = function getText(name) {
  return name.match(/[A-Za-z]/) ? getInitials(name).toUpperCase() : name;
};

var Avatar = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var name = _ref.name,
      subtle = _ref.subtle,
      size = _ref.size,
      baseColorProp = _ref.baseColor,
      props = _objectWithoutProperties(_ref, ["name", "subtle", "size", "baseColor"]);

  var baseColor = baseColorProp || (0, _utils.colorForString)(name, AVATAR_COLORS);
  return (0, _jsxRuntime.jsx)(_StyledAvatar["default"], _objectSpread(_objectSpread({}, _objectSpread({
    alignItems: 'center',
    baseColor: baseColor,
    border: '1px solid',
    borderRadius: '50%',
    justifyContent: 'center',
    size: size,
    subtle: subtle,
    ref: ref
  }, props)), {}, {
    children: (0, _jsxRuntime.jsx)(_StyledAvatarText["default"], {
      baseColor: baseColor,
      size: size,
      subtle: subtle,
      children: getText(name)
    })
  }));
});

Avatar.propTypes = {
  /**
   * Base color to use for the avatar
   */
  baseColor: _propTypes["default"].string,

  /**
   * The name for the user's avatar. The name is used to determine the color for
   * the avatar component. See utils/colorForString.
   *
   * The initials for display will also be determined based of the name
   * provided.
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * Visual size of the Avatar component
   */
  size: _propTypes["default"].oneOf(Object.keys(_avatars.sizes)),

  /**
   * Use a subtle version of the avatar's color styling.
   * */
  subtle: _propTypes["default"].bool
};
Avatar.defaultProps = {
  baseColor: undefined,
  size: 'default',
  subtle: false
};
var _default = Avatar;
exports["default"] = _default;