"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _polished = require("polished");

var _monochrome = require("./monochrome");

var grey50 = _monochrome.greys.grey50,
    grey60 = _monochrome.greys.grey60;
var _default = {
  disabled: (0, _polished.transparentize)(0.3, grey50),
  "default": grey60
};
exports["default"] = _default;