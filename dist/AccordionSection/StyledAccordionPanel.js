"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _themeGet = require("@styled-system/theme-get");

var _react = require("@emotion/react");

var _Box = _interopRequireDefault(require("../Box"));

var _excluded = ["variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantStyles = function variantStyles(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, _excluded);

  var borderColor = (0, _themeGet.themeGet)('borders.default')(props);

  switch (variant) {
    case 'default':
      return /*#__PURE__*/(0, _react.css)("border-bottom:", borderColor, ";section:last-child &{border-bottom:none;border-top:", borderColor, ";};label:variantStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvblBhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQiIsImZpbGUiOiIuLi8uLi9zcmMvQWNjb3JkaW9uU2VjdGlvbi9TdHlsZWRBY2NvcmRpb25QYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdmFyaWFudCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBib3JkZXJDb2xvciA9IHRoZW1lR2V0KCdib3JkZXJzLmRlZmF1bHQnKShwcm9wcyk7XG5cbiAgc3dpdGNoICh2YXJpYW50KSB7XG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBib3JkZXItYm90dG9tOiAke2JvcmRlckNvbG9yfTtcblxuICAgICAgICBzZWN0aW9uOmxhc3QtY2hpbGQgJiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICBib3JkZXItdG9wOiAke2JvcmRlckNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgIGNhc2UgJ21pbmltYWwnOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IFN0eWxlZEFjY29yZGlvblBhbmVsID0gc3R5bGVkKEJveClgXG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5TdHlsZWRBY2NvcmRpb25QYW5lbC5kZWZhdWx0UHJvcHMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQWNjb3JkaW9uUGFuZWw7XG4iXX0= */"));

    case 'minimal':
      return '';

    default:
      return '';
  }
};

var StyledAccordionPanel = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
  target: "e1685vxk0",
  label: "StyledAccordionPanel"
})(variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvblBhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0MiLCJmaWxlIjoiLi4vLi4vc3JjL0FjY29yZGlvblNlY3Rpb24vU3R5bGVkQWNjb3JkaW9uUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHZhcmlhbnQsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB0aGVtZUdldCgnYm9yZGVycy5kZWZhdWx0JykocHJvcHMpO1xuXG4gIHN3aXRjaCAodmFyaWFudCkge1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJHtib3JkZXJDb2xvcn07XG5cbiAgICAgICAgc2VjdGlvbjpsYXN0LWNoaWxkICYge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXRvcDogJHtib3JkZXJDb2xvcn07XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICBjYXNlICdtaW5pbWFsJzpcbiAgICAgIHJldHVybiAnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBTdHlsZWRBY2NvcmRpb25QYW5lbCA9IHN0eWxlZChCb3gpYFxuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuU3R5bGVkQWNjb3JkaW9uUGFuZWwuZGVmYXVsdFByb3BzID0ge1xuICBvdmVyZmxvdzogJ2hpZGRlbidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEFjY29yZGlvblBhbmVsO1xuIl19 */"));
StyledAccordionPanel.defaultProps = {
  overflow: 'hidden'
};
var _default = StyledAccordionPanel;
exports["default"] = _default;