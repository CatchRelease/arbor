"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var calculatePadding = function calculatePadding(_ref2) {
  var xDefault = _ref2.xDefault,
      iconStart = _ref2.iconStart,
      iconEnd = _ref2.iconEnd,
      theme = _ref2.theme,
      text = _ref2.text;

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

var sizeStyles = function sizeStyles(_ref3) {
  var theme = _ref3.theme,
      iconStart = _ref3.iconStart,
      iconEnd = _ref3.iconEnd,
      size = _ref3.size,
      text = _ref3.text;
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
      fontSize: theme.fontSizes.size1,
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
      fontSize: theme.fontSizes.size2,
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
      fontSize: theme.fontSizes.size2,
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
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: (0, _polished.rem)('32px')
      }
    }
  };
  return sizeMap[size];
};

var variantStyles = function variantStyles(_ref4) {
  var theme = _ref4.theme,
      variant = _ref4.variant;
  var variantMap = {
    primary: {
      backgroundColor: theme.colors.blue,
      color: theme.colors.white,
      '&:hover:enabled': {
        backgroundColor: theme.colors.blueLight
      },
      '&:active:enabled': {
        background: theme.colors.blueDark
      },
      '&:focus:enabled': {
        boxShadow: "0 0 0 1px ".concat(theme.colors.white, ", 0 0 0 2px ").concat(theme.colors.blueDark)
      }
    },
    secondary: {
      backgroundColor: theme.colors.white,
      color: theme.colors.grey100,
      fontWeight: theme.fontWeights.regular,
      '&:enabled': {
        border: "1px solid ".concat(theme.colors.grey20)
      },
      '&:hover:enabled': {
        backgroundColor: theme.colors.white10,
        color: theme.colors.blue,
        border: "1px solid ".concat(theme.colors.blue)
      },
      '&:active:enabled': {
        color: theme.colors.blueDark,
        backgroundColor: theme.colors.grey10,
        border: '1px solid transparent'
      },
      '&:focus:enabled': {
        border: '1px solid transparent',
        boxShadow: "0 0 0 1px ".concat(theme.colors.white, ", 0 0 0 2px ").concat(theme.colors.blueDark)
      }
    },
    minimal: {
      background: 'none',
      border: '1px solid transparent',
      color: theme.colors.grey80,
      '&:hover:enabled': {
        backgroundColor: theme.colors.white10,
        color: theme.colors.grey100
      },
      '&:active:enabled': {
        color: theme.colors.grey100,
        backgroundColor: theme.colors.grey10
      },
      '&:focus:enabled': {
        boxShadow: "0 0 0 1px ".concat(theme.colors.white, ", 0 0 0 2px ").concat(theme.colors.blueDark)
      },
      '&:disabled': {
        background: 'none',
        color: theme.colors.grey40
      }
    }
  };
  return variantMap[variant];
};

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1cgr2o5-fullWidthStyles",
  styles: "width:100%;label:fullWidthStyles;"
} : {
  name: "1cgr2o5-fullWidthStyles",
  styles: "width:100%;label:fullWidthStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUxLIiwiZmlsZSI6Ii4uL3NyYy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IGNhbGN1bGF0ZVBhZGRpbmcgPSAoeyB4RGVmYXVsdCwgaWNvblN0YXJ0LCBpY29uRW5kLCB0aGVtZSwgdGV4dCB9KSA9PiB7XG4gIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgKGljb25TdGFydCAmJiBpY29uRW5kKSkge1xuICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gIH1cblxuICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgcmV0dXJuIGAwICR7eERlZmF1bHR9IDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICB9XG5cbiAgaWYgKGljb25FbmQpIHtcbiAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMCAke3hEZWZhdWx0fWA7XG4gIH1cblxuICByZXR1cm4gYDAgJHt4RGVmYXVsdH1gO1xufTtcblxuY29uc3Qgc2l6ZVN0eWxlcyA9ICh7IHRoZW1lLCBpY29uU3RhcnQsIGljb25FbmQsIHNpemUsIHRleHQgfSkgPT4ge1xuICBjb25zdCBzaXplTWFwID0ge1xuICAgIHNtYWxsOiB7XG4gICAgICBwYWRkaW5nOiAoKCkgPT4ge1xuICAgICAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkIHx8IChpY29uRW5kICYmIGljb25TdGFydCkpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAwIDBgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgMCAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn1gO1xuICAgICAgfSkoKSxcbiAgICAgIGhlaWdodDogcmVtKCcyNHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUxLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCcyMnB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUGFkZGluZyh7XG4gICAgICAgIGljb25TdGFydCxcbiAgICAgICAgaWNvbkVuZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIHhEZWZhdWx0OiB0aGVtZS5zcGFjZS5zbWFsbGVyXG4gICAgICB9KSxcbiAgICAgIGhlaWdodDogcmVtKCczMnB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCcyNHB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhcmdlOiB7XG4gICAgICBwYWRkaW5nOiBjYWxjdWxhdGVQYWRkaW5nKHtcbiAgICAgICAgaWNvblN0YXJ0LFxuICAgICAgICBpY29uRW5kLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgeERlZmF1bHQ6IHRoZW1lLnNwYWNlLnJlZ3VsYXJcbiAgICAgIH0pLFxuICAgICAgaGVpZ2h0OiByZW0oJzQwcHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzMycHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAganVtYm86IHtcbiAgICAgIHBhZGRpbmc6ICgoKSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhlbWUuc3BhY2Uuc21hbGxlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQgJiYgaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2UucmVndWxhcn0gMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fSAwICR7dGhlbWUuc3BhY2UucmVndWxhcn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9ICR7dGhlbWUuc3BhY2UucmVndWxhcn1gO1xuICAgICAgfSkoKSxcbiAgICAgIGhlaWdodDogcmVtKCc0OHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCczMnB4JylcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHNpemVNYXBbc2l6ZV07XG59O1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdGhlbWUsIHZhcmlhbnQgfSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwID0ge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZUxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfVxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMCxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAnJjplbmFibGVkJzoge1xuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTIwfWBcbiAgICAgIH0sXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZTEwLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ibHVlfWBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlRGFyayxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBtaW5pbWFsOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5ODAsXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZTEwLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTBcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH0sXG4gICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk0MFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcFt2YXJpYW50XTtcbn07XG5cbmNvbnN0IGZ1bGxXaWR0aFN0eWxlcyA9ICh7IGZ1bGxXaWR0aCB9KSA9PlxuICBmdWxsV2lkdGggJiZcbiAgY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICBgO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlclJhZGl1cy5zbWFsbH07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmFuZEZvbnR9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5sYXJnZX07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkyMH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk1MH07XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gICY6ZW5hYmxlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICR7c2l6ZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG4gICR7ZnVsbFdpZHRoU3R5bGVzfTtcbiAgJHtzcGFjZX07XG5gO1xuXG5jb25zdCBCdXR0b25UZXh0ID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuaWNvblN0YXJ0ID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pY29uRW5kID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHsgaWNvblN0YXJ0LCBpY29uRW5kLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gICAgPFN0eWxlZEJ1dHRvbiB7Li4ueyAuLi5wcm9wcywgaWNvblN0YXJ0LCBpY29uRW5kLCByZWYgfX0gdGV4dD17Y2hpbGRyZW59PlxuICAgICAge2ljb25TdGFydH1cbiAgICAgIHtjaGlsZHJlbiAmJiAoXG4gICAgICAgIDxCdXR0b25UZXh0IHsuLi57IGljb25TdGFydCwgaWNvbkVuZCwgLi4ucHJvcHMgfX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0J1dHRvblRleHQ+XG4gICAgICApfVxuICAgICAge2ljb25FbmR9XG4gICAgPC9TdHlsZWRCdXR0b24+XG4gIClcbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBzdGF0ZSBvZiBidXR0b25cbiAgICogKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCdXR0b24gc2l6ZVxuICAgKiAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnanVtYm8nXSksXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiB2YXJpYW50LlxuICAgKiAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdtaW5pbWFsJ10pLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBzZXQgZm9yIGEgYnV0dG9uIHRvIHRha2UgdGhlIGZ1bGwgd2lkdGggb2YgaXQncyBwYXJlbnRcbiAgICogY29udGFpbmVyLlxuICAgKiAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIGljb25TdGFydDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgaWNvbkVuZDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgLi4uc3BhY2UucHJvcFR5cGVzXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNpemU6ICdsYXJnZScsXG4gIHZhcmlhbnQ6ICdwcmltYXJ5JyxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgaWNvblN0YXJ0OiB1bmRlZmluZWQsXG4gIGljb25FbmQ6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"
};

