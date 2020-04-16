"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _polished = require("polished");

var _monochrome = require("./monochrome");

var grey90 = _monochrome.greys.grey90;
var _default = {
  blurry: (0, _polished.transparentize)(0.7, grey90),
  border: (0, _polished.transparentize)(0.53, grey90)
};
exports["default"] = _default;