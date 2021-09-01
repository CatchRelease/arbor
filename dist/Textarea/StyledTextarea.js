"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const StyledInput_1 = __importDefault(require("../Input/StyledInput"));
const StyledTextarea = (props) => ((0, jsx_runtime_1.jsx)(StyledInput_1.default, Object.assign({ as: "textarea" }, props), void 0));
exports.default = StyledTextarea;
