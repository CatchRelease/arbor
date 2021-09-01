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
const StyledAccordionHeader_1 = __importDefault(require("./StyledAccordionHeader"));
const StyledAccordionHeading_1 = __importDefault(require("./StyledAccordionHeading"));
const StyledAccordionHeadingText_1 = __importDefault(require("./StyledAccordionHeadingText"));
const AccordionHeaderIcon_1 = __importDefault(require("./AccordionHeaderIcon"));
const AccordionHeader = (_a) => {
    var { isOpen, note, onClick = () => { }, panelId, text, iconRight = false } = _a, props = __rest(_a, ["isOpen", "note", "onClick", "panelId", "text", "iconRight"]);
    return ((0, jsx_runtime_1.jsxs)(StyledAccordionHeader_1.default, Object.assign({ alignItems: "center", justifyContent: "space-between", px: "regular", onClick: onClick, "aria-controls": panelId, "aria-expanded": isOpen }, props, { children: [(0, jsx_runtime_1.jsx)(StyledAccordionHeading_1.default, Object.assign({ fontSize: "size4", fontWeight: "medium", mr: "regular" }, { children: (0, jsx_runtime_1.jsx)(StyledAccordionHeadingText_1.default, Object.assign({ alignItems: "center", "aria-controls": panelId, "aria-expanded": isOpen }, { children: iconRight ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [text, (0, jsx_runtime_1.jsx)(AccordionHeaderIcon_1.default, { isOpen: isOpen, ml: "smallest" }, void 0)] }, void 0)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AccordionHeaderIcon_1.default, { isOpen: isOpen }, void 0), text] }, void 0)) }), void 0) }), void 0), note] }), void 0));
};
exports.default = AccordionHeader;