var fullWidthStyles = function fullWidthStyles(_ref5) {
  var fullWidth = _ref5.fullWidth;
  return fullWidth && _ref;
};

var StyledButton = (0, _styledBase.default)("button", {
  target: "e13ktrjm0",
  label: "StyledButton"
})("border-radius:", function (props) {
  return props.theme.borderRadius.small;
}, ";border:1px solid transparent;font-family:", function (props) {
  return props.theme.brandFont;
}, ";font-weight:", function (props) {
  return props.theme.fontWeights.medium;
}, ";line-height:", function (props) {
  return props.theme.lineHeights.large;
}, ";outline:none;text-align:center;transition:box-shadow 0.3s ease,background 0.2s ease;&:disabled{background:", function (props) {
  return props.theme.colors.grey20;
}, ";color:", function (props) {
  return props.theme.colors.grey50;
}, ";cursor:not-allowed;}&:enabled{cursor:pointer;}i{vertical-align:middle;}", sizeStyles, ";", variantStyles, ";", fullWidthStyles, ";", _styledSystem.space, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxrQyIsImZpbGUiOiIuLi9zcmMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHNwYWNlIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBjYWxjdWxhdGVQYWRkaW5nID0gKHsgeERlZmF1bHQsIGljb25TdGFydCwgaWNvbkVuZCwgdGhlbWUsIHRleHQgfSkgPT4ge1xuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkIHx8IChpY29uU3RhcnQgJiYgaWNvbkVuZCkpIHtcbiAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICB9XG5cbiAgaWYgKGljb25TdGFydCkge1xuICAgIHJldHVybiBgMCAke3hEZWZhdWx0fSAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgfVxuXG4gIGlmIChpY29uRW5kKSB7XG4gICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDAgJHt4RGVmYXVsdH1gO1xuICB9XG5cbiAgcmV0dXJuIGAwICR7eERlZmF1bHR9YDtcbn07XG5cbmNvbnN0IHNpemVTdHlsZXMgPSAoeyB0aGVtZSwgaWNvblN0YXJ0LCBpY29uRW5kLCBzaXplLCB0ZXh0IH0pID0+IHtcbiAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICBzbWFsbDoge1xuICAgICAgcGFkZGluZzogKCgpID0+IHtcbiAgICAgICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCB8fCAoaWNvbkVuZCAmJiBpY29uU3RhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gMCAwYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwIDAgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9YDtcbiAgICAgIH0pKCksXG4gICAgICBoZWlnaHQ6IHJlbSgnMjRweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMSxcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMjJweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVBhZGRpbmcoe1xuICAgICAgICBpY29uU3RhcnQsXG4gICAgICAgIGljb25FbmQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICB4RGVmYXVsdDogdGhlbWUuc3BhY2Uuc21hbGxlclxuICAgICAgfSksXG4gICAgICBoZWlnaHQ6IHJlbSgnMzJweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMjRweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBsYXJnZToge1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUGFkZGluZyh7XG4gICAgICAgIGljb25TdGFydCxcbiAgICAgICAgaWNvbkVuZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIHhEZWZhdWx0OiB0aGVtZS5zcGFjZS5yZWd1bGFyXG4gICAgICB9KSxcbiAgICAgIGhlaWdodDogcmVtKCc0MHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCczMnB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGp1bWJvOiB7XG4gICAgICBwYWRkaW5nOiAoKCkgPT4ge1xuICAgICAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoZW1lLnNwYWNlLnNtYWxsZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0ICYmIGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9IDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMCAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9YDtcbiAgICAgIH0pKCksXG4gICAgICBoZWlnaHQ6IHJlbSgnNDhweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMzJweCcpXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzaXplTWFwW3NpemVdO1xufTtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50IH0pID0+IHtcbiAgY29uc3QgdmFyaWFudE1hcCA9IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVMaWdodFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDAsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgJyY6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXkyMH1gXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUxMCxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYmx1ZX1gXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZURhcmssXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfVxuICAgIH0sXG4gICAgbWluaW1hbDoge1xuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTgwLFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUxMCxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5NDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHZhcmlhbnRNYXBbdmFyaWFudF07XG59O1xuXG5jb25zdCBmdWxsV2lkdGhTdHlsZXMgPSAoeyBmdWxsV2lkdGggfSkgPT5cbiAgZnVsbFdpZHRoICYmXG4gIGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgYDtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXMuc21hbGx9O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJhbmRGb250fTtcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodHMubWVkaXVtfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5MjB9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NTB9O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmOmVuYWJsZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAke3NpemVTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2Z1bGxXaWR0aFN0eWxlc307XG4gICR7c3BhY2V9O1xuYDtcblxuY29uc3QgQnV0dG9uVGV4dCA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmljb25TdGFydCA9PT0gdW5kZWZpbmVkID8gMCA6IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuaWNvbkVuZCA9PT0gdW5kZWZpbmVkID8gMCA6IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICh7IGljb25TdGFydCwgaWNvbkVuZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxTdHlsZWRCdXR0b24gey4uLnsgLi4ucHJvcHMsIGljb25TdGFydCwgaWNvbkVuZCwgcmVmIH19IHRleHQ9e2NoaWxkcmVufT5cbiAgICAgIHtpY29uU3RhcnR9XG4gICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICA8QnV0dG9uVGV4dCB7Li4ueyBpY29uU3RhcnQsIGljb25FbmQsIC4uLnByb3BzIH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CdXR0b25UZXh0PlxuICAgICAgKX1cbiAgICAgIHtpY29uRW5kfVxuICAgIDwvU3R5bGVkQnV0dG9uPlxuICApXG4pO1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRGlzYWJsZWQgc3RhdGUgb2YgYnV0dG9uXG4gICAqICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnV0dG9uIHNpemVcbiAgICogKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2p1bWJvJ10pLFxuXG4gIC8qKlxuICAgKiBCdXR0b24gdmFyaWFudC5cbiAgICogKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknLCAnbWluaW1hbCddKSxcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gc2V0IGZvciBhIGJ1dHRvbiB0byB0YWtlIHRoZSBmdWxsIHdpZHRoIG9mIGl0J3MgcGFyZW50XG4gICAqIGNvbnRhaW5lci5cbiAgICogKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICBpY29uU3RhcnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIGljb25FbmQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC4uLnNwYWNlLnByb3BUeXBlc1xufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBzaXplOiAnbGFyZ2UnLFxuICB2YXJpYW50OiAncHJpbWFyeScsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIGljb25TdGFydDogdW5kZWZpbmVkLFxuICBpY29uRW5kOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */"));
var ButtonText = (0, _styledBase.default)("span", {
  target: "e13ktrjm1",
  label: "ButtonText"
})("margin-left:", function (props) {
  return props.iconStart === undefined ? 0 : props.theme.space.smallest;
}, ";margin-right:", function (props) {
  return props.iconEnd === undefined ? 0 : props.theme.space.smallest;
}, ";vertical-align:middle;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbU44QiIsImZpbGUiOiIuLi9zcmMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHNwYWNlIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBjYWxjdWxhdGVQYWRkaW5nID0gKHsgeERlZmF1bHQsIGljb25TdGFydCwgaWNvbkVuZCwgdGhlbWUsIHRleHQgfSkgPT4ge1xuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkIHx8IChpY29uU3RhcnQgJiYgaWNvbkVuZCkpIHtcbiAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICB9XG5cbiAgaWYgKGljb25TdGFydCkge1xuICAgIHJldHVybiBgMCAke3hEZWZhdWx0fSAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgfVxuXG4gIGlmIChpY29uRW5kKSB7XG4gICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDAgJHt4RGVmYXVsdH1gO1xuICB9XG5cbiAgcmV0dXJuIGAwICR7eERlZmF1bHR9YDtcbn07XG5cbmNvbnN0IHNpemVTdHlsZXMgPSAoeyB0aGVtZSwgaWNvblN0YXJ0LCBpY29uRW5kLCBzaXplLCB0ZXh0IH0pID0+IHtcbiAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICBzbWFsbDoge1xuICAgICAgcGFkZGluZzogKCgpID0+IHtcbiAgICAgICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCB8fCAoaWNvbkVuZCAmJiBpY29uU3RhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gMCAwYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwIDAgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9YDtcbiAgICAgIH0pKCksXG4gICAgICBoZWlnaHQ6IHJlbSgnMjRweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMSxcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMjJweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVBhZGRpbmcoe1xuICAgICAgICBpY29uU3RhcnQsXG4gICAgICAgIGljb25FbmQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICB4RGVmYXVsdDogdGhlbWUuc3BhY2Uuc21hbGxlclxuICAgICAgfSksXG4gICAgICBoZWlnaHQ6IHJlbSgnMzJweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMjRweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBsYXJnZToge1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUGFkZGluZyh7XG4gICAgICAgIGljb25TdGFydCxcbiAgICAgICAgaWNvbkVuZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIHhEZWZhdWx0OiB0aGVtZS5zcGFjZS5yZWd1bGFyXG4gICAgICB9KSxcbiAgICAgIGhlaWdodDogcmVtKCc0MHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCczMnB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGp1bWJvOiB7XG4gICAgICBwYWRkaW5nOiAoKCkgPT4ge1xuICAgICAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoZW1lLnNwYWNlLnNtYWxsZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0ICYmIGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9IDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMCAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9YDtcbiAgICAgIH0pKCksXG4gICAgICBoZWlnaHQ6IHJlbSgnNDhweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMzJweCcpXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzaXplTWFwW3NpemVdO1xufTtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50IH0pID0+IHtcbiAgY29uc3QgdmFyaWFudE1hcCA9IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVMaWdodFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDAsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgJyY6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXkyMH1gXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUxMCxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYmx1ZX1gXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZURhcmssXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfVxuICAgIH0sXG4gICAgbWluaW1hbDoge1xuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTgwLFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUxMCxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5NDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHZhcmlhbnRNYXBbdmFyaWFudF07XG59O1xuXG5jb25zdCBmdWxsV2lkdGhTdHlsZXMgPSAoeyBmdWxsV2lkdGggfSkgPT5cbiAgZnVsbFdpZHRoICYmXG4gIGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgYDtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXMuc21hbGx9O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJhbmRGb250fTtcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodHMubWVkaXVtfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5MjB9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NTB9O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmOmVuYWJsZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAke3NpemVTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2Z1bGxXaWR0aFN0eWxlc307XG4gICR7c3BhY2V9O1xuYDtcblxuY29uc3QgQnV0dG9uVGV4dCA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmljb25TdGFydCA9PT0gdW5kZWZpbmVkID8gMCA6IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuaWNvbkVuZCA9PT0gdW5kZWZpbmVkID8gMCA6IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICh7IGljb25TdGFydCwgaWNvbkVuZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxTdHlsZWRCdXR0b24gey4uLnsgLi4ucHJvcHMsIGljb25TdGFydCwgaWNvbkVuZCwgcmVmIH19IHRleHQ9e2NoaWxkcmVufT5cbiAgICAgIHtpY29uU3RhcnR9XG4gICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICA8QnV0dG9uVGV4dCB7Li4ueyBpY29uU3RhcnQsIGljb25FbmQsIC4uLnByb3BzIH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CdXR0b25UZXh0PlxuICAgICAgKX1cbiAgICAgIHtpY29uRW5kfVxuICAgIDwvU3R5bGVkQnV0dG9uPlxuICApXG4pO1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRGlzYWJsZWQgc3RhdGUgb2YgYnV0dG9uXG4gICAqICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnV0dG9uIHNpemVcbiAgICogKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2p1bWJvJ10pLFxuXG4gIC8qKlxuICAgKiBCdXR0b24gdmFyaWFudC5cbiAgICogKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknLCAnbWluaW1hbCddKSxcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gc2V0IGZvciBhIGJ1dHRvbiB0byB0YWtlIHRoZSBmdWxsIHdpZHRoIG9mIGl0J3MgcGFyZW50XG4gICAqIGNvbnRhaW5lci5cbiAgICogKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICBpY29uU3RhcnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIGljb25FbmQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC4uLnNwYWNlLnByb3BUeXBlc1xufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBzaXplOiAnbGFyZ2UnLFxuICB2YXJpYW50OiAncHJpbWFyeScsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIGljb25TdGFydDogdW5kZWZpbmVkLFxuICBpY29uRW5kOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */"));

