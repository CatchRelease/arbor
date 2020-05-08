"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _Heading = _interopRequireDefault(require("../Heading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var StyledHeading = ( /*#__PURE__*/0, _styledBase["default"])(_Heading["default"].h4, {
  target: "e1naex7g0",
  label: "StyledHeading"
})(process.env.NODE_ENV === "production" ? {
  name: "19ihd8h",
  styles: "display:flex;align-items:center;justify-content:space-between;margin-bottom:0;"
} : {
  name: "19ihd8h",
  styles: "display:flex;align-items:center;justify-content:space-between;margin-bottom:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXdDIiwiZmlsZSI6Ii4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gJy4uL0hlYWRpbmcnO1xuXG5jb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkKEhlYWRpbmcuaDQpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5TdHlsZWRIZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdoMSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEhlYWRpbmc7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
StyledHeading.defaultProps = {
  as: 'h1'
};
var _default = StyledHeading;
exports["default"] = _default;