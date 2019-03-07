"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Pane = _interopRequireDefault(require("../Pane"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = (0, _createWithComponent.default)(_Pane.default, 'div', {
  defaultProps: {
    borderRadius: 'large'
  }
});
var _default = Card;
exports.default = _default;