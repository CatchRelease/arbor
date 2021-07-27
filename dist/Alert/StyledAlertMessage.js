"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prop_types_1 = __importDefault(require("prop-types"));
var Text_1 = __importDefault(require("../Text"));
var StyledAlertMessage = Text_1["default"].withComponent('div');
StyledAlertMessage.propTypes = {
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]).isRequired
};
StyledAlertMessage.defaultProps = {
    color: 'monochrome.grey100',
    fontSize: 'size4',
    fontWeight: 'medium'
};
exports["default"] = StyledAlertMessage;
