"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _Box = _interopRequireDefault(require("../Box"));

var _columns = require("../utils/columns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MasonryContainer = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
  target: "e1mkk5m10",
  label: "MasonryContainer"
})(_columns.columnCount, ";", _columns.columnGap, ";", _columns.columnRule, ";", _columns.columnRuleColor, ";", _columns.columnRuleStyle, ";", _columns.columnRuleWidth, ";", _columns.columnWidth, ";", _columns.columns, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NYXNvbnJ5L01hc29ucnlDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29DIiwiZmlsZSI6Ii4uLy4uL3NyYy9NYXNvbnJ5L01hc29ucnlDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCB7XG4gIGNvbHVtbkNvdW50LFxuICBjb2x1bW5HYXAsXG4gIGNvbHVtblJ1bGUsXG4gIGNvbHVtblJ1bGVDb2xvcixcbiAgY29sdW1uUnVsZVN0eWxlLFxuICBjb2x1bW5SdWxlV2lkdGgsXG4gIGNvbHVtbldpZHRoLFxuICBjb2x1bW5zXG59IGZyb20gJy4uL3V0aWxzL2NvbHVtbnMnO1xuXG5jb25zdCBNYXNvbnJ5Q29udGFpbmVyID0gc3R5bGVkKEJveClgXG4gICR7Y29sdW1uQ291bnR9O1xuICAke2NvbHVtbkdhcH07XG4gICR7Y29sdW1uUnVsZX07XG4gICR7Y29sdW1uUnVsZUNvbG9yfTtcbiAgJHtjb2x1bW5SdWxlU3R5bGV9O1xuICAke2NvbHVtblJ1bGVXaWR0aH07XG4gICR7Y29sdW1uV2lkdGh9O1xuICAke2NvbHVtbnN9O1xuYDtcblxuTWFzb25yeUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbHVtbkNvdW50LnByb3BUeXBlcyxcbiAgLi4uY29sdW1uR2FwLnByb3BUeXBlcyxcbiAgLi4uY29sdW1uUnVsZS5wcm9wVHlwZXMsXG4gIC4uLmNvbHVtblJ1bGVDb2xvci5wcm9wVHlwZXMsXG4gIC4uLmNvbHVtblJ1bGVTdHlsZS5wcm9wVHlwZXMsXG4gIC4uLmNvbHVtblJ1bGVXaWR0aC5wcm9wVHlwZXMsXG4gIC4uLmNvbHVtbldpZHRoLnByb3BUeXBlcyxcbiAgLi4uY29sdW1ucy5wcm9wVHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hc29ucnlDb250YWluZXI7XG4iXX0= */"));
MasonryContainer.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _columns.columnCount.propTypes), _columns.columnGap.propTypes), _columns.columnRule.propTypes), _columns.columnRuleColor.propTypes), _columns.columnRuleStyle.propTypes), _columns.columnRuleWidth.propTypes), _columns.columnWidth.propTypes), _columns.columns.propTypes);
var _default = MasonryContainer;
exports["default"] = _default;