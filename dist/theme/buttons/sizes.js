"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _polished = require("polished");

var _typography = require("../typography");

var buttonSize = function buttonSize(rawHeight, textFontSize, iconFontSize) {
  var height = (0, _polished.rem)("".concat(rawHeight, "px"));
  var padding = (0, _polished.rem)("".concat(rawHeight * 0.5, "px"));
  return {
    fontSize: textFontSize,
    height: height,
    p: "0 ".concat(padding),
    i: {
      width: height,
      fontSize: iconFontSize,
      '&:first-child': {
        ml: "-".concat(padding)
      },
      '&:last-child': {
        mr: "-".concat(padding)
      }
    }
  };
};

var _default = {
  small: buttonSize(24, _typography.sizes.size2, _typography.sizes.size1),
  medium: buttonSize(32, _typography.sizes.size3, _typography.sizes.size2),
  large: buttonSize(40, _typography.sizes.size4, _typography.sizes.size4),
  jumbo: buttonSize(48, _typography.sizes.size4, _typography.sizes.size5)
};
exports["default"] = _default;