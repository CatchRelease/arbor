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
var prop_types_1 = __importDefault(require("prop-types"));
var Box_1 = __importDefault(require("../Box"));
var Icon_1 = __importDefault(require("../Icon"));
var intents_1 = __importDefault(require("./intents"));
var getIconName = function (intent) {
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
var StyledAlertIntent = function (_a) {
    var intent = _a.intent;
    return (jsx_runtime_1.jsx(Box_1["default"], __assign({ "aria-label": intent }, { children: jsx_runtime_1.jsx(Icon_1["default"], { color: "intent." + intent + ".default", fontSize: "size4", name: getIconName(intent) }, void 0) }), void 0));
};
StyledAlertIntent.propTypes = {
    intent: prop_types_1["default"].oneOf(intents_1["default"]).isRequired
};
exports["default"] = StyledAlertIntent;
