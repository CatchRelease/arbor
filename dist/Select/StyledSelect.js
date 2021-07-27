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
var StyledInput_1 = __importDefault(require("../Input/StyledInput"));
var StyledSelectInput = styled_1["default"](StyledInput_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  background: ", ";\n\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000;\n  }\n"], ["\n  appearance: none;\n  background: ", ";\n\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000;\n  }\n"])), function (props) { return props.theme.colors.background.white; });
StyledSelectInput.defaultProps = {
    as: 'select'
};
var StyledSelectWrapper = styled_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n\n  &:after {\n    align-items: center;\n    bottom: 0;\n    color: ", ";\n    content: '", "';\n    display: flex;\n    font-family: ", ";\n    font-size: ", ";\n    pointer-events: none;\n    position: absolute;\n    right: ", ";\n    top: 0;\n  }\n"], ["\n  position: relative;\n\n  &:after {\n    align-items: center;\n    bottom: 0;\n    color: ", ";\n    content: '", "';\n    display: flex;\n    font-family: ", ";\n    font-size: ", ";\n    pointer-events: none;\n    position: absolute;\n    right: ", ";\n    top: 0;\n  }\n"])), function (props) { return props.theme.colors.icon["default"]; }, function (props) { return props.theme.icons.caret; }, function (props) { return props.theme.fonts.icon; }, function (props) { return props.theme.fontSizes.size5; }, function (props) { return props.theme.space.smaller; });
var StyledSelect = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (jsx_runtime_1.jsx(StyledSelectWrapper, { children: jsx_runtime_1.jsx(StyledSelectInput, __assign({}, props, { children: children }), void 0) }, void 0));
};
exports["default"] = StyledSelect;
var templateObject_1, templateObject_2;
