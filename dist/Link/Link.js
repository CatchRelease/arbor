"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var Text_1 = __importDefault(require("../Text"));
var baseStyles = react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:focus {\n    outline-offset: 2px;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"], ["\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:focus {\n    outline-offset: 2px;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])));
var variantStyles = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, colors = _a.theme.colors;
    var variantMapping = {
        brandDark: {
            color: colors.intent.brand.dark,
            '&:visited': {
                color: colors.intent.brand.dark
            },
            '&:hover': {
                color: colors.intent.brand.dark
            },
            '&:active': {
                color: colors.intent.brand.dark
            },
            '&:focus': {
                outline: "1px solid " + colors.brand.dark
            }
        },
        brandLight: {
            color: colors.intent.brand.light,
            '&:visited': {
                color: colors.intent.brand.light
            },
            '&:hover': {
                color: colors.intent.brand.light
            },
            '&:active': {
                color: colors.intent.brand.light
            },
            '&:focus': {
                outline: "1px solid " + colors.brand.light
            }
        },
        "default": {
            color: colors.palette.teal["default"],
            '&:visited': {
                color: colors.palette.teal["default"]
            },
            '&:hover': {
                color: colors.palette.teal.dark
            },
            '&:active': {
                color: colors.palette.teal.darker
            },
            '&:focus': {
                outline: "1px solid " + colors.palette.teal["default"]
            }
        },
        muted: {
            color: colors.text.muted,
            '&:visited': {
                color: colors.text.muted
            },
            '&:hover': {
                color: colors.text["default"]
            },
            '&:active': {
                color: colors.text.dark
            },
            '&:focus': {
                outline: "1px solid " + colors.grey100
            }
        }
    };
    return variantMapping[variant];
};
var TextAnchor = Text_1["default"].withComponent('a');
var TextAnchorWithColorPropFix = TextAnchor;
var Link = styled_1["default"](TextAnchorWithColorPropFix)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"])), baseStyles, variantStyles, styled_system_1.color);
exports["default"] = Link;
var templateObject_1, templateObject_2;
