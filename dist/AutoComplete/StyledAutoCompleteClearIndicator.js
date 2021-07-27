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
var StyledAutoCompleteClearIndicator = function (_a) {
    var innerProps = _a.innerProps, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cx = _a.cx, props = __rest(_a, ["innerProps", "cx"]);
    return (jsx_runtime_1.jsx(Icon_1["default"], __assign({ "aria-label": "clear selection", fontSize: "size4", name: "cross" }, __assign(__assign({}, innerProps), props)), void 0));
};
StyledAutoCompleteClearIndicator.propTypes = {
    cx: prop_types_1["default"].func.isRequired,
    innerProps: prop_types_1["default"].object.isRequired // eslint-disable-line react/forbid-prop-types
};
exports["default"] = StyledAutoCompleteClearIndicator;
