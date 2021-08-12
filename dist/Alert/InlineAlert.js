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
const AlertContent_1 = __importDefault(require("./AlertContent"));
const InlineAlert = (_a) => {
    var { oneLine = true } = _a, props = __rest(_a, ["oneLine"]);
    return (jsx_runtime_1.jsx(AlertContent_1.default, Object.assign({ p: "0" }, Object.assign({ oneLine }, props)), void 0));
};
exports.default = InlineAlert;
