"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledSystem = require("styled-system");

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _polished = require("polished");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var sizeStyles = function sizeStyles(_ref2) {
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

var variantStyles = function variantStyles(_ref3) {
  var theme = _ref3.theme,
      variant = _ref3.variant;
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

var fullWidthStyles = function fullWidthStyles(_ref4) {
  var fullWidth = _ref4.fullWidth;
  return fullWidth &&
  /*#__PURE__*/
  (0, _reactEmotion.css)("width:100%;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0tLIiwiZmlsZSI6Ii4uL3NyYy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBjYWxjdWxhdGVQYWRkaW5nID0gKHsgeERlZmF1bHQsIGljb25TdGFydCwgaWNvbkVuZCwgdGhlbWUsIHRleHQgfSkgPT4ge1xuICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkIHx8IChpY29uU3RhcnQgJiYgaWNvbkVuZCkpIHtcbiAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICB9XG5cbiAgaWYgKGljb25TdGFydCkge1xuICAgIHJldHVybiBgMCAke3hEZWZhdWx0fSAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgfVxuXG4gIGlmIChpY29uRW5kKSB7XG4gICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDAgJHt4RGVmYXVsdH1gO1xuICB9XG5cbiAgcmV0dXJuIGAwICR7eERlZmF1bHR9YDtcbn07XG5cbmNvbnN0IHNpemVTdHlsZXMgPSAoeyB0aGVtZSwgaWNvblN0YXJ0LCBpY29uRW5kLCBzaXplLCB0ZXh0IH0pID0+IHtcbiAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICBzbWFsbDoge1xuICAgICAgcGFkZGluZzogKCgpID0+IHtcbiAgICAgICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCB8fCAoaWNvbkVuZCAmJiBpY29uU3RhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gMCAwYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwIDAgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9YDtcbiAgICAgIH0pKCksXG4gICAgICBoZWlnaHQ6IHJlbSgnMjRweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMSxcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMjJweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVBhZGRpbmcoe1xuICAgICAgICBpY29uU3RhcnQsXG4gICAgICAgIGljb25FbmQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICB4RGVmYXVsdDogdGhlbWUuc3BhY2Uuc21hbGxlclxuICAgICAgfSksXG4gICAgICBoZWlnaHQ6IHJlbSgnMzJweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMjRweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBsYXJnZToge1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUGFkZGluZyh7XG4gICAgICAgIGljb25TdGFydCxcbiAgICAgICAgaWNvbkVuZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIHhEZWZhdWx0OiB0aGVtZS5zcGFjZS5yZWd1bGFyXG4gICAgICB9KSxcbiAgICAgIGhlaWdodDogcmVtKCc0MHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCczMnB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGp1bWJvOiB7XG4gICAgICBwYWRkaW5nOiAoKCkgPT4ge1xuICAgICAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoZW1lLnNwYWNlLnNtYWxsZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0ICYmIGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9IDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMCAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAke3RoZW1lLnNwYWNlLnJlZ3VsYXJ9YDtcbiAgICAgIH0pKCksXG4gICAgICBoZWlnaHQ6IHJlbSgnNDhweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMzJweCcpXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzaXplTWFwW3NpemVdO1xufTtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50IH0pID0+IHtcbiAgY29uc3QgdmFyaWFudE1hcCA9IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWVMaWdodFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDAsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS5mb250V2VpZ2h0cy5yZWd1bGFyLFxuICAgICAgJyY6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXkyMH1gXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUxMCxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYmx1ZX1gXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZURhcmssXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfVxuICAgIH0sXG4gICAgbWluaW1hbDoge1xuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTgwLFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUxMCxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9LFxuICAgICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5NDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHZhcmlhbnRNYXBbdmFyaWFudF07XG59O1xuXG5jb25zdCBmdWxsV2lkdGhTdHlsZXMgPSAoeyBmdWxsV2lkdGggfSkgPT5cbiAgZnVsbFdpZHRoICYmXG4gIGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgYDtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXMuc21hbGx9O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJhbmRGb250fTtcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodHMubWVkaXVtfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5MjB9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NTB9O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmOmVuYWJsZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAke3NpemVTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2Z1bGxXaWR0aFN0eWxlc307XG4gICR7c3BhY2V9O1xuYDtcblxuY29uc3QgQnV0dG9uVGV4dCA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmljb25TdGFydCA9PT0gdW5kZWZpbmVkID8gMCA6IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuaWNvbkVuZCA9PT0gdW5kZWZpbmVkID8gMCA6IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGljb25TdGFydCwgaWNvbkVuZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPFN0eWxlZEJ1dHRvbiB7Li4ueyAuLi5wcm9wcywgaWNvblN0YXJ0LCBpY29uRW5kLCB0ZXh0OiBjaGlsZHJlbiB9fT5cbiAgICB7aWNvblN0YXJ0fVxuICAgIHtjaGlsZHJlbiAmJiAoXG4gICAgICA8QnV0dG9uVGV4dCB7Li4ueyBpY29uU3RhcnQsIGljb25FbmQsIC4uLnByb3BzIH19PntjaGlsZHJlbn08L0J1dHRvblRleHQ+XG4gICAgKX1cbiAgICB7aWNvbkVuZH1cbiAgPC9TdHlsZWRCdXR0b24+XG4pO1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRGlzYWJsZWQgc3RhdGUgb2YgYnV0dG9uXG4gICAqICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnV0dG9uIHNpemVcbiAgICogKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2p1bWJvJ10pLFxuXG4gIC8qKlxuICAgKiBCdXR0b24gdmFyaWFudC5cbiAgICogKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknLCAnbWluaW1hbCddKSxcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gc2V0IGZvciBhIGJ1dHRvbiB0byB0YWtlIHRoZSBmdWxsIHdpZHRoIG9mIGl0J3MgcGFyZW50XG4gICAqIGNvbnRhaW5lci5cbiAgICogKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICBpY29uU3RhcnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIGljb25FbmQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC4uLnNwYWNlLnByb3BUeXBlc1xufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBzaXplOiAnbGFyZ2UnLFxuICB2YXJpYW50OiAncHJpbWFyeScsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIGljb25TdGFydDogdW5kZWZpbmVkLFxuICBpY29uRW5kOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */label:fullWidthStyles;");
};

var StyledButton =
/*#__PURE__*/
(0, _reactEmotion.default)("button", {
  label: "StyledButton",
  target: "e13ktrjm0"
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
}, ";cursor:not-allowed;}&:enabled{cursor:pointer;}i{vertical-align:middle;}", sizeStyles, ";", variantStyles, ";", fullWidthStyles, ";", _styledSystem.space, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUxrQyIsImZpbGUiOiIuLi9zcmMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNwYWNlIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgY2FsY3VsYXRlUGFkZGluZyA9ICh7IHhEZWZhdWx0LCBpY29uU3RhcnQsIGljb25FbmQsIHRoZW1lLCB0ZXh0IH0pID0+IHtcbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCB8fCAoaWNvblN0YXJ0ICYmIGljb25FbmQpKSB7XG4gICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgfVxuXG4gIGlmIChpY29uU3RhcnQpIHtcbiAgICByZXR1cm4gYDAgJHt4RGVmYXVsdH0gMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gIH1cblxuICBpZiAoaWNvbkVuZCkge1xuICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fSAwICR7eERlZmF1bHR9YDtcbiAgfVxuXG4gIHJldHVybiBgMCAke3hEZWZhdWx0fWA7XG59O1xuXG5jb25zdCBzaXplU3R5bGVzID0gKHsgdGhlbWUsIGljb25TdGFydCwgaWNvbkVuZCwgc2l6ZSwgdGV4dCB9KSA9PiB7XG4gIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgc21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICgoKSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgKGljb25FbmQgJiYgaWNvblN0YXJ0KSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9IDAgMGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAwIDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfWA7XG4gICAgICB9KSgpLFxuICAgICAgaGVpZ2h0OiByZW0oJzI0cHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTEsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzIycHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAgbWVkaXVtOiB7XG4gICAgICBwYWRkaW5nOiBjYWxjdWxhdGVQYWRkaW5nKHtcbiAgICAgICAgaWNvblN0YXJ0LFxuICAgICAgICBpY29uRW5kLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgeERlZmF1bHQ6IHRoZW1lLnNwYWNlLnNtYWxsZXJcbiAgICAgIH0pLFxuICAgICAgaGVpZ2h0OiByZW0oJzMycHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzI0cHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFyZ2U6IHtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVBhZGRpbmcoe1xuICAgICAgICBpY29uU3RhcnQsXG4gICAgICAgIGljb25FbmQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICB4RGVmYXVsdDogdGhlbWUuc3BhY2UucmVndWxhclxuICAgICAgfSksXG4gICAgICBoZWlnaHQ6IHJlbSgnNDBweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMzJweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBqdW1ibzoge1xuICAgICAgcGFkZGluZzogKCgpID0+IHtcbiAgICAgICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB0aGVtZS5zcGFjZS5zbWFsbGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCAmJiBpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5yZWd1bGFyfSAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDAgJHt0aGVtZS5zcGFjZS5yZWd1bGFyfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gJHt0aGVtZS5zcGFjZS5yZWd1bGFyfWA7XG4gICAgICB9KSgpLFxuICAgICAgaGVpZ2h0OiByZW0oJzQ4cHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzMycHgnKVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc2l6ZU1hcFtzaXplXTtcbn07XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRNYXAgPSB7XG4gICAgcHJpbWFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlTGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICcmOmVuYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5MjB9YFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlMTAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJsdWV9YFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWVEYXJrLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCdcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIG1pbmltYWw6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk4MCxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlMTAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTQwXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2YXJpYW50TWFwW3ZhcmlhbnRdO1xufTtcblxuY29uc3QgZnVsbFdpZHRoU3R5bGVzID0gKHsgZnVsbFdpZHRoIH0pID0+XG4gIGZ1bGxXaWR0aCAmJlxuICBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gIGA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyYW5kRm9udH07XG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTIwfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUwfTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJjplbmFibGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBpIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgJHtzaXplU3R5bGVzfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbiAgJHtmdWxsV2lkdGhTdHlsZXN9O1xuICAke3NwYWNlfTtcbmA7XG5cbmNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pY29uU3RhcnQgPT09IHVuZGVmaW5lZCA/IDAgOiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmljb25FbmQgPT09IHVuZGVmaW5lZCA/IDAgOiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBCdXR0b24gPSAoeyBpY29uU3RhcnQsIGljb25FbmQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxTdHlsZWRCdXR0b24gey4uLnsgLi4ucHJvcHMsIGljb25TdGFydCwgaWNvbkVuZCwgdGV4dDogY2hpbGRyZW4gfX0+XG4gICAge2ljb25TdGFydH1cbiAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgPEJ1dHRvblRleHQgey4uLnsgaWNvblN0YXJ0LCBpY29uRW5kLCAuLi5wcm9wcyB9fT57Y2hpbGRyZW59PC9CdXR0b25UZXh0PlxuICAgICl9XG4gICAge2ljb25FbmR9XG4gIDwvU3R5bGVkQnV0dG9uPlxuKTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIERpc2FibGVkIHN0YXRlIG9mIGJ1dHRvblxuICAgKiAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBzaXplXG4gICAqICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdqdW1ibyddKSxcblxuICAvKipcbiAgICogQnV0dG9uIHZhcmlhbnQuXG4gICAqICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ21pbmltYWwnXSksXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIHNldCBmb3IgYSBidXR0b24gdG8gdGFrZSB0aGUgZnVsbCB3aWR0aCBvZiBpdCdzIHBhcmVudFxuICAgKiBjb250YWluZXIuXG4gICAqICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgaWNvblN0YXJ0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICBpY29uRW5kOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAuLi5zcGFjZS5wcm9wVHlwZXNcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgc2l6ZTogJ2xhcmdlJyxcbiAgdmFyaWFudDogJ3ByaW1hcnknLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBpY29uU3RhcnQ6IHVuZGVmaW5lZCxcbiAgaWNvbkVuZDogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */");
var ButtonText =
/*#__PURE__*/
(0, _reactEmotion.default)("span", {
  label: "ButtonText",
  target: "e13ktrjm1"
})("margin-left:", function (props) {
  return props.iconStart === undefined ? 0 : props.theme.space.smallest;
}, ";margin-right:", function (props) {
  return props.iconEnd === undefined ? 0 : props.theme.space.smallest;
}, ";vertical-align:middle;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaU44QiIsImZpbGUiOiIuLi9zcmMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNwYWNlIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgY2FsY3VsYXRlUGFkZGluZyA9ICh7IHhEZWZhdWx0LCBpY29uU3RhcnQsIGljb25FbmQsIHRoZW1lLCB0ZXh0IH0pID0+IHtcbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCB8fCAoaWNvblN0YXJ0ICYmIGljb25FbmQpKSB7XG4gICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgfVxuXG4gIGlmIChpY29uU3RhcnQpIHtcbiAgICByZXR1cm4gYDAgJHt4RGVmYXVsdH0gMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gIH1cblxuICBpZiAoaWNvbkVuZCkge1xuICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fSAwICR7eERlZmF1bHR9YDtcbiAgfVxuXG4gIHJldHVybiBgMCAke3hEZWZhdWx0fWA7XG59O1xuXG5jb25zdCBzaXplU3R5bGVzID0gKHsgdGhlbWUsIGljb25TdGFydCwgaWNvbkVuZCwgc2l6ZSwgdGV4dCB9KSA9PiB7XG4gIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgc21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICgoKSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgKGljb25FbmQgJiYgaWNvblN0YXJ0KSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9IDAgMGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAwIDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfWA7XG4gICAgICB9KSgpLFxuICAgICAgaGVpZ2h0OiByZW0oJzI0cHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTEsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzIycHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAgbWVkaXVtOiB7XG4gICAgICBwYWRkaW5nOiBjYWxjdWxhdGVQYWRkaW5nKHtcbiAgICAgICAgaWNvblN0YXJ0LFxuICAgICAgICBpY29uRW5kLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgeERlZmF1bHQ6IHRoZW1lLnNwYWNlLnNtYWxsZXJcbiAgICAgIH0pLFxuICAgICAgaGVpZ2h0OiByZW0oJzMycHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzI0cHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFyZ2U6IHtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVBhZGRpbmcoe1xuICAgICAgICBpY29uU3RhcnQsXG4gICAgICAgIGljb25FbmQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICB4RGVmYXVsdDogdGhlbWUuc3BhY2UucmVndWxhclxuICAgICAgfSksXG4gICAgICBoZWlnaHQ6IHJlbSgnNDBweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMzJweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBqdW1ibzoge1xuICAgICAgcGFkZGluZzogKCgpID0+IHtcbiAgICAgICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB0aGVtZS5zcGFjZS5zbWFsbGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCAmJiBpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5yZWd1bGFyfSAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDAgJHt0aGVtZS5zcGFjZS5yZWd1bGFyfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gJHt0aGVtZS5zcGFjZS5yZWd1bGFyfWA7XG4gICAgICB9KSgpLFxuICAgICAgaGVpZ2h0OiByZW0oJzQ4cHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzMycHgnKVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc2l6ZU1hcFtzaXplXTtcbn07XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRNYXAgPSB7XG4gICAgcHJpbWFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlTGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICcmOmVuYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5MjB9YFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlMTAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJsdWV9YFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWVEYXJrLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCdcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIG1pbmltYWw6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk4MCxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlMTAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTQwXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2YXJpYW50TWFwW3ZhcmlhbnRdO1xufTtcblxuY29uc3QgZnVsbFdpZHRoU3R5bGVzID0gKHsgZnVsbFdpZHRoIH0pID0+XG4gIGZ1bGxXaWR0aCAmJlxuICBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gIGA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyYW5kRm9udH07XG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTIwfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUwfTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJjplbmFibGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBpIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgJHtzaXplU3R5bGVzfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbiAgJHtmdWxsV2lkdGhTdHlsZXN9O1xuICAke3NwYWNlfTtcbmA7XG5cbmNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pY29uU3RhcnQgPT09IHVuZGVmaW5lZCA/IDAgOiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmljb25FbmQgPT09IHVuZGVmaW5lZCA/IDAgOiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBCdXR0b24gPSAoeyBpY29uU3RhcnQsIGljb25FbmQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxTdHlsZWRCdXR0b24gey4uLnsgLi4ucHJvcHMsIGljb25TdGFydCwgaWNvbkVuZCwgdGV4dDogY2hpbGRyZW4gfX0+XG4gICAge2ljb25TdGFydH1cbiAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgPEJ1dHRvblRleHQgey4uLnsgaWNvblN0YXJ0LCBpY29uRW5kLCAuLi5wcm9wcyB9fT57Y2hpbGRyZW59PC9CdXR0b25UZXh0PlxuICAgICl9XG4gICAge2ljb25FbmR9XG4gIDwvU3R5bGVkQnV0dG9uPlxuKTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIERpc2FibGVkIHN0YXRlIG9mIGJ1dHRvblxuICAgKiAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBzaXplXG4gICAqICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdqdW1ibyddKSxcblxuICAvKipcbiAgICogQnV0dG9uIHZhcmlhbnQuXG4gICAqICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ21pbmltYWwnXSksXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIHNldCBmb3IgYSBidXR0b24gdG8gdGFrZSB0aGUgZnVsbCB3aWR0aCBvZiBpdCdzIHBhcmVudFxuICAgKiBjb250YWluZXIuXG4gICAqICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgaWNvblN0YXJ0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICBpY29uRW5kOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAuLi5zcGFjZS5wcm9wVHlwZXNcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgc2l6ZTogJ2xhcmdlJyxcbiAgdmFyaWFudDogJ3ByaW1hcnknLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBpY29uU3RhcnQ6IHVuZGVmaW5lZCxcbiAgaWNvbkVuZDogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */");

var Button = function Button(_ref5) {
  var iconStart = _ref5.iconStart,
      iconEnd = _ref5.iconEnd,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["iconStart", "iconEnd", "children"]);

  return _react.default.createElement(StyledButton, _objectSpread({}, props, {
    iconStart: iconStart,
    iconEnd: iconEnd,
    text: children
  }), iconStart, children && _react.default.createElement(ButtonText, _objectSpread({
    iconStart: iconStart,
    iconEnd: iconEnd
  }, props), children), iconEnd);
};

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