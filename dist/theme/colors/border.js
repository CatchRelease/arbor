"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _monochrome = require("./monochrome");

var grey30 = _monochrome.greys.grey30,
    grey40 = _monochrome.greys.grey40,
    grey80 = _monochrome.greys.grey80;
var _default = {
  muted: grey30,
  "default": grey40,
  dark: grey80
};
exports["default"] = _default;