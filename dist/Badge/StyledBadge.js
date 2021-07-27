"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prop_types_1 = __importDefault(require("prop-types"));
var styled_1 = __importDefault(require("@emotion/styled"));
var Flex_1 = __importDefault(require("../Flex"));
var palette_1 = __importDefault(require("../theme/colors/palette"));
var getBackground = function (_a) {
    var paletteColor = _a.paletteColor, subtle = _a.subtle, theme = _a.theme;
    if (paletteColor) {
        return subtle
            ? theme.colors.palette[paletteColor].lighter
            : theme.colors.palette[paletteColor]["default"];
    }
    return subtle
        ? theme.colors.monochrome.grey20
        : theme.colors.monochrome.grey100;
};
var getBorderColor = function (_a) {
    var paletteColor = _a.paletteColor, theme = _a.theme;
    return paletteColor
        ? theme.colors.palette[paletteColor]["default"]
        : theme.colors.monochrome.grey100;
};
var StyledBadge = styled_1["default"](Flex_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border-color: ", ";\n  border-radius: ", ";\n"], ["\n  background: ", ";\n  border-color: ", ";\n  border-radius: ", ";\n"])), getBackground, getBorderColor, function (props) { return (props.variant === 'pill' ? '999px' : '2px'); });
StyledBadge.propTypes = {
    children: prop_types_1["default"].node.isRequired,
    paletteColor: prop_types_1["default"].oneOf(__spreadArray([''], Object.keys(palette_1["default"]))),
    subtle: prop_types_1["default"].bool,
    variant: prop_types_1["default"].oneOf(['default', 'pill'])
};
StyledBadge.defaultProps = {
    alignItems: 'center',
    border: '1px solid',
    paletteColor: '',
    height: '24px',
    maxWidth: '100%',
    px: 'smaller'
};
exports["default"] = StyledBadge;
var templateObject_1;
