"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Flex_1 = __importDefault(require("../Flex"));
const Label_1 = __importDefault(require("../Label"));
const Paragraph_1 = __importDefault(require("../Paragraph"));
const StyledFormField_1 = __importDefault(require("./StyledFormField"));
const FormField = ({ caption = '', children, label = '', labelAside, id }) => ((0, jsx_runtime_1.jsxs)(StyledFormField_1.default, Object.assign({ caption: caption }, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.default, Object.assign({ alignItems: "center" }, { children: [label && ((0, jsx_runtime_1.jsx)(Flex_1.default, Object.assign({ flex: "1", alignItems: "center" }, { children: (0, jsx_runtime_1.jsx)(Label_1.default, Object.assign({ htmlFor: id }, { children: label }), void 0) }), void 0)), labelAside && ((0, jsx_runtime_1.jsx)(Flex_1.default, Object.assign({ color: "text.muted", fontSize: "size4" }, { children: labelAside }), void 0))] }), void 0), children, caption && ((0, jsx_runtime_1.jsx)(Paragraph_1.default, Object.assign({ as: "span", variant: "tiny", color: "palette.red.default" }, { children: caption }), void 0))] }), void 0));
exports.default = FormField;
