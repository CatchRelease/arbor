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
const StyledAccordionPanel_1 = __importDefault(require("./StyledAccordionPanel"));
const AccordionPanel = (_a) => {
    var { isOpen } = _a, panelProps = __rest(_a, ["isOpen"]);
    const display = isOpen ? 'block' : 'none';
    return (0, jsx_runtime_1.jsx)(StyledAccordionPanel_1.default, Object.assign({}, Object.assign(Object.assign({}, panelProps), { display })), void 0);
};
exports.default = AccordionPanel;
