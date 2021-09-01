"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_system_1 = require("styled-system");
const ratioPadding = (0, styled_system_1.style)({
    prop: 'ratio',
    cssProperty: 'paddingBottom',
    transformValue: (n) => `${n * 100}%`
});
const ratio = (props) => (Object.assign({ height: 0 }, ratioPadding(props)));
exports.default = ratio;
