"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MasonryItem = (
/*#__PURE__*/
0, _styledBase["default"])(_Box["default"], {
  target: "e1jzxhx90",
  label: "MasonryItem"
})("break-inside:avoid;", _styledSystem.display, ";", _styledSystem.width, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NYXNvbnJ5L01hc29ucnlJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUsrQiIsImZpbGUiOiIuLi8uLi9zcmMvTWFzb25yeS9NYXNvbnJ5SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGRpc3BsYXksIHdpZHRoIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgTWFzb25yeUl0ZW0gPSBzdHlsZWQoQm94KWBcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgJHtkaXNwbGF5fTtcbiAgJHt3aWR0aH07XG5gO1xuXG5NYXNvbnJ5SXRlbS5wcm9wVHlwZXMgPSB7XG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi53aWR0aC5wcm9wVHlwZXNcbn07XG5cbk1hc29ucnlJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICcxMDAlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFzb25yeUl0ZW07XG4iXX0= */"));
MasonryItem.propTypes = _objectSpread({}, _styledSystem.display.propTypes, {}, _styledSystem.width.propTypes);
MasonryItem.defaultProps = {
  display: 'block',
  width: '100%'
};
var _default = MasonryItem;
exports["default"] = _default;