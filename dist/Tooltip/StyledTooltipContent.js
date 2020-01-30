"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledTooltipContent = _Box["default"].withComponent('span', {
  target: "ehtq0ww0",
  label: "StyledTooltipContent"
});

StyledTooltipContent.defaultProps = {
  bg: 'monochrome.grey90',
  borderRadius: 'small',
  color: 'white',
  fontSize: 'size4',
  p: 'smaller'
};
var _default = StyledTooltipContent;
exports["default"] = _default;