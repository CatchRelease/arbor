"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _themeGet = require("@styled-system/theme-get");

var _react = require("@emotion/react");

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantStyles = function variantStyles(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["variant"]);

  var borderColor = (0, _themeGet.themeGet)('borders.default')(props);
  var backgroundColor = (0, _themeGet.themeGet)('colors.background.default')(props);

  switch (variant) {
    case 'default':
      return /*#__PURE__*/(0, _react.css)("background:", backgroundColor, ";border-bottom:", borderColor, ";section:last-child &{border-bottom:none;};label:variantStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IiLCJmaWxlIjoiLi4vLi4vc3JjL0FjY29yZGlvblNlY3Rpb24vU3R5bGVkQWNjb3JkaW9uSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgRmxleCBmcm9tICcuLi9GbGV4JztcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHZhcmlhbnQsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB0aGVtZUdldCgnYm9yZGVycy5kZWZhdWx0JykocHJvcHMpO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB0aGVtZUdldCgnY29sb3JzLmJhY2tncm91bmQuZGVmYXVsdCcpKHByb3BzKTtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZENvbG9yfTtcblxuICAgICAgICBib3JkZXItYm90dG9tOiAke2JvcmRlckNvbG9yfTtcblxuICAgICAgICBzZWN0aW9uOmxhc3QtY2hpbGQgJiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgIGNhc2UgJ21pbmltYWwnOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZChGbGV4KWBcbiAgLmJ1dHRvbi0tbWluaW1hbDpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogLSR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG5cbiAgICArIDpub3Qob2JqZWN0KSB7XG4gICAgICBtYXJnaW4tbGVmdDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgICB9XG4gIH1cblxuICBidXR0b24gKyAuYnV0dG9uLS1zZWNvbmRhcnksXG4gIGJ1dHRvbiArIC5idXR0b24tLXByaW1hcnkge1xuICAgIG1hcmdpbi1sZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIH1cblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblN0eWxlZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnaGVhZGVyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSGVhZGVyO1xuIl19 */"));

    case 'minimal':
      return '';

    default:
      return '';
  }
};

var StyledHeader = ( /*#__PURE__*/0, _base["default"])(_Flex["default"], {
  target: "exxxozt0",
  label: "StyledHeader"
})(".button--minimal:last-of-type{margin-right:-", function (props) {
  return props.theme.space.smallest;
}, ";+:not(object){margin-left:", function (props) {
  return props.theme.space.smallest;
}, ";}}button+.button--secondary,button+.button--primary{margin-left:", function (props) {
  return props.theme.space.smaller;
}, ";}cursor:pointer;", variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB2YXJpYW50LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdGhlbWVHZXQoJ2JvcmRlcnMuZGVmYXVsdCcpKHByb3BzKTtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdGhlbWVHZXQoJ2NvbG9ycy5iYWNrZ3JvdW5kLmRlZmF1bHQnKShwcm9wcyk7XG5cbiAgc3dpdGNoICh2YXJpYW50KSB7XG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBiYWNrZ3JvdW5kOiAke2JhY2tncm91bmRDb2xvcn07XG5cbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJHtib3JkZXJDb2xvcn07XG5cbiAgICAgICAgc2VjdGlvbjpsYXN0LWNoaWxkICYge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICBjYXNlICdtaW5pbWFsJzpcbiAgICAgIHJldHVybiAnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQoRmxleClgXG4gIC5idXR0b24tLW1pbmltYWw6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0keyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuXG4gICAgKyA6bm90KG9iamVjdCkge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uICsgLmJ1dHRvbi0tc2Vjb25kYXJ5LFxuICBidXR0b24gKyAuYnV0dG9uLS1wcmltYXJ5IHtcbiAgICBtYXJnaW4tbGVmdDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICB9XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5TdHlsZWRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2hlYWRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEhlYWRlcjtcbiJdfQ== */"));
StyledHeader.defaultProps = {
  as: 'header'
};
var _default = StyledHeader;
exports["default"] = _default;