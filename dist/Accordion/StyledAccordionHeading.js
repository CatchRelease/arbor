"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Heading = _interopRequireDefault(require("../Heading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledHeading = (
/*#__PURE__*/
0, _styledBase.default)(_Heading.default.h4.withComponent('h1', {
  target: "e1x1k6pk1",
  label: "StyledHeading"
}), {
  target: "e1x1k6pk0",
  label: "StyledHeading"
})(process.env.NODE_ENV === "production" ? {
  name: "19ihd8h",
  styles: "display:flex;align-items:center;justify-content:space-between;margin-bottom:0;"
} : {
  name: "19ihd8h",
  styles: "display:flex;align-items:center;justify-content:space-between;margin-bottom:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vU3R5bGVkQWNjb3JkaW9uSGVhZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJNEQiLCJmaWxlIjoiLi4vLi4vc3JjL0FjY29yZGlvbi9TdHlsZWRBY2NvcmRpb25IZWFkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9IZWFkaW5nJztcblxuY29uc3QgU3R5bGVkSGVhZGluZyA9IHN0eWxlZChIZWFkaW5nLmg0LndpdGhDb21wb25lbnQoJ2gxJykpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5TdHlsZWRIZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uSGVhZGluZy5oNC5kZWZhdWx0UHJvcHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEhlYWRpbmc7XG4iXX0= */"
});
StyledHeading.defaultProps = _objectSpread({}, _Heading.default.h4.defaultProps);
var _default = StyledHeading;
exports.default = _default;