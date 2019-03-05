"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Flex = (
/*#__PURE__*/
0, _styledBase.default)(_Box.default, {
  target: "e1ggzm950",
  label: "Flex"
})("display:flex;", _styledSystem.alignSelf, ";", _styledSystem.alignItems, ";", _styledSystem.justifyContent, ";", _styledSystem.flexDirection, ";", _styledSystem.flex, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GbGV4L0ZsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9GbGV4L0ZsZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBhbGlnblNlbGYsXG4gIGFsaWduSXRlbXMsXG4gIGp1c3RpZnlDb250ZW50LFxuICBmbGV4RGlyZWN0aW9uLFxuICBmbGV4XG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IEZsZXggPSBzdHlsZWQoQm94KWBcbiAgZGlzcGxheTogZmxleDtcbiAgJHthbGlnblNlbGZ9O1xuICAke2FsaWduSXRlbXN9O1xuICAke2p1c3RpZnlDb250ZW50fTtcbiAgJHtmbGV4RGlyZWN0aW9ufTtcbiAgJHtmbGV4fTtcbmA7XG5cbkZsZXgucHJvcFR5cGVzID0ge1xuICAuLi5hbGlnblNlbGYucHJvcFR5cGVzLFxuICAuLi5hbGlnbkl0ZW1zLnByb3BUeXBlcyxcbiAgLi4uanVzdGlmeUNvbnRlbnQucHJvcFR5cGVzLFxuICAuLi5mbGV4RGlyZWN0aW9uLnByb3BUeXBlcyxcbiAgLi4uZmxleC5wcm9wVHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsZXg7XG4iXX0= */"));
Flex.propTypes = _objectSpread({}, _styledSystem.alignSelf.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flex.propTypes);
var _default = Flex;
exports.default = _default;