"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var styled_1 = __importDefault(require("@emotion/styled"));
var theme_get_1 = require("@styled-system/theme-get");
var react_1 = require("@emotion/react");
var Flex_1 = __importDefault(require("../Flex"));
var variantStyles = function (_a) {
    var variant = _a.variant, props = __rest(_a, ["variant"]);
    var borderColor = theme_get_1.themeGet('borders.default')(props);
    var backgroundColor = theme_get_1.themeGet('colors.background.default')(props);
    switch (variant) {
        case 'default':
            return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background: ", ";\n\n        border-bottom: ", ";\n\n        section:last-child & {\n          border-bottom: none;\n        }\n      "], ["\n        background: ", ";\n\n        border-bottom: ", ";\n\n        section:last-child & {\n          border-bottom: none;\n        }\n      "])), backgroundColor, borderColor);
        case 'minimal':
            return '';
        default:
            return '';
    }
};
var StyledHeader = styled_1["default"](Flex_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .button--minimal:last-of-type {\n    margin-right: -", ";\n\n    + :not(object) {\n      margin-left: ", ";\n    }\n  }\n\n  button + .button--secondary,\n  button + .button--primary {\n    margin-left: ", ";\n  }\n\n  cursor: pointer;\n\n  ", ";\n"], ["\n  .button--minimal:last-of-type {\n    margin-right: -", ";\n\n    + :not(object) {\n      margin-left: ", ";\n    }\n  }\n\n  button + .button--secondary,\n  button + .button--primary {\n    margin-left: ", ";\n  }\n\n  cursor: pointer;\n\n  ", ";\n"])), function (props) { return props.theme.space.smallest; }, function (props) { return props.theme.space.smallest; }, function (props) { return props.theme.space.smaller; }, variantStyles);
StyledHeader.defaultProps = {
    as: 'header'
};
exports["default"] = StyledHeader;
var templateObject_1, templateObject_2;
