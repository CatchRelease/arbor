"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _styledSystem = require("styled-system");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _reactEmotion.css)("font-family:", theme.brandFont, ";line-height:", theme.lineHeights.large, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdxQyIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBjb2xvciwgZm9udFNpemUsIHNwYWNlLCB0ZXh0QWxpZ24gfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWUuYnJhbmRGb250fTtcbiAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2NvbG9yfTtcbiAgJHtmb250U2l6ZX07XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7YmFzZVN0eWxlc307XG5gO1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dEFsaWduLnByb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */label:baseStyles;")
  );
};

var Text =
/*#__PURE__*/
(0, _reactEmotion.default)("p", {
  label: "Text",
  target: "e1mey0i20"
})(_styledSystem.color, ";", _styledSystem.fontSize, ";", _styledSystem.space, ";", _styledSystem.textAlign, ";", baseStyles, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFxQiIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBjb2xvciwgZm9udFNpemUsIHNwYWNlLCB0ZXh0QWxpZ24gfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuY29uc3QgYmFzZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IGNzc2BcbiAgZm9udC1mYW1pbHk6ICR7dGhlbWUuYnJhbmRGb250fTtcbiAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMubGFyZ2V9O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke2NvbG9yfTtcbiAgJHtmb250U2l6ZX07XG4gICR7c3BhY2V9O1xuICAke3RleHRBbGlnbn07XG4gICR7YmFzZVN0eWxlc307XG5gO1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4udGV4dEFsaWduLnByb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */");
Text.propTypes = _objectSpread({}, _styledSystem.color.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes);
var _default = Text;
exports.default = _default;