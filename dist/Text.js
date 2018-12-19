"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _core.css)("font-family:", theme.brandFont, ";label:baseStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlxQyIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnRTaXplLCBzcGFjZSwgdGV4dEFsaWduLCBsaW5lSGVpZ2h0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lLmJyYW5kRm9udH07XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtiYXNlU3R5bGVzfTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlc1xufTtcblxuVGV4dC5wID0gVGV4dC53aXRoQ29tcG9uZW50KCdwJyk7XG5UZXh0LnNwYW4gPSBUZXh0LndpdGhDb21wb25lbnQoJ3NwYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"))
  );
};

var Text = (0, _styledBase.default)("p", {
  target: "e1mey0i20",
  label: "Text"
})(_styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", _styledSystem.lineHeight, ";", baseStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFxQiIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnRTaXplLCBzcGFjZSwgdGV4dEFsaWduLCBsaW5lSGVpZ2h0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lLmJyYW5kRm9udH07XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtiYXNlU3R5bGVzfTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlc1xufTtcblxuVGV4dC5wID0gVGV4dC53aXRoQ29tcG9uZW50KCdwJyk7XG5UZXh0LnNwYW4gPSBUZXh0LndpdGhDb21wb25lbnQoJ3NwYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"));
Text.propTypes = _objectSpread({}, _styledSystem.color.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.lineHeight.propTypes);
Text.p = Text.withComponent('p', {
  target: "e1mey0i21"
});
Text.span = Text.withComponent('span', {
  target: "e1mey0i22"
});
var _default = Text;
exports.default = _default;