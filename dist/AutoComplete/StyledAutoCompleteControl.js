"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _Input = require("../Input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledFlex = (
/*#__PURE__*/
0, _styledBase["default"])(_Flex["default"], {
  target: "e1i4rshr0",
  label: "StyledFlex"
})(_Input.inputStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRvQ29tcGxldGUvU3R5bGVkQXV0b0NvbXBsZXRlQ29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPK0IiLCJmaWxlIjoiLi4vLi4vc3JjL0F1dG9Db21wbGV0ZS9TdHlsZWRBdXRvQ29tcGxldGVDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IHsgaW5wdXRTdHlsZXMgfSBmcm9tICcuLi9JbnB1dCc7XG5cbmNvbnN0IFN0eWxlZEZsZXggPSBzdHlsZWQoRmxleClgXG4gICR7aW5wdXRTdHlsZXN9O1xuYDtcblxuY29uc3QgU3R5bGVkQXV0b0NvbXBsZXRlQ29udHJvbCA9ICh7XG4gIGlubmVyUmVmLFxuICBpbm5lclByb3BzLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPFN0eWxlZEZsZXggcmVmPXtpbm5lclJlZn0gey4uLnsgLi4uaW5uZXJQcm9wcywgLi4ucHJvcHMgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L1N0eWxlZEZsZXg+XG4pO1xuXG5TdHlsZWRBdXRvQ29tcGxldGVDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKVxuICBdKS5pc1JlcXVpcmVkLFxuICBpbm5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEF1dG9Db21wbGV0ZUNvbnRyb2w7XG4iXX0= */"));

var StyledAutoCompleteControl = function StyledAutoCompleteControl(_ref) {
  var innerRef = _ref.innerRef,
      innerProps = _ref.innerProps,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["innerRef", "innerProps", "children"]);

  return _react["default"].createElement(StyledFlex, _extends({
    ref: innerRef
  }, _objectSpread({}, innerProps, {}, props)), children);
};

StyledAutoCompleteControl.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  innerProps: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  innerRef: _propTypes["default"].func.isRequired
};
var _default = StyledAutoCompleteControl;
exports["default"] = _default;