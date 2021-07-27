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
var IntentAlert_1 = __importDefault(require("./IntentAlert"));
var Pane_1 = __importDefault(require("../Pane"));
var intents_1 = __importDefault(require("./intents"));
var PaneAlert = function (_a) {
    var boxShadow = _a.boxShadow, intent = _a.intent, props = __rest(_a, ["boxShadow", "intent"]);
    return (jsx_runtime_1.jsx(IntentAlert_1["default"], __assign({ Component: Pane_1["default"], boxShadow: boxShadow, intent: intent }, { children: jsx_runtime_1.jsx(AlertContent_1["default"], __assign({}, __assign({ intent: intent }, props)), void 0) }), void 0));
};
PaneAlert.propTypes = {
    boxShadow: prop_types_1["default"].string,
    intent: prop_types_1["default"].oneOf(intents_1["default"])
};
PaneAlert.defaultProps = {
    boxShadow: 'elevation0',
    intent: undefined
};
exports["default"] = PaneAlert;
