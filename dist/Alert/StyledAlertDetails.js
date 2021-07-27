"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const Text_1 = __importDefault(require("../Text"));
const StyledAlertDetails = Text_1.default.withComponent('div');
StyledAlertDetails.propTypes = {
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.node,
        prop_types_1.default.arrayOf(prop_types_1.default.node)
    ]).isRequired
};
StyledAlertDetails.defaultProps = {
    color: 'monochrome.grey80',
    fontSize: 'size4',
    lineHeight: 'large'
};
exports.default = StyledAlertDetails;
