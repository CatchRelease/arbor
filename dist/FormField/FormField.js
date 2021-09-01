"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Flex_1 = __importDefault(require("../Flex"));
const Label_1 = __importDefault(require("../Label"));
const Paragraph_1 = __importDefault(require("../Paragraph"));
const StyledFormField_1 = __importDefault(require("./StyledFormField"));
const FormField = ({ caption, children, label, labelAside, id }) => ((0, jsx_runtime_1.jsxs)(StyledFormField_1.default, Object.assign({ caption: caption }, { children: [(0, jsx_runtime_1.jsxs)(Flex_1.default, Object.assign({ alignItems: "center" }, { children: [label && ((0, jsx_runtime_1.jsx)(Flex_1.default, Object.assign({ flex: "1", alignItems: "center" }, { children: (0, jsx_runtime_1.jsx)(Label_1.default, Object.assign({ htmlFor: id }, { children: label }), void 0) }), void 0)), labelAside && ((0, jsx_runtime_1.jsx)(Flex_1.default, Object.assign({ color: "text.muted", fontSize: "size4" }, { children: labelAside }), void 0))] }), void 0), children, caption && ((0, jsx_runtime_1.jsx)(Paragraph_1.default, Object.assign({ as: "span", variant: "tiny", color: "palette.red.default" }, { children: caption }), void 0))] }), void 0));
FormField.propTypes = {
    /**
     * Optional text to be displayed underneath the input.
     */
    caption: prop_types_1.default.string,
    /** Field to be rendered within the FormField component
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * HTML ID for the input to be used in conjunction with the label for
     * accessibility.
     */
    id: prop_types_1.default.string.isRequired,
    /**
     * Label text for the form field
     */
    label: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
    /**
     * Component that goes to the right of the label. Does not have to only be text.
     */
    labelAside: prop_types_1.default.node
};
FormField.defaultProps = {
    caption: '',
    label: '',
    labelAside: null
};
exports.default = FormField;
