"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledIcon = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("react");

var _react2 = require("@emotion/react");

var _styledSystem = require("styled-system");

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["className", "iconRef", "name", "rotation", "theme"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var rotationStyles = function rotationStyles(_ref) {
  var rotation = _ref.rotation;
  return rotation && /*#__PURE__*/(0, _react2.css)("transform:rotate(", rotation, "deg);;label:rotationStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCSyIsImZpbGUiOiIuLi8uLi9zcmMvSWNvbi9JY29uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFByb3BzLCBGQywgZm9yd2FyZFJlZiwgTGVnYWN5UmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lcywgY3NzLCBUaGVtZSwgd2l0aFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIENvbG9yUHJvcHMsXG4gIGRpc3BsYXksXG4gIERpc3BsYXlQcm9wcyxcbiAgZm9udFNpemUsXG4gIEZvbnRTaXplUHJvcHMsXG4gIG9wYWNpdHksXG4gIE9wYWNpdHlQcm9wcyxcbiAgc3BhY2UsXG4gIFNwYWNlUHJvcHMsXG4gIHRleHRBbGlnbixcbiAgVGV4dEFsaWduUHJvcHMsXG4gIHRleHRTaGFkb3csXG4gIFRleHRTaGFkb3dQcm9wc1xufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxudHlwZSBSb3RhdGlvbiA9ICc5MCcgfCAnMTgwJyB8ICcyNzAnIHwgbnVsbDtcblxuY29uc3Qgcm90YXRpb25TdHlsZXMgPSAoeyByb3RhdGlvbiB9OiB7IHJvdGF0aW9uPzogUm90YXRpb24gfSkgPT5cbiAgcm90YXRpb24gJiZcbiAgY3NzYFxuICAgIHRyYW5zZm9ybTogcm90YXRlKCR7cm90YXRpb259ZGVnKTtcbiAgYDtcblxudHlwZSBSb3RhdGlvblByb3BzID0ge1xuICByb3RhdGlvbj86IFJvdGF0aW9uO1xufTtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuaTxcbiAgQ29sb3JQcm9wcyAmXG4gICAgRGlzcGxheVByb3BzICZcbiAgICBGb250U2l6ZVByb3BzICZcbiAgICBTcGFjZVByb3BzICZcbiAgICBUZXh0QWxpZ25Qcm9wcyAmXG4gICAgUm90YXRpb25Qcm9wcyAmXG4gICAgVGV4dFNoYWRvd1Byb3BzICZcbiAgICBPcGFjaXR5UHJvcHNcbj5gXG4gICR7Y29sb3J9O1xuICAke2Rpc3BsYXl9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHtyb3RhdGlvblN0eWxlc307XG4gICR7dGV4dFNoYWRvd307XG4gICR7b3BhY2l0eX07XG5gO1xuXG50eXBlIFByb3BzID0gQ29tcG9uZW50UHJvcHM8dHlwZW9mIFN0eWxlZEljb24+ICYge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGljb25SZWY/OiBMZWdhY3lSZWY8SFRNTEVsZW1lbnQ+O1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvdGF0aW9uPzogUm90YXRpb247XG4gIHRoZW1lOiBUaGVtZTtcbn07XG5cbmNvbnN0IEljb246IEZDPFByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgaWNvblJlZixcbiAgbmFtZSxcbiAgcm90YXRpb24gPSBudWxsLFxuICB0aGVtZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgeyBpY29uRm9udFByZWZpeCB9ID0gdGhlbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xhc3NOYW1lcz5cbiAgICAgIHsoeyBjeCB9KSA9PiAoXG4gICAgICAgIDxTdHlsZWRJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChpY29uRm9udFByZWZpeCwgYCR7aWNvbkZvbnRQcmVmaXh9LSR7bmFtZX1gLCBjbGFzc05hbWUpfVxuICAgICAgICAgIHJlZj17aWNvblJlZn1cbiAgICAgICAgICByb3RhdGlvbj17cm90YXRpb259XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0NsYXNzTmFtZXM+XG4gICk7XG59O1xuXG5jb25zdCBXaXRoVGhlbWVJY29uID0gd2l0aFRoZW1lKEljb24pO1xuXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBDb21wb25lbnRQcm9wczx0eXBlb2YgV2l0aFRoZW1lSWNvbj4+KFxuICAocHJvcHMsIHJlZikgPT4ge1xuICAgIHJldHVybiA8V2l0aFRoZW1lSWNvbiB7Li4ucHJvcHN9IGljb25SZWY9e3JlZn0gLz47XG4gIH1cbik7XG4iXX0= */"));
};

