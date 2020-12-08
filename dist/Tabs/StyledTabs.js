"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var StyledTabs = ( /*#__PURE__*/0, _base["default"])(_Box["default"].withComponent('div', {
  target: "e8qd1cw1",
  label: "StyledTabs"
}), {
  target: "e8qd1cw0",
  label: "StyledTabs"
})(process.env.NODE_ENV === "production" ? {
  name: "2o6p8u",
  styles: "justify-content:space-between"
} : {
  name: "2o6p8u",
  styles: "justify-content:space-between",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR21EIiwiZmlsZSI6Ii4uLy4uL3NyYy9UYWJzL1N0eWxlZFRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IFN0eWxlZFRhYnMgPSBzdHlsZWQoQm94LndpdGhDb21wb25lbnQoJ2RpdicpKWBcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuU3R5bGVkVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gIC4uLkJveC5kZWZhdWx0UHJvcHMsXG4gIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gIGJvcmRlckNvbG9yOiAnYm9yZGVyLm11dGVkJyxcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgd2lkdGg6ICcxMDAlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGFicztcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
StyledTabs.defaultProps = _objectSpread(_objectSpread({}, _Box["default"].defaultProps), {}, {
  borderBottom: '1px solid transparent',
  borderColor: 'border.muted',
  display: 'inline-flex',
  width: '100%'
});
var _default = StyledTabs;
exports["default"] = _default;