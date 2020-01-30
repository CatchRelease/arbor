"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var baseStyles = process.env.NODE_ENV === "production" ? {
  name: "k9zfl1-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;};label:baseStyles;"
} : {
  name: "k9zfl1-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;};label:baseStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rL0xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NCIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaW5rL0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgYmFzZVN0eWxlcyA9IGNzc2BcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuYDtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHZhcmlhbnQsIHRoZW1lOiB7IGNvbG9ycyB9IH0pID0+IHtcbiAgY29uc3QgdmFyaWFudE1hcHBpbmcgPSB7XG4gICAgYnJhbmREYXJrOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5kYXJrLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5kYXJrXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5kYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuYnJhbmQuZGFya31gXG4gICAgICB9XG4gICAgfSxcbiAgICBicmFuZExpZ2h0OiB7XG4gICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5saWdodCxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5saWdodFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmJyYW5kLmxpZ2h0fWBcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMucGFsZXR0ZS50ZWFsLmRlZmF1bHQsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnBhbGV0dGUudGVhbC5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMucGFsZXR0ZS50ZWFsLmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMucGFsZXR0ZS50ZWFsLmRhcmtlclxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLnBhbGV0dGUudGVhbC5kZWZhdWx0fWBcbiAgICAgIH1cbiAgICB9LFxuICAgIG11dGVkOiB7XG4gICAgICBjb2xvcjogY29sb3JzLnRleHQubXV0ZWQsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQubXV0ZWRcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0LmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTEwMH1gXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2YXJpYW50TWFwcGluZ1t2YXJpYW50XTtcbn07XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQoVGV4dClgXG4gICR7YmFzZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG4gICR7Y29sb3J9O1xuYDtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBMaW5rIHZhcmlhbnQgZm9yIHN0eWxpbmcgb2YgbGluay4gU2VlIHN0b3J5Ym9vayBmb3IgZXhhbXBsZXMuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ211dGVkJ10pXG59O1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdhJyxcbiAgdmFyaWFudDogJ2RlZmF1bHQnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var variantStyles = function variantStyles(_ref) {
  var variant = _ref.variant,
      colors = _ref.theme.colors;
  var variantMapping = {
    brandDark: {
      color: colors.intent.brand.dark,
      '&:visited': {
        color: colors.intent.brand.dark
      },
      '&:hover': {
        color: colors.intent.brand.dark
      },
      '&:active': {
        color: colors.intent.brand.dark
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.brand.dark)
      }
    },
    brandLight: {
      color: colors.intent.brand.light,
      '&:visited': {
        color: colors.intent.brand.light
      },
      '&:hover': {
        color: colors.intent.brand.light
      },
      '&:active': {
        color: colors.intent.brand.light
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.brand.light)
      }
    },
    "default": {
      color: colors.palette.teal["default"],
      '&:visited': {
        color: colors.palette.teal["default"]
      },
      '&:hover': {
        color: colors.palette.teal.dark
      },
      '&:active': {
        color: colors.palette.teal.darker
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.palette.teal["default"])
      }
    },
    muted: {
      color: colors.text.muted,
      '&:visited': {
        color: colors.text.muted
      },
      '&:hover': {
        color: colors.text["default"]
      },
      '&:active': {
        color: colors.text.dark
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.grey100)
      }
    }
  };
  return variantMapping[variant];
};

var Link = (
/*#__PURE__*/
0, _styledBase["default"])(_Text["default"], {
  target: "etw7smi0",
  label: "Link"
})(baseStyles, ";", variantStyles, ";", _styledSystem.color, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rL0xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZ5QiIsImZpbGUiOiIuLi8uLi9zcmMvTGluay9MaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSBjc3NgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbmA7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB2YXJpYW50LCB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRNYXBwaW5nID0ge1xuICAgIGJyYW5kRGFyazoge1xuICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQuZGFyayxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmJyYW5kLmRhcmt9YFxuICAgICAgfVxuICAgIH0sXG4gICAgYnJhbmRMaWdodDoge1xuICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQubGlnaHQsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5saWdodFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5saWdodFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQubGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5icmFuZC5saWdodH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb2xvcjogY29sb3JzLnBhbGV0dGUudGVhbC5kZWZhdWx0LFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5wYWxldHRlLnRlYWwuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnBhbGV0dGUudGVhbC5kYXJrXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnBhbGV0dGUudGVhbC5kYXJrZXJcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5wYWxldHRlLnRlYWwuZGVmYXVsdH1gXG4gICAgICB9XG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXkxMDB9YFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcHBpbmdbdmFyaWFudF07XG59O1xuXG5jb25zdCBMaW5rID0gc3R5bGVkKFRleHQpYFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2NvbG9yfTtcbmA7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogTGluayB2YXJpYW50IGZvciBzdHlsaW5nIG9mIGxpbmsuIFNlZSBzdG9yeWJvb2sgZm9yIGV4YW1wbGVzLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtdXRlZCddKVxufTtcblxuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnYScsXG4gIHZhcmlhbnQ6ICdkZWZhdWx0J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ== */"));
Link.propTypes = {
  /**
   * Link variant for styling of link. See storybook for examples.
   */
  variant: _propTypes["default"].oneOf(['default', 'muted'])
};
Link.defaultProps = {
  as: 'a',
  variant: 'default'
};
var _default = Link;
exports["default"] = _default;