"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pane = _interopRequireDefault(require("../Pane"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(props) {
  return _react["default"].createElement(_Pane["default"], props);
};

Card.defaultProps = {
  borderRadius: 'large'
};
var _default = Card;
exports["default"] = _default;