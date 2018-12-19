"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputContainer = (0, _styledBase.default)("div", {
  target: "e1bbyyts0",
  label: "InputContainer"
})("margin-bottom:", function (props) {
  return props.caption ? props.theme.space.smaller : props.theme.space.regular;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHaUMiLCJmaWxlIjoiLi4vLi4vc3JjL0lucHV0L0lucHV0Q29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+XG4gICAgcHJvcHMuY2FwdGlvbiA/IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXIgOiBwcm9wcy50aGVtZS5zcGFjZS5yZWd1bGFyfTtcbmA7XG5cbklucHV0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuSW5wdXRDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBjYXB0aW9uOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb250YWluZXI7XG4iXX0= */"));
InputContainer.propTypes = {
  caption: _propTypes.default.string
};
InputContainer.defaultProps = {
  caption: ''
};
var _default = InputContainer;
exports.default = _default;