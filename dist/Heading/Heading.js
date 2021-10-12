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
const styled_system_1 = require("styled-system");
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@emotion/react");
const Text_1 = __importDefault(require("../Text"));
const lineHeightMultiplier = 0.5;
const baseStyles = ({ theme }) => (0, react_1.css) `
  line-height: ${theme.lineHeights.small};
`;
const calculatedMargin = ({ mb, theme }) => !mb &&
    (0, styled_system_1.system)({
        fontSize: {
            property: 'marginBottom',
            transform: (fontSize) => {
                return `calc(${theme.fontSizes[fontSize]} * ${lineHeightMultiplier})`;
            }
        }
    });
const TextWithColorPropFix = Text_1.default;
const Heading = (0, styled_1.default)(TextWithColorPropFix) `
  ${baseStyles};
  ${calculatedMargin};
`;
Heading.defaultProps = {
    as: 'h1',
    color: 'text.dark',
    fontWeight: 'bold',
    lineHeight: 'small'
};
const createHeading = (as, defaultFontSize) => (_a) => {
    var { children, fontSize = defaultFontSize } = _a, props = __rest(_a, ["children", "fontSize"]);
    return ((0, jsx_runtime_1.jsx)(Heading, Object.assign({ as: as, fontSize: fontSize }, props, { children: children }), void 0));
};
const H1 = createHeading('h1', 'size7');
const H2 = createHeading('h2', 'size6');
const H3 = createHeading('h3', 'size5');
const H4 = createHeading('h4', 'size4');
const H5 = (0, styled_1.default)(createHeading('h5', 'size4')) `
  line-height: ${(props) => props.theme.lineHeights.large};
`;
H5.defaultProps = {
    fontWeight: 'medium'
};
const H6 = (0, styled_1.default)(createHeading('h6', 'size4')) `
  line-height: ${(props) => props.theme.lineHeights.large};
`;
H6.defaultProps = {
    fontWeight: 'regular'
};
exports.default = Object.assign(Heading, { H1, H2, H3, H4, H5, H6 });
