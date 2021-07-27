"use strict";
exports.__esModule = true;
var colorForString = function (string, colors) {
    var code = string
        .split('')
        .reduce(function (sum, char) { return sum + char.charCodeAt(0); }, 0);
    return colors[code % colors.length];
};
exports["default"] = colorForString;
