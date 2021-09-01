"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const CardAlert_1 = __importDefault(require("./CardAlert"));
const ToastAlert = (props) => (0, jsx_runtime_1.jsx)(CardAlert_1.default, Object.assign({}, props), void 0);
ToastAlert.defaultProps = {
    boxShadow: 'elevation3'
};
exports.default = ToastAlert;