var Button = _react.default.forwardRef(function (_ref6, ref) {
  var iconStart = _ref6.iconStart,
      iconEnd = _ref6.iconEnd,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["iconStart", "iconEnd", "children"]);

  return (0, _core.jsx)(StyledButton, _extends({}, _objectSpread({}, props, {
    iconStart: iconStart,
    iconEnd: iconEnd,
    ref: ref
  }), {
    text: children
  }), iconStart, children && (0, _core.jsx)(ButtonText, _objectSpread({
    iconStart: iconStart,
    iconEnd: iconEnd
  }, props), children), iconEnd);
});

Button.propTypes = _objectSpread({
  /**
   * Disabled state of button
   * */
  disabled: _propTypes.default.bool,

  /**
   * Button size
   * */
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'jumbo']),

  /**
   * Button variant.
   * */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'minimal']),

  /**
   * Property to set for a button to take the full width of it's parent
   * container.
   * */
  fullWidth: _propTypes.default.bool,
  iconStart: _propTypes.default.element,
  iconEnd: _propTypes.default.element
}, _styledSystem.space.propTypes);
Button.defaultProps = {
  disabled: false,
  size: 'large',
  variant: 'primary',
  fullWidth: false,
  iconStart: undefined,
  iconEnd: undefined
};
var _default = Button;
exports.default = _default;