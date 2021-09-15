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
const Box_1 = __importDefault(require("../Box"));
const Flex_1 = __importDefault(require("../Flex"));
const Icon_1 = __importDefault(require("../Icon"));
const Text_1 = __importDefault(require("../Text"));
const ProgressBarContainer = (0, styled_1.default)(Flex_1.default) `
  border-radius: ${(props) => props.theme.radii.large};
  height: 16px;
  max-width: 100%;
  align-items: center;
`;
const BarBackground = (0, styled_1.default)(Box_1.default) `
  flex: 1;
  background-color: ${(props) => props.theme.colors.monochrome.grey40};
  height: ${(props) => props.theme.space.smallest};
  border-radius: inherit;
`;
const BarForeground = (0, styled_1.default)(Box_1.default) `
  height: 100%;
  background-color: ${(props) => props.theme.colors.text.default};
  border-radius: inherit;
`;
const percentageText = (percentage) => ((0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({ ml: "smaller", fontSize: "size3", fontWeight: "medium" }, { children: `${percentage}%` }), void 0));
const ProgressBar = (_a) => {
    var { iconEndName, percentage, showPercentage = false } = _a, props = __rest(_a, ["iconEndName", "percentage", "showPercentage"]);
    return ((0, jsx_runtime_1.jsxs)(ProgressBarContainer, Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)(BarBackground, Object.assign({ className: "bar-background" }, { children: (0, jsx_runtime_1.jsx)(BarForeground, { className: "bar-foreground", css: (0, react_1.css) `
          width: ${percentage}%;
        ` }, void 0) }), void 0), iconEndName && ((0, jsx_runtime_1.jsx)(Icon_1.default, { ml: "smaller", fontSize: "size4", name: iconEndName, color: percentage < 100 ? 'monochrome.grey40' : 'text.default' }, void 0)), showPercentage && percentageText(percentage)] }), void 0));
};
exports.default = ProgressBar;
