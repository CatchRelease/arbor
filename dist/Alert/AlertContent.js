"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const StyledAlertContent_1 = __importDefault(require("./StyledAlertContent"));
const StyledAlertAction_1 = __importDefault(require("./StyledAlertAction"));
const StyledAlertDetails_1 = __importDefault(require("./StyledAlertDetails"));
const StyledAlertIntent_1 = __importDefault(require("./StyledAlertIntent"));
const StyledAlertMessage_1 = __importDefault(require("./StyledAlertMessage"));
const gridPlaceholder = (0, jsx_runtime_1.jsx)("span", { "aria-hidden": true }, void 0);
const AlertContent = (_a) => {
    var { details, intent, message, oneLine = false, onClose } = _a, props = __rest(_a, ["details", "intent", "message", "oneLine", "onClose"]);
    return ((0, jsx_runtime_1.jsxs)(StyledAlertContent_1.default, Object.assign({ details: details, intent: intent, onClose: onClose }, props, { children: [intent && (0, jsx_runtime_1.jsx)(StyledAlertIntent_1.default, { intent: intent }, void 0), (0, jsx_runtime_1.jsxs)(StyledAlertMessage_1.default, { children: [message, oneLine && details && ((0, jsx_runtime_1.jsxs)(StyledAlertDetails_1.default, Object.assign({ as: "span" }, { children: ["\u00A0", details] }), void 0))] }, void 0), onClose && (0, jsx_runtime_1.jsx)(StyledAlertAction_1.default, { onClose: onClose }, void 0), !oneLine && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [details && intent && gridPlaceholder, details && (0, jsx_runtime_1.jsx)(StyledAlertDetails_1.default, { children: details }, void 0), details && onClose && gridPlaceholder] }, void 0))] }), void 0));
};
exports.default = AlertContent;
