"use strict";
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
var react_select_1 = __importDefault(require("react-select"));
var async_1 = __importDefault(require("react-select/async"));
var async_creatable_1 = __importDefault(require("react-select/async-creatable"));
var creatable_1 = __importDefault(require("react-select/creatable"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = require("@emotion/react");
var buildReactSelectThemeOverrides_1 = __importDefault(require("./buildReactSelectThemeOverrides"));
var styledAutoCompleteComponents_1 = __importDefault(require("./styledAutoCompleteComponents"));
var getReactSelectComponent = function (variant) {
    switch (variant) {
        case 'async':
            return async_1["default"];
        case 'asyncCreatable':
            return async_creatable_1["default"];
        case 'creatable':
            return creatable_1["default"];
        default:
            return react_select_1["default"];
    }
};
var StyledAutoComplete = function (_a) {
    var components = _a.components, theme = _a.theme, variant = _a.variant, props = __rest(_a, ["components", "theme", "variant"]);
    var SelectComponent = getReactSelectComponent(variant);
    var reactSelectProps = __assign({ components: __assign(__assign({}, styledAutoCompleteComponents_1["default"]), components), theme: function (reactSelectTheme) { return (__assign(__assign(__assign({}, reactSelectTheme), buildReactSelectThemeOverrides_1["default"](theme)), theme)); } }, props);
    return jsx_runtime_1.jsx(SelectComponent, __assign({}, __assign(__assign({}, reactSelectProps), props)), void 0);
};
StyledAutoComplete.propTypes = {
    components: prop_types_1["default"].objectOf(prop_types_1["default"].elementType),
    theme: prop_types_1["default"].object.isRequired,
    variant: prop_types_1["default"].oneOf(['async', 'asyncCreatable', 'creatable', 'default'])
};
StyledAutoComplete.defaultProps = {
    components: {},
    variant: 'default'
};
exports["default"] = react_1.withTheme(StyledAutoComplete);
