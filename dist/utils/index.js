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
exports.__esModule = true;
exports.whiteSpace = exports.textOverflow = exports.textTransform = exports.ratio = exports.colorForString = void 0;
__exportStar(require("./columns"), exports);
var colorForString_1 = require("./colorForString");
__createBinding(exports, colorForString_1, "default", "colorForString");
var ratio_1 = require("./ratio");
__createBinding(exports, ratio_1, "default", "ratio");
var textTransform_1 = require("./textTransform");
__createBinding(exports, textTransform_1, "default", "textTransform");
var textOverflow_1 = require("./textOverflow");
__createBinding(exports, textOverflow_1, "default", "textOverflow");
var whiteSpace_1 = require("./whiteSpace");
__createBinding(exports, whiteSpace_1, "default", "whiteSpace");
