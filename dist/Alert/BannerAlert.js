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
var AlertContent_1 = __importDefault(require("./AlertContent"));
var Box_1 = __importDefault(require("../Box"));
var IntentAlert_1 = __importDefault(require("./IntentAlert"));
var intents_1 = __importDefault(require("./intents"));
var conditionalProps = function (intent) {
    var props = intent
        ? {
            bg: "intent." + intent + ".lighter"
        }
        : {};
    return props;
};
var BannerAlert = function (_a) {
    var intent = _a.intent, props = __rest(_a, ["intent"]);
    return (jsx_runtime_1.jsx(IntentAlert_1["default"], __assign({ Component: Box_1["default"], intent: intent, textAlign: "center" }, conditionalProps(intent), { children: jsx_runtime_1.jsx(AlertContent_1["default"], __assign({ oneLine: true }, __assign({ intent: intent }, props)), void 0) }), void 0));
};
BannerAlert.propTypes = {
    intent: prop_types_1["default"].oneOf(intents_1["default"])
};
BannerAlert.defaultProps = {
    intent: undefined
};
exports["default"] = BannerAlert;
