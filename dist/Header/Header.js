"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledHeader = _interopRequireDefault(require("./StyledHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getColumns = function getColumns() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var forHeading = 'minmax(auto, 100%)';
  if (!children.length) return forHeading;
  return "".concat(forHeading, " repeat(").concat(children.length, ", auto)");
};

var Header = function Header(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _React$Children$toArr = _react["default"].Children.toArray(children),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      headingText = _React$Children$toArr2[0],
      remainingChildren = _React$Children$toArr2.slice(1);

  return _react["default"].createElement(_StyledHeader["default"], _extends({
    alignItems: "end",
    gridGap: "small",
    gridTemplateColumns: getColumns(remainingChildren)
  }, props), headingText, remainingChildren);
};

Header.propTypes = {
  /**
   * Content to be displayed within the StyledHeader. gridTemplateColumns will
   * be determined by the number of children passed in to properly distribute
   * content.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired
};
var _default = Header;
exports["default"] = _default;