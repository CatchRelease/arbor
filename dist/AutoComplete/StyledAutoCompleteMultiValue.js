"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("../utils");
const colors_1 = require("../theme/colors");
const Badge_1 = __importDefault(require("../Badge"));
const Icon_1 = __importDefault(require("../Icon"));
const StyledAutoCompleteMultiValue = ({ data, data: { label }, paletteColor, variant, readOnly, removeProps }) => {
    const color = paletteColor === null
        ? (0, utils_1.colorForString)(label, Object.keys(colors_1.palette))
        : paletteColor;
    const iconEnd = readOnly ? null : ((0, jsx_runtime_1.jsx)(Icon_1.default, Object.assign({ "aria-label": "remove", css: { cursor: 'pointer' }, fontSize: "size3", name: "cross" }, removeProps), void 0));
    return ((0, jsx_runtime_1.jsx)(Badge_1.default, Object.assign({}, Object.assign({ iconEnd, paletteColor: color, subtle: true, variant }, data), { children: label }), void 0));
};
StyledAutoCompleteMultiValue.propTypes = {
    data: prop_types_1.default.shape({
        label: prop_types_1.default.string.isRequired
    }).isRequired,
    removeProps: prop_types_1.default.shape({
        onClick: prop_types_1.default.func.isRequired,
        onMouseDown: prop_types_1.default.func.isRequired,
        onTouchEnd: prop_types_1.default.func.isRequired
    }),
    paletteColor: prop_types_1.default.oneOf(['', ...Object.keys(colors_1.palette)]),
    readOnly: prop_types_1.default.bool,
    variant: prop_types_1.default.oneOf(['default', 'pill'])
};
StyledAutoCompleteMultiValue.defaultProps = {
    removeProps: {
        onClick: () => { },
        onMouseDown: () => { },
        onTouchEnd: () => { }
    },
    paletteColor: null,
    readOnly: false,
    variant: 'default'
};
exports.default = StyledAutoCompleteMultiValue;
