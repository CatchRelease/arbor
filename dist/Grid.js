"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = (
/*#__PURE__*/
0, _styledBase.default)(_Box.default.withComponent('div', {
  target: "egknnsx1",
  label: "Grid"
}), {
  target: "egknnsx0",
  label: "Grid"
})("display:grid;", _styledSystem.alignItems, ";", _styledSystem.gridGap, ";", _styledSystem.gridTemplateColumns, ";", _styledSystem.justifyItems, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVU2QyIsImZpbGUiOiIuLi9zcmMvR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIGFsaWduSXRlbXMsXG4gIGdyaWRHYXAsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gIGp1c3RpZnlJdGVtc1xufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQoQm94LndpdGhDb21wb25lbnQoJ2RpdicpKWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgJHthbGlnbkl0ZW1zfTtcbiAgJHtncmlkR2FwfTtcbiAgJHtncmlkVGVtcGxhdGVDb2x1bW5zfTtcbiAgJHtqdXN0aWZ5SXRlbXN9O1xuYDtcblxuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIC4uLmdyaWRHYXAucHJvcFR5cGVzLFxuICAuLi5ncmlkVGVtcGxhdGVDb2x1bW5zLnByb3BUeXBlcyxcbiAgLi4uanVzdGlmeUl0ZW1zLnByb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdfQ== */"));
Grid.propTypes = _objectSpread({}, _styledSystem.gridGap.propTypes, _styledSystem.gridTemplateColumns.propTypes, _styledSystem.justifyItems.propTypes);
var _default = Grid;
exports.default = _default;