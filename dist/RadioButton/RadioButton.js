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
var Icon_1 = __importDefault(require("../Icon"));
var Text_1 = __importDefault(require("../Text"));
var RadioButtonIcon_1 = __importDefault(require("./RadioButtonIcon"));
var RadioButtonInput_1 = __importDefault(require("./RadioButtonInput"));
var RadioButtonLabel_1 = __importDefault(require("./RadioButtonLabel"));
var StyledRadioButton_1 = __importDefault(require("./StyledRadioButton"));
var RadioButton = function (_a) {
    var id = _a.id, name = _a.name, label = _a.label, disabled = _a.disabled, isInvalid = _a.isInvalid, checked = _a.checked, onChange = _a.onChange, value = _a.value, icon = _a.icon, props = __rest(_a, ["id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "icon"]);
    return (jsx_runtime_1.jsxs(RadioButtonLabel_1["default"], __assign({ alignItems: "center", my: "regular" }, props, { children: [jsx_runtime_1.jsx(RadioButtonInput_1["default"], { id: id, type: "radio", name: name, value: value, checked: checked, onChange: onChange, disabled: disabled, "aria-invalid": isInvalid }, void 0), jsx_runtime_1.jsx(StyledRadioButton_1["default"], __assign({}, { disabled: disabled, checked: checked }, { children: jsx_runtime_1.jsx(RadioButtonIcon_1["default"], __assign({}, { checked: checked }), void 0) }), void 0), icon && (jsx_runtime_1.jsx(Icon_1["default"], { fontSize: "24px", name: icon, color: disabled ? 'icon.disabled' : 'icon.default', ml: "smaller" }, void 0)), jsx_runtime_1.jsx(Text_1["default"], __assign({ as: "span", fontSize: "size4", color: disabled ? 'text.disabled' : 'text.default', ml: icon ? 'smallest' : 'smaller' }, { children: label }), void 0)] }), void 0));
};
RadioButton.propTypes = {
    /**
     * The checked attribute of the checkbox.
     */
    checked: prop_types_1["default"].bool,
    /**
     * When true, the checkbox is disabled.
     */
    disabled: prop_types_1["default"].bool,
    /**
     * The icon to display alongside the label.
     */
    icon: prop_types_1["default"].elementType,
    /**
     * The id attribute of the checkbox.
     */
    id: prop_types_1["default"].string.isRequired,
    /**
     * When true, the aria-invalid attribute is true.
     * Used for accessibility.
     */
    isInvalid: prop_types_1["default"].bool,
    /**
     * Label of the checkbox.
     */
    label: prop_types_1["default"].node.isRequired,
    /**
     * The name attribute of the checkbox.
     */
    name: prop_types_1["default"].string.isRequired,
    /**
     * Function called when state changes.
     */
    onChange: prop_types_1["default"].func,
    /**
     * The value attribute of the checkbox.
     */
    value: prop_types_1["default"].string
};
RadioButton.defaultProps = {
    checked: false,
    disabled: false,
    icon: undefined,
    isInvalid: false,
    onChange: function () { },
    value: ''
};
exports["default"] = RadioButton;
