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
var react_1 = require("react");
var FormField_1 = __importDefault(require("../FormField"));
var StyledSelect_1 = __importDefault(require("./StyledSelect"));
var Select = react_1.forwardRef(function (_a, ref) {
    var _b = _a.caption, caption = _b === void 0 ? '' : _b, children = _a.children, _c = _a.label, label = _c === void 0 ? '' : _c, _d = _a.labelAside, labelAside = _d === void 0 ? null : _d, id = _a.id, props = __rest(_a, ["caption", "children", "label", "labelAside", "id"]);
    var select = (jsx_runtime_1.jsx(StyledSelect_1["default"], __assign({}, __assign(__assign({}, props), { id: id, ref: ref }), { children: children }), void 0));
    return caption || label ? (jsx_runtime_1.jsx(FormField_1["default"], __assign({ caption: caption, id: id, label: label, labelAside: labelAside }, { children: select }), void 0)) : (select);
});
exports["default"] = Select;
