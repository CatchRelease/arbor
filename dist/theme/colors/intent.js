"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.warning = exports.success = exports.info = exports.danger = void 0;

var _palette = require("./palette");

var _brand = _interopRequireDefault(require("./brand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var danger = _palette.red;
exports.danger = danger;
var info = _palette.blue;
exports.info = info;
var success = _palette.green;
exports.success = success;
var warning = _palette.orange;
exports.warning = warning;
var _default = {
  brand: _brand["default"],
  danger: danger,
  info: info,
  success: success,
  warning: warning
};
exports["default"] = _default;