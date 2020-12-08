"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@emotion/react");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inlineStyles = function inlineStyles(_ref) {
  var inline = _ref.inline,
      theme = _ref.theme;

  if (!inline) {
    return '';
  }

  return /*#__PURE__*/(0, _react.css)("white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;dd{display:inline;margin-left:", theme.space.smaller, ";}dd:after{display:block;content:'';}dt{display:inline-block;margin-bottom:", theme.space.small, ";};label:inlineStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZXNjcmlwdGlvbkxpc3QvRGVzY3JpcHRpb25MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdZIiwiZmlsZSI6Ii4uLy4uL3NyYy9EZXNjcmlwdGlvbkxpc3QvRGVzY3JpcHRpb25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuXG5jb25zdCBpbmxpbmVTdHlsZXMgPSAoeyBpbmxpbmUsIHRoZW1lIH0pID0+IHtcbiAgaWYgKCFpbmxpbmUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICBkZCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgICB9XG5cbiAgICBkZDphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cblxuICAgIGR0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2Uuc21hbGx9O1xuICAgIH1cbiAgYDtcbn07XG5cbmNvbnN0IERlc2NyaXB0aW9uTGlzdCA9IHN0eWxlZChCb3gud2l0aENvbXBvbmVudCgnZGwnKSlgXG4gICR7aW5saW5lU3R5bGVzfTtcbmA7XG5cbkRlc2NyaXB0aW9uTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkRlc2NyaXB0aW9uTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIC4uLkJveC5kZWZhdWx0UHJvcHMsXG4gIGlubGluZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uTGlzdDtcbiJdfQ== */"));
};

var DescriptionList = ( /*#__PURE__*/0, _base["default"])(_Box["default"].withComponent('dl', {
  target: "e13scnbl1",
  label: "DescriptionList"
}), {
  target: "e13scnbl0",
  label: "DescriptionList"
})(inlineStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZXNjcmlwdGlvbkxpc3QvRGVzY3JpcHRpb25MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDdUQiLCJmaWxlIjoiLi4vLi4vc3JjL0Rlc2NyaXB0aW9uTGlzdC9EZXNjcmlwdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IGlubGluZVN0eWxlcyA9ICh7IGlubGluZSwgdGhlbWUgfSkgPT4ge1xuICBpZiAoIWlubGluZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgIGRkIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICAgIH1cblxuICAgIGRkOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuXG4gICAgZHQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjZS5zbWFsbH07XG4gICAgfVxuICBgO1xufTtcblxuY29uc3QgRGVzY3JpcHRpb25MaXN0ID0gc3R5bGVkKEJveC53aXRoQ29tcG9uZW50KCdkbCcpKWBcbiAgJHtpbmxpbmVTdHlsZXN9O1xuYDtcblxuRGVzY3JpcHRpb25MaXN0LnByb3BUeXBlcyA9IHtcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuRGVzY3JpcHRpb25MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uQm94LmRlZmF1bHRQcm9wcyxcbiAgaW5saW5lOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25MaXN0O1xuIl19 */"));
DescriptionList.propTypes = {
  inline: _propTypes["default"].bool
};
DescriptionList.defaultProps = _objectSpread(_objectSpread({}, _Box["default"].defaultProps), {}, {
  inline: false
});
var _default = DescriptionList;
exports["default"] = _default;