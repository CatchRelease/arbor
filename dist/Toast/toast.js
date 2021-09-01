"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_toastify_1 = require("react-toastify");
const Alert_1 = require("../Alert");
const intents_1 = __importDefault(require("../Alert/intents"));
const buildToast = (intent) => (message, details, toastifyOptions = {}) => {
    const toastId = (0, react_toastify_1.toast)((0, jsx_runtime_1.jsx)(Alert_1.ToastAlert, { details: details, intent: intent, message: message, onClose: () => react_toastify_1.toast.dismiss(toastId) }, void 0), toastifyOptions);
};
const toast = intents_1.default.reduce((memo, intent) => (Object.assign(Object.assign({}, memo), { [intent]: buildToast(intent) })), {});
exports.default = toast;
