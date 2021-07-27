"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whiteSpace = exports.textOverflow = exports.textTransform = exports.ratio = exports.colorForString = void 0;
__exportStar(require("./columns"), exports);
var colorForString_1 = require("./colorForString");
Object.defineProperty(exports, "colorForString", { enumerable: true, get: function () { return __importDefault(colorForString_1).default; } });
var ratio_1 = require("./ratio");
Object.defineProperty(exports, "ratio", { enumerable: true, get: function () { return __importDefault(ratio_1).default; } });
var textTransform_1 = require("./textTransform");
Object.defineProperty(exports, "textTransform", { enumerable: true, get: function () { return __importDefault(textTransform_1).default; } });
var textOverflow_1 = require("./textOverflow");
Object.defineProperty(exports, "textOverflow", { enumerable: true, get: function () { return __importDefault(textOverflow_1).default; } });
var whiteSpace_1 = require("./whiteSpace");
Object.defineProperty(exports, "whiteSpace", { enumerable: true, get: function () { return __importDefault(whiteSpace_1).default; } });
