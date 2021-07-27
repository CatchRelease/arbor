"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const Text_1 = __importDefault(require("../Text"));
const StyledAlertMessage = Text_1.default.withComponent('div');
StyledAlertMessage.propTypes = {
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.node,
        prop_types_1.default.arrayOf(prop_types_1.default.node)
    ]).isRequired
};
StyledAlertMessage.defaultProps = {
    color: 'monochrome.grey100',
    fontSize: 'size4',
    fontWeight: 'medium'
};
exports.default = StyledAlertMessage;
