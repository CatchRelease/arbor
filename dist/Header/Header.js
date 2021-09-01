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
const prop_types_1 = __importDefault(require("prop-types"));
const StyledHeader_1 = __importDefault(require("./StyledHeader"));
const getColumns = (children = []) => {
    const forHeading = 'minmax(auto, 100%)';
    if (!children.length)
        return forHeading;
    return `${forHeading} repeat(${children.length}, auto)`;
};
const Header = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [headingText, ...remainingChildren] = react_1.Children.toArray(children);
    return ((0, jsx_runtime_1.jsxs)(StyledHeader_1.default, Object.assign({ alignItems: "end", gridGap: "small", gridTemplateColumns: getColumns(remainingChildren) }, props, { children: [headingText, remainingChildren] }), void 0));
};
Header.propTypes = {
    /**
     * Content to be displayed within the StyledHeader. gridTemplateColumns will
     * be determined by the number of children passed in to properly distribute
     * content.
     */
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.node,
        prop_types_1.default.arrayOf(prop_types_1.default.node)
    ]).isRequired
};
exports.default = Header;
