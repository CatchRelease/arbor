"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _polished = require("polished");

var _theme = require("./theme");

var _Label = _interopRequireDefault(require("./Label"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputContainer =
/*#__PURE__*/
(0, _reactEmotion.default)("div", {
  label: "InputContainer",
  target: "e13x5kwi0"
})("margin-bottom:", function (props) {
  return props.caption ? _theme.spacings.smaller : _theme.spacings.regular;
}, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmlDIiwiZmlsZSI6Ii4uL3NyYy9JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHBsYWNlaG9sZGVyLCB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IHtcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJXaWR0aCxcbiAgY29sb3JzLFxuICBmb250U2l6ZXMsXG4gIGxpbmVIZWlnaHRzLFxuICBzcGFjaW5nc1xufSBmcm9tICcuL3RoZW1lJztcblxuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+XG4gICAgcHJvcHMuY2FwdGlvbiA/IHNwYWNpbmdzLnNtYWxsZXIgOiBzcGFjaW5ncy5yZWd1bGFyfTtcbmA7XG5cbklucHV0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuSW5wdXRDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBjYXB0aW9uOiAnJ1xufTtcblxuY29uc3QgbGFyZ2VTdHlsZXMgPSAoeyBsYXJnZSB9KSA9PlxuICBsYXJnZSAmJlxuICBjc3NgXG4gICAgcGFkZGluZzogJHtzcGFjaW5ncy5zbWFsbH0gJHtzcGFjaW5ncy5zbWFsbGVyfTtcbiAgYDtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJvcmRlci1yYWRpdXM6ICR7Ym9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAke2JvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke2NvbG9ycy5ncmV5MjB9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogJHtjb2xvcnMuZ3JleTEwMH07XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc2l6ZTJ9O1xuICBsaW5lLWhlaWdodDogJHtsaW5lSGVpZ2h0cy5zbWFsbH07XG4gIG1hcmdpbjogJHtzcGFjaW5ncy5zbWFsbGVzdH0gMDtcbiAgcGFkZGluZzogJHtzcGFjaW5ncy5zbWFsbGVyfTtcbiAgd2lkdGg6IDEwMCU7XG4gICR7bGFyZ2VTdHlsZXN9O1xuXG4gICR7cGxhY2Vob2xkZXIoeyBjb2xvcjogY29sb3JzLmdyZXk1MCB9KX07XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAke2JvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke2NvbG9ycy5ibHVlTGlnaHR9O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggJHt0cmFuc3BhcmVudGl6ZSgwLjksIGNvbG9ycy5ibHVlTGlnaHQpfTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHtjb2xvcnMud2hpdGUxMH07XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0ID0gKHsgY2FwdGlvbiwgbGFiZWwsIGlkLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxJbnB1dENvbnRhaW5lciBjYXB0aW9uPXtjYXB0aW9ufT5cbiAgICA8TGFiZWwgaHRtbEZvcj17aWR9PntsYWJlbH08L0xhYmVsPlxuICAgIDxTdHlsZWRJbnB1dCB7Li4ueyAuLi5wcm9wcywgaWQgfX0gLz5cbiAgICB7Y2FwdGlvbiAmJiAoXG4gICAgICA8VGV4dC5zcGFuIHZhcmlhbnQ9XCJ0aW55XCIgY29sb3I9XCJyZWRcIj5cbiAgICAgICAge2NhcHRpb259XG4gICAgICA8L1RleHQuc3Bhbj5cbiAgICApfVxuICA8L0lucHV0Q29udGFpbmVyPlxuKTtcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FwdGlvbjogJycsXG4gIGxhcmdlOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */");
InputContainer.propTypes = {
  caption: _propTypes.default.string
};
InputContainer.defaultProps = {
  caption: ''
};

var largeStyles = function largeStyles(_ref) {
  var large = _ref.large;
  return large &&
  /*#__PURE__*/
  (0, _reactEmotion.css)("padding:", _theme.spacings.small, " ", _theme.spacings.smaller, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ0siLCJmaWxlIjoiLi4vc3JjL0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcGxhY2Vob2xkZXIsIHRyYW5zcGFyZW50aXplIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQge1xuICBib3JkZXJSYWRpdXMsXG4gIGJvcmRlcldpZHRoLFxuICBjb2xvcnMsXG4gIGZvbnRTaXplcyxcbiAgbGluZUhlaWdodHMsXG4gIHNwYWNpbmdzXG59IGZyb20gJy4vdGhlbWUnO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5jYXB0aW9uID8gc3BhY2luZ3Muc21hbGxlciA6IHNwYWNpbmdzLnJlZ3VsYXJ9O1xuYDtcblxuSW5wdXRDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5JbnB1dENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcHRpb246ICcnXG59O1xuXG5jb25zdCBsYXJnZVN0eWxlcyA9ICh7IGxhcmdlIH0pID0+XG4gIGxhcmdlICYmXG4gIGNzc2BcbiAgICBwYWRkaW5nOiAke3NwYWNpbmdzLnNtYWxsfSAke3NwYWNpbmdzLnNtYWxsZXJ9O1xuICBgO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYm9yZGVyLXJhZGl1czogJHtib3JkZXJSYWRpdXMuc21hbGx9O1xuICBib3JkZXI6ICR7Ym9yZGVyV2lkdGguc21hbGx9IHNvbGlkICR7Y29sb3JzLmdyZXkyMH07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAke2NvbG9ycy5ncmV5MTAwfTtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zaXplMn07XG4gIGxpbmUtaGVpZ2h0OiAke2xpbmVIZWlnaHRzLnNtYWxsfTtcbiAgbWFyZ2luOiAke3NwYWNpbmdzLnNtYWxsZXN0fSAwO1xuICBwYWRkaW5nOiAke3NwYWNpbmdzLnNtYWxsZXJ9O1xuICB3aWR0aDogMTAwJTtcbiAgJHtsYXJnZVN0eWxlc307XG5cbiAgJHtwbGFjZWhvbGRlcih7IGNvbG9yOiBjb2xvcnMuZ3JleTUwIH0pfTtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICR7Ym9yZGVyV2lkdGguc21hbGx9IHNvbGlkICR7Y29sb3JzLmJsdWVMaWdodH07XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAke3RyYW5zcGFyZW50aXplKDAuOSwgY29sb3JzLmJsdWVMaWdodCl9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZTEwfTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXQgPSAoeyBjYXB0aW9uLCBsYWJlbCwgaWQsIC4uLnByb3BzIH0pID0+IChcbiAgPElucHV0Q29udGFpbmVyIGNhcHRpb249e2NhcHRpb259PlxuICAgIDxMYWJlbCBodG1sRm9yPXtpZH0+e2xhYmVsfTwvTGFiZWw+XG4gICAgPFN0eWxlZElucHV0IHsuLi57IC4uLnByb3BzLCBpZCB9fSAvPlxuICAgIHtjYXB0aW9uICYmIChcbiAgICAgIDxUZXh0LnNwYW4gdmFyaWFudD1cInRpbnlcIiBjb2xvcj1cInJlZFwiPlxuICAgICAgICB7Y2FwdGlvbn1cbiAgICAgIDwvVGV4dC5zcGFuPlxuICAgICl9XG4gIDwvSW5wdXRDb250YWluZXI+XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBjYXB0aW9uOiAnJyxcbiAgbGFyZ2U6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */label:largeStyles;");
};

var StyledInput =
/*#__PURE__*/
(0, _reactEmotion.default)("input", {
  label: "StyledInput",
  target: "e13x5kwi1"
})("border-radius:", _theme.borderRadius.small, ";border:", _theme.borderWidth.small, " solid ", _theme.colors.grey20, ";box-sizing:border-box;color:", _theme.colors.grey100, ";font-size:", _theme.fontSizes.size2, ";line-height:", _theme.lineHeights.small, ";margin:", _theme.spacings.smallest, " 0;padding:", _theme.spacings.smaller, ";width:100%;", largeStyles, ";", (0, _polished.placeholder)({
  color: _theme.colors.grey50
}), ";&:focus{border:", _theme.borderWidth.small, " solid ", _theme.colors.blueLight, ";box-shadow:0 0 8px ", (0, _polished.transparentize)(0.9, _theme.colors.blueLight), ";outline:none;}&:disabled{background:", _theme.colors.white10, ";}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2dDIiwiZmlsZSI6Ii4uL3NyYy9JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHBsYWNlaG9sZGVyLCB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IHtcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJXaWR0aCxcbiAgY29sb3JzLFxuICBmb250U2l6ZXMsXG4gIGxpbmVIZWlnaHRzLFxuICBzcGFjaW5nc1xufSBmcm9tICcuL3RoZW1lJztcblxuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+XG4gICAgcHJvcHMuY2FwdGlvbiA/IHNwYWNpbmdzLnNtYWxsZXIgOiBzcGFjaW5ncy5yZWd1bGFyfTtcbmA7XG5cbklucHV0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuSW5wdXRDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBjYXB0aW9uOiAnJ1xufTtcblxuY29uc3QgbGFyZ2VTdHlsZXMgPSAoeyBsYXJnZSB9KSA9PlxuICBsYXJnZSAmJlxuICBjc3NgXG4gICAgcGFkZGluZzogJHtzcGFjaW5ncy5zbWFsbH0gJHtzcGFjaW5ncy5zbWFsbGVyfTtcbiAgYDtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJvcmRlci1yYWRpdXM6ICR7Ym9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAke2JvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke2NvbG9ycy5ncmV5MjB9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogJHtjb2xvcnMuZ3JleTEwMH07XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc2l6ZTJ9O1xuICBsaW5lLWhlaWdodDogJHtsaW5lSGVpZ2h0cy5zbWFsbH07XG4gIG1hcmdpbjogJHtzcGFjaW5ncy5zbWFsbGVzdH0gMDtcbiAgcGFkZGluZzogJHtzcGFjaW5ncy5zbWFsbGVyfTtcbiAgd2lkdGg6IDEwMCU7XG4gICR7bGFyZ2VTdHlsZXN9O1xuXG4gICR7cGxhY2Vob2xkZXIoeyBjb2xvcjogY29sb3JzLmdyZXk1MCB9KX07XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAke2JvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke2NvbG9ycy5ibHVlTGlnaHR9O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggJHt0cmFuc3BhcmVudGl6ZSgwLjksIGNvbG9ycy5ibHVlTGlnaHQpfTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHtjb2xvcnMud2hpdGUxMH07XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0ID0gKHsgY2FwdGlvbiwgbGFiZWwsIGlkLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxJbnB1dENvbnRhaW5lciBjYXB0aW9uPXtjYXB0aW9ufT5cbiAgICA8TGFiZWwgaHRtbEZvcj17aWR9PntsYWJlbH08L0xhYmVsPlxuICAgIDxTdHlsZWRJbnB1dCB7Li4ueyAuLi5wcm9wcywgaWQgfX0gLz5cbiAgICB7Y2FwdGlvbiAmJiAoXG4gICAgICA8VGV4dC5zcGFuIHZhcmlhbnQ9XCJ0aW55XCIgY29sb3I9XCJyZWRcIj5cbiAgICAgICAge2NhcHRpb259XG4gICAgICA8L1RleHQuc3Bhbj5cbiAgICApfVxuICA8L0lucHV0Q29udGFpbmVyPlxuKTtcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FwdGlvbjogJycsXG4gIGxhcmdlOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0= */");

var Input = function Input(_ref2) {
  var caption = _ref2.caption,
      label = _ref2.label,
      id = _ref2.id,
      props = _objectWithoutProperties(_ref2, ["caption", "label", "id"]);

  return _react.default.createElement(InputContainer, {
    caption: caption
  }, _react.default.createElement(_Label.default, {
    htmlFor: id
  }, label), _react.default.createElement(StyledInput, _objectSpread({}, props, {
    id: id
  })), caption && _react.default.createElement(_Text.default.span, {
    variant: "tiny",
    color: "red"
  }, caption));
};

Input.propTypes = {
  caption: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  large: _propTypes.default.bool
};
Input.defaultProps = {
  caption: '',
  large: false
};
var _default = Input;
exports.default = _default;