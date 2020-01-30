"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inlineStyles = function inlineStyles(_ref) {
  var inline = _ref.inline,
      theme = _ref.theme;

  if (!inline) {
    return '';
  }

  return (
    /*#__PURE__*/
    (0, _core.css)("white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;dd{display:inline;margin-left:", theme.space.smaller, ";}dd:after{display:block;content:'';}dt{display:inline-block;margin-bottom:", theme.space.small, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZXNjcmlwdGlvbkxpc3QvRGVzY3JpcHRpb25MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdZIiwiZmlsZSI6Ii4uLy4uL3NyYy9EZXNjcmlwdGlvbkxpc3QvRGVzY3JpcHRpb25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IGlubGluZVN0eWxlcyA9ICh7IGlubGluZSwgdGhlbWUgfSkgPT4ge1xuICBpZiAoIWlubGluZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgIGRkIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICAgIH1cblxuICAgIGRkOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuXG4gICAgZHQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjZS5zbWFsbH07XG4gICAgfVxuICBgO1xufTtcblxuY29uc3QgRGVzY3JpcHRpb25MaXN0ID0gc3R5bGVkKEJveC53aXRoQ29tcG9uZW50KCdkbCcpKWBcbiAgJHtpbmxpbmVTdHlsZXN9O1xuYDtcblxuRGVzY3JpcHRpb25MaXN0LnByb3BUeXBlcyA9IHtcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuRGVzY3JpcHRpb25MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uQm94LmRlZmF1bHRQcm9wcyxcbiAgaW5saW5lOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25MaXN0O1xuIl19 */"))
  );
};

var DescriptionList = (
/*#__PURE__*/
0, _styledBase["default"])(_Box["default"].withComponent('dl', {
  target: "e13scnbl1",
  label: "DescriptionList"
}), {
  target: "e13scnbl0",
  label: "DescriptionList"
})(inlineStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZXNjcmlwdGlvbkxpc3QvRGVzY3JpcHRpb25MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDdUQiLCJmaWxlIjoiLi4vLi4vc3JjL0Rlc2NyaXB0aW9uTGlzdC9EZXNjcmlwdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgaW5saW5lU3R5bGVzID0gKHsgaW5saW5lLCB0aGVtZSB9KSA9PiB7XG4gIGlmICghaW5saW5lKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgZGQge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gICAgfVxuXG4gICAgZGQ6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG5cbiAgICBkdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNlLnNtYWxsfTtcbiAgICB9XG4gIGA7XG59O1xuXG5jb25zdCBEZXNjcmlwdGlvbkxpc3QgPSBzdHlsZWQoQm94LndpdGhDb21wb25lbnQoJ2RsJykpYFxuICAke2lubGluZVN0eWxlc307XG5gO1xuXG5EZXNjcmlwdGlvbkxpc3QucHJvcFR5cGVzID0ge1xuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sXG59O1xuXG5EZXNjcmlwdGlvbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAuLi5Cb3guZGVmYXVsdFByb3BzLFxuICBpbmxpbmU6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbkxpc3Q7XG4iXX0= */"));
DescriptionList.propTypes = {
  inline: _propTypes["default"].bool
};
DescriptionList.defaultProps = _objectSpread({}, _Box["default"].defaultProps, {
  inline: false
});
var _default = DescriptionList;
exports["default"] = _default;