"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.yellow = exports.teal = exports.red = exports.purple = exports.pink = exports.orange = exports.neutral = exports.green = exports.cyan = exports.brand = exports.blue = void 0;
var polished_1 = require("polished");
var primary_1 = __importDefault(require("./primary"));
var brand_1 = __importDefault(require("./brand"));
var generateColorModifiers = function (color) { return ({
    lighter: polished_1.tint(0.9, color),
    light: polished_1.tint(0.7, color),
    "default": color,
    dark: polished_1.shade(0.5, color),
    darker: polished_1.shade(0.8, color)
}); };
var paletteReducer = function (palette, _a) {
    var _b;
    var color = _a[0], value = _a[1];
    return Object.assign(palette, (_b = {},
        _b[color] = generateColorModifiers(value),
        _b));
};
var palette = Object.entries(primary_1["default"]).reduce(paletteReducer, {});
palette.brand = generateColorModifiers(brand_1["default"]["default"]);
exports.blue = palette.blue, exports.brand = palette.brand, exports.cyan = palette.cyan, exports.green = palette.green, exports.neutral = palette.neutral, exports.orange = palette.orange, exports.pink = palette.pink, exports.purple = palette.purple, exports.red = palette.red, exports.teal = palette.teal, exports.yellow = palette.yellow;
exports["default"] = palette;
