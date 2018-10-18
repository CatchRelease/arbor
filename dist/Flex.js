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

var Flex =
/*#__PURE__*/
(0, _reactEmotion.default)(_Box.default, {
  label: "Flex",
  target: "e1654vxx0"
})("display:flex;", _styledSystem.alignSelf, ";", _styledSystem.alignItems, ";", _styledSystem.justifyContent, ";", _styledSystem.flexDirection, ";", _styledSystem.flex, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVd3QiIsImZpbGUiOiIuLi9zcmMvRmxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQge1xuICBhbGlnblNlbGYsXG4gIGFsaWduSXRlbXMsXG4gIGp1c3RpZnlDb250ZW50LFxuICBmbGV4RGlyZWN0aW9uLFxuICBmbGV4XG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcblxuY29uc3QgRmxleCA9IHN0eWxlZChCb3gpYFxuICBkaXNwbGF5OiBmbGV4O1xuICAke2FsaWduU2VsZn07XG4gICR7YWxpZ25JdGVtc307XG4gICR7anVzdGlmeUNvbnRlbnR9O1xuICAke2ZsZXhEaXJlY3Rpb259O1xuICAke2ZsZXh9O1xuYDtcblxuRmxleC5wcm9wVHlwZXMgPSB7XG4gIC4uLmFsaWduU2VsZi5wcm9wVHlwZXMsXG4gIC4uLmFsaWduSXRlbXMucHJvcFR5cGVzLFxuICAuLi5qdXN0aWZ5Q29udGVudC5wcm9wVHlwZXMsXG4gIC4uLmZsZXhEaXJlY3Rpb24ucHJvcFR5cGVzLFxuICAuLi5mbGV4LnByb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxleDtcbiJdfQ== */");
Flex.propTypes = _objectSpread({}, _styledSystem.alignSelf.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flex.propTypes);
var _default = Flex;
exports.default = _default;