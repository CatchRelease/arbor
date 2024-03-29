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
const react_1 = require("react");
const AccordionHeader_1 = __importDefault(require("./AccordionHeader"));
const AccordionPanel_1 = __importDefault(require("./AccordionPanel"));
const AccordionSection = (_a) => {
    var { children, header, headerNote, isOpen: controlledIsOpen, onHeaderClick = () => { }, panelId, variant = 'default' } = _a, props = __rest(_a, ["children", "header", "headerNote", "isOpen", "onHeaderClick", "panelId", "variant"]);
    const [internalIsOpen, setInternalIsOpen] = (0, react_1.useState)(false);
    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
    const toggle = () => {
        setInternalIsOpen((previous) => !previous);
    };
    const handleHeaderClick = () => {
        if (!isControlled) {
            toggle();
        }
        onHeaderClick();
    };
    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)(AccordionHeader_1.default, Object.assign({ isOpen: isOpen, note: headerNote, onClick: handleHeaderClick, panelId: panelId, text: header, variant: variant }, props), void 0), (0, jsx_runtime_1.jsx)(AccordionPanel_1.default, Object.assign({ id: panelId, isOpen: isOpen, variant: variant }, { children: children }), void 0)] }, void 0));
};
exports.default = AccordionSection;