var StyledIcon = (0, _base["default"])("i", {
  target: "eix6hso0",
  label: "StyledIcon"
})(_styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.fontSize, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", rotationStyles, ";", _styledSystem.textShadow, ";", _styledSystem.opacity, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDQyIsImZpbGUiOiIuLi8uLi9zcmMvSWNvbi9JY29uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFByb3BzLCBGQywgZm9yd2FyZFJlZiwgTGVnYWN5UmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lcywgY3NzLCBUaGVtZSwgd2l0aFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIENvbG9yUHJvcHMsXG4gIGRpc3BsYXksXG4gIERpc3BsYXlQcm9wcyxcbiAgZm9udFNpemUsXG4gIEZvbnRTaXplUHJvcHMsXG4gIG9wYWNpdHksXG4gIE9wYWNpdHlQcm9wcyxcbiAgc3BhY2UsXG4gIFNwYWNlUHJvcHMsXG4gIHRleHRBbGlnbixcbiAgVGV4dEFsaWduUHJvcHMsXG4gIHRleHRTaGFkb3csXG4gIFRleHRTaGFkb3dQcm9wc1xufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxudHlwZSBSb3RhdGlvbiA9ICc5MCcgfCAnMTgwJyB8ICcyNzAnIHwgbnVsbDtcblxuY29uc3Qgcm90YXRpb25TdHlsZXMgPSAoeyByb3RhdGlvbiB9OiB7IHJvdGF0aW9uPzogUm90YXRpb24gfSkgPT5cbiAgcm90YXRpb24gJiZcbiAgY3NzYFxuICAgIHRyYW5zZm9ybTogcm90YXRlKCR7cm90YXRpb259ZGVnKTtcbiAgYDtcblxudHlwZSBSb3RhdGlvblByb3BzID0ge1xuICByb3RhdGlvbj86IFJvdGF0aW9uO1xufTtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQuaTxcbiAgQ29sb3JQcm9wcyAmXG4gICAgRGlzcGxheVByb3BzICZcbiAgICBGb250U2l6ZVByb3BzICZcbiAgICBTcGFjZVByb3BzICZcbiAgICBUZXh0QWxpZ25Qcm9wcyAmXG4gICAgUm90YXRpb25Qcm9wcyAmXG4gICAgVGV4dFNoYWRvd1Byb3BzICZcbiAgICBPcGFjaXR5UHJvcHNcbj5gXG4gICR7Y29sb3J9O1xuICAke2Rpc3BsYXl9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHtyb3RhdGlvblN0eWxlc307XG4gICR7dGV4dFNoYWRvd307XG4gICR7b3BhY2l0eX07XG5gO1xuXG50eXBlIFByb3BzID0gQ29tcG9uZW50UHJvcHM8dHlwZW9mIFN0eWxlZEljb24+ICYge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGljb25SZWY/OiBMZWdhY3lSZWY8SFRNTEVsZW1lbnQ+O1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvdGF0aW9uPzogUm90YXRpb247XG4gIHRoZW1lOiBUaGVtZTtcbn07XG5cbmNvbnN0IEljb246IEZDPFByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgaWNvblJlZixcbiAgbmFtZSxcbiAgcm90YXRpb24gPSBudWxsLFxuICB0aGVtZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgeyBpY29uRm9udFByZWZpeCB9ID0gdGhlbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xhc3NOYW1lcz5cbiAgICAgIHsoeyBjeCB9KSA9PiAoXG4gICAgICAgIDxTdHlsZWRJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChpY29uRm9udFByZWZpeCwgYCR7aWNvbkZvbnRQcmVmaXh9LSR7bmFtZX1gLCBjbGFzc05hbWUpfVxuICAgICAgICAgIHJlZj17aWNvblJlZn1cbiAgICAgICAgICByb3RhdGlvbj17cm90YXRpb259XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0NsYXNzTmFtZXM+XG4gICk7XG59O1xuXG5jb25zdCBXaXRoVGhlbWVJY29uID0gd2l0aFRoZW1lKEljb24pO1xuXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBDb21wb25lbnRQcm9wczx0eXBlb2YgV2l0aFRoZW1lSWNvbj4+KFxuICAocHJvcHMsIHJlZikgPT4ge1xuICAgIHJldHVybiA8V2l0aFRoZW1lSWNvbiB7Li4ucHJvcHN9IGljb25SZWY9e3JlZn0gLz47XG4gIH1cbik7XG4iXX0= */"));
exports.StyledIcon = StyledIcon;

var Icon = function Icon(_ref2) {
  var className = _ref2.className,
      iconRef = _ref2.iconRef,
      name = _ref2.name,
      _ref2$rotation = _ref2.rotation,
      rotation = _ref2$rotation === void 0 ? null : _ref2$rotation,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, _excluded);

  var iconFontPrefix = theme.iconFontPrefix;
  return (0, _jsxRuntime.jsx)(_react2.ClassNames, {
    children: function children(_ref3) {
      var cx = _ref3.cx;
      return (0, _jsxRuntime.jsx)(StyledIcon, _objectSpread({
        className: cx(iconFontPrefix, "".concat(iconFontPrefix, "-").concat(name), className),
        ref: iconRef,
        rotation: rotation
      }, props));
    }
  });
};

var WithThemeIcon = (0, _react2.withTheme)(Icon);

var _default = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return (0, _jsxRuntime.jsx)(WithThemeIcon, _objectSpread(_objectSpread({}, props), {}, {
    iconRef: ref
  }));
});

exports["default"] = _default;