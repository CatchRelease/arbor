"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
  target: "e1c3owgh0",
  label: "Grid"
})(_styledSystem.alignContent, ";", _styledSystem.alignItems, ";", _styledSystem.grid, ";", _styledSystem.justifyContent, ";", _styledSystem.justifyItems, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HcmlkL0dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUIrQiIsImZpbGUiOiIuLi8uLi9zcmMvR3JpZC9HcmlkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgYWxpZ25Db250ZW50LFxuICBBbGlnbkNvbnRlbnRQcm9wcyxcbiAgYWxpZ25JdGVtcyxcbiAgQWxpZ25JdGVtc1Byb3BzLFxuICBncmlkLFxuICBHcmlkUHJvcHMsXG4gIGp1c3RpZnlDb250ZW50LFxuICBKdXN0aWZ5Q29udGVudFByb3BzLFxuICBqdXN0aWZ5SXRlbXMsXG4gIEp1c3RpZnlJdGVtc1Byb3BzXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgQm94LCB7IEJveFByb3BzIH0gZnJvbSAnLi4vQm94JztcblxudHlwZSBQcm9wcyA9IEJveFByb3BzICZcbiAgQWxpZ25Db250ZW50UHJvcHMgJlxuICBBbGlnbkl0ZW1zUHJvcHMgJlxuICBHcmlkUHJvcHMgJlxuICBKdXN0aWZ5Q29udGVudFByb3BzICZcbiAgSnVzdGlmeUl0ZW1zUHJvcHM7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQoQm94KTxQcm9wcz5gXG4gICR7YWxpZ25Db250ZW50fTtcbiAgJHthbGlnbkl0ZW1zfTtcbiAgJHtncmlkfTtcbiAgJHtqdXN0aWZ5Q29udGVudH07XG4gICR7anVzdGlmeUl0ZW1zfTtcbmA7XG5cbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiAnZ3JpZCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0= */"));
Grid.defaultProps = {
  display: 'grid'
};
var _default = Grid;
exports["default"] = _default;