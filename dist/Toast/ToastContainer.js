"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.minimal.css");
const toastCSS_1 = __importDefault(require("./toastCSS"));
const transition = (0, react_toastify_1.cssTransition)({
    enter: 'toastSlideIn',
    exit: 'toastSlideOut'
});
const ToastContainer = (props) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.Global, { styles: toastCSS_1.default }, void 0), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, Object.assign({ className: "arbor-toast-container", closeButton: false, hideProgressBar: true, toastClassName: "arbor-toast", transition: transition }, props), void 0)] }, void 0));
exports.default = ToastContainer;
