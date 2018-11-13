"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var spaceStyles = function spaceStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _reactEmotion.css)("padding:", theme.space.smaller, " ", theme.space.regular, ";margin:", theme.space.smaller, " 0;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkUm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdzQyIsImZpbGUiOiIuLi9zcmMvQ2FyZFJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcblxuY29uc3Qgc3BhY2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gJHt0aGVtZS5zcGFjZS5yZWd1bGFyfTtcbiAgbWFyZ2luOiAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9IDA7XG5gO1xuXG5jb25zdCBDYXJkUm93ID0gc3R5bGVkKEJveC53aXRoQ29tcG9uZW50KCdkaXYnKSlgXG4gICR7c3BhY2VTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFJvdztcbiJdfQ== */label:spaceStyles;")
  );
};

var CardRow =
/*#__PURE__*/
(0, _reactEmotion.default)(_Box.default.withComponent('div', {
  target: "emr22xw1"
}), {
  label: "CardRow",
  target: "emr22xw0"
})(spaceStyles, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkUm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnRCIsImZpbGUiOiIuLi9zcmMvQ2FyZFJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94JztcblxuY29uc3Qgc3BhY2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gJHt0aGVtZS5zcGFjZS5yZWd1bGFyfTtcbiAgbWFyZ2luOiAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9IDA7XG5gO1xuXG5jb25zdCBDYXJkUm93ID0gc3R5bGVkKEJveC53aXRoQ29tcG9uZW50KCdkaXYnKSlgXG4gICR7c3BhY2VTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFJvdztcbiJdfQ== */");
var _default = CardRow;
exports.default = _default;