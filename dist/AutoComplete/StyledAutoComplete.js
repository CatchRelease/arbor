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
const react_select_1 = __importDefault(require("react-select"));
const async_1 = __importDefault(require("react-select/async"));
const async_creatable_1 = __importDefault(require("react-select/async-creatable"));
const creatable_1 = __importDefault(require("react-select/creatable"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("@emotion/react");
const buildReactSelectThemeOverrides_1 = __importDefault(require("./buildReactSelectThemeOverrides"));
const styledAutoCompleteComponents_1 = __importDefault(require("./styledAutoCompleteComponents"));
const getReactSelectComponent = (variant) => {
    switch (variant) {
        case 'async':
            return async_1.default;
        case 'asyncCreatable':
            return async_creatable_1.default;
        case 'creatable':
            return creatable_1.default;
        default:
            return react_select_1.default;
    }
};
const StyledAutoComplete = (_a) => {
    var { components, theme, variant } = _a, props = __rest(_a, ["components", "theme", "variant"]);
    const SelectComponent = getReactSelectComponent(variant);
    const reactSelectProps = Object.assign({ components: Object.assign(Object.assign({}, styledAutoCompleteComponents_1.default), components), theme: (reactSelectTheme) => (Object.assign(Object.assign(Object.assign({}, reactSelectTheme), buildReactSelectThemeOverrides_1.default(theme)), theme)) }, props);
    return jsx_runtime_1.jsx(SelectComponent, Object.assign({}, Object.assign(Object.assign({}, reactSelectProps), props)), void 0);
};
StyledAutoComplete.propTypes = {
    components: prop_types_1.default.objectOf(prop_types_1.default.elementType),
    theme: prop_types_1.default.object.isRequired,
    variant: prop_types_1.default.oneOf(['async', 'asyncCreatable', 'creatable', 'default'])
};
StyledAutoComplete.defaultProps = {
    components: {},
    variant: 'default'
};
exports.default = react_1.withTheme(StyledAutoComplete);
