"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Input = require("../Input");

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["cx", "innerRef", "innerProps", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledFlex = ( /*#__PURE__*/0, _base["default"])(_Flex["default"], {
  target: "e1i4rshr0",
  label: "StyledFlex"
})(_Input.inputStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRvQ29tcGxldGUvU3R5bGVkQXV0b0NvbXBsZXRlQ29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNK0IiLCJmaWxlIjoiLi4vLi4vc3JjL0F1dG9Db21wbGV0ZS9TdHlsZWRBdXRvQ29tcGxldGVDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCc7XG5pbXBvcnQgeyBpbnB1dFN0eWxlcyB9IGZyb20gJy4uL0lucHV0JztcblxuY29uc3QgU3R5bGVkRmxleCA9IHN0eWxlZChGbGV4KWBcbiAgJHtpbnB1dFN0eWxlc307XG5gO1xuXG5jb25zdCBTdHlsZWRBdXRvQ29tcGxldGVDb250cm9sID0gKHtcbiAgY3gsXG4gIGlubmVyUmVmLFxuICBpbm5lclByb3BzLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPFN0eWxlZEZsZXggcmVmPXtpbm5lclJlZn0gey4uLnsgLi4uaW5uZXJQcm9wcywgLi4ucHJvcHMgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L1N0eWxlZEZsZXg+XG4pO1xuXG5TdHlsZWRBdXRvQ29tcGxldGVDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgY3g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSlcbiAgXSkuaXNSZXF1aXJlZCxcbiAgaW5uZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRBdXRvQ29tcGxldGVDb250cm9sO1xuIl19 */"));

var StyledAutoCompleteControl = function StyledAutoCompleteControl(_ref) {
  var cx = _ref.cx,
      innerRef = _ref.innerRef,
      innerProps = _ref.innerProps,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _jsxRuntime.jsx)(StyledFlex, _objectSpread(_objectSpread({
    ref: innerRef
  }, _objectSpread(_objectSpread({}, innerProps), props)), {}, {
    children: children
  }));
};

StyledAutoCompleteControl.propTypes = {
  cx: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  innerProps: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  innerRef: _propTypes["default"].func.isRequired
};
var _default = StyledAutoCompleteControl;
exports["default"] = _default;