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
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = __importDefault(require("@emotion/styled"));
const Flex_1 = __importDefault(require("../Flex"));
const StyledFlex = (0, styled_1.default)(Flex_1.default) `
  font-family: ${({ theme }) => theme.brandFont};
  font-size: ${({ theme }) => theme.fontSizes.size4};

  &:focus {
    outline: none;
  }
`;
const StyledAutoCompleteInput = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cx, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getStyles, innerProps, innerRef, isDisabled, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isHidden, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectProps, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    theme } = _a, props = __rest(_a, ["cx", "getStyles", "innerProps", "innerRef", "isDisabled", "isHidden", "selectProps", "theme"]);
    return ((0, jsx_runtime_1.jsx)(StyledFlex, Object.assign({ as: "input", border: "none", flex: "1", disabled: isDisabled, ref: innerRef }, Object.assign(Object.assign({}, innerProps), props)), void 0));
};
StyledAutoCompleteInput.propTypes = {
    cx: prop_types_1.default.func.isRequired,
    getStyles: prop_types_1.default.func.isRequired,
    innerProps: prop_types_1.default.object,
    innerRef: prop_types_1.default.func.isRequired,
    isDisabled: prop_types_1.default.bool,
    isHidden: prop_types_1.default.bool,
    selectProps: prop_types_1.default.object.isRequired,
    theme: prop_types_1.default.object.isRequired // eslint-disable-line react/forbid-prop-types
};
StyledAutoCompleteInput.defaultProps = {
    innerProps: {},
    isHidden: undefined,
    isDisabled: undefined
};
exports.default = StyledAutoCompleteInput;
