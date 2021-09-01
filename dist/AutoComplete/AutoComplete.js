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
const prop_types_1 = __importDefault(require("prop-types"));
const FormField_1 = __importDefault(require("../FormField"));
const StyledAutoComplete_1 = __importDefault(require("./StyledAutoComplete"));
const AutoComplete = (_a) => {
    var { caption, id, label, labelAside } = _a, props = __rest(_a, ["caption", "id", "label", "labelAside"]);
    return ((0, jsx_runtime_1.jsx)(FormField_1.default, Object.assign({ caption: caption, id: id, label: label, labelAside: labelAside }, { children: (0, jsx_runtime_1.jsx)(StyledAutoComplete_1.default, Object.assign({ "aria-label": label }, props), void 0) }), void 0));
};
AutoComplete.propTypes = {
    /**
     * Optional text to be displayed underneath the input.
     */
    caption: prop_types_1.default.string,
    /**
     * Boolean to hide the dropdown indicator in the input field.
     */
    hideDropdownIndicator: prop_types_1.default.bool,
    /**
     * HTML ID for the input to be used in conjunction with the label for
     * accessiblity.
     */
    id: prop_types_1.default.string.isRequired,
    /**
     * Label text for the form field
     */
    label: prop_types_1.default.string.isRequired,
    /**
     * Component that goes to the right of the label. Does not have to only be text.
     */
    labelAside: prop_types_1.default.node
    /**
     * All react-select props can be passed through to customize ReactSelect Components
     */
};
AutoComplete.defaultProps = {
    caption: '',
    hideDropdownIndicator: false,
    labelAside: null
};
exports.default = AutoComplete;
