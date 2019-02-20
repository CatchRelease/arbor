"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseStyles = process.env.NODE_ENV === "production" ? {
  name: "1p1cepf-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;}label:baseStyles;"
} : {
  name: "1p1cepf-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;}label:baseStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9zQiIsImZpbGUiOiIuLi9zcmMvTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSBjc3NgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbmA7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB2YXJpYW50LCB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRNYXBwaW5nID0ge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZSxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZVxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVMaWdodFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlRGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmJsdWVEYXJrfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIG11dGVkOiB7XG4gICAgICBjb2xvcjogY29sb3JzLnRleHQubXV0ZWQsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQubXV0ZWRcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0LmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTEwMH1gXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2YXJpYW50TWFwcGluZ1t2YXJpYW50XTtcbn07XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQoVGV4dC53aXRoQ29tcG9uZW50KCdhJykpYFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2NvbG9yfTtcbmA7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ211dGVkJ10pXG59O1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ2RlZmF1bHQnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIl19 */"
};

var variantStyles = function variantStyles(_ref) {
  var variant = _ref.variant,
      colors = _ref.theme.colors;
  var variantMapping = {
    default: {
      color: colors.blue,
      '&:visited': {
        color: colors.blue
      },
      '&:hover': {
        color: colors.blueLight
      },
      '&:active': {
        color: colors.blueDark
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.blueDark)
      }
    },
    muted: {
      color: colors.text.muted,
      '&:visited': {
        color: colors.text.muted
      },
      '&:hover': {
        color: colors.text.default
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
0, _styledBase.default)(_Text.default.withComponent('a', {
  target: "e1vzot3v1",
  label: "Link"
}), {
  target: "e1vzot3v0",
  label: "Link"
})(baseStyles, ";", variantStyles, ";", _styledSystem.color, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZENEMiLCJmaWxlIjoiLi4vc3JjL0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gY3NzYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5gO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdmFyaWFudCwgdGhlbWU6IHsgY29sb3JzIH0gfSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwcGluZyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb2xvcjogY29sb3JzLmJsdWUsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlTGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZURhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5ibHVlRGFya31gXG4gICAgICB9XG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXkxMDB9YFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcHBpbmdbdmFyaWFudF07XG59O1xuXG5jb25zdCBMaW5rID0gc3R5bGVkKFRleHQud2l0aENvbXBvbmVudCgnYScpKWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbiAgJHtjb2xvcn07XG5gO1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtdXRlZCddKVxufTtcblxuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6ICdkZWZhdWx0J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ== */"));
Link.propTypes = {
  variant: _propTypes.default.oneOf(['default', 'muted'])
};
Link.defaultProps = {
  variant: 'default'
};
var _default = Link;
exports.default = _default;