"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledAlertMessage = _Text["default"].withComponent('div', {
  target: "e1isduwu0",
  label: "StyledAlertMessage"
});

StyledAlertMessage.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired
};
StyledAlertMessage.defaultProps = {
  color: 'monochrome.grey100',
  fontSize: 'size4',
  fontWeight: 'medium'
};
var _default = StyledAlertMessage;
exports["default"] = _default;