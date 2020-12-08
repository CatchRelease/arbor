"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _colors = require("../theme/colors");

var _Badge = _interopRequireDefault(require("../Badge"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "j3sg9e-iconEnd",
  styles: "cursor:pointer;label:iconEnd;"
} : {
  name: "j3sg9e-iconEnd",
  styles: "cursor:pointer;label:iconEnd;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRvQ29tcGxldGUvU3R5bGVkQXV0b0NvbXBsZXRlTXVsdGlWYWx1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qk0iLCJmaWxlIjoiLi4vLi4vc3JjL0F1dG9Db21wbGV0ZS9TdHlsZWRBdXRvQ29tcGxldGVNdWx0aVZhbHVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGNvbG9yRm9yU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgcGFsZXR0ZSB9IGZyb20gJy4uL3RoZW1lL2NvbG9ycyc7XG5cbmltcG9ydCBCYWRnZSBmcm9tICcuLi9CYWRnZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuY29uc3QgU3R5bGVkQXV0b0NvbXBsZXRlTXVsdGlWYWx1ZSA9ICh7XG4gIGRhdGEsXG4gIGRhdGE6IHsgbGFiZWwgfSxcbiAgcGFsZXR0ZUNvbG9yLFxuICB2YXJpYW50LFxuICByZWFkT25seSxcbiAgcmVtb3ZlUHJvcHNcbn0pID0+IHtcbiAgY29uc3QgY29sb3IgPVxuICAgIHBhbGV0dGVDb2xvciA9PT0gbnVsbFxuICAgICAgPyBjb2xvckZvclN0cmluZyhsYWJlbCwgT2JqZWN0LmtleXMocGFsZXR0ZSkpXG4gICAgICA6IHBhbGV0dGVDb2xvcjtcblxuICBjb25zdCBpY29uRW5kID0gcmVhZE9ubHkgPyBudWxsIDogKFxuICAgIDxJY29uXG4gICAgICBhcmlhLWxhYmVsPVwicmVtb3ZlXCJcbiAgICAgIGNzcz17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgZm9udFNpemU9XCJzaXplM1wiXG4gICAgICBuYW1lPVwiY3Jvc3NcIlxuICAgICAgey4uLnJlbW92ZVByb3BzfVxuICAgIC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8QmFkZ2VcbiAgICAgIHsuLi57XG4gICAgICAgIGljb25FbmQsXG4gICAgICAgIHBhbGV0dGVDb2xvcjogY29sb3IsXG4gICAgICAgIHN1YnRsZTogdHJ1ZSxcbiAgICAgICAgdmFyaWFudCxcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9CYWRnZT5cbiAgKTtcbn07XG5cblN0eWxlZEF1dG9Db21wbGV0ZU11bHRpVmFsdWUucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRvdWNoRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0pLFxuICBwYWxldHRlQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJycsIC4uLk9iamVjdC5rZXlzKHBhbGV0dGUpXSksXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdwaWxsJ10pXG59O1xuXG5TdHlsZWRBdXRvQ29tcGxldGVNdWx0aVZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVtb3ZlUHJvcHM6IHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICBvbk1vdXNlRG93bjogKCkgPT4ge30sXG4gICAgb25Ub3VjaEVuZDogKCkgPT4ge31cbiAgfSxcbiAgcGFsZXR0ZUNvbG9yOiBudWxsLFxuICByZWFkT25seTogZmFsc2UsXG4gIHZhcmlhbnQ6ICdkZWZhdWx0J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQXV0b0NvbXBsZXRlTXVsdGlWYWx1ZTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var StyledAutoCompleteMultiValue = function StyledAutoCompleteMultiValue(_ref) {
  var data = _ref.data,
      label = _ref.data.label,
      paletteColor = _ref.paletteColor,
      variant = _ref.variant,
      readOnly = _ref.readOnly,
      removeProps = _ref.removeProps;
  var color = paletteColor === null ? (0, _utils.colorForString)(label, Object.keys(_colors.palette)) : paletteColor;
  var iconEnd = readOnly ? null : /*#__PURE__*/_react["default"].createElement(_Icon["default"], _extends({
    "aria-label": "remove",
    css: _ref2,
    fontSize: "size3",
    name: "cross"
  }, removeProps));
  return /*#__PURE__*/_react["default"].createElement(_Badge["default"], _objectSpread({
    iconEnd: iconEnd,
    paletteColor: color,
    subtle: true,
    variant: variant
  }, data), label);
};

StyledAutoCompleteMultiValue.propTypes = {
  data: _propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired
  }).isRequired,
  removeProps: _propTypes["default"].shape({
    onClick: _propTypes["default"].func.isRequired,
    onMouseDown: _propTypes["default"].func.isRequired,
    onTouchEnd: _propTypes["default"].func.isRequired
  }),
  paletteColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(Object.keys(_colors.palette)))),
  readOnly: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(['default', 'pill'])
};
StyledAutoCompleteMultiValue.defaultProps = {
  removeProps: {
    onClick: function onClick() {},
    onMouseDown: function onMouseDown() {},
    onTouchEnd: function onTouchEnd() {}
  },
  paletteColor: null,
  readOnly: false,
  variant: 'default'
};
var _default = StyledAutoCompleteMultiValue;
exports["default"] = _default;