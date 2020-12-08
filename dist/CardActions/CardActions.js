"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _Grid = _interopRequireDefault(require("../Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var gridStyles = function gridStyles(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _react.css)("grid-template-columns:repeat(", children.length, ", 1fr);;label:gridStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkQWN0aW9ucy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLd0MiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRBY3Rpb25zL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9HcmlkJztcblxuY29uc3QgZ3JpZFN0eWxlcyA9ICh7IGNoaWxkcmVuIH0pID0+IGNzc2BcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtjaGlsZHJlbi5sZW5ndGh9LCAxZnIpO1xuYDtcblxuY29uc3QgQ2FyZEFjdGlvbnMgPSBzdHlsZWQoR3JpZClgXG4gICR7Z3JpZFN0eWxlc307XG5gO1xuXG5DYXJkQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGdyaWRHYXA6ICdzbWFsbGVyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEFjdGlvbnM7XG4iXX0= */"));
};

var CardActions = ( /*#__PURE__*/0, _base["default"])(_Grid["default"], {
  target: "e1lpmm440",
  label: "CardActions"
})(gridStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkQWN0aW9ucy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0MiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRBY3Rpb25zL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9HcmlkJztcblxuY29uc3QgZ3JpZFN0eWxlcyA9ICh7IGNoaWxkcmVuIH0pID0+IGNzc2BcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtjaGlsZHJlbi5sZW5ndGh9LCAxZnIpO1xuYDtcblxuY29uc3QgQ2FyZEFjdGlvbnMgPSBzdHlsZWQoR3JpZClgXG4gICR7Z3JpZFN0eWxlc307XG5gO1xuXG5DYXJkQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGdyaWRHYXA6ICdzbWFsbGVyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEFjdGlvbnM7XG4iXX0= */"));
CardActions.defaultProps = {
  gridGap: 'smaller'
};
var _default = CardActions;
exports["default"] = _default;