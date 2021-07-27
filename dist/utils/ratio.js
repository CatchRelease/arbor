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
exports.__esModule = true;
var styled_system_1 = require("styled-system");
var ratioPadding = styled_system_1.style({
    prop: 'ratio',
    cssProperty: 'paddingBottom',
    transformValue: function (n) { return n * 100 + "%"; }
});
var ratio = function (props) { return (__assign({ height: 0 }, ratioPadding(props))); };
exports["default"] = ratio;
