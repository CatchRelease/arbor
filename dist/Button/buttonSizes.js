"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _polished = require("polished");

var buttonSizes = function buttonSizes(_ref) {
  var theme = _ref.theme,
      iconStart = _ref.iconStart,
      iconEnd = _ref.iconEnd,
      size = _ref.size,
      text = _ref.text;
  var sizeMap = {
    small: {
      padding: function () {
        if (text === undefined || iconEnd && iconStart) {
          return "0 ".concat(theme.space.smallest);
        }

        if (iconStart) {
          return "0 ".concat(theme.space.smaller, " 0 ").concat(theme.space.smallest);
        }

        if (iconEnd) {
          return "0 ".concat(theme.space.smallest, " 0 ").concat(theme.space.smaller);
        }

        return "0 ".concat(theme.space.smaller);
      }(),
      height: (0, _polished.rem)('24px'),
      fontSize: theme.fontSizes.size2
    },
    medium: {
      padding: "0 ".concat(theme.space.smaller),
      height: (0, _polished.rem)('32px'),
      fontSize: theme.fontSizes.size4
    },
    large: {
      padding: function () {
        if (text === undefined) {
          return "0 ".concat(theme.space.small);
        }

        if (iconStart && iconEnd) {
          return "0 ".concat(theme.space.small, " 0 ").concat(theme.space.smaller);
        }

        if (iconStart) {
          return "0 ".concat(theme.space.regular, " 0 ").concat(theme.space.smaller);
        }

        if (iconEnd) {
          return "0 ".concat(theme.space.small, " 0 ").concat(theme.space.regular);
        }

        return "0 ".concat(theme.space.smaller);
      }(),
      height: (0, _polished.rem)('40px'),
      fontSize: theme.fontSizes.size4
    },
    jumbo: {
      padding: function () {
        if (text === undefined) {
          return "0 ".concat(theme.space.regular);
        }

        if (iconStart && iconEnd) {
          return "0 ".concat(theme.space.small, " 0 ").concat(theme.space.smaller);
        }

        if (iconStart) {
          return "0 ".concat(theme.space.regular, " 0 ").concat(theme.space.smaller);
        }

        if (iconEnd) {
          return "0 ".concat(theme.space.small, " 0 ").concat(theme.space.regular);
        }

        return "".concat(theme.space.smaller, " ").concat(theme.space.regular);
      }(),
      height: (0, _polished.rem)('48px'),
      fontSize: theme.fontSizes.size4
    }
  };
  return sizeMap[size];
};

var _default = buttonSizes;
exports.default = _default;