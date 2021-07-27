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
var Flex_1 = __importDefault(require("../Flex"));
var Label_1 = __importDefault(require("../Label"));
var Paragraph_1 = __importDefault(require("../Paragraph"));
var StyledFormField_1 = __importDefault(require("./StyledFormField"));
var FormField = function (_a) {
    var caption = _a.caption, children = _a.children, label = _a.label, labelAside = _a.labelAside, id = _a.id;
    return (jsx_runtime_1.jsxs(StyledFormField_1["default"], __assign({ caption: caption }, { children: [jsx_runtime_1.jsxs(Flex_1["default"], __assign({ alignItems: "center" }, { children: [label && (jsx_runtime_1.jsx(Flex_1["default"], __assign({ flex: "1", alignItems: "center" }, { children: jsx_runtime_1.jsx(Label_1["default"], __assign({ htmlFor: id }, { children: label }), void 0) }), void 0)), labelAside && (jsx_runtime_1.jsx(Flex_1["default"], __assign({ color: "text.muted", fontSize: "size4" }, { children: labelAside }), void 0))] }), void 0), children, caption && (jsx_runtime_1.jsx(Paragraph_1["default"], __assign({ as: "span", variant: "tiny", color: "palette.red.default" }, { children: caption }), void 0))] }), void 0));
};
FormField.propTypes = {
    /**
     * Optional text to be displayed underneath the input.
     */
    caption: prop_types_1["default"].string,
    /** Field to be rendered within the FormField component
     */
    children: prop_types_1["default"].node.isRequired,
    /**
     * HTML ID for the input to be used in conjunction with the label for
     * accessibility.
     */
    id: prop_types_1["default"].string.isRequired,
    /**
     * Label text for the form field
     */
    label: prop_types_1["default"].oneOfType([prop_types_1["default"].node, prop_types_1["default"].string]),
    /**
     * Component that goes to the right of the label. Does not have to only be text.
     */
    labelAside: prop_types_1["default"].node
};
FormField.defaultProps = {
    caption: '',
    label: '',
    labelAside: null
};
exports["default"] = FormField;
