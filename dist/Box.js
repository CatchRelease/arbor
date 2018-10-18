"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box =
/*#__PURE__*/
(0, _reactEmotion.default)("div", {
  label: "Box",
  target: "ee1vgs60"
})(_styledSystem.space, ";", _styledSystem.color, ";", _styledSystem.width, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3NCIiwiZmlsZSI6Ii4uL3NyYy9Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB3aWR0aCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7d2lkdGh9O1xuYDtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLndpZHRoLnByb3BUeXBlc1xufTtcblxuQm94LnNlY3Rpb24gPSBCb3gud2l0aENvbXBvbmVudCgnc2VjdGlvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iXX0= */");
Box.propTypes = _objectSpread({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes, _styledSystem.width.propTypes);
Box.section = Box.withComponent('section', {
  target: "ee1vgs61"
});
var _default = Box;
exports.default = _default;