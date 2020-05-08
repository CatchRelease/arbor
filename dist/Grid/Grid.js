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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = ( /*#__PURE__*/0, _styledBase["default"])(_Box["default"], {
  target: "e1gz8lpe0",
  label: "Grid"
})(_styledSystem.alignContent, ";", _styledSystem.alignItems, ";", _styledSystem.gridAutoFlow, ";", _styledSystem.gridColumnGap, ";", _styledSystem.gridGap, ";", _styledSystem.gridRowGap, ";", _styledSystem.gridTemplateAreas, ";", _styledSystem.gridTemplateColumns, ";", _styledSystem.gridTemplateRows, ";", _styledSystem.justifyContent, ";", _styledSystem.justifyItems, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HcmlkL0dyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ3QiIsImZpbGUiOiIuLi8uLi9zcmMvR3JpZC9HcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgYWxpZ25Db250ZW50LFxuICBhbGlnbkl0ZW1zLFxuICBncmlkQXV0b0Zsb3csXG4gIGdyaWRDb2x1bW5HYXAsXG4gIGdyaWRHYXAsXG4gIGdyaWRSb3dHYXAsXG4gIGdyaWRUZW1wbGF0ZUFyZWFzLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zLFxuICBncmlkVGVtcGxhdGVSb3dzLFxuICBqdXN0aWZ5Q29udGVudCxcbiAganVzdGlmeUl0ZW1zXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQoQm94KWBcbiAgJHthbGlnbkNvbnRlbnR9O1xuICAke2FsaWduSXRlbXN9O1xuICAke2dyaWRBdXRvRmxvd307XG4gICR7Z3JpZENvbHVtbkdhcH07XG4gICR7Z3JpZEdhcH07XG4gICR7Z3JpZFJvd0dhcH07XG4gICR7Z3JpZFRlbXBsYXRlQXJlYXN9O1xuICAke2dyaWRUZW1wbGF0ZUNvbHVtbnN9O1xuICAke2dyaWRUZW1wbGF0ZVJvd3N9O1xuICAke2p1c3RpZnlDb250ZW50fTtcbiAgJHtqdXN0aWZ5SXRlbXN9O1xuYDtcblxuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIC4uLmFsaWduQ29udGVudC5wcm9wVHlwZXMsXG4gIC4uLmdyaWRBdXRvRmxvdy5wcm9wVHlwZXMsXG4gIC4uLmdyaWRDb2x1bW5HYXAucHJvcFR5cGVzLFxuICAuLi5ncmlkR2FwLnByb3BUeXBlcyxcbiAgLi4uZ3JpZFRlbXBsYXRlQXJlYXMucHJvcFR5cGVzLFxuICAuLi5ncmlkVGVtcGxhdGVDb2x1bW5zLnByb3BUeXBlcyxcbiAgLi4uZ3JpZFRlbXBsYXRlUm93cy5wcm9wVHlwZXMsXG4gIC4uLmdyaWRSb3dHYXAucHJvcFR5cGVzLFxuICAuLi5qdXN0aWZ5Q29udGVudC5wcm9wVHlwZXMsXG4gIC4uLmp1c3RpZnlJdGVtcy5wcm9wVHlwZXNcbn07XG5cbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiAnZ3JpZCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0= */"));
Grid.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.alignContent.propTypes), _styledSystem.gridAutoFlow.propTypes), _styledSystem.gridColumnGap.propTypes), _styledSystem.gridGap.propTypes), _styledSystem.gridTemplateAreas.propTypes), _styledSystem.gridTemplateColumns.propTypes), _styledSystem.gridTemplateRows.propTypes), _styledSystem.gridRowGap.propTypes), _styledSystem.justifyContent.propTypes), _styledSystem.justifyItems.propTypes);
Grid.defaultProps = {
  display: 'grid'
};
var _default = Grid;
exports["default"] = _default;