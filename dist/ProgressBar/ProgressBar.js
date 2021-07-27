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
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var prop_types_1 = __importDefault(require("prop-types"));
var Box_1 = __importDefault(require("../Box"));
var Flex_1 = __importDefault(require("../Flex"));
var Icon_1 = __importDefault(require("../Icon"));
var Text_1 = __importDefault(require("../Text"));
var ProgressBarContainer = styled_1["default"](Flex_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", ";\n  height: 16px;\n  max-width: 100%;\n  align-items: center;\n"], ["\n  border-radius: ", ";\n  height: 16px;\n  max-width: 100%;\n  align-items: center;\n"])), function (props) { return props.theme.radii.large; });
var BarBackground = styled_1["default"](Box_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  background-color: ", ";\n  height: ", ";\n  border-radius: inherit;\n"], ["\n  flex: 1;\n  background-color: ", ";\n  height: ", ";\n  border-radius: inherit;\n"])), function (props) { return props.theme.colors.monochrome.grey40; }, function (props) { return props.theme.space.smallest; });
var BarForeground = styled_1["default"](Box_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  background-color: ", ";\n  border-radius: inherit;\n"], ["\n  height: 100%;\n  background-color: ", ";\n  border-radius: inherit;\n"])), function (props) { return props.theme.colors.text["default"]; });
var percentageText = function (percentage) { return (jsx_runtime_1.jsx(Text_1["default"], __assign({ flex: "0", ml: "smaller", fontSize: "size3", fontWeight: "medium" }, { children: percentage + "%" }), void 0)); };
var ProgressBar = function (_a) {
    var percentage = _a.percentage, iconEndName = _a.iconEndName, showPercentage = _a.showPercentage, props = __rest(_a, ["percentage", "iconEndName", "showPercentage"]);
    return (jsx_runtime_1.jsxs(ProgressBarContainer, __assign({}, props, { children: [jsx_runtime_1.jsx(BarBackground, __assign({ className: "bar-background" }, { children: jsx_runtime_1.jsx(BarForeground, { className: "bar-foreground", css: react_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          width: ", "%;\n        "], ["\n          width: ", "%;\n        "])), percentage) }, void 0) }), void 0), iconEndName && (jsx_runtime_1.jsx(Icon_1["default"], { ml: "smaller", flex: "0", fontSize: "size4", name: iconEndName, color: percentage < 100 ? 'monochrome.grey40' : 'text.default' }, void 0)), showPercentage && percentageText(percentage)] }), void 0));
};
ProgressBar.propTypes = {
    /* Show the percentage complete, or not */
    showPercentage: prop_types_1["default"].bool,
    /* Name of the icon to use as the indicator, if desired. */
    iconEndName: prop_types_1["default"].string,
    /* The actual current percentage completed */
    percentage: prop_types_1["default"].number.isRequired
};
ProgressBar.defaultProps = __assign(__assign({}, Flex_1["default"].defaultProps), { showPercentage: false, iconEndName: null });
exports["default"] = ProgressBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
