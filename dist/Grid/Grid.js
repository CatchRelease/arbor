"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("../Box"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = (
/*#__PURE__*/
0, _styledBase.default)((0, _createWithComponent.default)(_Box.default, 'div', {
  propTypes: _objectSpread({}, _styledSystem.gridGap.propTypes, _styledSystem.gridTemplateColumns.propTypes, _styledSystem.justifyItems.propTypes)
}), {
  target: "e1gz8lpe0",
  label: "Grid"
})("display:grid;", _styledSystem.alignItems, ";", _styledSystem.gridGap, ";", _styledSystem.gridTemplateColumns, ";", _styledSystem.justifyItems, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HcmlkL0dyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJDIiwiZmlsZSI6Ii4uLy4uL3NyYy9HcmlkL0dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBhbGlnbkl0ZW1zLFxuICBncmlkR2FwLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zLFxuICBqdXN0aWZ5SXRlbXNcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBjcmVhdGVXaXRoQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZVdpdGhDb21wb25lbnQnO1xuXG5jb25zdCBHcmlkID0gc3R5bGVkKFxuICBjcmVhdGVXaXRoQ29tcG9uZW50KEJveCwgJ2RpdicsIHtcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIC4uLmdyaWRHYXAucHJvcFR5cGVzLFxuICAgICAgLi4uZ3JpZFRlbXBsYXRlQ29sdW1ucy5wcm9wVHlwZXMsXG4gICAgICAuLi5qdXN0aWZ5SXRlbXMucHJvcFR5cGVzXG4gICAgfVxuICB9KVxuKWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgJHthbGlnbkl0ZW1zfTtcbiAgJHtncmlkR2FwfTtcbiAgJHtncmlkVGVtcGxhdGVDb2x1bW5zfTtcbiAgJHtqdXN0aWZ5SXRlbXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdfQ== */"));
var _default = Grid;
exports.default = _default;