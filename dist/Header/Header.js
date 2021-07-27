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
var prop_types_1 = __importDefault(require("prop-types"));
var StyledHeader_1 = __importDefault(require("./StyledHeader"));
var getColumns = function (children) {
    if (children === void 0) { children = []; }
    var forHeading = 'minmax(auto, 100%)';
    if (!children.length)
        return forHeading;
    return forHeading + " repeat(" + children.length + ", auto)";
};
var Header = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var _b = react_1.Children.toArray(children), headingText = _b[0], remainingChildren = _b.slice(1);
    return (jsx_runtime_1.jsxs(StyledHeader_1["default"], __assign({ alignItems: "end", gridGap: "small", gridTemplateColumns: getColumns(remainingChildren) }, props, { children: [headingText, remainingChildren] }), void 0));
};
Header.propTypes = {
    /**
     * Content to be displayed within the StyledHeader. gridTemplateColumns will
     * be determined by the number of children passed in to properly distribute
     * content.
     */
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]).isRequired
};
exports["default"] = Header;
