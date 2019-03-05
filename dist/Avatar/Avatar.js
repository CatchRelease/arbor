"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _Flex = _interopRequireDefault(require("../Flex"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AVATAR_COLORS = ['blue', 'red', 'bronze', 'green'];

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

var Avatar = function Avatar(_ref) {
  var name = _ref.name;
  return _react.default.createElement(_Flex.default, {
    alignItems: "center",
    bg: (0, _utils.colorForString)(name, AVATAR_COLORS),
    borderRadius: "50%",
    height: "24px",
    justifyContent: "center",
    width: "24px"
  }, _react.default.createElement(_Text.default, {
    color: "white",
    fontSize: "size2"
  }, getInitials(name).toUpperCase()));
};

Avatar.propTypes = {
  name: _propTypes.default.string.isRequired
};
var _default = Avatar;
exports.default = _default;