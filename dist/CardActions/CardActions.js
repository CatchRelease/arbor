"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

var _Grid = _interopRequireDefault(require("../Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gridStyles = function gridStyles(_ref) {
  var children = _ref.children;
  return (
    /*#__PURE__*/
    (0, _core.css)("grid-template-columns:repeat(", children.length, ",1fr);label:gridStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkQWN0aW9ucy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNd0MiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRBY3Rpb25zL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBjcmVhdGVXaXRoQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZVdpdGhDb21wb25lbnQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi4vR3JpZCc7XG5cbmNvbnN0IGdyaWRTdHlsZXMgPSAoeyBjaGlsZHJlbiB9KSA9PiBjc3NgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7Y2hpbGRyZW4ubGVuZ3RofSwgMWZyKTtcbmA7XG5cbmNvbnN0IENhcmRBY3Rpb25zID0gc3R5bGVkKFxuICBjcmVhdGVXaXRoQ29tcG9uZW50KEdyaWQsICdkaXYnLCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICBncmlkR2FwOiAnc21hbGxlcidcbiAgICB9XG4gIH0pXG4pYFxuICAke2dyaWRTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEFjdGlvbnM7XG4iXX0= */"))
  );
};

var CardActions = (
/*#__PURE__*/
0, _styledBase.default)((0, _createWithComponent.default)(_Grid.default, 'div', {
  defaultProps: {
    gridGap: 'smaller'
  }
}), {
  target: "e1lpmm440",
  label: "CardActions"
})(gridStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkQWN0aW9ucy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkMiLCJmaWxlIjoiLi4vLi4vc3JjL0NhcmRBY3Rpb25zL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBjcmVhdGVXaXRoQ29tcG9uZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZVdpdGhDb21wb25lbnQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi4vR3JpZCc7XG5cbmNvbnN0IGdyaWRTdHlsZXMgPSAoeyBjaGlsZHJlbiB9KSA9PiBjc3NgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7Y2hpbGRyZW4ubGVuZ3RofSwgMWZyKTtcbmA7XG5cbmNvbnN0IENhcmRBY3Rpb25zID0gc3R5bGVkKFxuICBjcmVhdGVXaXRoQ29tcG9uZW50KEdyaWQsICdkaXYnLCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICBncmlkR2FwOiAnc21hbGxlcidcbiAgICB9XG4gIH0pXG4pYFxuICAke2dyaWRTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEFjdGlvbnM7XG4iXX0= */"));
var _default = CardActions;
exports.default = _default;