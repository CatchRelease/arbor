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
const Box_1 = __importDefault(require("../Box"));
const StyledAutoCompleteContainer = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cx, innerRef, children } = _a, props = __rest(_a, ["cx", "innerRef", "children"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ ref: innerRef }, Object.assign({}, props), { children: children }), void 0));
};
StyledAutoCompleteContainer.propTypes = {
    cx: prop_types_1.default.func.isRequired,
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.node,
        prop_types_1.default.arrayOf(prop_types_1.default.node)
    ]).isRequired,
    innerRef: prop_types_1.default.func.isRequired
};
exports.default = StyledAutoCompleteContainer;
