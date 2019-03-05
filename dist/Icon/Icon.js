"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rotationStyles = function rotationStyles(_ref) {
  var rotation = _ref.rotation;
  return rotation &&
  /*#__PURE__*/
  (0, _core.css)("transform:rotate(", rotation, "deg);label:rotationStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0siLCJmaWxlIjoiLi4vLi4vc3JjL0ljb24vSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgQ2xhc3NOYW1lcywgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNvbG9yLCBkaXNwbGF5LCBmb250U2l6ZSwgdGV4dEFsaWduLCBzcGFjZSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHJvdGF0aW9uU3R5bGVzID0gKHsgcm90YXRpb24gfSkgPT5cbiAgcm90YXRpb24gJiZcbiAgY3NzYFxuICAgIHRyYW5zZm9ybTogcm90YXRlKCR7cm90YXRpb259ZGVnKTtcbiAgYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5pYFxuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtmb250U2l6ZX07XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7cm90YXRpb25TdHlsZXN9O1xuYDtcblxuU3R5bGVkSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cbmNvbnN0IEljb24gPSAoeyBuYW1lLCB0aGVtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGljb25Gb250UHJlZml4IH0gPSB0aGVtZTtcblxuICByZXR1cm4gKFxuICAgIDxDbGFzc05hbWVzPlxuICAgICAgeyh7IGN4IH0pID0+IChcbiAgICAgICAgPFN0eWxlZEljb25cbiAgICAgICAgICBjbGFzc05hbWU9e2N4KGljb25Gb250UHJlZml4LCBgJHtpY29uRm9udFByZWZpeH0tJHtuYW1lfWApfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9DbGFzc05hbWVzPlxuICApO1xufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcm90YXRpb246IFByb3BUeXBlcy5vbmVPZihbJzkwJywgJzE4MCcsICcyNzAnLCBudWxsXSlcbn07XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICByb3RhdGlvbjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEljb24pO1xuIl19 */"));
};

var StyledIcon = (0, _styledBase.default)("i", {
  target: "edtri8p0",
  label: "StyledIcon"
})(_styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.fontSize, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", rotationStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYTJCIiwiZmlsZSI6Ii4uLy4uL3NyYy9JY29uL0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENsYXNzTmFtZXMsIGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjb2xvciwgZGlzcGxheSwgZm9udFNpemUsIHRleHRBbGlnbiwgc3BhY2UgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCByb3RhdGlvblN0eWxlcyA9ICh7IHJvdGF0aW9uIH0pID0+XG4gIHJvdGF0aW9uICYmXG4gIGNzc2BcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgke3JvdGF0aW9ufWRlZyk7XG4gIGA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuaWBcbiAgJHtjb2xvcn07XG4gICR7ZGlzcGxheX07XG4gICR7Zm9udFNpemV9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke3JvdGF0aW9uU3R5bGVzfTtcbmA7XG5cblN0eWxlZEljb24ucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzXG59O1xuXG5jb25zdCBJY29uID0gKHsgbmFtZSwgdGhlbWUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBpY29uRm9udFByZWZpeCB9ID0gdGhlbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xhc3NOYW1lcz5cbiAgICAgIHsoeyBjeCB9KSA9PiAoXG4gICAgICAgIDxTdHlsZWRJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChpY29uRm9udFByZWZpeCwgYCR7aWNvbkZvbnRQcmVmaXh9LSR7bmFtZX1gKX1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQ2xhc3NOYW1lcz5cbiAgKTtcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJvdGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWyc5MCcsICcxODAnLCAnMjcwJywgbnVsbF0pXG59O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm90YXRpb246IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShJY29uKTtcbiJdfQ== */"));
StyledIcon.propTypes = _objectSpread({}, _styledSystem.color.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes);

var Icon = function Icon(_ref2) {
  var name = _ref2.name,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["name", "theme"]);

  var iconFontPrefix = theme.iconFontPrefix;
  return (0, _core.jsx)(_core.ClassNames, null, function (_ref3) {
    var cx = _ref3.cx;
    return (0, _core.jsx)(StyledIcon, _extends({
      className: cx(iconFontPrefix, "".concat(iconFontPrefix, "-").concat(name))
    }, props));
  });
};

Icon.propTypes = {
  name: _propTypes.default.string.isRequired,
  rotation: _propTypes.default.oneOf(['90', '180', '270', null])
};
Icon.defaultProps = {
  rotation: null
};

var _default = (0, _emotionTheming.withTheme)(Icon);

exports.default = _default;