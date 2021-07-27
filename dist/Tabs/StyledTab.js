"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prop_types_1 = __importDefault(require("prop-types"));
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("@emotion/react");
var Box_1 = __importDefault(require("../Box"));
var activeStyles = function (_a) {
    var active = _a.active, theme = _a.theme;
    var color = theme.colors.intent.brand.dark;
    return (active && react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n      border-color: ", ";\n\n      &:focus,\n      &:hover {\n        background: transparent;\n        border-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      border-color: ", ";\n\n      &:focus,\n      &:hover {\n        background: transparent;\n        border-color: ", ";\n      }\n    "])), color, color, color));
};
var StyledTab = styled_1["default"](Box_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  font-weight: ", ";\n  line-height: ", ";\n  outline: none;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:focus,\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n  }\n\n  ", ";\n"], ["\n  cursor: pointer;\n  font-weight: ", ";\n  line-height: ", ";\n  outline: none;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:focus,\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n  }\n\n  ", ";\n"])), function (props) { return props.theme.fontWeights.medium; }, function (props) { return props.theme.lineHeights.small; }, function (props) { return props.theme.colors.background.muted; }, function (props) { return props.theme.colors.border.muted; }, activeStyles);
StyledTab.propTypes = {
    active: prop_types_1["default"].bool,
    tabIndex: prop_types_1["default"].string
};
StyledTab.defaultProps = {
    active: false,
    alignItems: 'center',
    borderBottom: '1px solid transparent',
    color: 'text.muted',
    display: 'inline-block',
    fontSize: 'size5',
    justifyContent: 'center',
    mb: '-4px',
    mr: 'large',
    overflow: 'hidden',
    py: 'regular',
    tabIndex: '0',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};
exports["default"] = StyledTab;
var templateObject_1, templateObject_2;
