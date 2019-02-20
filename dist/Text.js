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
    (0, _core.css)("font-family:", theme.brandFont, ";label:baseStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdxQyIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZSxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ3RleHQuZGVmYXVsdCdcbn07XG5cblRleHQucCA9IFRleHQud2l0aENvbXBvbmVudCgncCcpO1xuVGV4dC5zcGFuID0gVGV4dC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */"))
  );
};

var Text = (0, _styledBase.default)("p", {
  target: "e1mey0i20",
  label: "Text"
})(baseStyles, ";", _styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.fontWeight, ";", _styledSystem.lineHeight, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVxQiIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHtcbiAgY29sb3IsXG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZSxcbiAgdGV4dEFsaWduXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBmb250LWZhbWlseTogJHt0aGVtZS5icmFuZEZvbnR9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2Jhc2VTdHlsZXN9O1xuXG4gICR7Y29sb3J9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbmA7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ3RleHQuZGVmYXVsdCdcbn07XG5cblRleHQucCA9IFRleHQud2l0aENvbXBvbmVudCgncCcpO1xuVGV4dC5zcGFuID0gVGV4dC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */"));
Text.propTypes = _objectSpread({}, _styledSystem.color.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.fontWeight.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes);
Text.defaultProps = {
  color: 'text.default'
};
Text.p = Text.withComponent('p', {
  target: "e1mey0i21"
});
Text.span = Text.withComponent('span', {
  target: "e1mey0i22"
});
var _default = Text;
exports.default = _default;