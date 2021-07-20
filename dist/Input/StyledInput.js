"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _styledSystem = require("styled-system");

var _inputStyles = _interopRequireDefault(require("./inputStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var largeStyles = function largeStyles(_ref) {
  var theme = _ref.theme,
      large = _ref.large;
  return large && /*#__PURE__*/(0, _react.css)("padding:", theme.space.small, " ", theme.space.smaller, ";;label:largeStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9TdHlsZWRJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSyIsImZpbGUiOiIuLi8uLi9zcmMvSW5wdXQvU3R5bGVkSW5wdXQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgZGlzcGxheSwgRGlzcGxheVByb3BzLCBtYXhXaWR0aCwgTWF4V2lkdGhQcm9wcyB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IGlucHV0U3R5bGVzLCB7IElucHV0U3R5bGVzUHJvcHMgfSBmcm9tICcuL2lucHV0U3R5bGVzJztcblxuY29uc3QgbGFyZ2VTdHlsZXMgPSAoeyB0aGVtZSwgbGFyZ2UgfTogeyB0aGVtZTogVGhlbWU7IGxhcmdlPzogYm9vbGVhbiB9KSA9PlxuICBsYXJnZSAmJlxuICBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjZS5zbWFsbH0gJHt0aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgYDtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBEaXNwbGF5UHJvcHMgJlxuICBJbnB1dFN0eWxlc1Byb3BzICZcbiAgTWF4V2lkdGhQcm9wcyAmIHtcbiAgICBsYXJnZT86IGJvb2xlYW47XG4gIH07XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0PFByb3BzPmBcbiAgJHtpbnB1dFN0eWxlc307XG4gICR7ZGlzcGxheX07XG4gICR7bGFyZ2VTdHlsZXN9O1xuICAke21heFdpZHRofTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZElucHV0O1xuIl19 */"));
};

var StyledInput = (0, _base["default"])("input", {
  target: "e19fzub50",
  label: "StyledInput"
})(_inputStyles["default"], ";", _styledSystem.display, ";", largeStyles, ";", _styledSystem.maxWidth, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9TdHlsZWRJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnVDIiwiZmlsZSI6Ii4uLy4uL3NyYy9JbnB1dC9TdHlsZWRJbnB1dC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBkaXNwbGF5LCBEaXNwbGF5UHJvcHMsIG1heFdpZHRoLCBNYXhXaWR0aFByb3BzIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgaW5wdXRTdHlsZXMsIHsgSW5wdXRTdHlsZXNQcm9wcyB9IGZyb20gJy4vaW5wdXRTdHlsZXMnO1xuXG5jb25zdCBsYXJnZVN0eWxlcyA9ICh7IHRoZW1lLCBsYXJnZSB9OiB7IHRoZW1lOiBUaGVtZTsgbGFyZ2U/OiBib29sZWFuIH0pID0+XG4gIGxhcmdlICYmXG4gIGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlLnNtYWxsfSAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICBgO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERpc3BsYXlQcm9wcyAmXG4gIElucHV0U3R5bGVzUHJvcHMgJlxuICBNYXhXaWR0aFByb3BzICYge1xuICAgIGxhcmdlPzogYm9vbGVhbjtcbiAgfTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXQ8UHJvcHM+YFxuICAke2lucHV0U3R5bGVzfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtsYXJnZVN0eWxlc307XG4gICR7bWF4V2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSW5wdXQ7XG4iXX0= */"));
var _default = StyledInput;
exports["default"] = _default;