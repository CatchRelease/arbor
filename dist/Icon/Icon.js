"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rotationStyles = function rotationStyles(_ref) {
  var rotation = _ref.rotation;
  return rotation &&
  /*#__PURE__*/
  (0, _core.css)("transform:rotate(", rotation, "deg);" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JLIiwiZmlsZSI6Ii4uLy4uL3NyYy9JY29uL0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENsYXNzTmFtZXMsIGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgZGlzcGxheSxcbiAgZm9udFNpemUsXG4gIHRleHRBbGlnbixcbiAgc3BhY2UsXG4gIHRleHRTaGFkb3dcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3Qgcm90YXRpb25TdHlsZXMgPSAoeyByb3RhdGlvbiB9KSA9PlxuICByb3RhdGlvbiAmJlxuICBjc3NgXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJHtyb3RhdGlvbn1kZWcpO1xuICBgO1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmlgXG4gICR7Y29sb3J9O1xuICAke2Rpc3BsYXl9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtyb3RhdGlvblN0eWxlc307XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7dGV4dFNoYWRvd307XG5gO1xuXG5TdHlsZWRJY29uLnByb3BUeXBlcyA9IHtcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dEFsaWduLnByb3BUeXBlcyxcbiAgLi4udGV4dFNoYWRvdy5wcm9wVHlwZXNcbn07XG5cbmNvbnN0IEljb24gPSAoeyBuYW1lLCB0aGVtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGljb25Gb250UHJlZml4IH0gPSB0aGVtZTtcblxuICByZXR1cm4gKFxuICAgIDxDbGFzc05hbWVzPlxuICAgICAgeyh7IGN4IH0pID0+IChcbiAgICAgICAgPFN0eWxlZEljb25cbiAgICAgICAgICBjbGFzc05hbWU9e2N4KGljb25Gb250UHJlZml4LCBgJHtpY29uRm9udFByZWZpeH0tJHtuYW1lfWApfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9DbGFzc05hbWVzPlxuICApO1xufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpY29uIHRvIHJlbmRlci4gTXVzdCBiZSBhIHN1cHBvcnRlZCBpY29uIGxvYWRlZCB2aWEgYW4gaWNvblxuICAgKiBmb250IG9uIHRoZSBwYWdlLiBUaGUgZm9udCBwcmVmaXggd2lsbCBiZSBwcmVwZW5kZWQgYW5kIGNhbiBiZSBjdXN0b21pemVkXG4gICAqIHZpYSB0aGUgdGhlbWUgaWNvbkZvbnRQcmVmaXggdmFyaWFibGUuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEljb24gZm9udCByb3RhdGlvbi4gUm90YXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gdG8gdGhlIENTUyB0cmFuc2Zvcm1cbiAgICogcHJvcGVydHkgdXNpbmcgcm90YXRlLlxuICAgKi9cbiAgcm90YXRpb246IFByb3BUeXBlcy5vbmVPZihbJzkwJywgJzE4MCcsICcyNzAnLCBudWxsXSksXG5cbiAgLyoqXG4gICAqIFRoZW1lIHVzZWQgZm9yIHN0eWxpbmcgdGhlIEljb24uXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICByb3RhdGlvbjogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEljb24pO1xuIl19 */"));
};

var StyledIcon = (0, _styledBase["default"])("i", {
  target: "edtri8p0",
  label: "StyledIcon"
})(_styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.fontSize, ";", rotationStyles, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _styledSystem.textShadow, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0IyQiIsImZpbGUiOiIuLi8uLi9zcmMvSWNvbi9JY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBDbGFzc05hbWVzLCBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGRpc3BsYXksXG4gIGZvbnRTaXplLFxuICB0ZXh0QWxpZ24sXG4gIHNwYWNlLFxuICB0ZXh0U2hhZG93XG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHJvdGF0aW9uU3R5bGVzID0gKHsgcm90YXRpb24gfSkgPT5cbiAgcm90YXRpb24gJiZcbiAgY3NzYFxuICAgIHRyYW5zZm9ybTogcm90YXRlKCR7cm90YXRpb259ZGVnKTtcbiAgYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5pYFxuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtmb250U2l6ZX07XG4gICR7cm90YXRpb25TdHlsZXN9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke3RleHRTaGFkb3d9O1xuYDtcblxuU3R5bGVkSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLnRleHRTaGFkb3cucHJvcFR5cGVzXG59O1xuXG5jb25zdCBJY29uID0gKHsgbmFtZSwgdGhlbWUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBpY29uRm9udFByZWZpeCB9ID0gdGhlbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xhc3NOYW1lcz5cbiAgICAgIHsoeyBjeCB9KSA9PiAoXG4gICAgICAgIDxTdHlsZWRJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChpY29uRm9udFByZWZpeCwgYCR7aWNvbkZvbnRQcmVmaXh9LSR7bmFtZX1gKX1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQ2xhc3NOYW1lcz5cbiAgKTtcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgaWNvbiB0byByZW5kZXIuIE11c3QgYmUgYSBzdXBwb3J0ZWQgaWNvbiBsb2FkZWQgdmlhIGFuIGljb25cbiAgICogZm9udCBvbiB0aGUgcGFnZS4gVGhlIGZvbnQgcHJlZml4IHdpbGwgYmUgcHJlcGVuZGVkIGFuZCBjYW4gYmUgY3VzdG9taXplZFxuICAgKiB2aWEgdGhlIHRoZW1lIGljb25Gb250UHJlZml4IHZhcmlhYmxlLlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJY29uIGZvbnQgcm90YXRpb24uIFJvdGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIHRvIHRoZSBDU1MgdHJhbnNmb3JtXG4gICAqIHByb3BlcnR5IHVzaW5nIHJvdGF0ZS5cbiAgICovXG4gIHJvdGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWyc5MCcsICcxODAnLCAnMjcwJywgbnVsbF0pLFxuXG4gIC8qKlxuICAgKiBUaGVtZSB1c2VkIGZvciBzdHlsaW5nIHRoZSBJY29uLlxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm90YXRpb246IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShJY29uKTtcbiJdfQ== */"));
StyledIcon.propTypes = _objectSpread({}, _styledSystem.color.propTypes, {}, _styledSystem.fontSize.propTypes, {}, _styledSystem.space.propTypes, {}, _styledSystem.textAlign.propTypes, {}, _styledSystem.textShadow.propTypes);

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
  /**
   * Name of the icon to render. Must be a supported icon loaded via an icon
   * font on the page. The font prefix will be prepended and can be customized
   * via the theme iconFontPrefix variable.
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * Icon font rotation. Rotation will be passed in to the CSS transform
   * property using rotate.
   */
  rotation: _propTypes["default"].oneOf(['90', '180', '270', null]),

  /**
   * Theme used for styling the Icon.
   */
  theme: _propTypes["default"].object.isRequired // eslint-disable-line react/forbid-prop-types

};
Icon.defaultProps = {
  rotation: null
};

var _default = (0, _emotionTheming.withTheme)(Icon);

exports["default"] = _default;