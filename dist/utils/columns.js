"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columns = exports.columnWidth = exports.columnRuleWidth = exports.columnRuleStyle = exports.columnRuleColor = exports.columnRule = exports.columnGap = exports.columnCount = void 0;

var _styledSystem = require("styled-system");

var columnCount = (0, _styledSystem.style)({
  prop: 'columnCount'
});
exports.columnCount = columnCount;
var columnGap = (0, _styledSystem.style)({
  prop: 'columnGap',
  key: 'space'
});
exports.columnGap = columnGap;
var columnRule = (0, _styledSystem.style)({
  prop: 'columnRule',
  key: 'borders'
});
exports.columnRule = columnRule;
var columnRuleColor = (0, _styledSystem.style)({
  prop: 'columnRuleColor',
  key: 'colors'
});
exports.columnRuleColor = columnRuleColor;
var columnRuleStyle = (0, _styledSystem.style)({
  prop: 'columnRuleStyle'
});
exports.columnRuleStyle = columnRuleStyle;
var columnRuleWidth = (0, _styledSystem.style)({
  prop: 'columnRuleWidth',
  key: 'space'
});
exports.columnRuleWidth = columnRuleWidth;
var columnWidth = (0, _styledSystem.style)({
  prop: 'columnWidth'
});
exports.columnWidth = columnWidth;
var columns = (0, _styledSystem.style)({
  prop: 'columns'
});
exports.columns = columns;