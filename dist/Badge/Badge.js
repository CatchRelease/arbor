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
const Grid_1 = __importDefault(require("../Grid"));
const StyledBadge_1 = __importDefault(require("./StyledBadge"));
const Text_1 = __importDefault(require("../Text"));
const getTextColor = (color, subtle) => {
    if (color) {
        return subtle ? `palette.${color}.dark` : 'monochrome.white';
    }
    return subtle ? 'monochrome.grey80' : 'monochrome.white';
};
const getGridTemplateColumns = (iconStart, iconEnd) => {
    if (iconStart && iconEnd) {
        return '0fr 1fr 0fr';
    }
    if (iconStart) {
        return '0fr 1fr';
    }
    if (iconEnd) {
        return '1fr 0fr';
    }
    return '1fr';
};
const Badge = (_a) => {
    var { paletteColor, children, iconEnd, iconStart, subtle, variant } = _a, props = __rest(_a, ["paletteColor", "children", "iconEnd", "iconStart", "subtle", "variant"]);
    const textColor = getTextColor(paletteColor, subtle);
    const gridTemplateColumns = getGridTemplateColumns(iconStart, iconEnd);
    return ((0, jsx_runtime_1.jsx)(StyledBadge_1.default, Object.assign({}, Object.assign({ paletteColor, subtle, variant }, props), { children: (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ color: textColor, alignItems: "center", gridTemplateColumns: gridTemplateColumns, gridGap: "smallest" }, { children: [iconStart, (0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({}, {
                    as: 'span',
                    color: textColor,
                    fontSize: 'size3',
                    fontWeight: 'medium',
                    iconStart: undefined,
                    lineHeight: 'large',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }, { children: children }), void 0), iconEnd] }), void 0) }), void 0));
};
Badge.defaultProps = {
    paletteColor: 'neutral',
    subtle: false,
    iconEnd: undefined,
    iconStart: undefined,
    variant: 'default'
};
exports.default = Badge;
