"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _themeGet = require("@styled-system/theme-get");

var _core = require("@emotion/core");

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
      return /*#__PURE__*/(0, _core.css)("background:", backgroundColor, ";border-bottom:", borderColor, ";section:last-child &{border-bottom:none;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IiLCJmaWxlIjoiLi4vLi4vc3JjL0FjY29yZGlvblNlY3Rpb24vU3R5bGVkQWNjb3JkaW9uSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdmFyaWFudCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBib3JkZXJDb2xvciA9IHRoZW1lR2V0KCdib3JkZXJzLmRlZmF1bHQnKShwcm9wcyk7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IHRoZW1lR2V0KCdjb2xvcnMuYmFja2dyb3VuZC5kZWZhdWx0JykocHJvcHMpO1xuXG4gIHN3aXRjaCAodmFyaWFudCkge1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kQ29sb3J9O1xuXG4gICAgICAgIGJvcmRlci1ib3R0b206ICR7Ym9yZGVyQ29sb3J9O1xuXG4gICAgICAgIHNlY3Rpb246bGFzdC1jaGlsZCAmIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgY2FzZSAnbWluaW1hbCc6XG4gICAgICByZXR1cm4gJyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkKEZsZXgpYFxuICAuYnV0dG9uLS1taW5pbWFsOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcblxuICAgICsgOm5vdChvYmplY3QpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlc3R9O1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiArIC5idXR0b24tLXNlY29uZGFyeSxcbiAgYnV0dG9uICsgLmJ1dHRvbi0tcHJpbWFyeSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgfVxuXG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuU3R5bGVkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdoZWFkZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRIZWFkZXI7XG4iXX0= */"));

    case 'minimal':
      return '';

    default:
      return '';
  }
};

var StyledHeader = ( /*#__PURE__*/0, _styledBase["default"])(_Flex["default"], {
  target: "exxxozt0",
  label: "StyledHeader"
})(".button--minimal:last-of-type{margin-right:-", function (props) {
  return props.theme.space.smallest;
}, ";+:not(object){margin-left:", function (props) {
  return props.theme.space.smallest;
}, ";}}button + .button--secondary,button + .button--primary{margin-left:", function (props) {
  return props.theme.space.smaller;
}, ";}cursor:pointer;", variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9BY2NvcmRpb25TZWN0aW9uL1N0eWxlZEFjY29yZGlvbkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgRmxleCBmcm9tICcuLi9GbGV4JztcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHZhcmlhbnQsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB0aGVtZUdldCgnYm9yZGVycy5kZWZhdWx0JykocHJvcHMpO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB0aGVtZUdldCgnY29sb3JzLmJhY2tncm91bmQuZGVmYXVsdCcpKHByb3BzKTtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZENvbG9yfTtcblxuICAgICAgICBib3JkZXItYm90dG9tOiAke2JvcmRlckNvbG9yfTtcblxuICAgICAgICBzZWN0aW9uOmxhc3QtY2hpbGQgJiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgIGNhc2UgJ21pbmltYWwnOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZChGbGV4KWBcbiAgLmJ1dHRvbi0tbWluaW1hbDpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogLSR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVzdH07XG5cbiAgICArIDpub3Qob2JqZWN0KSB7XG4gICAgICBtYXJnaW4tbGVmdDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNwYWNlLnNtYWxsZXN0fTtcbiAgICB9XG4gIH1cblxuICBidXR0b24gKyAuYnV0dG9uLS1zZWNvbmRhcnksXG4gIGJ1dHRvbiArIC5idXR0b24tLXByaW1hcnkge1xuICAgIG1hcmdpbi1sZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIH1cblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblN0eWxlZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnaGVhZGVyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSGVhZGVyO1xuIl19 */"));
StyledHeader.defaultProps = {
  as: 'header'
};
var _default = StyledHeader;
exports["default"] = _default;