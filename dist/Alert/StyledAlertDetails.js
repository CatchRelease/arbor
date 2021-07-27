"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prop_types_1 = __importDefault(require("prop-types"));
var Text_1 = __importDefault(require("../Text"));
var StyledAlertDetails = Text_1["default"].withComponent('div');
StyledAlertDetails.propTypes = {
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]).isRequired
};
StyledAlertDetails.defaultProps = {
    color: 'monochrome.grey80',
    fontSize: 'size4',
    lineHeight: 'large'
};
exports["default"] = StyledAlertDetails;
