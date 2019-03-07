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
  propTypes: _objectSpread({}, _styledSystem.alignContent.propTypes, _styledSystem.gridColumnGap.propTypes, _styledSystem.gridGap.propTypes, _styledSystem.gridTemplateColumns.propTypes, _styledSystem.gridRowGap.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.justifyItems.propTypes)
}), {
  target: "e1gz8lpe0",
  label: "Grid"
})("display:grid;", _styledSystem.alignContent, ";", _styledSystem.alignItems, ";", _styledSystem.gridColumnGap, ";", _styledSystem.gridGap, ";", _styledSystem.gridRowGap, ";", _styledSystem.gridTemplateColumns, ";", _styledSystem.justifyContent, ";", _styledSystem.justifyItems, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HcmlkL0dyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJDIiwiZmlsZSI6Ii4uLy4uL3NyYy9HcmlkL0dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBhbGlnbkNvbnRlbnQsXG4gIGFsaWduSXRlbXMsXG4gIGdyaWRDb2x1bW5HYXAsXG4gIGdyaWRHYXAsXG4gIGdyaWRSb3dHYXAsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gIGp1c3RpZnlDb250ZW50LFxuICBqdXN0aWZ5SXRlbXNcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBjcmVhdGVXaXRoQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZVdpdGhDb21wb25lbnQnO1xuXG5jb25zdCBHcmlkID0gc3R5bGVkKFxuICBjcmVhdGVXaXRoQ29tcG9uZW50KEJveCwgJ2RpdicsIHtcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIC4uLmFsaWduQ29udGVudC5wcm9wVHlwZXMsXG4gICAgICAuLi5ncmlkQ29sdW1uR2FwLnByb3BUeXBlcyxcbiAgICAgIC4uLmdyaWRHYXAucHJvcFR5cGVzLFxuICAgICAgLi4uZ3JpZFRlbXBsYXRlQ29sdW1ucy5wcm9wVHlwZXMsXG4gICAgICAuLi5ncmlkUm93R2FwLnByb3BUeXBlcyxcbiAgICAgIC4uLmp1c3RpZnlDb250ZW50LnByb3BUeXBlcyxcbiAgICAgIC4uLmp1c3RpZnlJdGVtcy5wcm9wVHlwZXNcbiAgICB9XG4gIH0pXG4pYFxuICBkaXNwbGF5OiBncmlkO1xuICAke2FsaWduQ29udGVudH07XG4gICR7YWxpZ25JdGVtc307XG4gICR7Z3JpZENvbHVtbkdhcH07XG4gICR7Z3JpZEdhcH07XG4gICR7Z3JpZFJvd0dhcH07XG4gICR7Z3JpZFRlbXBsYXRlQ29sdW1uc307XG4gICR7anVzdGlmeUNvbnRlbnR9O1xuICAke2p1c3RpZnlJdGVtc307XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIl19 */"));
var _default = Grid;
exports.default = _default;