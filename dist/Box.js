"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box = (0, _styledBase.default)("div", {
  target: "ee1vgs60",
  label: "Box"
})("box-sizing:border-box;", _styledSystem.boxShadow, ";", _styledSystem.color, ";", _styledSystem.display, ";", _styledSystem.height, ";", _styledSystem.maxWidth, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _styledSystem.width, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXNCIiwiZmlsZSI6Ii4uL3NyYy9Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBib3hTaGFkb3csXG4gIGNvbG9yLFxuICBkaXNwbGF5LFxuICBzcGFjZSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgbWF4V2lkdGgsXG4gIHRleHRBbGlnblxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJHtib3hTaGFkb3d9O1xuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtoZWlnaHR9O1xuICAke21heFdpZHRofTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHt3aWR0aH07XG5gO1xuXG5Cb3gucHJvcFR5cGVzID0ge1xuICAuLi5ib3hTaGFkb3cucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi5oZWlnaHQucHJvcFR5cGVzLFxuICAuLi5tYXhXaWR0aC5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dEFsaWduLnByb3BUeXBlcyxcbiAgLi4ud2lkdGgucHJvcFR5cGVzXG59O1xuXG5Cb3guc2VjdGlvbiA9IEJveC53aXRoQ29tcG9uZW50KCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiJdfQ== */"));
Box.propTypes = _objectSpread({}, _styledSystem.boxShadow.propTypes, _styledSystem.color.propTypes, _styledSystem.display.propTypes, _styledSystem.height.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.width.propTypes);
Box.section = Box.withComponent('section', {
  target: "ee1vgs61"
});
var _default = Box;
exports.default = _default;