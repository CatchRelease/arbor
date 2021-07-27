"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.minimal.css");
var toastCSS_1 = __importDefault(require("./toastCSS"));
var transition = react_toastify_1.cssTransition({
    enter: 'toastSlideIn',
    exit: 'toastSlideOut'
});
var ToastContainer = function (props) { return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_1.Global, { styles: toastCSS_1["default"] }, void 0), jsx_runtime_1.jsx(react_toastify_1.ToastContainer, __assign({ className: "arbor-toast-container", closeButton: false, hideProgressBar: true, toastClassName: "arbor-toast", transition: transition }, props), void 0)] }, void 0)); };
exports["default"] = ToastContainer;
