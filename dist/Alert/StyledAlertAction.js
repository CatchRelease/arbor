"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Box_1 = __importDefault(require("../Box"));
const Button_1 = __importDefault(require("../Button"));
const Icon_1 = __importDefault(require("../Icon"));
const StyledAlertAction = ({ onClose }) => (jsx_runtime_1.jsx(Box_1.default, { children: jsx_runtime_1.jsx(Button_1.default, { "aria-label": "close", iconStart: jsx_runtime_1.jsx(Icon_1.default, { fontSize: "larger", name: "cross" }, void 0), onClick: onClose, size: "small", variant: "minimal" }, void 0) }, void 0));
StyledAlertAction.propTypes = {
    onClose: prop_types_1.default.func.isRequired
};
exports.default = StyledAlertAction;
