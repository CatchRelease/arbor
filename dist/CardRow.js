"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Flex = _interopRequireDefault(require("./Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardRow = _Flex.default.withComponent('div', {
  target: "emr22xw0",
  label: "CardRow"
});

CardRow.defaultProps = {
  px: 'regular',
  py: 'smallest',
  my: 'smaller',
  alignItems: 'center',
  justifyContent: 'space-between'
};
var _default = CardRow;
exports.default = _default;