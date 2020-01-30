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

var Flex = (
/*#__PURE__*/
0, _styledBase["default"])(_Box["default"], {
  target: "e1ggzm950",
  label: "Flex"
})("display:flex;", _styledSystem.alignContent, ";", _styledSystem.alignItems, ";", _styledSystem.alignSelf, ";", _styledSystem.flex, ";", _styledSystem.flexDirection, ";", _styledSystem.flexWrap, ";", _styledSystem.gridGap, ";", _styledSystem.justifyContent, ";", _styledSystem.justifyItems, ";", _styledSystem.justifySelf, ";", _styledSystem.order, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GbGV4L0ZsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ3QiIsImZpbGUiOiIuLi8uLi9zcmMvRmxleC9GbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgYWxpZ25Db250ZW50LFxuICBhbGlnbkl0ZW1zLFxuICBhbGlnblNlbGYsXG4gIGZsZXgsXG4gIGZsZXhEaXJlY3Rpb24sXG4gIGZsZXhXcmFwLFxuICBncmlkR2FwLFxuICBqdXN0aWZ5Q29udGVudCxcbiAganVzdGlmeUl0ZW1zLFxuICBqdXN0aWZ5U2VsZixcbiAgb3JkZXJcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgRmxleCA9IHN0eWxlZChCb3gpYFxuICBkaXNwbGF5OiBmbGV4O1xuICAke2FsaWduQ29udGVudH07XG4gICR7YWxpZ25JdGVtc307XG4gICR7YWxpZ25TZWxmfTtcbiAgJHtmbGV4fTtcbiAgJHtmbGV4RGlyZWN0aW9ufTtcbiAgJHtmbGV4V3JhcH07XG4gICR7Z3JpZEdhcH07XG4gICR7anVzdGlmeUNvbnRlbnR9O1xuICAke2p1c3RpZnlJdGVtc307XG4gICR7anVzdGlmeVNlbGZ9O1xuICAke29yZGVyfTtcbmA7XG5cbkZsZXgucHJvcFR5cGVzID0ge1xuICAuLi5hbGlnbkNvbnRlbnQucHJvcFR5cGVzLFxuICAuLi5hbGlnbkl0ZW1zLnByb3BUeXBlcyxcbiAgLi4uYWxpZ25TZWxmLnByb3BUeXBlcyxcbiAgLi4uZmxleC5wcm9wVHlwZXMsXG4gIC4uLmZsZXhEaXJlY3Rpb24ucHJvcFR5cGVzLFxuICAuLi5mbGV4V3JhcC5wcm9wVHlwZXMsXG4gIC4uLmdyaWRHYXAucHJvcFR5cGVzLFxuICAuLi5qdXN0aWZ5Q29udGVudC5wcm9wVHlwZXMsXG4gIC4uLmp1c3RpZnlJdGVtcy5wcm9wVHlwZXMsXG4gIC4uLmp1c3RpZnlTZWxmLnByb3BUeXBlcyxcbiAgLi4ub3JkZXIucHJvcFR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbGV4O1xuIl19 */"));
Flex.propTypes = _objectSpread({}, _styledSystem.alignContent.propTypes, {}, _styledSystem.alignItems.propTypes, {}, _styledSystem.alignSelf.propTypes, {}, _styledSystem.flex.propTypes, {}, _styledSystem.flexDirection.propTypes, {}, _styledSystem.flexWrap.propTypes, {}, _styledSystem.gridGap.propTypes, {}, _styledSystem.justifyContent.propTypes, {}, _styledSystem.justifyItems.propTypes, {}, _styledSystem.justifySelf.propTypes, {}, _styledSystem.order.propTypes);
var _default = Flex;
exports["default"] = _default;