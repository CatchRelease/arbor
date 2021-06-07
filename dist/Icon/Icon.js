"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("react");

var _react2 = require("@emotion/react");

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["className", "name", "theme", "iconRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rotationStyles = function rotationStyles(_ref) {
  var rotation = _ref.rotation;
  return rotation && /*#__PURE__*/(0, _react2.css)("transform:rotate(", rotation, "deg);;label:rotationStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJLIiwiZmlsZSI6Ii4uLy4uL3NyYy9JY29uL0ljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lcywgY3NzLCB3aXRoVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgZGlzcGxheSxcbiAgZm9udFNpemUsXG4gIHRleHRBbGlnbixcbiAgc3BhY2UsXG4gIHRleHRTaGFkb3csXG4gIG9wYWNpdHlcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHJvdGF0aW9uU3R5bGVzID0gKHsgcm90YXRpb24gfSkgPT5cbiAgcm90YXRpb24gJiZcbiAgY3NzYFxuICAgIHRyYW5zZm9ybTogcm90YXRlKCR7cm90YXRpb259ZGVnKTtcbiAgYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5pYFxuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtmb250U2l6ZX07XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7cm90YXRpb25TdHlsZXN9O1xuICAke3RleHRTaGFkb3d9O1xuICAke29wYWNpdHl9O1xuYDtcblxuU3R5bGVkSWNvbi5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLnRleHRTaGFkb3cucHJvcFR5cGVzLFxuICAuLi5vcGFjaXR5LnByb3BUeXBlc1xufTtcblxuY29uc3QgSWNvbiA9ICh7IGNsYXNzTmFtZSwgbmFtZSwgdGhlbWUsIGljb25SZWYsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBpY29uRm9udFByZWZpeCB9ID0gdGhlbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xhc3NOYW1lcz5cbiAgICAgIHsoeyBjeCB9KSA9PiAoXG4gICAgICAgIDxTdHlsZWRJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChpY29uRm9udFByZWZpeCwgYCR7aWNvbkZvbnRQcmVmaXh9LSR7bmFtZX1gLCBjbGFzc05hbWUpfVxuICAgICAgICAgIHJlZj17aWNvblJlZn1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQ2xhc3NOYW1lcz5cbiAgKTtcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGljb24gdG8gcmVuZGVyLiBNdXN0IGJlIGEgc3VwcG9ydGVkIGljb24gbG9hZGVkIHZpYSBhbiBpY29uXG4gICAqIGZvbnQgb24gdGhlIHBhZ2UuIFRoZSBmb250IHByZWZpeCB3aWxsIGJlIHByZXBlbmRlZCBhbmQgY2FuIGJlIGN1c3RvbWl6ZWRcbiAgICogdmlhIHRoZSB0aGVtZSBpY29uRm9udFByZWZpeCB2YXJpYWJsZS5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogSWNvbiBmb250IHJvdGF0aW9uLiBSb3RhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiB0byB0aGUgQ1NTIHRyYW5zZm9ybVxuICAgKiBwcm9wZXJ0eSB1c2luZyByb3RhdGUuXG4gICAqL1xuICByb3RhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnOTAnLCAnMTgwJywgJzI3MCcsIG51bGxdKSxcblxuICAvKipcbiAgICogVGhlbWUgdXNlZCBmb3Igc3R5bGluZyB0aGUgSWNvbi5cbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcblxuICAvKipcbiAgICogUmVmIGZyb20gZm9yd2FyZCByZWZcbiAgICovXG4gIGljb25SZWY6IFByb3BUeXBlcy5hbnkgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xufTtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICByb3RhdGlvbjogbnVsbCxcbiAgaWNvblJlZjogbnVsbFxufTtcblxuY29uc3QgV2l0aFRoZW1lSWNvbiA9IHdpdGhUaGVtZShJY29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gPFdpdGhUaGVtZUljb24gey4uLnByb3BzfSBpY29uUmVmPXtyZWZ9IC8+O1xufSk7XG4iXX0= */"));
};

