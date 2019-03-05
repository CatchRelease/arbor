"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var colorForString = function colorForString(string, colors) {
  var code = string.split('').reduce(function (sum, char) {
    return sum + char.charCodeAt(0);
  }, 0);
  return colors[code % colors.length];
};

var _default = colorForString;
exports.default = _default;