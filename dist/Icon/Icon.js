"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rotationStyles = function rotationStyles(_ref) {
  var rotation = _ref.rotation;
  return rotation && /*#__PURE__*/(0, _core.css)("transform:rotate(", rotation, "deg);" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JLIiwiZmlsZSI6Ii4uLy4uL3NyYy9JY29uL0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDbGFzc05hbWVzLCBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGRpc3BsYXksXG4gIGZvbnRTaXplLFxuICB0ZXh0QWxpZ24sXG4gIHNwYWNlLFxuICB0ZXh0U2hhZG93LFxuICBvcGFjaXR5XG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHJvdGF0aW9uU3R5bGVzID0gKHsgcm90YXRpb24gfSkgPT5cbiAgcm90YXRpb24gJiZcbiAgY3NzYFxuICAgIHRyYW5zZm9ybTogcm90YXRlKCR7cm90YXRpb259ZGVnKTtcbiAgYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5pYFxuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtmb250U2l6ZX07XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7cm90YXRpb25TdHlsZXN9O1xuICAke3RleHRTaGFkb3d9O1xuICAke29wYWNpdHl9O1xuYDtcblxuU3R5bGVkSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLnRleHRTaGFkb3cucHJvcFR5cGVzLFxuICAuLi5vcGFjaXR5LnByb3BUeXBlc1xufTtcblxuY29uc3QgSWNvbiA9ICh7IG5hbWUsIHRoZW1lLCBpY29uUmVmLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgaWNvbkZvbnRQcmVmaXggfSA9IHRoZW1lO1xuXG4gIHJldHVybiAoXG4gICAgPENsYXNzTmFtZXM+XG4gICAgICB7KHsgY3ggfSkgPT4gKFxuICAgICAgICA8U3R5bGVkSWNvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goaWNvbkZvbnRQcmVmaXgsIGAke2ljb25Gb250UHJlZml4fS0ke25hbWV9YCl9XG4gICAgICAgICAgcmVmPXtpY29uUmVmfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9DbGFzc05hbWVzPlxuICApO1xufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpY29uIHRvIHJlbmRlci4gTXVzdCBiZSBhIHN1cHBvcnRlZCBpY29uIGxvYWRlZCB2aWEgYW4gaWNvblxuICAgKiBmb250IG9uIHRoZSBwYWdlLiBUaGUgZm9udCBwcmVmaXggd2lsbCBiZSBwcmVwZW5kZWQgYW5kIGNhbiBiZSBjdXN0b21pemVkXG4gICAqIHZpYSB0aGUgdGhlbWUgaWNvbkZvbnRQcmVmaXggdmFyaWFibGUuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEljb24gZm9udCByb3RhdGlvbi4gUm90YXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gdG8gdGhlIENTUyB0cmFuc2Zvcm1cbiAgICogcHJvcGVydHkgdXNpbmcgcm90YXRlLlxuICAgKi9cbiAgcm90YXRpb246IFByb3BUeXBlcy5vbmVPZihbJzkwJywgJzE4MCcsICcyNzAnLCBudWxsXSksXG5cbiAgLyoqXG4gICAqIFRoZW1lIHVzZWQgZm9yIHN0eWxpbmcgdGhlIEljb24uXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG5cbiAgLyoqXG4gICAqIFJlZiBmcm9tIGZvcndhcmQgcmVmXG4gICAqL1xuICBpY29uUmVmOiBQcm9wVHlwZXMuYW55IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICByb3RhdGlvbjogbnVsbCxcbiAgaWNvblJlZjogbnVsbFxufTtcblxuY29uc3QgV2l0aFRoZW1lSWNvbiA9IHdpdGhUaGVtZShJY29uKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gPFdpdGhUaGVtZUljb24gey4uLnByb3BzfSBpY29uUmVmPXtyZWZ9IC8+O1xufSk7XG4iXX0= */"));
};

