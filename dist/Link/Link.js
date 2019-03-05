"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseStyles = process.env.NODE_ENV === "production" ? {
  name: "1p1cepf-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;}label:baseStyles;"
} : {
  name: "1p1cepf-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;}label:baseStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rL0xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXNCIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaW5rL0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgY3JlYXRlV2l0aENvbXBvbmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVXaXRoQ29tcG9uZW50JztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gY3NzYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5gO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdmFyaWFudCwgdGhlbWU6IHsgY29sb3JzIH0gfSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwcGluZyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb2xvcjogY29sb3JzLmJsdWUsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlTGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZURhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5ibHVlRGFya31gXG4gICAgICB9XG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXkxMDB9YFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcHBpbmdbdmFyaWFudF07XG59O1xuXG5jb25zdCBMaW5rID0gc3R5bGVkKFxuICBjcmVhdGVXaXRoQ29tcG9uZW50KFRleHQsICdhJywge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgdmFyaWFudDogJ2RlZmF1bHQnXG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbXV0ZWQnXSlcbiAgICB9XG4gIH0pXG4pYFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2NvbG9yfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0= */"
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
0, _styledBase.default)((0, _createWithComponent.default)(_Text.default, 'a', {
  defaultProps: {
    variant: 'default'
  },
  propTypes: {
    variant: _propTypes.default.oneOf(['default', 'muted'])
  }
}), {
  target: "etw7smi0",
  label: "Link"
})(baseStyles, ";", variantStyles, ";", _styledSystem.color, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rL0xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVDIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaW5rL0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgY3JlYXRlV2l0aENvbXBvbmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVXaXRoQ29tcG9uZW50JztcbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gY3NzYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5gO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdmFyaWFudCwgdGhlbWU6IHsgY29sb3JzIH0gfSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwcGluZyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb2xvcjogY29sb3JzLmJsdWUsXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlTGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZURhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5ibHVlRGFya31gXG4gICAgICB9XG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0Lm11dGVkXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXkxMDB9YFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcHBpbmdbdmFyaWFudF07XG59O1xuXG5jb25zdCBMaW5rID0gc3R5bGVkKFxuICBjcmVhdGVXaXRoQ29tcG9uZW50KFRleHQsICdhJywge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgdmFyaWFudDogJ2RlZmF1bHQnXG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbXV0ZWQnXSlcbiAgICB9XG4gIH0pXG4pYFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2NvbG9yfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0= */"));
var _default = Link;
exports.default = _default;