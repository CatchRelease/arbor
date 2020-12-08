"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@emotion/react");

var _Grid = _interopRequireDefault(require("../Grid"));

var _intents = _interopRequireDefault(require("./intents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gridTemplateColumns = function gridTemplateColumns(_ref) {
  var intent = _ref.intent,
      onClose = _ref.onClose;
  var columns;

  if (intent && onClose) {
    columns = '0fr 1fr 0fr';
  } else if (intent) {
    columns = '0fr 1fr';
  } else if (onClose) {
    columns = '1fr 0fr';
  }

  return /*#__PURE__*/(0, _react.css)("grid-template-columns:", columns, ";;label:gridTemplateColumns;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9TdHlsZWRBbGVydENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JZIiwiZmlsZSI6Ii4uLy4uL3NyYy9BbGVydC9TdHlsZWRBbGVydENvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9HcmlkJztcbmltcG9ydCBJTlRFTlRTIGZyb20gJy4vaW50ZW50cyc7XG5cbmNvbnN0IGdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAoeyBpbnRlbnQsIG9uQ2xvc2UgfSkgPT4ge1xuICBsZXQgY29sdW1ucztcblxuICBpZiAoaW50ZW50ICYmIG9uQ2xvc2UpIHtcbiAgICBjb2x1bW5zID0gJzBmciAxZnIgMGZyJztcbiAgfSBlbHNlIGlmIChpbnRlbnQpIHtcbiAgICBjb2x1bW5zID0gJzBmciAxZnInO1xuICB9IGVsc2UgaWYgKG9uQ2xvc2UpIHtcbiAgICBjb2x1bW5zID0gJzFmciAwZnInO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7Y29sdW1uc307XG4gIGA7XG59O1xuXG5jb25zdCBTdHlsZWRBbGVydENvbnRlbnQgPSBzdHlsZWQoR3JpZClgXG4gICR7Z3JpZFRlbXBsYXRlQ29sdW1uc307XG5gO1xuXG5TdHlsZWRBbGVydENvbnRlbnQucHJvcFR5cGVzID0ge1xuICBkZXRhaWxzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSlcbiAgXSksXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKElOVEVOVFMpLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuU3R5bGVkQWxlcnRDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uR3JpZC5kZWZhdWx0UHJvcHMsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBkZXRhaWxzOiB1bmRlZmluZWQsXG4gIGdyaWRDb2x1bW5HYXA6ICdyZWd1bGFyJyxcbiAgZ3JpZFJvd0dhcDogJ3NtYWxsZXInLFxuICBpbnRlbnQ6IHVuZGVmaW5lZCxcbiAgb25DbG9zZTogdW5kZWZpbmVkLFxuICBwOiAncmVndWxhcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEFsZXJ0Q29udGVudDtcbiJdfQ== */"));
};

var StyledAlertContent = ( /*#__PURE__*/0, _base["default"])(_Grid["default"], {
  target: "eb76msp0",
  label: "StyledAlertContent"
})(gridTemplateColumns, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9TdHlsZWRBbGVydENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ1QyIsImZpbGUiOiIuLi8uLi9zcmMvQWxlcnQvU3R5bGVkQWxlcnRDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi4vR3JpZCc7XG5pbXBvcnQgSU5URU5UUyBmcm9tICcuL2ludGVudHMnO1xuXG5jb25zdCBncmlkVGVtcGxhdGVDb2x1bW5zID0gKHsgaW50ZW50LCBvbkNsb3NlIH0pID0+IHtcbiAgbGV0IGNvbHVtbnM7XG5cbiAgaWYgKGludGVudCAmJiBvbkNsb3NlKSB7XG4gICAgY29sdW1ucyA9ICcwZnIgMWZyIDBmcic7XG4gIH0gZWxzZSBpZiAoaW50ZW50KSB7XG4gICAgY29sdW1ucyA9ICcwZnIgMWZyJztcbiAgfSBlbHNlIGlmIChvbkNsb3NlKSB7XG4gICAgY29sdW1ucyA9ICcxZnIgMGZyJztcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke2NvbHVtbnN9O1xuICBgO1xufTtcblxuY29uc3QgU3R5bGVkQWxlcnRDb250ZW50ID0gc3R5bGVkKEdyaWQpYFxuICAke2dyaWRUZW1wbGF0ZUNvbHVtbnN9O1xuYDtcblxuU3R5bGVkQWxlcnRDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgZGV0YWlsczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIF0pLFxuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihJTlRFTlRTKSxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblN0eWxlZEFsZXJ0Q29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIC4uLkdyaWQuZGVmYXVsdFByb3BzLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZGV0YWlsczogdW5kZWZpbmVkLFxuICBncmlkQ29sdW1uR2FwOiAncmVndWxhcicsXG4gIGdyaWRSb3dHYXA6ICdzbWFsbGVyJyxcbiAgaW50ZW50OiB1bmRlZmluZWQsXG4gIG9uQ2xvc2U6IHVuZGVmaW5lZCxcbiAgcDogJ3JlZ3VsYXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRBbGVydENvbnRlbnQ7XG4iXX0= */"));
StyledAlertContent.propTypes = {
  details: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),
  intent: _propTypes["default"].oneOf(_intents["default"]),
  onClose: _propTypes["default"].func
};
StyledAlertContent.defaultProps = _objectSpread(_objectSpread({}, _Grid["default"].defaultProps), {}, {
  alignItems: 'center',
  details: undefined,
  gridColumnGap: 'regular',
  gridRowGap: 'smaller',
  intent: undefined,
  onClose: undefined,
  p: 'regular'
});
var _default = StyledAlertContent;
exports["default"] = _default;