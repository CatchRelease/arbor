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
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const prop_types_1 = __importDefault(require("prop-types"));
const Box_1 = __importDefault(require("../Box"));
const Flex_1 = __importDefault(require("../Flex"));
const Icon_1 = __importDefault(require("../Icon"));
const Text_1 = __importDefault(require("../Text"));
const ProgressBarContainer = styled_1.default(Flex_1.default) `
  border-radius: ${(props) => props.theme.radii.large};
  height: 16px;
  max-width: 100%;
  align-items: center;
`;
const BarBackground = styled_1.default(Box_1.default) `
  flex: 1;
  background-color: ${(props) => props.theme.colors.monochrome.grey40};
  height: ${(props) => props.theme.space.smallest};
  border-radius: inherit;
`;
const BarForeground = styled_1.default(Box_1.default) `
  height: 100%;
  background-color: ${(props) => props.theme.colors.text.default};
  border-radius: inherit;
`;
const percentageText = (percentage) => (jsx_runtime_1.jsx(Text_1.default, Object.assign({ flex: "0", ml: "smaller", fontSize: "size3", fontWeight: "medium" }, { children: `${percentage}%` }), void 0));
const ProgressBar = (_a) => {
    var { percentage, iconEndName, showPercentage } = _a, props = __rest(_a, ["percentage", "iconEndName", "showPercentage"]);
    return (jsx_runtime_1.jsxs(ProgressBarContainer, Object.assign({}, props, { children: [jsx_runtime_1.jsx(BarBackground, Object.assign({ className: "bar-background" }, { children: jsx_runtime_1.jsx(BarForeground, { className: "bar-foreground", css: react_1.css `
          width: ${percentage}%;
        ` }, void 0) }), void 0), iconEndName && (jsx_runtime_1.jsx(Icon_1.default, { ml: "smaller", flex: "0", fontSize: "size4", name: iconEndName, color: percentage < 100 ? 'monochrome.grey40' : 'text.default' }, void 0)), showPercentage && percentageText(percentage)] }), void 0));
};
ProgressBar.propTypes = {
    /* Show the percentage complete, or not */
    showPercentage: prop_types_1.default.bool,
    /* Name of the icon to use as the indicator, if desired. */
    iconEndName: prop_types_1.default.string,
    /* The actual current percentage completed */
    percentage: prop_types_1.default.number.isRequired
};
ProgressBar.defaultProps = Object.assign(Object.assign({}, Flex_1.default.defaultProps), { showPercentage: false, iconEndName: null });
exports.default = ProgressBar;
