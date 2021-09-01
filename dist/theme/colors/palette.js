"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yellow = exports.teal = exports.red = exports.purple = exports.pink = exports.orange = exports.neutral = exports.green = exports.cyan = exports.brand = exports.blue = void 0;
const polished_1 = require("polished");
const primary_1 = __importDefault(require("./primary"));
const brand_1 = __importDefault(require("./brand"));
const generateColorModifiers = (color) => ({
    lighter: (0, polished_1.tint)(0.9, color),
    light: (0, polished_1.tint)(0.7, color),
    default: color,
    dark: (0, polished_1.shade)(0.5, color),
    darker: (0, polished_1.shade)(0.8, color)
});
const paletteReducer = (palette, [color, value]) => Object.assign(palette, {
    [color]: generateColorModifiers(value)
});
const palette = Object.entries(primary_1.default).reduce(paletteReducer, {});
palette.brand = generateColorModifiers(brand_1.default.default);
exports.blue = palette.blue, exports.brand = palette.brand, exports.cyan = palette.cyan, exports.green = palette.green, exports.neutral = palette.neutral, exports.orange = palette.orange, exports.pink = palette.pink, exports.purple = palette.purple, exports.red = palette.red, exports.teal = palette.teal, exports.yellow = palette.yellow;
exports.default = palette;
