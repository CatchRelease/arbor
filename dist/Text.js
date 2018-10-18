"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _theme = require("./theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyles =
/*#__PURE__*/
(0, _reactEmotion.css)("font-family:", _theme.brandFont, ";line-height:", _theme.lineHeights.large, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1zQiIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgc3BhY2UsIHRleHRBbGlnbiB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgeyBicmFuZEZvbnQsIGNvbG9ycywgbGluZUhlaWdodHMsIHR5cG9ncmFwaHkgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgYmFzZVN0eWxlcyA9IGNzc2BcbiAgZm9udC1mYW1pbHk6ICR7YnJhbmRGb250fTtcbiAgbGluZS1oZWlnaHQ6ICR7bGluZUhlaWdodHMubGFyZ2V9O1xuYDtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IGNvbG9yLCB2YXJpYW50IH0pID0+IGNzc2BcbiAgY29sb3I6ICR7Y29sb3IgPyBjb2xvcnNbY29sb3JdIDogdHlwb2dyYXBoeS50ZXh0W3ZhcmlhbnRdLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gICR7dGV4dEFsaWdufTtcbiAgJHtzcGFjZX07XG4gICR7YmFzZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhjb2xvcnMpLmNvbmNhdCgnJykpLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWyd1aScsICdsb25nRm9ybScsICd0aW55J10pLmlzUmVxdWlyZWQsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlc1xufTtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAnJ1xufTtcblxuVGV4dC5zcGFuID0gVGV4dC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5UZXh0LnAgPSBUZXh0LndpdGhDb21wb25lbnQoJ3AnKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */label:baseStyles;");

var variantStyles = function variantStyles(_ref) {
  var color = _ref.color,
      variant = _ref.variant;
  return (
    /*#__PURE__*/
    (0, _reactEmotion.css)("color:", color ? _theme.colors[color] : _theme.typography.text[variant].color, ";font-size:", _theme.typography.text[variant].fontSize, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdpRCIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgc3BhY2UsIHRleHRBbGlnbiB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgeyBicmFuZEZvbnQsIGNvbG9ycywgbGluZUhlaWdodHMsIHR5cG9ncmFwaHkgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgYmFzZVN0eWxlcyA9IGNzc2BcbiAgZm9udC1mYW1pbHk6ICR7YnJhbmRGb250fTtcbiAgbGluZS1oZWlnaHQ6ICR7bGluZUhlaWdodHMubGFyZ2V9O1xuYDtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IGNvbG9yLCB2YXJpYW50IH0pID0+IGNzc2BcbiAgY29sb3I6ICR7Y29sb3IgPyBjb2xvcnNbY29sb3JdIDogdHlwb2dyYXBoeS50ZXh0W3ZhcmlhbnRdLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3R5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gICR7dGV4dEFsaWdufTtcbiAgJHtzcGFjZX07XG4gICR7YmFzZVN0eWxlc307XG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhjb2xvcnMpLmNvbmNhdCgnJykpLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWyd1aScsICdsb25nRm9ybScsICd0aW55J10pLmlzUmVxdWlyZWQsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlc1xufTtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAnJ1xufTtcblxuVGV4dC5zcGFuID0gVGV4dC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5UZXh0LnAgPSBUZXh0LndpdGhDb21wb25lbnQoJ3AnKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */label:variantStyles;")
  );
};

var Text =
/*#__PURE__*/
(0, _reactEmotion.default)("p", {
  label: "Text",
  target: "e1mey0i20"
})(_styledSystem.textAlign, ";", _styledSystem.space, ";", baseStyles, ";", variantStyles, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCcUIiLCJmaWxlIjoiLi4vc3JjL1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHNwYWNlLCB0ZXh0QWxpZ24gfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHsgYnJhbmRGb250LCBjb2xvcnMsIGxpbmVIZWlnaHRzLCB0eXBvZ3JhcGh5IH0gZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSBjc3NgXG4gIGZvbnQtZmFtaWx5OiAke2JyYW5kRm9udH07XG4gIGxpbmUtaGVpZ2h0OiAke2xpbmVIZWlnaHRzLmxhcmdlfTtcbmA7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyBjb2xvciwgdmFyaWFudCB9KSA9PiBjc3NgXG4gIGNvbG9yOiAke2NvbG9yID8gY29sb3JzW2NvbG9yXSA6IHR5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5jb2xvcn07XG4gIGZvbnQtc2l6ZTogJHt0eXBvZ3JhcGh5LnRleHRbdmFyaWFudF0uZm9udFNpemV9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke3RleHRBbGlnbn07XG4gICR7c3BhY2V9O1xuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29sb3JzKS5jb25jYXQoJycpKSxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsndWknLCAnbG9uZ0Zvcm0nLCAndGlueSddKS5pc1JlcXVpcmVkLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXNcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJydcbn07XG5cblRleHQuc3BhbiA9IFRleHQud2l0aENvbXBvbmVudCgnc3BhbicpO1xuVGV4dC5wID0gVGV4dC53aXRoQ29tcG9uZW50KCdwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */");
Text.propTypes = _objectSpread({
  color: _propTypes.default.oneOf(Object.keys(_theme.colors).concat('')),
  variant: _propTypes.default.oneOf(['ui', 'longForm', 'tiny']).isRequired
}, _styledSystem.textAlign.propTypes, _styledSystem.space.propTypes);
Text.defaultProps = {
  color: ''
};
Text.span = Text.withComponent('span', {
  target: "e1mey0i21"
});
Text.p = Text.withComponent('p', {
  target: "e1mey0i22"
});
var _default = Text;
exports.default = _default;