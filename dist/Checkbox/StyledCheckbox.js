"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _polished = require("polished");

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _core.css)("background-color:", theme.colors.white, ";border-radius:", theme.borderRadius.small, ";border:1px solid ", theme.colors.grey60, ";color:", theme.colors.white, ";flex-shrink:0;height:", (0, _polished.rem)('16px'), ";width:", (0, _polished.rem)('16px'), ";label:baseStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9TdHlsZWRDaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNcUMiLCJmaWxlIjoiLi4vLi4vc3JjL0NoZWNrYm94L1N0eWxlZENoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTYwfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogJHtyZW0oJzE2cHgnKX07XG4gIHdpZHRoOiAke3JlbSgnMTZweCcpfTtcbmA7XG5cbmNvbnN0IGNoZWNrZWRTdHlsZXMgPSAoeyB0aGVtZSwgY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PlxuICBjaGVja2VkICYmXG4gIGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2luZGV0ZXJtaW5hdGUgPyB0aGVtZS5jb2xvcnMud2hpdGUgOiB0aGVtZS5jb2xvcnMuYmx1ZX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibHVlfTtcbiAgICBjb2xvcjogJHtpbmRldGVybWluYXRlID8gdGhlbWUuY29sb3JzLmJsdWUgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBgO1xuXG5jb25zdCBkaXNhYmxlZFN0eWxlcyA9ICh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCB9KSA9PlxuICBkaXNhYmxlZCAmJlxuICBjc3NgXG4gICAgYmFja2dyb3VuZDogJHtjaGVja2VkID8gdGhlbWUuY29sb3JzLmdyZXk0MCA6IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH07XG4gICAgY29sb3I6ICR7Y2hlY2tlZCA/IHRoZW1lLmNvbG9ycy5ncmV5NjAgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBgO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZChGbGV4KWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtjaGVja2VkU3R5bGVzfTtcbiAgJHtkaXNhYmxlZFN0eWxlc307XG5gO1xuXG5TdHlsZWRDaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZENoZWNrYm94O1xuIl19 */"))
  );
};

var checkedStyles = function checkedStyles(_ref2) {
  var theme = _ref2.theme,
      checked = _ref2.checked,
      indeterminate = _ref2.indeterminate;
  return checked &&
  /*#__PURE__*/
  (0, _core.css)("background-color:", indeterminate ? theme.colors.white : theme.colors.blue, ";border-color:", theme.colors.blue, ";color:", indeterminate ? theme.colors.blue : theme.colors.white, ";label:checkedStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9TdHlsZWRDaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQksiLCJmaWxlIjoiLi4vLi4vc3JjL0NoZWNrYm94L1N0eWxlZENoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTYwfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogJHtyZW0oJzE2cHgnKX07XG4gIHdpZHRoOiAke3JlbSgnMTZweCcpfTtcbmA7XG5cbmNvbnN0IGNoZWNrZWRTdHlsZXMgPSAoeyB0aGVtZSwgY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PlxuICBjaGVja2VkICYmXG4gIGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2luZGV0ZXJtaW5hdGUgPyB0aGVtZS5jb2xvcnMud2hpdGUgOiB0aGVtZS5jb2xvcnMuYmx1ZX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibHVlfTtcbiAgICBjb2xvcjogJHtpbmRldGVybWluYXRlID8gdGhlbWUuY29sb3JzLmJsdWUgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBgO1xuXG5jb25zdCBkaXNhYmxlZFN0eWxlcyA9ICh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCB9KSA9PlxuICBkaXNhYmxlZCAmJlxuICBjc3NgXG4gICAgYmFja2dyb3VuZDogJHtjaGVja2VkID8gdGhlbWUuY29sb3JzLmdyZXk0MCA6IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH07XG4gICAgY29sb3I6ICR7Y2hlY2tlZCA/IHRoZW1lLmNvbG9ycy5ncmV5NjAgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBgO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZChGbGV4KWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtjaGVja2VkU3R5bGVzfTtcbiAgJHtkaXNhYmxlZFN0eWxlc307XG5gO1xuXG5TdHlsZWRDaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZENoZWNrYm94O1xuIl19 */"));
};

