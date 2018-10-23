"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _styledSystem = require("styled-system");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledIcon =
/*#__PURE__*/
(0, _reactEmotion.default)("i", {
  label: "StyledIcon",
  target: "eww2zlf0"
})(_styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0yQiIsImZpbGUiOiIuLi9zcmMvSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGN4IH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBjb2xvciwgZm9udFNpemUsIHRleHRBbGlnbiwgc3BhY2UgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmlgXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbmA7XG5cblN0eWxlZEljb24ucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzXG59O1xuXG5leHBvcnQgY29uc3QgSWNvbiA9ICh7IG5hbWUsIHRoZW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgaWNvbkZvbnRQcmVmaXggfSA9IHRoZW1lO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEljb25cbiAgICAgIGNsYXNzTmFtZT17Y3goaWNvbkZvbnRQcmVmaXgsIGAke2ljb25Gb250UHJlZml4fS0ke25hbWV9YCl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShJY29uKTtcbiJdfQ== */");
StyledIcon.propTypes = _objectSpread({}, _styledSystem.color.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes);

var Icon = function Icon(_ref) {
  var name = _ref.name,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["name", "theme"]);

  var iconFontPrefix = theme.iconFontPrefix;
  return _react.default.createElement(StyledIcon, _extends({
    className: (0, _reactEmotion.cx)(iconFontPrefix, "".concat(iconFontPrefix, "-").concat(name))
  }, props));
};

exports.Icon = Icon;
Icon.propTypes = {
  name: _propTypes.default.string.isRequired
};

var _default = (0, _emotionTheming.withTheme)(Icon);

exports.default = _default;