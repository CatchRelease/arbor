"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warning = exports.success = exports.info = exports.danger = void 0;
const palette_1 = require("./palette");
const brand_1 = __importDefault(require("./brand"));
exports.danger = palette_1.red;
exports.info = palette_1.blue;
exports.success = palette_1.green;
exports.warning = palette_1.orange;
const intent = {
    brand: brand_1.default,
    danger: exports.danger,
    info: exports.info,
    success: exports.success,
    warning: exports.warning
};
exports.default = intent;
