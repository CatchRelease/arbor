"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _Grid = _interopRequireDefault(require("../Grid"));

var _intents = _interopRequireDefault(require("./intents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  return (
    /*#__PURE__*/
    (0, _core.css)("grid-template-columns:", columns, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9TdHlsZWRBbGVydENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JZIiwiZmlsZSI6Ii4uLy4uL3NyYy9BbGVydC9TdHlsZWRBbGVydENvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4uL0dyaWQnO1xuaW1wb3J0IElOVEVOVFMgZnJvbSAnLi9pbnRlbnRzJztcblxuY29uc3QgZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICh7IGludGVudCwgb25DbG9zZSB9KSA9PiB7XG4gIGxldCBjb2x1bW5zO1xuXG4gIGlmIChpbnRlbnQgJiYgb25DbG9zZSkge1xuICAgIGNvbHVtbnMgPSAnMGZyIDFmciAwZnInO1xuICB9IGVsc2UgaWYgKGludGVudCkge1xuICAgIGNvbHVtbnMgPSAnMGZyIDFmcic7XG4gIH0gZWxzZSBpZiAob25DbG9zZSkge1xuICAgIGNvbHVtbnMgPSAnMWZyIDBmcic7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHtjb2x1bW5zfTtcbiAgYDtcbn07XG5cbmNvbnN0IFN0eWxlZEFsZXJ0Q29udGVudCA9IHN0eWxlZChHcmlkKWBcbiAgJHtncmlkVGVtcGxhdGVDb2x1bW5zfTtcbmA7XG5cblN0eWxlZEFsZXJ0Q29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGRldGFpbHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKVxuICBdKSxcbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoSU5URU5UUyksXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5TdHlsZWRBbGVydENvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICAuLi5HcmlkLmRlZmF1bHRQcm9wcyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRldGFpbHM6IHVuZGVmaW5lZCxcbiAgZ3JpZENvbHVtbkdhcDogJ3JlZ3VsYXInLFxuICBncmlkUm93R2FwOiAnc21hbGxlcicsXG4gIGludGVudDogdW5kZWZpbmVkLFxuICBvbkNsb3NlOiB1bmRlZmluZWQsXG4gIHA6ICdyZWd1bGFyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQWxlcnRDb250ZW50O1xuIl19 */"))
  );
};

var StyledAlertContent = (
/*#__PURE__*/
0, _styledBase["default"])(_Grid["default"], {
  target: "eb76msp0",
  label: "StyledAlertContent"
})(gridTemplateColumns, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9TdHlsZWRBbGVydENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ1QyIsImZpbGUiOiIuLi8uLi9zcmMvQWxlcnQvU3R5bGVkQWxlcnRDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9HcmlkJztcbmltcG9ydCBJTlRFTlRTIGZyb20gJy4vaW50ZW50cyc7XG5cbmNvbnN0IGdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAoeyBpbnRlbnQsIG9uQ2xvc2UgfSkgPT4ge1xuICBsZXQgY29sdW1ucztcblxuICBpZiAoaW50ZW50ICYmIG9uQ2xvc2UpIHtcbiAgICBjb2x1bW5zID0gJzBmciAxZnIgMGZyJztcbiAgfSBlbHNlIGlmIChpbnRlbnQpIHtcbiAgICBjb2x1bW5zID0gJzBmciAxZnInO1xuICB9IGVsc2UgaWYgKG9uQ2xvc2UpIHtcbiAgICBjb2x1bW5zID0gJzFmciAwZnInO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7Y29sdW1uc307XG4gIGA7XG59O1xuXG5jb25zdCBTdHlsZWRBbGVydENvbnRlbnQgPSBzdHlsZWQoR3JpZClgXG4gICR7Z3JpZFRlbXBsYXRlQ29sdW1uc307XG5gO1xuXG5TdHlsZWRBbGVydENvbnRlbnQucHJvcFR5cGVzID0ge1xuICBkZXRhaWxzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSlcbiAgXSksXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKElOVEVOVFMpLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuU3R5bGVkQWxlcnRDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uR3JpZC5kZWZhdWx0UHJvcHMsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBkZXRhaWxzOiB1bmRlZmluZWQsXG4gIGdyaWRDb2x1bW5HYXA6ICdyZWd1bGFyJyxcbiAgZ3JpZFJvd0dhcDogJ3NtYWxsZXInLFxuICBpbnRlbnQ6IHVuZGVmaW5lZCxcbiAgb25DbG9zZTogdW5kZWZpbmVkLFxuICBwOiAncmVndWxhcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEFsZXJ0Q29udGVudDtcbiJdfQ== */"));
StyledAlertContent.propTypes = {
  details: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),
  intent: _propTypes["default"].oneOf(_intents["default"]),
  onClose: _propTypes["default"].func
};
StyledAlertContent.defaultProps = _objectSpread({}, _Grid["default"].defaultProps, {
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