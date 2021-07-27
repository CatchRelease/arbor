"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colorForString = (string, colors) => {
    const code = string
        .split('')
        .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[code % colors.length];
};
exports.default = colorForString;
