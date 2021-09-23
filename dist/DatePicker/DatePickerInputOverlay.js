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
const Box_1 = __importDefault(require("../Box"));
const DatePicker_1 = __importDefault(require("./DatePicker"));
const PopoverContent_1 = __importDefault(require("../Popover/PopoverContent"));
const DatePickerInputOverlay = (_a) => {
    var { classNames, children } = _a, props = __rest(_a, ["classNames", "children"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ position: "absolute", zIndex: 100 }, { children: (0, jsx_runtime_1.jsx)(PopoverContent_1.default, Object.assign({ className: classNames.overlayWrapper }, props, { children: (0, jsx_runtime_1.jsx)(DatePicker_1.default, Object.assign({}, children.props), void 0) }), void 0) }), void 0));
};
exports.default = DatePickerInputOverlay;
