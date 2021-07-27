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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var textTransform_1 = __importDefault(require("../utils/textTransform"));
var variantStyles_1 = __importDefault(require("./variantStyles"));
var whiteSpace_1 = __importDefault(require("../utils/whiteSpace"));
var fullWidth = styled_system_1.variant({
    prop: 'fullWidth',
    variants: {
        "true": {
            width: '100%'
        },
        "false": {
            width: 'auto'
        }
    }
});
var size = styled_system_1.variant({
    prop: 'size',
    scale: 'buttons.sizes',
    variants: {
        small: {},
        medium: {},
        large: {},
        jumbo: {}
    }
});
var StyledButton = styled_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  outline: none;\n  position: relative;\n  text-align: center;\n\n  &:disabled {\n    background: ", ";\n    border: 1px solid transparent;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:enabled {\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n\n  i {\n    transition: all 0.3s ease;\n    vertical-align: middle;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  appearance: none;\n  outline: none;\n  position: relative;\n  text-align: center;\n\n  &:disabled {\n    background: ", ";\n    border: 1px solid transparent;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:enabled {\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n\n  i {\n    transition: all 0.3s ease;\n    vertical-align: middle;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) { return props.theme.colors.background.disabled; }, function (props) { return props.theme.colors.text.disabled; }, size, variantStyles_1["default"], styled_system_1.fontWeight, styled_system_1.fontSize, fullWidth, styled_system_1.lineHeight, styled_system_1.space, textTransform_1["default"], whiteSpace_1["default"], styled_system_1.borders, styled_system_1.borderColor, styled_system_1.color, styled_system_1.display);
StyledButton.propTypes = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, styled_system_1.borders.propTypes), styled_system_1.borderColor.propTypes), styled_system_1.color.propTypes), styled_system_1.fontWeight.propTypes), styled_system_1.fontSize.propTypes), styled_system_1.lineHeight.propTypes), styled_system_1.space.propTypes), textTransform_1["default"].propTypes), whiteSpace_1["default"].propTypes), styled_system_1.display.propTypes);
StyledButton.defaultProps = {
    border: '1px solid transparent',
    borderRadius: 'small',
    fontWeight: 'medium',
    lineHeight: 'regular'
};
exports["default"] = StyledButton;
var templateObject_1;
