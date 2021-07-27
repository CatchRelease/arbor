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
const Grid_1 = __importDefault(require("../Grid"));
const StyledAutoCompleteIndicatorsContainer = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cx, innerProps, children } = _a, props = __rest(_a, ["cx", "innerProps", "children"]);
    return (jsx_runtime_1.jsx(Grid_1.default, Object.assign({ alignItems: "center", gridAutoFlow: "column", gridGap: "smaller" }, Object.assign(Object.assign({}, innerProps), props), { children: children }), void 0));
};
StyledAutoCompleteIndicatorsContainer.propTypes = {
    cx: prop_types_1.default.func.isRequired,
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.node,
        prop_types_1.default.arrayOf(prop_types_1.default.node)
    ]).isRequired,
    innerProps: prop_types_1.default.object // eslint-disable-line react/forbid-prop-types
};
StyledAutoCompleteIndicatorsContainer.defaultProps = {
    innerProps: {}
};
exports.default = StyledAutoCompleteIndicatorsContainer;
