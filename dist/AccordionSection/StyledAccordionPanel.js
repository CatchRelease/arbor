"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _themeGet = require("@styled-system/theme-get");

var _core = require("@emotion/core");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantStyles = function variantStyles(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["variant"]);

  var borderColor = (0, _themeGet.themeGet)('borders.default')(props);

  switch (variant) {
    case 'default':
      return (
        /*#__PURE__*/
        (0, _core.css)("border-bottom:", borderColor, ";section:last-child &{border-bottom:none;border-top:", borderColor, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvblBhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQiIsImZpbGUiOiIuLi8uLi9zcmMvQWNjb3JkaW9uU2VjdGlvbi9TdHlsZWRBY2NvcmRpb25QYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB2YXJpYW50LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdGhlbWVHZXQoJ2JvcmRlcnMuZGVmYXVsdCcpKHByb3BzKTtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJvcmRlci1ib3R0b206ICR7Ym9yZGVyQ29sb3J9O1xuXG4gICAgICAgIHNlY3Rpb246bGFzdC1jaGlsZCAmIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIGJvcmRlci10b3A6ICR7Ym9yZGVyQ29sb3J9O1xuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgY2FzZSAnbWluaW1hbCc6XG4gICAgICByZXR1cm4gJyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgU3R5bGVkQWNjb3JkaW9uUGFuZWwgPSBzdHlsZWQoQm94KWBcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblN0eWxlZEFjY29yZGlvblBhbmVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRBY2NvcmRpb25QYW5lbDtcbiJdfQ== */"))
      );

    case 'minimal':
      return '';

    default:
      return '';
  }
};

var StyledAccordionPanel = (
/*#__PURE__*/
0, _styledBase["default"])(_Box["default"], {
  target: "e1685vxk0",
  label: "StyledAccordionPanel"
})(variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvblBhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0MiLCJmaWxlIjoiLi4vLi4vc3JjL0FjY29yZGlvblNlY3Rpb24vU3R5bGVkQWNjb3JkaW9uUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdmFyaWFudCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBib3JkZXJDb2xvciA9IHRoZW1lR2V0KCdib3JkZXJzLmRlZmF1bHQnKShwcm9wcyk7XG5cbiAgc3dpdGNoICh2YXJpYW50KSB7XG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBib3JkZXItYm90dG9tOiAke2JvcmRlckNvbG9yfTtcblxuICAgICAgICBzZWN0aW9uOmxhc3QtY2hpbGQgJiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICBib3JkZXItdG9wOiAke2JvcmRlckNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgIGNhc2UgJ21pbmltYWwnOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IFN0eWxlZEFjY29yZGlvblBhbmVsID0gc3R5bGVkKEJveClgXG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5TdHlsZWRBY2NvcmRpb25QYW5lbC5kZWZhdWx0UHJvcHMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQWNjb3JkaW9uUGFuZWw7XG4iXX0= */"));
StyledAccordionPanel.defaultProps = {
  overflow: 'hidden'
};
var _default = StyledAccordionPanel;
exports["default"] = _default;