var StyledIcon = (0, _styledBase["default"])("i", {
  target: "edtri8p0",
  label: "StyledIcon"
})(_styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.fontSize, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", rotationStyles, ";", _styledSystem.textShadow, ";", _styledSystem.opacity, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0IyQiIsImZpbGUiOiIuLi8uLi9zcmMvSWNvbi9JY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lcywgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBkaXNwbGF5LFxuICBmb250U2l6ZSxcbiAgdGV4dEFsaWduLFxuICBzcGFjZSxcbiAgdGV4dFNoYWRvdyxcbiAgb3BhY2l0eVxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCByb3RhdGlvblN0eWxlcyA9ICh7IHJvdGF0aW9uIH0pID0+XG4gIHJvdGF0aW9uICYmXG4gIGNzc2BcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgke3JvdGF0aW9ufWRlZyk7XG4gIGA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuaWBcbiAgJHtjb2xvcn07XG4gICR7ZGlzcGxheX07XG4gICR7Zm9udFNpemV9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke3JvdGF0aW9uU3R5bGVzfTtcbiAgJHt0ZXh0U2hhZG93fTtcbiAgJHtvcGFjaXR5fTtcbmA7XG5cblN0eWxlZEljb24ucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxuICAuLi50ZXh0U2hhZG93LnByb3BUeXBlcyxcbiAgLi4ub3BhY2l0eS5wcm9wVHlwZXNcbn07XG5cbmNvbnN0IEljb24gPSAoeyBuYW1lLCB0aGVtZSwgaWNvblJlZiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGljb25Gb250UHJlZml4IH0gPSB0aGVtZTtcblxuICByZXR1cm4gKFxuICAgIDxDbGFzc05hbWVzPlxuICAgICAgeyh7IGN4IH0pID0+IChcbiAgICAgICAgPFN0eWxlZEljb25cbiAgICAgICAgICBjbGFzc05hbWU9e2N4KGljb25Gb250UHJlZml4LCBgJHtpY29uRm9udFByZWZpeH0tJHtuYW1lfWApfVxuICAgICAgICAgIHJlZj17aWNvblJlZn1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQ2xhc3NOYW1lcz5cbiAgKTtcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgaWNvbiB0byByZW5kZXIuIE11c3QgYmUgYSBzdXBwb3J0ZWQgaWNvbiBsb2FkZWQgdmlhIGFuIGljb25cbiAgICogZm9udCBvbiB0aGUgcGFnZS4gVGhlIGZvbnQgcHJlZml4IHdpbGwgYmUgcHJlcGVuZGVkIGFuZCBjYW4gYmUgY3VzdG9taXplZFxuICAgKiB2aWEgdGhlIHRoZW1lIGljb25Gb250UHJlZml4IHZhcmlhYmxlLlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJY29uIGZvbnQgcm90YXRpb24uIFJvdGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIHRvIHRoZSBDU1MgdHJhbnNmb3JtXG4gICAqIHByb3BlcnR5IHVzaW5nIHJvdGF0ZS5cbiAgICovXG4gIHJvdGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWyc5MCcsICcxODAnLCAnMjcwJywgbnVsbF0pLFxuXG4gIC8qKlxuICAgKiBUaGVtZSB1c2VkIGZvciBzdHlsaW5nIHRoZSBJY29uLlxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuXG4gIC8qKlxuICAgKiBSZWYgZnJvbSBmb3J3YXJkIHJlZlxuICAgKi9cbiAgaWNvblJlZjogUHJvcFR5cGVzLmFueSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm90YXRpb246IG51bGwsXG4gIGljb25SZWY6IG51bGxcbn07XG5cbmNvbnN0IFdpdGhUaGVtZUljb24gPSB3aXRoVGhlbWUoSWNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgcmV0dXJuIDxXaXRoVGhlbWVJY29uIHsuLi5wcm9wc30gaWNvblJlZj17cmVmfSAvPjtcbn0pO1xuIl19 */"));
StyledIcon.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.color.propTypes), _styledSystem.fontSize.propTypes), _styledSystem.space.propTypes), _styledSystem.textAlign.propTypes), _styledSystem.textShadow.propTypes), _styledSystem.opacity.propTypes);

var Icon = function Icon(_ref2) {
  var name = _ref2.name,
      theme = _ref2.theme,
      iconRef = _ref2.iconRef,
      props = _objectWithoutProperties(_ref2, ["name", "theme", "iconRef"]);

  var iconFontPrefix = theme.iconFontPrefix;
  return (0, _core.jsx)(_core.ClassNames, null, function (_ref3) {
    var cx = _ref3.cx;
    return (0, _core.jsx)(StyledIcon, _extends({
      className: cx(iconFontPrefix, "".concat(iconFontPrefix, "-").concat(name)),
      ref: iconRef
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
  theme: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types

  /**
   * Ref from forward ref
   */
  iconRef: _propTypes["default"].any // eslint-disable-line react/forbid-prop-types

};
Icon.defaultProps = {
  rotation: null,
  iconRef: null
};
var WithThemeIcon = (0, _emotionTheming.withTheme)(Icon);

var _default = _react["default"].forwardRef(function (props, ref) {
  return (0, _core.jsx)(WithThemeIcon, _extends({}, props, {
    iconRef: ref
  }));
});

exports["default"] = _default;