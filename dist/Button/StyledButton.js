"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

var _buttonSizes = _interopRequireDefault(require("./buttonSizes"));

var _variants = _interopRequireDefault(require("./variants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1cgr2o5-fullWidthStyles",
  styles: "width:100%;label:fullWidthStyles;"
} : {
  name: "1cgr2o5-fullWidthStyles",
  styles: "width:100%;label:fullWidthStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFLIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBzcGFjZSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IGJ1dHRvblNpemVzIGZyb20gJy4vYnV0dG9uU2l6ZXMnO1xuaW1wb3J0IHZhcmlhbnRzIGZyb20gJy4vdmFyaWFudHMnO1xuXG5jb25zdCBmdWxsV2lkdGhTdHlsZXMgPSAoeyBmdWxsV2lkdGggfSkgPT5cbiAgZnVsbFdpZHRoICYmXG4gIGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgYDtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yYWRpaS5zbWFsbH07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmFuZEZvbnR9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0cy5tZWRpdW19O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5yZWd1bGFyfTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5kZWZhdWx0fTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gICY6ZW5hYmxlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICR7YnV0dG9uU2l6ZXN9O1xuICAke3ZhcmlhbnRzfTtcbiAgJHtmdWxsV2lkdGhTdHlsZXN9O1xuICAke3NwYWNlfTtcbmA7XG5cblN0eWxlZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC4uLnNwYWNlLnByb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQnV0dG9uO1xuIl19 */"
};

var fullWidthStyles = function fullWidthStyles(_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth && _ref;
};

var StyledButton = (0, _styledBase.default)("button", {
  target: "e1gh64dh0",
  label: "StyledButton"
})("border-radius:", function (props) {
  return props.theme.radii.small;
}, ";border:1px solid transparent;font-family:", function (props) {
  return props.theme.brandFont;
}, ";font-weight:", function (props) {
  return props.theme.fontWeights.medium;
}, ";line-height:", function (props) {
  return props.theme.lineHeights.regular;
}, ";outline:none;text-align:center;transition:box-shadow 0.3s ease,background 0.2s ease;&:disabled{background:", function (props) {
  return props.theme.colors.background.default;
}, ";color:", function (props) {
  return props.theme.colors.text.disabled;
}, ";cursor:not-allowed;}&:enabled{cursor:pointer;}i{vertical-align:middle;}", _buttonSizes.default, ";", _variants.default, ";", fullWidthStyles, ";", _styledSystem.space, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vU3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQyIsImZpbGUiOiIuLi8uLi9zcmMvQnV0dG9uL1N0eWxlZEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBidXR0b25TaXplcyBmcm9tICcuL2J1dHRvblNpemVzJztcbmltcG9ydCB2YXJpYW50cyBmcm9tICcuL3ZhcmlhbnRzJztcblxuY29uc3QgZnVsbFdpZHRoU3R5bGVzID0gKHsgZnVsbFdpZHRoIH0pID0+XG4gIGZ1bGxXaWR0aCAmJlxuICBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gIGA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmFkaWkuc21hbGx9O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJhbmRGb250fTtcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodHMubWVkaXVtfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodHMucmVndWxhcn07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQuZGVmYXVsdH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHQuZGlzYWJsZWR9O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmOmVuYWJsZWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAke2J1dHRvblNpemVzfTtcbiAgJHt2YXJpYW50c307XG4gICR7ZnVsbFdpZHRoU3R5bGVzfTtcbiAgJHtzcGFjZX07XG5gO1xuXG5TdHlsZWRCdXR0b24ucHJvcFR5cGVzID0ge1xuICAuLi5zcGFjZS5wcm9wVHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEJ1dHRvbjtcbiJdfQ== */"));
StyledButton.propTypes = _objectSpread({}, _styledSystem.space.propTypes);
var _default = StyledButton;
exports.default = _default;