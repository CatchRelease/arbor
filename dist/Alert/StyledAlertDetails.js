"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledAlertDetails = _Text["default"].withComponent('div', {
  target: "e13ujyyr0",
  label: "StyledAlertDetails"
});

StyledAlertDetails.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired
};
StyledAlertDetails.defaultProps = {
  color: 'monochrome.grey80',
  fontSize: 'size4',
  lineHeight: 'large'
};
var _default = StyledAlertDetails;
exports["default"] = _default;