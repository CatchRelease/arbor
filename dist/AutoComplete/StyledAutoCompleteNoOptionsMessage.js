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
var Text_1 = __importDefault(require("../Text"));
var StyledAutoCompleteNoOptionsMessage = function (_a) {
    var 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cx = _a.cx, innerRef = _a.innerRef, innerProps = _a.innerProps, children = _a.children, props = __rest(_a, ["cx", "innerRef", "innerProps", "children"]);
    return (jsx_runtime_1.jsx(Text_1["default"], __assign({ p: "small", textAlign: "center", ref: innerRef }, __assign(__assign({}, innerProps), props), { children: children }), void 0));
};
StyledAutoCompleteNoOptionsMessage.propTypes = {
    cx: prop_types_1["default"].func.isRequired,
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]).isRequired,
    innerProps: prop_types_1["default"].object,
    innerRef: prop_types_1["default"].func
};
StyledAutoCompleteNoOptionsMessage.defaultProps = {
    innerProps: {},
    innerRef: undefined
};
exports["default"] = StyledAutoCompleteNoOptionsMessage;
