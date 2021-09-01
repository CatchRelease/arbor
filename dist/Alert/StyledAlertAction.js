"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Box_1 = __importDefault(require("../Box"));
const Button_1 = __importDefault(require("../Button"));
const Icon_1 = __importDefault(require("../Icon"));
const StyledAlertAction = ({ onClose }) => ((0, jsx_runtime_1.jsx)(Box_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { "aria-label": "close", iconStart: (0, jsx_runtime_1.jsx)(Icon_1.default, { fontSize: "larger", name: "cross" }, void 0), onClick: onClose, size: "small", variant: "minimal" }, void 0) }, void 0));
exports.default = StyledAlertAction;
