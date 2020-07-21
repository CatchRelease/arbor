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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledFlex = ( /*#__PURE__*/0, _styledBase["default"])(_Flex["default"], {
  target: "e1i4rshr0",
  label: "StyledFlex"
})(_Input.inputStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRvQ29tcGxldGUvU3R5bGVkQXV0b0NvbXBsZXRlQ29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPK0IiLCJmaWxlIjoiLi4vLi4vc3JjL0F1dG9Db21wbGV0ZS9TdHlsZWRBdXRvQ29tcGxldGVDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IHsgaW5wdXRTdHlsZXMgfSBmcm9tICcuLi9JbnB1dCc7XG5cbmNvbnN0IFN0eWxlZEZsZXggPSBzdHlsZWQoRmxleClgXG4gICR7aW5wdXRTdHlsZXN9O1xuYDtcblxuY29uc3QgU3R5bGVkQXV0b0NvbXBsZXRlQ29udHJvbCA9ICh7XG4gIGN4LFxuICBpbm5lclJlZixcbiAgaW5uZXJQcm9wcyxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxTdHlsZWRGbGV4IHJlZj17aW5uZXJSZWZ9IHsuLi57IC4uLmlubmVyUHJvcHMsIC4uLnByb3BzIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9TdHlsZWRGbGV4PlxuKTtcblxuU3R5bGVkQXV0b0NvbXBsZXRlQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIGN4OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIF0pLmlzUmVxdWlyZWQsXG4gIGlubmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQXV0b0NvbXBsZXRlQ29udHJvbDtcbiJdfQ== */"));

var StyledAutoCompleteControl = function StyledAutoCompleteControl(_ref) {
  var cx = _ref.cx,
      innerRef = _ref.innerRef,
      innerProps = _ref.innerProps,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["cx", "innerRef", "innerProps", "children"]);

  return /*#__PURE__*/_react["default"].createElement(StyledFlex, _extends({
    ref: innerRef
  }, _objectSpread(_objectSpread({}, innerProps), props)), children);
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