"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid =
/*#__PURE__*/
(0, _reactEmotion.default)(_Box.default.withComponent('div', {
  target: "egknnsx1"
}), {
  label: "Grid",
  target: "egknnsx0"
})("display:grid;", _styledSystem.alignItems, ";", _styledSystem.gridGap, ";", _styledSystem.gridTemplateColumns, ";", _styledSystem.justifyItems, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9HcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVU2QyIsImZpbGUiOiIuLi9zcmMvR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQge1xuICBhbGlnbkl0ZW1zLFxuICBncmlkR2FwLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zLFxuICBqdXN0aWZ5SXRlbXNcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBHcmlkID0gc3R5bGVkKEJveC53aXRoQ29tcG9uZW50KCdkaXYnKSlgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gICR7YWxpZ25JdGVtc307XG4gICR7Z3JpZEdhcH07XG4gICR7Z3JpZFRlbXBsYXRlQ29sdW1uc307XG4gICR7anVzdGlmeUl0ZW1zfTtcbmA7XG5cbkdyaWQucHJvcFR5cGVzID0ge1xuICAuLi5ncmlkR2FwLnByb3BUeXBlcyxcbiAgLi4uZ3JpZFRlbXBsYXRlQ29sdW1ucy5wcm9wVHlwZXMsXG4gIC4uLmp1c3RpZnlJdGVtcy5wcm9wVHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0= */");
Grid.propTypes = _objectSpread({}, _styledSystem.gridGap.propTypes, _styledSystem.gridTemplateColumns.propTypes, _styledSystem.justifyItems.propTypes);
var _default = Grid;
exports.default = _default;