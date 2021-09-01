"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Box_1 = __importDefault(require("../Box"));
const Icon_1 = __importDefault(require("../Icon"));
const getIconName = (intent) => {
    switch (intent) {
        case 'danger':
            return 'error';
        case 'info':
            return 'info-sign';
        case 'success':
            return 'tick-circle';
        case 'warning':
            return 'warning-sign';
        default:
            return '';
    }
};
const StyledAlertIntent = ({ intent }) => ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ "aria-label": intent }, { children: (0, jsx_runtime_1.jsx)(Icon_1.default, { color: `intent.${intent}.default`, fontSize: "size4", name: getIconName(intent) }, void 0) }), void 0));
exports.default = StyledAlertIntent;
