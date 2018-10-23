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
})(_styledSystem.space, ";", _styledSystem.color, ";", _styledSystem.width, ";", _styledSystem.height, ";", _styledSystem.maxWidth, ";", _styledSystem.textAlign, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXNCIiwiZmlsZSI6Ii4uL3NyYy9Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIHNwYWNlLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBtYXhXaWR0aCxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7d2lkdGh9O1xuICAke2hlaWdodH07XG4gICR7bWF4V2lkdGh9O1xuICAke3RleHRBbGlnbn07XG5gO1xuXG5Cb3gucHJvcFR5cGVzID0ge1xuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4ud2lkdGgucHJvcFR5cGVzLFxuICAuLi5oZWlnaHQucHJvcFR5cGVzLFxuICAuLi5tYXhXaWR0aC5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cbkJveC5zZWN0aW9uID0gQm94LndpdGhDb21wb25lbnQoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl19 */");
Box.propTypes = _objectSpread({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes, _styledSystem.width.propTypes, _styledSystem.height.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.textAlign.propTypes);
Box.section = Box.withComponent('section', {
  target: "ee1vgs61"
});
var _default = Box;
exports.default = _default;