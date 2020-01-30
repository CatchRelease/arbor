"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _polished = require("polished");

var _monochrome = require("./monochrome");

var grey60 = _monochrome.greys.grey60,
    grey70 = _monochrome.greys.grey70,
    grey80 = _monochrome.greys.grey80,
    grey90 = _monochrome.greys.grey90,
    grey100 = _monochrome.greys.grey100;
var _default = {
  dark: grey100,
  "default": grey90,
  disabled: (0, _polished.transparentize)(0.3, grey70),
  muted: grey80,
  placeholder: grey60
};
exports["default"] = _default;