"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _colors = require("../theme/colors");

var _Badge = _interopRequireDefault(require("../Badge"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "j3sg9e-iconEnd",
  styles: "cursor:pointer;label:iconEnd;"
} : {
  name: "j3sg9e-iconEnd",
  styles: "cursor:pointer;label:iconEnd;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRvQ29tcGxldGUvU3R5bGVkQXV0b0NvbXBsZXRlTXVsdGlWYWx1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qk0iLCJmaWxlIjoiLi4vLi4vc3JjL0F1dG9Db21wbGV0ZS9TdHlsZWRBdXRvQ29tcGxldGVNdWx0aVZhbHVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgY29sb3JGb3JTdHJpbmcgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnLi4vdGhlbWUvY29sb3JzJztcblxuaW1wb3J0IEJhZGdlIGZyb20gJy4uL0JhZGdlJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuXG5jb25zdCBTdHlsZWRBdXRvQ29tcGxldGVNdWx0aVZhbHVlID0gKHtcbiAgZGF0YSxcbiAgZGF0YTogeyBsYWJlbCB9LFxuICBwYWxldHRlQ29sb3IsXG4gIHZhcmlhbnQsXG4gIHJlYWRPbmx5LFxuICByZW1vdmVQcm9wc1xufSkgPT4ge1xuICBjb25zdCBjb2xvciA9XG4gICAgcGFsZXR0ZUNvbG9yID09PSBudWxsXG4gICAgICA/IGNvbG9yRm9yU3RyaW5nKGxhYmVsLCBPYmplY3Qua2V5cyhwYWxldHRlKSlcbiAgICAgIDogcGFsZXR0ZUNvbG9yO1xuXG4gIGNvbnN0IGljb25FbmQgPSByZWFkT25seSA/IG51bGwgOiAoXG4gICAgPEljb25cbiAgICAgIGFyaWEtbGFiZWw9XCJyZW1vdmVcIlxuICAgICAgY3NzPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICBmb250U2l6ZT1cInNpemUzXCJcbiAgICAgIG5hbWU9XCJjcm9zc1wiXG4gICAgICB7Li4ucmVtb3ZlUHJvcHN9XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxCYWRnZVxuICAgICAgey4uLntcbiAgICAgICAgaWNvbkVuZCxcbiAgICAgICAgcGFsZXR0ZUNvbG9yOiBjb2xvcixcbiAgICAgICAgc3VidGxlOiB0cnVlLFxuICAgICAgICB2YXJpYW50LFxuICAgICAgICAuLi5kYXRhXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0JhZGdlPlxuICApO1xufTtcblxuU3R5bGVkQXV0b0NvbXBsZXRlTXVsdGlWYWx1ZS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkLFxuICByZW1vdmVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVG91Y2hFbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSksXG4gIHBhbGV0dGVDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnJywgLi4uT2JqZWN0LmtleXMocGFsZXR0ZSldKSxcbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3BpbGwnXSlcbn07XG5cblN0eWxlZEF1dG9Db21wbGV0ZU11bHRpVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICByZW1vdmVQcm9wczoge1xuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uTW91c2VEb3duOiAoKSA9PiB7fSxcbiAgICBvblRvdWNoRW5kOiAoKSA9PiB7fVxuICB9LFxuICBwYWxldHRlQ29sb3I6IG51bGwsXG4gIHJlYWRPbmx5OiBmYWxzZSxcbiAgdmFyaWFudDogJ2RlZmF1bHQnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRBdXRvQ29tcGxldGVNdWx0aVZhbHVlO1xuIl19 */",
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
  var iconEnd = readOnly ? null : (0, _jsxRuntime.jsx)(_Icon["default"], _objectSpread({
    "aria-label": "remove",
    css: _ref2,
    fontSize: "size3",
    name: "cross"
  }, removeProps));
  return (0, _jsxRuntime.jsx)(_Badge["default"], _objectSpread(_objectSpread({}, _objectSpread({
    iconEnd: iconEnd,
    paletteColor: color,
    subtle: true,
    variant: variant
  }, data)), {}, {
    children: label
  }));
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