var disabledStyles = function disabledStyles(_ref3) {
  var theme = _ref3.theme,
      checked = _ref3.checked,
      disabled = _ref3.disabled;
  return disabled &&
  /*#__PURE__*/
  (0, _core.css)("background:", checked ? theme.colors.grey40 : theme.colors.white, ";border-color:", theme.colors.border.default, ";color:", checked ? theme.colors.grey60 : theme.colors.white, ";label:disabledStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9TdHlsZWRDaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQksiLCJmaWxlIjoiLi4vLi4vc3JjL0NoZWNrYm94L1N0eWxlZENoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTYwfTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogJHtyZW0oJzE2cHgnKX07XG4gIHdpZHRoOiAke3JlbSgnMTZweCcpfTtcbmA7XG5cbmNvbnN0IGNoZWNrZWRTdHlsZXMgPSAoeyB0aGVtZSwgY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSB9KSA9PlxuICBjaGVja2VkICYmXG4gIGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2luZGV0ZXJtaW5hdGUgPyB0aGVtZS5jb2xvcnMud2hpdGUgOiB0aGVtZS5jb2xvcnMuYmx1ZX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibHVlfTtcbiAgICBjb2xvcjogJHtpbmRldGVybWluYXRlID8gdGhlbWUuY29sb3JzLmJsdWUgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBgO1xuXG5jb25zdCBkaXNhYmxlZFN0eWxlcyA9ICh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCB9KSA9PlxuICBkaXNhYmxlZCAmJlxuICBjc3NgXG4gICAgYmFja2dyb3VuZDogJHtjaGVja2VkID8gdGhlbWUuY29sb3JzLmdyZXk0MCA6IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH07XG4gICAgY29sb3I6ICR7Y2hlY2tlZCA/IHRoZW1lLmNvbG9ycy5ncmV5NjAgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBgO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZChGbGV4KWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtjaGVja2VkU3R5bGVzfTtcbiAgJHtkaXNhYmxlZFN0eWxlc307XG5gO1xuXG5TdHlsZWRDaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZENoZWNrYm94O1xuIl19 */"));
};

var StyledCheckbox = (
/*#__PURE__*/
0, _styledBase.default)(_Flex.default, {
  target: "e1ob0woh0",
  label: "StyledCheckbox"
})(baseStyles, ";", checkedStyles, ";", disabledStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9TdHlsZWRDaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ21DIiwiZmlsZSI6Ii4uLy4uL3NyYy9DaGVja2JveC9TdHlsZWRDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgRmxleCBmcm9tICcuLi9GbGV4JztcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlclJhZGl1cy5zbWFsbH07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXk2MH07XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6ICR7cmVtKCcxNnB4Jyl9O1xuICB3aWR0aDogJHtyZW0oJzE2cHgnKX07XG5gO1xuXG5jb25zdCBjaGVja2VkU3R5bGVzID0gKHsgdGhlbWUsIGNoZWNrZWQsIGluZGV0ZXJtaW5hdGUgfSkgPT5cbiAgY2hlY2tlZCAmJlxuICBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtpbmRldGVybWluYXRlID8gdGhlbWUuY29sb3JzLndoaXRlIDogdGhlbWUuY29sb3JzLmJsdWV9O1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmx1ZX07XG4gICAgY29sb3I6ICR7aW5kZXRlcm1pbmF0ZSA/IHRoZW1lLmNvbG9ycy5ibHVlIDogdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYDtcblxuY29uc3QgZGlzYWJsZWRTdHlsZXMgPSAoeyB0aGVtZSwgY2hlY2tlZCwgZGlzYWJsZWQgfSkgPT5cbiAgZGlzYWJsZWQgJiZcbiAgY3NzYFxuICAgIGJhY2tncm91bmQ6ICR7Y2hlY2tlZCA/IHRoZW1lLmNvbG9ycy5ncmV5NDAgOiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9O1xuICAgIGNvbG9yOiAke2NoZWNrZWQgPyB0aGVtZS5jb2xvcnMuZ3JleTYwIDogdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYDtcblxuY29uc3QgU3R5bGVkQ2hlY2tib3ggPSBzdHlsZWQoRmxleClgXG4gICR7YmFzZVN0eWxlc307XG4gICR7Y2hlY2tlZFN0eWxlc307XG4gICR7ZGlzYWJsZWRTdHlsZXN9O1xuYDtcblxuU3R5bGVkQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRDaGVja2JveDtcbiJdfQ== */"));
StyledCheckbox.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center'
};
var _default = StyledCheckbox;
exports.default = _default;