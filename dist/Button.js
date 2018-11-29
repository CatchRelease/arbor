'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _core = require('@emotion/core');

var _styledSystem = require('styled-system');

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _polished = require('polished');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var calculatePadding = function calculatePadding(_ref) {
  var xDefault = _ref.xDefault,
    iconStart = _ref.iconStart,
    iconEnd = _ref.iconEnd,
    theme = _ref.theme,
    text = _ref.text;

  if (text === undefined || (iconStart && iconEnd)) {
    return '0 '.concat(theme.space.smallest);
  }

  if (iconStart) {
    return '0 '.concat(xDefault, ' 0 ').concat(theme.space.smallest);
  }

  if (iconEnd) {
    return '0 '.concat(theme.space.smallest, ' 0 ').concat(xDefault);
  }

  return '0 '.concat(xDefault);
};

var sizeStyles = function sizeStyles(_ref2) {
  var theme = _ref2.theme,
    iconStart = _ref2.iconStart,
    iconEnd = _ref2.iconEnd,
    size = _ref2.size,
    text = _ref2.text;
  var sizeMap = {
    small: {
      padding: (function() {
        if (text === undefined || (iconEnd && iconStart)) {
          return 0;
        }

        if (iconStart) {
          return '0 '.concat(theme.space.smaller, ' 0 0');
        }

        if (iconEnd) {
          return '0 0 0 '.concat(theme.space.smaller);
        }

        return '0 '.concat(theme.space.smaller);
      })(),
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
      padding: (function() {
        if (text === undefined) {
          return theme.space.smaller;
        }

        if (iconStart && iconEnd) {
          return '0 '.concat(theme.space.smallest);
        }

        if (iconStart) {
          return '0 '
            .concat(theme.space.regular, ' 0 ')
            .concat(theme.space.smallest);
        }

        if (iconEnd) {
          return '0 '
            .concat(theme.space.smallest, ' 0 ')
            .concat(theme.space.regular);
        }

        return ''.concat(theme.space.smaller, ' ').concat(theme.space.regular);
      })(),
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
        boxShadow: '0 0 0 1px '
          .concat(theme.colors.white, ', 0 0 0 2px ')
          .concat(theme.colors.blueDark)
      }
    },
    secondary: {
      backgroundColor: theme.colors.white,
      color: theme.colors.grey100,
      fontWeight: theme.fontWeights.regular,
      '&:enabled': {
        border: '1px solid '.concat(theme.colors.grey20)
      },
      '&:hover:enabled': {
        backgroundColor: theme.colors.white10,
        color: theme.colors.blue,
        border: '1px solid '.concat(theme.colors.blue)
      },
      '&:active:enabled': {
        color: theme.colors.blueDark,
        backgroundColor: theme.colors.grey10,
        border: '1px solid transparent'
      },
      '&:focus:enabled': {
        border: '1px solid transparent',
        boxShadow: '0 0 0 1px '
          .concat(theme.colors.white, ', 0 0 0 2px ')
          .concat(theme.colors.blueDark)
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
        boxShadow: '0 0 0 1px '
          .concat(theme.colors.white, ', 0 0 0 2px ')
          .concat(theme.colors.blueDark)
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
  return (
    fullWidth &&
    /*#__PURE__*/
    (0, _core.css)(
      'width:100%;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0xLIiwiZmlsZSI6Ii4uL3NyYy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBzcGFjZSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgY2FsY3VsYXRlUGFkZGluZyA9ICh7IHhEZWZhdWx0LCBpY29uU3RhcnQsIGljb25FbmQsIHRoZW1lLCB0ZXh0IH0pID0+IHtcbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCB8fCAoaWNvblN0YXJ0ICYmIGljb25FbmQpKSB7XG4gICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgfVxuXG4gIGlmIChpY29uU3RhcnQpIHtcbiAgICByZXR1cm4gYDAgJHt4RGVmYXVsdH0gMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gIH1cblxuICBpZiAoaWNvbkVuZCkge1xuICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fSAwICR7eERlZmF1bHR9YDtcbiAgfVxuXG4gIHJldHVybiBgMCAke3hEZWZhdWx0fWA7XG59O1xuXG5jb25zdCBzaXplU3R5bGVzID0gKHsgdGhlbWUsIGljb25TdGFydCwgaWNvbkVuZCwgc2l6ZSwgdGV4dCB9KSA9PiB7XG4gIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgc21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICgoKSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgKGljb25FbmQgJiYgaWNvblN0YXJ0KSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9IDAgMGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAwIDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfWA7XG4gICAgICB9KSgpLFxuICAgICAgaGVpZ2h0OiByZW0oJzI0cHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTEsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzIycHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAgbWVkaXVtOiB7XG4gICAgICBwYWRkaW5nOiBjYWxjdWxhdGVQYWRkaW5nKHtcbiAgICAgICAgaWNvblN0YXJ0LFxuICAgICAgICBpY29uRW5kLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgeERlZmF1bHQ6IHRoZW1lLnNwYWNlLnNtYWxsZXJcbiAgICAgIH0pLFxuICAgICAgaGVpZ2h0OiByZW0oJzMycHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzI0cHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFyZ2U6IHtcbiAgICAgIHBhZGRpbmc6IGNhbGN1bGF0ZVBhZGRpbmcoe1xuICAgICAgICBpY29uU3RhcnQsXG4gICAgICAgIGljb25FbmQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRoZW1lLFxuICAgICAgICB4RGVmYXVsdDogdGhlbWUuc3BhY2UucmVndWxhclxuICAgICAgfSksXG4gICAgICBoZWlnaHQ6IHJlbSgnNDBweCcpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zaXplMixcbiAgICAgIGk6IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgnMzJweCcpXG4gICAgICB9XG4gICAgfSxcbiAgICBqdW1ibzoge1xuICAgICAgcGFkZGluZzogKCgpID0+IHtcbiAgICAgICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB0aGVtZS5zcGFjZS5zbWFsbGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25TdGFydCAmJiBpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5yZWd1bGFyfSAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDAgJHt0aGVtZS5zcGFjZS5yZWd1bGFyfWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7dGhlbWUuc3BhY2Uuc21hbGxlcn0gJHt0aGVtZS5zcGFjZS5yZWd1bGFyfWA7XG4gICAgICB9KSgpLFxuICAgICAgaGVpZ2h0OiByZW0oJzQ4cHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzMycHgnKVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc2l6ZU1hcFtzaXplXTtcbn07XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRNYXAgPSB7XG4gICAgcHJpbWFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlTGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMucmVndWxhcixcbiAgICAgICcmOmVuYWJsZWQnOiB7XG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5MjB9YFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlMTAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZSxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJsdWV9YFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWVEYXJrLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCdcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIG1pbmltYWw6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk4MCxcbiAgICAgICcmOmhvdmVyOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLndoaXRlMTAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZTplbmFibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfSxcbiAgICAgICcmOmRpc2FibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTQwXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2YXJpYW50TWFwW3ZhcmlhbnRdO1xufTtcblxuY29uc3QgZnVsbFdpZHRoU3R5bGVzID0gKHsgZnVsbFdpZHRoIH0pID0+XG4gIGZ1bGxXaWR0aCAmJlxuICBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gIGA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyYW5kRm9udH07XG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTIwfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUwfTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJjplbmFibGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBpIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgJHtzaXplU3R5bGVzfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbiAgJHtmdWxsV2lkdGhTdHlsZXN9O1xuICAke3NwYWNlfTtcbmA7XG5cbmNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pY29uU3RhcnQgPT09IHVuZGVmaW5lZCA/IDAgOiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmljb25FbmQgPT09IHVuZGVmaW5lZCA/IDAgOiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuXG5jb25zdCBCdXR0b24gPSAoeyBpY29uU3RhcnQsIGljb25FbmQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxTdHlsZWRCdXR0b24gey4uLnsgLi4ucHJvcHMsIGljb25TdGFydCwgaWNvbkVuZCwgdGV4dDogY2hpbGRyZW4gfX0+XG4gICAge2ljb25TdGFydH1cbiAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgPEJ1dHRvblRleHQgey4uLnsgaWNvblN0YXJ0LCBpY29uRW5kLCAuLi5wcm9wcyB9fT57Y2hpbGRyZW59PC9CdXR0b25UZXh0PlxuICAgICl9XG4gICAge2ljb25FbmR9XG4gIDwvU3R5bGVkQnV0dG9uPlxuKTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIERpc2FibGVkIHN0YXRlIG9mIGJ1dHRvblxuICAgKiAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBzaXplXG4gICAqICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdqdW1ibyddKSxcblxuICAvKipcbiAgICogQnV0dG9uIHZhcmlhbnQuXG4gICAqICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ21pbmltYWwnXSksXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIHNldCBmb3IgYSBidXR0b24gdG8gdGFrZSB0aGUgZnVsbCB3aWR0aCBvZiBpdCdzIHBhcmVudFxuICAgKiBjb250YWluZXIuXG4gICAqICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgaWNvblN0YXJ0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICBpY29uRW5kOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAuLi5zcGFjZS5wcm9wVHlwZXNcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgc2l6ZTogJ2xhcmdlJyxcbiAgdmFyaWFudDogJ3ByaW1hcnknLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBpY29uU3RhcnQ6IHVuZGVmaW5lZCxcbiAgaWNvbkVuZDogdW5kZWZpbmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */label:fullWidthStyles;'
    )
  );
};

var StyledButton =
  /*#__PURE__*/
  (0, _styled.default)('button', {
    label: 'StyledButton',
    target: 'e13ktrjm0'
  })(
    'border-radius:',
    function(props) {
      return props.theme.borderRadius.small;
    },
    ';border:1px solid transparent;font-family:',
    function(props) {
      return props.theme.brandFont;
    },
    ';font-weight:',
    function(props) {
      return props.theme.fontWeights.medium;
    },
    ';line-height:',
    function(props) {
      return props.theme.lineHeights.large;
    },
    ';outline:none;text-align:center;transition:box-shadow 0.3s ease,background 0.2s ease;&:disabled{background:',
    function(props) {
      return props.theme.colors.grey20;
    },
    ';color:',
    function(props) {
      return props.theme.colors.grey50;
    },
    ';cursor:not-allowed;}&:enabled{cursor:pointer;}i{vertical-align:middle;}',
    sizeStyles,
    ';',
    variantStyles,
    ';',
    fullWidthStyles,
    ';',
    _styledSystem.space,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0xrQyIsImZpbGUiOiIuLi9zcmMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IGNhbGN1bGF0ZVBhZGRpbmcgPSAoeyB4RGVmYXVsdCwgaWNvblN0YXJ0LCBpY29uRW5kLCB0aGVtZSwgdGV4dCB9KSA9PiB7XG4gIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgKGljb25TdGFydCAmJiBpY29uRW5kKSkge1xuICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gIH1cblxuICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgcmV0dXJuIGAwICR7eERlZmF1bHR9IDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICB9XG5cbiAgaWYgKGljb25FbmQpIHtcbiAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMCAke3hEZWZhdWx0fWA7XG4gIH1cblxuICByZXR1cm4gYDAgJHt4RGVmYXVsdH1gO1xufTtcblxuY29uc3Qgc2l6ZVN0eWxlcyA9ICh7IHRoZW1lLCBpY29uU3RhcnQsIGljb25FbmQsIHNpemUsIHRleHQgfSkgPT4ge1xuICBjb25zdCBzaXplTWFwID0ge1xuICAgIHNtYWxsOiB7XG4gICAgICBwYWRkaW5nOiAoKCkgPT4ge1xuICAgICAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkIHx8IChpY29uRW5kICYmIGljb25TdGFydCkpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAwIDBgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgMCAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn1gO1xuICAgICAgfSkoKSxcbiAgICAgIGhlaWdodDogcmVtKCcyNHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUxLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCcyMnB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUGFkZGluZyh7XG4gICAgICAgIGljb25TdGFydCxcbiAgICAgICAgaWNvbkVuZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIHhEZWZhdWx0OiB0aGVtZS5zcGFjZS5zbWFsbGVyXG4gICAgICB9KSxcbiAgICAgIGhlaWdodDogcmVtKCczMnB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCcyNHB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhcmdlOiB7XG4gICAgICBwYWRkaW5nOiBjYWxjdWxhdGVQYWRkaW5nKHtcbiAgICAgICAgaWNvblN0YXJ0LFxuICAgICAgICBpY29uRW5kLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgeERlZmF1bHQ6IHRoZW1lLnNwYWNlLnJlZ3VsYXJcbiAgICAgIH0pLFxuICAgICAgaGVpZ2h0OiByZW0oJzQwcHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzMycHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAganVtYm86IHtcbiAgICAgIHBhZGRpbmc6ICgoKSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhlbWUuc3BhY2Uuc21hbGxlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQgJiYgaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2UucmVndWxhcn0gMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fSAwICR7dGhlbWUuc3BhY2UucmVndWxhcn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9ICR7dGhlbWUuc3BhY2UucmVndWxhcn1gO1xuICAgICAgfSkoKSxcbiAgICAgIGhlaWdodDogcmVtKCc0OHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCczMnB4JylcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHNpemVNYXBbc2l6ZV07XG59O1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdGhlbWUsIHZhcmlhbnQgfSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwID0ge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZUxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfVxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMCxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAnJjplbmFibGVkJzoge1xuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTIwfWBcbiAgICAgIH0sXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZTEwLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ibHVlfWBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlRGFyayxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBtaW5pbWFsOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5ODAsXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZTEwLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTBcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH0sXG4gICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk0MFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcFt2YXJpYW50XTtcbn07XG5cbmNvbnN0IGZ1bGxXaWR0aFN0eWxlcyA9ICh7IGZ1bGxXaWR0aCB9KSA9PlxuICBmdWxsV2lkdGggJiZcbiAgY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICBgO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlclJhZGl1cy5zbWFsbH07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmFuZEZvbnR9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5sYXJnZX07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkyMH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk1MH07XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gICY6ZW5hYmxlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICR7c2l6ZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG4gICR7ZnVsbFdpZHRoU3R5bGVzfTtcbiAgJHtzcGFjZX07XG5gO1xuXG5jb25zdCBCdXR0b25UZXh0ID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuaWNvblN0YXJ0ID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pY29uRW5kID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gKHsgaWNvblN0YXJ0LCBpY29uRW5kLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8U3R5bGVkQnV0dG9uIHsuLi57IC4uLnByb3BzLCBpY29uU3RhcnQsIGljb25FbmQsIHRleHQ6IGNoaWxkcmVuIH19PlxuICAgIHtpY29uU3RhcnR9XG4gICAge2NoaWxkcmVuICYmIChcbiAgICAgIDxCdXR0b25UZXh0IHsuLi57IGljb25TdGFydCwgaWNvbkVuZCwgLi4ucHJvcHMgfX0+e2NoaWxkcmVufTwvQnV0dG9uVGV4dD5cbiAgICApfVxuICAgIHtpY29uRW5kfVxuICA8L1N0eWxlZEJ1dHRvbj5cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBzdGF0ZSBvZiBidXR0b25cbiAgICogKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCdXR0b24gc2l6ZVxuICAgKiAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnanVtYm8nXSksXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiB2YXJpYW50LlxuICAgKiAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdtaW5pbWFsJ10pLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBzZXQgZm9yIGEgYnV0dG9uIHRvIHRha2UgdGhlIGZ1bGwgd2lkdGggb2YgaXQncyBwYXJlbnRcbiAgICogY29udGFpbmVyLlxuICAgKiAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIGljb25TdGFydDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgaWNvbkVuZDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgLi4uc3BhY2UucHJvcFR5cGVzXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNpemU6ICdsYXJnZScsXG4gIHZhcmlhbnQ6ICdwcmltYXJ5JyxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgaWNvblN0YXJ0OiB1bmRlZmluZWQsXG4gIGljb25FbmQ6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */'
  );
var ButtonText =
  /*#__PURE__*/
  (0, _styled.default)('span', {
    label: 'ButtonText',
    target: 'e13ktrjm1'
  })(
    'margin-left:',
    function(props) {
      return props.iconStart === undefined ? 0 : props.theme.space.smallest;
    },
    ';margin-right:',
    function(props) {
      return props.iconEnd === undefined ? 0 : props.theme.space.smallest;
    },
    ';vertical-align:middle;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa044QiIsImZpbGUiOiIuLi9zcmMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IGNhbGN1bGF0ZVBhZGRpbmcgPSAoeyB4RGVmYXVsdCwgaWNvblN0YXJ0LCBpY29uRW5kLCB0aGVtZSwgdGV4dCB9KSA9PiB7XG4gIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgKGljb25TdGFydCAmJiBpY29uRW5kKSkge1xuICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gIH1cblxuICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgcmV0dXJuIGAwICR7eERlZmF1bHR9IDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH1gO1xuICB9XG5cbiAgaWYgKGljb25FbmQpIHtcbiAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMCAke3hEZWZhdWx0fWA7XG4gIH1cblxuICByZXR1cm4gYDAgJHt4RGVmYXVsdH1gO1xufTtcblxuY29uc3Qgc2l6ZVN0eWxlcyA9ICh7IHRoZW1lLCBpY29uU3RhcnQsIGljb25FbmQsIHNpemUsIHRleHQgfSkgPT4ge1xuICBjb25zdCBzaXplTWFwID0ge1xuICAgIHNtYWxsOiB7XG4gICAgICBwYWRkaW5nOiAoKCkgPT4ge1xuICAgICAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkIHx8IChpY29uRW5kICYmIGljb25TdGFydCkpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAwIDBgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGljb25FbmQpIHtcbiAgICAgICAgICByZXR1cm4gYDAgMCAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2Uuc21hbGxlcn1gO1xuICAgICAgfSkoKSxcbiAgICAgIGhlaWdodDogcmVtKCcyNHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUxLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCcyMnB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgcGFkZGluZzogY2FsY3VsYXRlUGFkZGluZyh7XG4gICAgICAgIGljb25TdGFydCxcbiAgICAgICAgaWNvbkVuZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIHhEZWZhdWx0OiB0aGVtZS5zcGFjZS5zbWFsbGVyXG4gICAgICB9KSxcbiAgICAgIGhlaWdodDogcmVtKCczMnB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCcyNHB4JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhcmdlOiB7XG4gICAgICBwYWRkaW5nOiBjYWxjdWxhdGVQYWRkaW5nKHtcbiAgICAgICAgaWNvblN0YXJ0LFxuICAgICAgICBpY29uRW5kLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgeERlZmF1bHQ6IHRoZW1lLnNwYWNlLnJlZ3VsYXJcbiAgICAgIH0pLFxuICAgICAgaGVpZ2h0OiByZW0oJzQwcHgnKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMuc2l6ZTIsXG4gICAgICBpOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oJzMycHgnKVxuICAgICAgfVxuICAgIH0sXG4gICAganVtYm86IHtcbiAgICAgIHBhZGRpbmc6ICgoKSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhlbWUuc3BhY2Uuc21hbGxlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpY29uU3RhcnQgJiYgaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvblN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIGAwICR7dGhlbWUuc3BhY2UucmVndWxhcn0gMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWNvbkVuZCkge1xuICAgICAgICAgIHJldHVybiBgMCAke3RoZW1lLnNwYWNlLnNtYWxsZXN0fSAwICR7dGhlbWUuc3BhY2UucmVndWxhcn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9ICR7dGhlbWUuc3BhY2UucmVndWxhcn1gO1xuICAgICAgfSkoKSxcbiAgICAgIGhlaWdodDogcmVtKCc0OHB4JyksXG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNpemUyLFxuICAgICAgaToge1xuICAgICAgICBmb250U2l6ZTogcmVtKCczMnB4JylcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHNpemVNYXBbc2l6ZV07XG59O1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdGhlbWUsIHZhcmlhbnQgfSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwID0ge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICAgICAgJyY6aG92ZXI6ZW5hYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZUxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlOmVuYWJsZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzOmVuYWJsZWQnOiB7XG4gICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDFweCAke3RoZW1lLmNvbG9ycy53aGl0ZX0sIDAgMCAwIDJweCAke1xuICAgICAgICAgIHRoZW1lLmNvbG9ycy5ibHVlRGFya1xuICAgICAgICB9YFxuICAgICAgfVxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwMCxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXIsXG4gICAgICAnJjplbmFibGVkJzoge1xuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTIwfWBcbiAgICAgIH0sXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZTEwLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWUsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ibHVlfWBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibHVlRGFyayxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTEwLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXM6ZW5hYmxlZCc6IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7dGhlbWUuY29sb3JzLndoaXRlfSwgMCAwIDAgMnB4ICR7XG4gICAgICAgICAgdGhlbWUuY29sb3JzLmJsdWVEYXJrXG4gICAgICAgIH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBtaW5pbWFsOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5ODAsXG4gICAgICAnJjpob3ZlcjplbmFibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZTEwLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkxMDBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmU6ZW5hYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5ncmV5MTBcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1czplbmFibGVkJzoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHt0aGVtZS5jb2xvcnMud2hpdGV9LCAwIDAgMCAycHggJHtcbiAgICAgICAgICB0aGVtZS5jb2xvcnMuYmx1ZURhcmtcbiAgICAgICAgfWBcbiAgICAgIH0sXG4gICAgICAnJjpkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk0MFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcFt2YXJpYW50XTtcbn07XG5cbmNvbnN0IGZ1bGxXaWR0aFN0eWxlcyA9ICh7IGZ1bGxXaWR0aCB9KSA9PlxuICBmdWxsV2lkdGggJiZcbiAgY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICBgO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlclJhZGl1cy5zbWFsbH07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmFuZEZvbnR9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5sYXJnZX07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkyMH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk1MH07XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gICY6ZW5hYmxlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICR7c2l6ZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG4gICR7ZnVsbFdpZHRoU3R5bGVzfTtcbiAgJHtzcGFjZX07XG5gO1xuXG5jb25zdCBCdXR0b25UZXh0ID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuaWNvblN0YXJ0ID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pY29uRW5kID09PSB1bmRlZmluZWQgPyAwIDogcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuYDtcblxuY29uc3QgQnV0dG9uID0gKHsgaWNvblN0YXJ0LCBpY29uRW5kLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8U3R5bGVkQnV0dG9uIHsuLi57IC4uLnByb3BzLCBpY29uU3RhcnQsIGljb25FbmQsIHRleHQ6IGNoaWxkcmVuIH19PlxuICAgIHtpY29uU3RhcnR9XG4gICAge2NoaWxkcmVuICYmIChcbiAgICAgIDxCdXR0b25UZXh0IHsuLi57IGljb25TdGFydCwgaWNvbkVuZCwgLi4ucHJvcHMgfX0+e2NoaWxkcmVufTwvQnV0dG9uVGV4dD5cbiAgICApfVxuICAgIHtpY29uRW5kfVxuICA8L1N0eWxlZEJ1dHRvbj5cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBzdGF0ZSBvZiBidXR0b25cbiAgICogKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCdXR0b24gc2l6ZVxuICAgKiAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnanVtYm8nXSksXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiB2YXJpYW50LlxuICAgKiAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdtaW5pbWFsJ10pLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBzZXQgZm9yIGEgYnV0dG9uIHRvIHRha2UgdGhlIGZ1bGwgd2lkdGggb2YgaXQncyBwYXJlbnRcbiAgICogY29udGFpbmVyLlxuICAgKiAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIGljb25TdGFydDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgaWNvbkVuZDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgLi4uc3BhY2UucHJvcFR5cGVzXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNpemU6ICdsYXJnZScsXG4gIHZhcmlhbnQ6ICdwcmltYXJ5JyxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgaWNvblN0YXJ0OiB1bmRlZmluZWQsXG4gIGljb25FbmQ6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */'
  );

var Button = function Button(_ref5) {
  var iconStart = _ref5.iconStart,
    iconEnd = _ref5.iconEnd,
    children = _ref5.children,
    props = _objectWithoutProperties(_ref5, [
      'iconStart',
      'iconEnd',
      'children'
    ]);

  return (0, _core.jsx)(
    StyledButton,
    _objectSpread({}, props, {
      iconStart: iconStart,
      iconEnd: iconEnd,
      text: children
    }),
    iconStart,
    children &&
      (0, _core.jsx)(
        ButtonText,
        _objectSpread(
          {
            iconStart: iconStart,
            iconEnd: iconEnd
          },
          props
        ),
        children
      ),
    iconEnd
  );
};

Button.propTypes = _objectSpread(
  {
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
  },
  _styledSystem.space.propTypes
);
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
