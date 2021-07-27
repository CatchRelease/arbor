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
var prop_types_1 = __importDefault(require("prop-types"));
var styled_1 = __importDefault(require("@emotion/styled"));
var Flex_1 = __importDefault(require("../Flex"));
var StyledFlex = styled_1["default"](Flex_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n\n  &:focus {\n    outline: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.brandFont;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSizes.size4;
});
var StyledAutoCompleteInput = function (_a) {
    var 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cx = _a.cx, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getStyles = _a.getStyles, innerProps = _a.innerProps, innerRef = _a.innerRef, isDisabled = _a.isDisabled, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isHidden = _a.isHidden, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectProps = _a.selectProps, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    theme = _a.theme, props = __rest(_a, ["cx", "getStyles", "innerProps", "innerRef", "isDisabled", "isHidden", "selectProps", "theme"]);
    return (jsx_runtime_1.jsx(StyledFlex, __assign({ as: "input", border: "none", flex: "1", disabled: isDisabled, ref: innerRef }, __assign(__assign({}, innerProps), props)), void 0));
};
StyledAutoCompleteInput.propTypes = {
    cx: prop_types_1["default"].func.isRequired,
    getStyles: prop_types_1["default"].func.isRequired,
    innerProps: prop_types_1["default"].object,
    innerRef: prop_types_1["default"].func.isRequired,
    isDisabled: prop_types_1["default"].bool,
    isHidden: prop_types_1["default"].bool,
    selectProps: prop_types_1["default"].object.isRequired,
    theme: prop_types_1["default"].object.isRequired // eslint-disable-line react/forbid-prop-types
};
StyledAutoCompleteInput.defaultProps = {
    innerProps: {},
    isHidden: undefined,
    isDisabled: undefined
};
exports["default"] = StyledAutoCompleteInput;
var templateObject_1;
