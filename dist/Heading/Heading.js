"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("@emotion/react");
var Text_1 = __importDefault(require("../Text"));
var lineHeightMultiplier = 0.5;
var baseStyles = function (_a) {
    var theme = _a.theme;
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  line-height: ", ";\n"], ["\n  line-height: ", ";\n"])), theme.lineHeights.small);
};
var calculatedMargin = function (_a) {
    var fontSize = _a.fontSize, mb = _a.mb, theme = _a.theme;
    return !mb && react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-bottom: calc(", " * ", ");\n  "], ["\n    margin-bottom: calc(", " * ", ");\n  "])), theme.fontSizes[fontSize], lineHeightMultiplier);
};
var Heading = styled_1["default"](Text_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), baseStyles, calculatedMargin);
Heading.defaultProps = {
    as: 'h1',
    color: 'text.dark',
    fontWeight: 'bold',
    lineHeight: 'small'
};
var createHeading = function (as, defaultFontSize) {
    return function (_a) {
        var children = _a.children, _b = _a.fontSize, fontSize = _b === void 0 ? defaultFontSize : _b, props = __rest(_a, ["children", "fontSize"]);
        return (jsx_runtime_1.jsx(Heading, __assign({ as: as, fontSize: fontSize }, props, { children: children }), void 0));
    };
};
var H1 = createHeading('h1', 'size7');
var H2 = createHeading('h2', 'size6');
var H3 = createHeading('h3', 'size5');
var H4 = createHeading('h4', 'size4');
var H5 = styled_1["default"](createHeading('h5', 'size4'))(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  line-height: ", ";\n"], ["\n  line-height: ", ";\n"])), function (props) { return props.theme.lineHeights.large; });
H5.defaultProps = {
    fontWeight: 'medium'
};
var H6 = styled_1["default"](createHeading('h6', 'size4'))(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  line-height: ", ";\n"], ["\n  line-height: ", ";\n"])), function (props) { return props.theme.lineHeights.large; });
H6.defaultProps = {
    fontWeight: 'regular'
};
exports["default"] = Object.assign(Heading, { H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, H6: H6 });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
