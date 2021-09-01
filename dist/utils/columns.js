"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = exports.columnWidth = exports.columnRuleWidth = exports.columnRuleStyle = exports.columnRuleColor = exports.columnRule = exports.columnGap = exports.columnCount = void 0;
const styled_system_1 = require("styled-system");
exports.columnCount = (0, styled_system_1.style)({
    prop: 'columnCount'
});
exports.columnGap = (0, styled_system_1.style)({
    prop: 'columnGap',
    key: 'space'
});
exports.columnRule = (0, styled_system_1.style)({
    prop: 'columnRule',
    key: 'borders'
});
exports.columnRuleColor = (0, styled_system_1.style)({
    prop: 'columnRuleColor',
    key: 'colors'
});
exports.columnRuleStyle = (0, styled_system_1.style)({
    prop: 'columnRuleStyle'
});
exports.columnRuleWidth = (0, styled_system_1.style)({
    prop: 'columnRuleWidth',
    key: 'space'
});
exports.columnWidth = (0, styled_system_1.style)({
    prop: 'columnWidth'
});
exports.columns = (0, styled_system_1.style)({
    prop: 'columns'
});
