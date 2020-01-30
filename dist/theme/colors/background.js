"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _monochrome = require("./monochrome");

var grey10 = _monochrome.greys.grey10,
    grey20 = _monochrome.greys.grey20,
    grey30 = _monochrome.greys.grey30;
var _default = {
  "default": grey20,
  disabled: grey30,
  muted: grey10,
  white: _monochrome.white
};
exports["default"] = _default;