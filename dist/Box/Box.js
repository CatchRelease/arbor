"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _styledSystem = require("styled-system");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box = ( /*#__PURE__*/0, _base["default"])(_Text["default"].withComponent('div', {
  target: "eo7fp001",
  label: "Box"
}), {
  target: "eo7fp000",
  label: "Box"
})("box-sizing:border-box;", _styledSystem.borders, ";", _styledSystem.boxShadow, ";", _styledSystem.display, ";", _styledSystem.height, ";", _styledSystem.gridArea, ";", _styledSystem.maxHeight, ";", _styledSystem.minHeight, ";", _styledSystem.position, ";", _styledSystem.width, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Cb3gvQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWU2QyIsImZpbGUiOiIuLi8uLi9zcmMvQm94L0JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIGJvcmRlcnMsXG4gIGJveFNoYWRvdyxcbiAgZGlzcGxheSxcbiAgZ3JpZEFyZWEsXG4gIGhlaWdodCxcbiAgbWF4SGVpZ2h0LFxuICBtaW5IZWlnaHQsXG4gIHBvc2l0aW9uLFxuICB3aWR0aFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IEJveCA9IHN0eWxlZChUZXh0LndpdGhDb21wb25lbnQoJ2RpdicpKWBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJHtib3JkZXJzfTtcbiAgJHtib3hTaGFkb3d9O1xuICAke2Rpc3BsYXl9O1xuICAke2hlaWdodH07XG4gICR7Z3JpZEFyZWF9O1xuICAke21heEhlaWdodH07XG4gICR7bWluSGVpZ2h0fTtcbiAgJHtwb3NpdGlvbn07XG4gICR7d2lkdGh9O1xuYDtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXG4gIC4uLmJveFNoYWRvdy5wcm9wVHlwZXMsXG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi5ncmlkQXJlYS5wcm9wVHlwZXMsXG4gIC4uLmhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLm1heEhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLm1pbkhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgLi4ud2lkdGgucHJvcFR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iXX0= */"));
Box.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.borders.propTypes), _styledSystem.boxShadow.propTypes), _styledSystem.display.propTypes), _styledSystem.gridArea.propTypes), _styledSystem.height.propTypes), _styledSystem.maxHeight.propTypes), _styledSystem.minHeight.propTypes), _styledSystem.position.propTypes), _styledSystem.width.propTypes);
var _default = Box;
exports["default"] = _default;