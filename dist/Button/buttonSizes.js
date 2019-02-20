"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _polished = require("polished");

var calculatePadding = function calculatePadding(_ref) {
  var xDefault = _ref.xDefault,
      iconStart = _ref.iconStart,
      iconEnd = _ref.iconEnd,
      theme = _ref.theme,
      text = _ref.text;

  if (text === undefined || iconStart && iconEnd) {
    return "0 ".concat(theme.space.smallest);
  }

  if (iconStart) {
    return "0 ".concat(xDefault, " 0 ").concat(theme.space.smallest);
  }

  if (iconEnd) {
    return "0 ".concat(theme.space.smallest, " 0 ").concat(xDefault);
  }

  return "0 ".concat(xDefault);
};

var buttonSizes = function buttonSizes(_ref2) {
  var theme = _ref2.theme,
      iconStart = _ref2.iconStart,
      iconEnd = _ref2.iconEnd,
      size = _ref2.size,
      text = _ref2.text;
  var sizeMap = {
    small: {
      padding: function () {
        if (text === undefined || iconEnd && iconStart) {
          return 0;
        }

        if (iconStart) {
          return "0 ".concat(theme.space.smaller, " 0 0");
        }

        if (iconEnd) {
          return "0 0 0 ".concat(theme.space.smaller);
        }

        return "0 ".concat(theme.space.smaller);
      }(),
      height: (0, _polished.rem)('24px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: (0, _polished.rem)('22px')
      }
    },
    medium: {
      padding: calculatePadding({
        iconStart: iconStart,
        iconEnd: iconEnd,
        text: text,
        theme: theme,
        xDefault: theme.space.smaller
      }),
      height: (0, _polished.rem)('32px'),
      fontSize: theme.fontSizes.size4,
      i: {
        fontSize: (0, _polished.rem)('24px')
      }
    },
    large: {
      padding: calculatePadding({
        iconStart: iconStart,
        iconEnd: iconEnd,
        text: text,
        theme: theme,
        xDefault: theme.space.regular
      }),
      height: (0, _polished.rem)('40px'),
      fontSize: theme.fontSizes.size4,
      i: {
        fontSize: (0, _polished.rem)('32px')
      }
    },
    jumbo: {
      padding: function () {
        if (text === undefined) {
          return theme.space.smaller;
        }

        if (iconStart && iconEnd) {
          return "0 ".concat(theme.space.smallest);
        }

        if (iconStart) {
          return "0 ".concat(theme.space.regular, " 0 ").concat(theme.space.smallest);
        }

        if (iconEnd) {
          return "0 ".concat(theme.space.smallest, " 0 ").concat(theme.space.regular);
        }

        return "".concat(theme.space.smaller, " ").concat(theme.space.regular);
      }(),
      height: (0, _polished.rem)('48px'),
      fontSize: theme.fontSizes.size4,
      i: {
        fontSize: (0, _polished.rem)('32px')
      }
    }
  };
  return sizeMap[size];
};

var _default = buttonSizes;
exports.default = _default;