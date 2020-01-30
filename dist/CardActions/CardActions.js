"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _Grid = _interopRequireDefault(require("../Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var gridStyles = function gridStyles(_ref) {
  var children = _ref.children;
  return (
    /*#__PURE__*/
    (0, _core.css)("grid-template-columns:repeat(", children.length, ",1fr);" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkQWN0aW9ucy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLd0MiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRBY3Rpb25zL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4uL0dyaWQnO1xuXG5jb25zdCBncmlkU3R5bGVzID0gKHsgY2hpbGRyZW4gfSkgPT4gY3NzYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke2NoaWxkcmVuLmxlbmd0aH0sIDFmcik7XG5gO1xuXG5jb25zdCBDYXJkQWN0aW9ucyA9IHN0eWxlZChHcmlkKWBcbiAgJHtncmlkU3R5bGVzfTtcbmA7XG5cbkNhcmRBY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ3JpZEdhcDogJ3NtYWxsZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkQWN0aW9ucztcbiJdfQ== */"))
  );
};

var CardActions = (
/*#__PURE__*/
0, _styledBase["default"])(_Grid["default"], {
  target: "e1lpmm440",
  label: "CardActions"
})(gridStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkQWN0aW9ucy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0MiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRBY3Rpb25zL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4uL0dyaWQnO1xuXG5jb25zdCBncmlkU3R5bGVzID0gKHsgY2hpbGRyZW4gfSkgPT4gY3NzYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke2NoaWxkcmVuLmxlbmd0aH0sIDFmcik7XG5gO1xuXG5jb25zdCBDYXJkQWN0aW9ucyA9IHN0eWxlZChHcmlkKWBcbiAgJHtncmlkU3R5bGVzfTtcbmA7XG5cbkNhcmRBY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ3JpZEdhcDogJ3NtYWxsZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkQWN0aW9ucztcbiJdfQ== */"));
CardActions.defaultProps = {
  gridGap: 'smaller'
};
var _default = CardActions;
exports["default"] = _default;