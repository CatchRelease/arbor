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
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var prop_types_1 = __importDefault(require("prop-types"));
var FormField_1 = __importDefault(require("../FormField"));
var StyledAutoComplete_1 = __importDefault(require("./StyledAutoComplete"));
var AutoComplete = function (_a) {
    var caption = _a.caption, id = _a.id, label = _a.label, labelAside = _a.labelAside, props = __rest(_a, ["caption", "id", "label", "labelAside"]);
    return (jsx_runtime_1.jsx(FormField_1["default"], __assign({ caption: caption, id: id, label: label, labelAside: labelAside }, { children: jsx_runtime_1.jsx(StyledAutoComplete_1["default"], __assign({ "aria-label": label }, props), void 0) }), void 0));
};
AutoComplete.propTypes = {
    /**
     * Optional text to be displayed underneath the input.
     */
    caption: prop_types_1["default"].string,
    /**
     * Boolean to hide the dropdown indicator in the input field.
     */
    hideDropdownIndicator: prop_types_1["default"].bool,
    /**
     * HTML ID for the input to be used in conjunction with the label for
     * accessiblity.
     */
    id: prop_types_1["default"].string.isRequired,
    /**
     * Label text for the form field
     */
    label: prop_types_1["default"].string.isRequired,
    /**
     * Component that goes to the right of the label. Does not have to only be text.
     */
    labelAside: prop_types_1["default"].node
    /**
     * All react-select props can be passed through to customize ReactSelect Components
     */
};
AutoComplete.defaultProps = {
    caption: '',
    hideDropdownIndicator: false,
    labelAside: null
};
exports["default"] = AutoComplete;
