"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const AlertContent_1 = __importDefault(require("./AlertContent"));
const InlineAlert = (props) => jsx_runtime_1.jsx(AlertContent_1.default, Object.assign({ oneLine: true, p: "0" }, props), void 0);
exports.default = InlineAlert;
