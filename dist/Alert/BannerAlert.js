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
const Box_1 = __importDefault(require("../Box"));
const borderStyles_1 = __importDefault(require("./borderStyles"));
const conditionalProps = (intent) => {
    const props = intent
        ? {
            bg: `intent.${intent}.lighter`
        }
        : {};
    return props;
};
const BannerAlert = (_a) => {
    var { intent, oneLine = true } = _a, props = __rest(_a, ["intent", "oneLine"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ textAlign: "center" }, (0, borderStyles_1.default)(intent), conditionalProps(intent), { children: (0, jsx_runtime_1.jsx)(AlertContent_1.default, Object.assign({}, Object.assign({ intent, oneLine }, props)), void 0) }), void 0));
};
exports.default = BannerAlert;
