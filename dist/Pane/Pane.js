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
const Grid_1 = __importDefault(require("../Grid"));
const Pane = (_a) => {
    var { bg = 'background.white', boxShadow = 'elevation0', innerRef, overflow = 'hidden', width = '100%' } = _a, props = __rest(_a, ["bg", "boxShadow", "innerRef", "overflow", "width"]);
    return (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ ref: innerRef }, Object.assign({ bg, boxShadow, overflow, width }, props)), void 0);
};
exports.default = Pane;
