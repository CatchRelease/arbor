"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var baseStyles =
/*#__PURE__*/
(0, _reactEmotion.css)("text-decoration:none;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtzQiIsImZpbGUiOiIuLi9zcmMvTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gY3NzYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICB9XG5gO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdmFyaWFudCwgdGhlbWU6IHsgY29sb3JzIH0gfSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwcGluZyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb2xvcjogY29sb3JzLmJsdWUsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlTGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZURhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5ibHVlRGFya31gXG4gICAgICB9XG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgY29sb3I6IGNvbG9ycy5ncmV5NzAsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmdyZXk3MFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmdyZXk4MFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ncmV5OTBcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5MTAwfWBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHZhcmlhbnRNYXBwaW5nW3ZhcmlhbnRdO1xufTtcblxuY29uc3QgTGluayA9IHN0eWxlZChUZXh0LndpdGhDb21wb25lbnQoJ2EnKSlgXG4gICR7YmFzZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtdXRlZCddKVxufTtcblxuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6ICdkZWZhdWx0J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ== */label:baseStyles;");

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
      color: colors.grey70,
      '&:visited': {
        color: colors.grey70
      },
      '&:hover': {
        color: colors.grey80
      },
      '&:active': {
        color: colors.grey90
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.grey100)
      }
    }
  };
  return variantMapping[variant];
};

var Link =
/*#__PURE__*/
(0, _reactEmotion.default)(_Text.default.withComponent('a', {
  target: "e1vzot3v1"
}), {
  label: "Link",
  target: "e1vzot3v0"
})(baseStyles, ";", variantStyles, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNENEMiLCJmaWxlIjoiLi4vc3JjL0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcblxuY29uc3QgYmFzZVN0eWxlcyA9IGNzc2BcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgfVxuYDtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHZhcmlhbnQsIHRoZW1lOiB7IGNvbG9ycyB9IH0pID0+IHtcbiAgY29uc3QgdmFyaWFudE1hcHBpbmcgPSB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29sb3I6IGNvbG9ycy5ibHVlLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZUxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVEYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuYmx1ZURhcmt9YFxuICAgICAgfVxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTcwLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ncmV5NzBcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ncmV5ODBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTkwXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTEwMH1gXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2YXJpYW50TWFwcGluZ1t2YXJpYW50XTtcbn07XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQoVGV4dC53aXRoQ29tcG9uZW50KCdhJykpYFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbXV0ZWQnXSlcbn07XG5cbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiAnZGVmYXVsdCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0= */");
Link.propTypes = {
  variant: _propTypes.default.oneOf(['default', 'muted'])
};
Link.defaultProps = {
  variant: 'default'
};
var _default = Link;
exports.default = _default;