var StyledIcon = (0, _base["default"])("i", {
  target: "edtri8p0",
  label: "StyledIcon"
})(_styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.fontSize, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", rotationStyles, ";", _styledSystem.textShadow, ";", _styledSystem.opacity, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUIyQiIsImZpbGUiOiIuLi8uLi9zcmMvSWNvbi9JY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENsYXNzTmFtZXMsIGNzcywgd2l0aFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGRpc3BsYXksXG4gIGZvbnRTaXplLFxuICB0ZXh0QWxpZ24sXG4gIHNwYWNlLFxuICB0ZXh0U2hhZG93LFxuICBvcGFjaXR5XG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCByb3RhdGlvblN0eWxlcyA9ICh7IHJvdGF0aW9uIH0pID0+XG4gIHJvdGF0aW9uICYmXG4gIGNzc2BcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgke3JvdGF0aW9ufWRlZyk7XG4gIGA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuaWBcbiAgJHtjb2xvcn07XG4gICR7ZGlzcGxheX07XG4gICR7Zm9udFNpemV9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke3JvdGF0aW9uU3R5bGVzfTtcbiAgJHt0ZXh0U2hhZG93fTtcbiAgJHtvcGFjaXR5fTtcbmA7XG5cblN0eWxlZEljb24ucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxuICAuLi50ZXh0U2hhZG93LnByb3BUeXBlcyxcbiAgLi4ub3BhY2l0eS5wcm9wVHlwZXNcbn07XG5cbmNvbnN0IEljb24gPSAoeyBjbGFzc05hbWUsIG5hbWUsIHRoZW1lLCBpY29uUmVmLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgaWNvbkZvbnRQcmVmaXggfSA9IHRoZW1lO1xuXG4gIHJldHVybiAoXG4gICAgPENsYXNzTmFtZXM+XG4gICAgICB7KHsgY3ggfSkgPT4gKFxuICAgICAgICA8U3R5bGVkSWNvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goaWNvbkZvbnRQcmVmaXgsIGAke2ljb25Gb250UHJlZml4fS0ke25hbWV9YCwgY2xhc3NOYW1lKX1cbiAgICAgICAgICByZWY9e2ljb25SZWZ9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0NsYXNzTmFtZXM+XG4gICk7XG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpY29uIHRvIHJlbmRlci4gTXVzdCBiZSBhIHN1cHBvcnRlZCBpY29uIGxvYWRlZCB2aWEgYW4gaWNvblxuICAgKiBmb250IG9uIHRoZSBwYWdlLiBUaGUgZm9udCBwcmVmaXggd2lsbCBiZSBwcmVwZW5kZWQgYW5kIGNhbiBiZSBjdXN0b21pemVkXG4gICAqIHZpYSB0aGUgdGhlbWUgaWNvbkZvbnRQcmVmaXggdmFyaWFibGUuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEljb24gZm9udCByb3RhdGlvbi4gUm90YXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gdG8gdGhlIENTUyB0cmFuc2Zvcm1cbiAgICogcHJvcGVydHkgdXNpbmcgcm90YXRlLlxuICAgKi9cbiAgcm90YXRpb246IFByb3BUeXBlcy5vbmVPZihbJzkwJywgJzE4MCcsICcyNzAnLCBudWxsXSksXG5cbiAgLyoqXG4gICAqIFRoZW1lIHVzZWQgZm9yIHN0eWxpbmcgdGhlIEljb24uXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG5cbiAgLyoqXG4gICAqIFJlZiBmcm9tIGZvcndhcmQgcmVmXG4gICAqL1xuICBpY29uUmVmOiBQcm9wVHlwZXMuYW55IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgcm90YXRpb246IG51bGwsXG4gIGljb25SZWY6IG51bGxcbn07XG5cbmNvbnN0IFdpdGhUaGVtZUljb24gPSB3aXRoVGhlbWUoSWNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgcmV0dXJuIDxXaXRoVGhlbWVJY29uIHsuLi5wcm9wc30gaWNvblJlZj17cmVmfSAvPjtcbn0pO1xuIl19 */"));
StyledIcon.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.color.propTypes), _styledSystem.fontSize.propTypes), _styledSystem.space.propTypes), _styledSystem.textAlign.propTypes), _styledSystem.textShadow.propTypes), _styledSystem.opacity.propTypes);

var Icon = function Icon(_ref2) {
  var className = _ref2.className,
      name = _ref2.name,
      theme = _ref2.theme,
      iconRef = _ref2.iconRef,
      props = _objectWithoutProperties(_ref2, _excluded);

  var iconFontPrefix = theme.iconFontPrefix;
  return (0, _jsxRuntime.jsx)(_react2.ClassNames, {
    children: function children(_ref3) {
      var cx = _ref3.cx;
      return (0, _jsxRuntime.jsx)(StyledIcon, _objectSpread({
        className: cx(iconFontPrefix, "".concat(iconFontPrefix, "-").concat(name), className),
        ref: iconRef
      }, props));
    }
  });
};

Icon.propTypes = {
  className: _propTypes["default"].string,

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
  className: undefined,
  rotation: null,
  iconRef: null
};
var WithThemeIcon = (0, _react2.withTheme)(Icon);

var _default = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return (0, _jsxRuntime.jsx)(WithThemeIcon, _objectSpread(_objectSpread({}, props), {}, {
    iconRef: ref
  }));
});

exports["default"] = _default;