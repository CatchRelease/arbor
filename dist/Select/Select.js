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
const FormField_1 = __importDefault(require("../FormField"));
const StyledSelect_1 = __importDefault(require("./StyledSelect"));
const Select = react_1.forwardRef((_a, ref) => {
    var { caption = '', children, label = '', labelAside = null, id } = _a, props = __rest(_a, ["caption", "children", "label", "labelAside", "id"]);
    const select = (jsx_runtime_1.jsx(StyledSelect_1.default, Object.assign({}, Object.assign(Object.assign({}, props), { id, ref }), { children: children }), void 0));
    return caption || label ? (jsx_runtime_1.jsx(FormField_1.default, Object.assign({ caption: caption, id: id, label: label, labelAside: labelAside }, { children: select }), void 0)) : (select);
});
exports.default = Select;
