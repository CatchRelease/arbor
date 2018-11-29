'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _core = require('@emotion/core');

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _Text = _interopRequireDefault(require('./Text'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var baseStyles =
  /*#__PURE__*/
  (0, _core.css)(
    'text-decoration:none;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1zQiIsImZpbGUiOiIuLi9zcmMvTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcblxuY29uc3QgYmFzZVN0eWxlcyA9IGNzc2BcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgfVxuYDtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHZhcmlhbnQsIHRoZW1lOiB7IGNvbG9ycyB9IH0pID0+IHtcbiAgY29uc3QgdmFyaWFudE1hcHBpbmcgPSB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29sb3I6IGNvbG9ycy5ibHVlLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZUxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVEYXJrXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuYmx1ZURhcmt9YFxuICAgICAgfVxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTcwLFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ncmV5NzBcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ncmV5ODBcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTkwXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTEwMH1gXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2YXJpYW50TWFwcGluZ1t2YXJpYW50XTtcbn07XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQoVGV4dC53aXRoQ29tcG9uZW50KCdhJykpYFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbXV0ZWQnXSlcbn07XG5cbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiAnZGVmYXVsdCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0= */label:baseStyles;'
  );

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
        outline: '1px solid '.concat(colors.blueDark)
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
        outline: '1px solid '.concat(colors.grey100)
      }
    }
  };
  return variantMapping[variant];
};

var Link =
  /*#__PURE__*/
  (0, _styled.default)(
    _Text.default.withComponent('a', {
      target: 'e1vzot3v1'
    }),
    {
      label: 'Link',
      target: 'e1vzot3v0'
    }
  )(
    baseStyles,
    ';',
    variantStyles,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVENEMiLCJmaWxlIjoiLi4vc3JjL0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSBjc3NgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cbmA7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB2YXJpYW50LCB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRNYXBwaW5nID0ge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZSxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuYmx1ZVxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmJsdWVMaWdodFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5ibHVlRGFya1xuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmJsdWVEYXJrfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIG11dGVkOiB7XG4gICAgICBjb2xvcjogY29sb3JzLmdyZXk3MCxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTcwXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTgwXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmdyZXk5MFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXkxMDB9YFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdmFyaWFudE1hcHBpbmdbdmFyaWFudF07XG59O1xuXG5jb25zdCBMaW5rID0gc3R5bGVkKFRleHQud2l0aENvbXBvbmVudCgnYScpKWBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ211dGVkJ10pXG59O1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ2RlZmF1bHQnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIl19 */'
  );
Link.propTypes = {
  variant: _propTypes.default.oneOf(['default', 'muted'])
};
Link.defaultProps = {
  variant: 'default'
};
var _default = Link;
exports.default = _default;
