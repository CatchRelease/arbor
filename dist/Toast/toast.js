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
var react_toastify_1 = require("react-toastify");
var Alert_1 = require("../Alert");
var intents_1 = __importDefault(require("../Alert/intents"));
var buildToast = function (intent) {
    return function (message, details, toastifyOptions) {
        if (toastifyOptions === void 0) { toastifyOptions = {}; }
        var toastId = react_toastify_1.toast(jsx_runtime_1.jsx(Alert_1.ToastAlert, { details: details, intent: intent, message: message, onClose: function () { return react_toastify_1.toast.dismiss(toastId); } }, void 0), toastifyOptions);
    };
};
var toast = intents_1["default"].reduce(function (memo, intent) {
    var _a;
    return (__assign(__assign({}, memo), (_a = {}, _a[intent] = buildToast(intent), _a)));
}, {});
exports["default"] = toast;
