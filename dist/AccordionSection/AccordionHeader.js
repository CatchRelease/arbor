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
var StyledAccordionHeader_1 = __importDefault(require("./StyledAccordionHeader"));
var StyledAccordionHeading_1 = __importDefault(require("./StyledAccordionHeading"));
var StyledAccordionHeadingText_1 = __importDefault(require("./StyledAccordionHeadingText"));
var Icon_1 = __importDefault(require("../Icon"));
var variants_1 = __importDefault(require("./variants"));
var AccordionHeaderIcon = function (_a) {
    var isOpen = _a.isOpen, props = __rest(_a, ["isOpen"]);
    return (jsx_runtime_1.jsx(Icon_1["default"], __assign({ mr: "small", name: "chevron", rotation: isOpen ? null : '270' }, props), void 0));
};
AccordionHeaderIcon.propTypes = {
    isOpen: prop_types_1["default"].bool.isRequired
};
var AccordionHeader = function (_a) {
    var isOpen = _a.isOpen, note = _a.note, onClick = _a.onClick, panelId = _a.panelId, text = _a.text, iconRight = _a.iconRight, props = __rest(_a, ["isOpen", "note", "onClick", "panelId", "text", "iconRight"]);
    return (jsx_runtime_1.jsxs(StyledAccordionHeader_1["default"], __assign({ alignItems: "center", justifyContent: "space-between", px: "regular", onClick: onClick, "aria-controls": panelId, "aria-expanded": isOpen }, props, { children: [jsx_runtime_1.jsx(StyledAccordionHeading_1["default"], __assign({ fontWeight: "medium", mr: "regular" }, { children: jsx_runtime_1.jsx(StyledAccordionHeadingText_1["default"], __assign({ alignItems: "center", "aria-controls": panelId, "aria-expanded": isOpen }, { children: iconRight ? (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [text, jsx_runtime_1.jsx(AccordionHeaderIcon, { isOpen: isOpen, ml: "smallest" }, void 0)] }, void 0)) : (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(AccordionHeaderIcon, { isOpen: isOpen }, void 0), text] }, void 0)) }), void 0) }), void 0), note] }), void 0));
};
AccordionHeader.propTypes = {
    /**
     * Whether or not the AccordionSection this header resides in is open or not.
     */
    isOpen: prop_types_1["default"].bool.isRequired,
    /**
     * Optional note to render within the AccordionHeader
     */
    note: prop_types_1["default"].node,
    /**
     * Callback to call whenever the StyledAccordionHeadingButton is clicked
     */
    onClick: prop_types_1["default"].func,
    /**
     * ID of the AccordionPanel that holds the content of the AccordionSection.
     * Used to specify aria-controls for accessbility.
     */
    panelId: prop_types_1["default"].string.isRequired,
    /**
     * Header text for the section
     */
    text: prop_types_1["default"].node.isRequired,
    /**
     * Link variant for styling. See storybook for examples.
     */
    variant: prop_types_1["default"].oneOf(variants_1["default"]).isRequired,
    /**
     * Optional flag to position icon to right of header text
     */
    iconRight: prop_types_1["default"].bool
};
AccordionHeader.defaultProps = {
    note: null,
    onClick: function () { },
    iconRight: false
};
exports["default"] = AccordionHeader;
