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
exports.Modal = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_modal_1 = __importDefault(require("react-modal"));
const react_1 = require("@emotion/react");
const buildModalCss_1 = __importDefault(require("./buildModalCss"));
const Modal = (_a) => {
    var { children, modalCss, overlayCss, theme } = _a, props = __rest(_a, ["children", "modalCss", "overlayCss", "theme"]);
    const combinedModalCss = buildModalCss_1.default({ theme, modalCss, overlayCss });
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_1.Global, { styles: combinedModalCss }, void 0), jsx_runtime_1.jsx(react_modal_1.default, Object.assign({ overlayClassName: "ArborModalOverlay", className: "ArborModal" }, props, { children: children }), void 0)] }, void 0));
};
exports.Modal = Modal;
exports.default = react_1.withTheme(exports.Modal);
