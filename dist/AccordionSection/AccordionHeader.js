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
const StyledAccordionHeader_1 = __importDefault(require("./StyledAccordionHeader"));
const StyledAccordionHeading_1 = __importDefault(require("./StyledAccordionHeading"));
const StyledAccordionHeadingText_1 = __importDefault(require("./StyledAccordionHeadingText"));
const Icon_1 = __importDefault(require("../Icon"));
const variants_1 = __importDefault(require("./variants"));
const AccordionHeaderIcon = (_a) => {
    var { isOpen } = _a, props = __rest(_a, ["isOpen"]);
    return (jsx_runtime_1.jsx(Icon_1.default, Object.assign({ mr: "small", name: "chevron", rotation: isOpen ? null : '270' }, props), void 0));
};
AccordionHeaderIcon.propTypes = {
    isOpen: prop_types_1.default.bool.isRequired
};
const AccordionHeader = (_a) => {
    var { isOpen, note, onClick, panelId, text, iconRight } = _a, props = __rest(_a, ["isOpen", "note", "onClick", "panelId", "text", "iconRight"]);
    return (jsx_runtime_1.jsxs(StyledAccordionHeader_1.default, Object.assign({ alignItems: "center", justifyContent: "space-between", px: "regular", onClick: onClick, "aria-controls": panelId, "aria-expanded": isOpen }, props, { children: [jsx_runtime_1.jsx(StyledAccordionHeading_1.default, Object.assign({ fontWeight: "medium", mr: "regular" }, { children: jsx_runtime_1.jsx(StyledAccordionHeadingText_1.default, Object.assign({ alignItems: "center", "aria-controls": panelId, "aria-expanded": isOpen }, { children: iconRight ? (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [text, jsx_runtime_1.jsx(AccordionHeaderIcon, { isOpen: isOpen, ml: "smallest" }, void 0)] }, void 0)) : (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(AccordionHeaderIcon, { isOpen: isOpen }, void 0), text] }, void 0)) }), void 0) }), void 0), note] }), void 0));
};
AccordionHeader.propTypes = {
    /**
     * Whether or not the AccordionSection this header resides in is open or not.
     */
    isOpen: prop_types_1.default.bool.isRequired,
    /**
     * Optional note to render within the AccordionHeader
     */
    note: prop_types_1.default.node,
    /**
     * Callback to call whenever the StyledAccordionHeadingButton is clicked
     */
    onClick: prop_types_1.default.func,
    /**
     * ID of the AccordionPanel that holds the content of the AccordionSection.
     * Used to specify aria-controls for accessbility.
     */
    panelId: prop_types_1.default.string.isRequired,
    /**
     * Header text for the section
     */
    text: prop_types_1.default.node.isRequired,
    /**
     * Link variant for styling. See storybook for examples.
     */
    variant: prop_types_1.default.oneOf(variants_1.default).isRequired,
    /**
     * Optional flag to position icon to right of header text
     */
    iconRight: prop_types_1.default.bool
};
AccordionHeader.defaultProps = {
    note: null,
    onClick: () => { },
    iconRight: false
};
exports.default = AccordionHeader;
