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
var MasonryContainer_1 = __importDefault(require("./MasonryContainer"));
var MasonryItem_1 = __importDefault(require("./MasonryItem"));
var Masonry = function (_a) {
    var children = _a.children, rowGap = _a.rowGap, props = __rest(_a, ["children", "rowGap"]);
    return (jsx_runtime_1.jsx(MasonryContainer_1["default"], __assign({}, props, { children: [].concat(children).map(function (child) { return (jsx_runtime_1.jsx(MasonryItem_1["default"], __assign({ mb: rowGap }, { children: child }), child.key)); }) }), void 0));
};
Masonry.propTypes = {
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]).isRequired,
    rowGap: prop_types_1["default"].string
};
Masonry.defaultProps = {
    rowGap: undefined
};
exports["default"] = Masonry;
