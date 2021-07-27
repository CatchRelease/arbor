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
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var StyledAlertContent_1 = __importDefault(require("./StyledAlertContent"));
var StyledAlertAction_1 = __importDefault(require("./StyledAlertAction"));
var StyledAlertDetails_1 = __importDefault(require("./StyledAlertDetails"));
var StyledAlertIntent_1 = __importDefault(require("./StyledAlertIntent"));
var StyledAlertMessage_1 = __importDefault(require("./StyledAlertMessage"));
var intents_1 = __importDefault(require("./intents"));
var gridPlaceholder = jsx_runtime_1.jsx("span", { "aria-hidden": true }, void 0);
var AlertContent = function (_a) {
    var details = _a.details, intent = _a.intent, message = _a.message, oneLine = _a.oneLine, onClose = _a.onClose, props = __rest(_a, ["details", "intent", "message", "oneLine", "onClose"]);
    return (jsx_runtime_1.jsxs(StyledAlertContent_1["default"], __assign({ details: details, intent: intent, onClose: onClose }, props, { children: [intent && jsx_runtime_1.jsx(StyledAlertIntent_1["default"], { intent: intent }, void 0), jsx_runtime_1.jsxs(StyledAlertMessage_1["default"], { children: [message, oneLine && details && (jsx_runtime_1.jsxs(StyledAlertDetails_1["default"], __assign({ as: "span" }, { children: ["\u00A0", details] }), void 0))] }, void 0), onClose && jsx_runtime_1.jsx(StyledAlertAction_1["default"], { onClose: onClose }, void 0), !oneLine && (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [details && intent && gridPlaceholder, details && jsx_runtime_1.jsx(StyledAlertDetails_1["default"], { children: details }, void 0), details && onClose && gridPlaceholder] }, void 0))] }), void 0));
};
AlertContent.propTypes = {
    /**
     * More details about the alert.
     * */
    details: prop_types_1["default"].oneOfType([
        prop_types_1["default"].arrayOf(prop_types_1["default"].node),
        prop_types_1["default"].node
    ]),
    /**
     * Specify an intent to visualize meaning.
     * */
    intent: prop_types_1["default"].oneOf(intents_1["default"]),
    /**
     * Main message of the alert.
     * */
    message: prop_types_1["default"].oneOfType([
        prop_types_1["default"].arrayOf(prop_types_1["default"].node),
        prop_types_1["default"].node
    ]).isRequired,
    /**
     * Callback for the alert close button.
     * */
    onClose: prop_types_1["default"].func,
    /**
     * Should the messages and details appear on one line
     */
    oneLine: prop_types_1["default"].bool
};
AlertContent.defaultProps = {
    details: undefined,
    intent: undefined,
    onClose: undefined,
    oneLine: false
};
exports["default"] = AlertContent;
