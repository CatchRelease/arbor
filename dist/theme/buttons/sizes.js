"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polished_1 = require("polished");
const typography_1 = require("../typography");
const buttonSize = (rawHeight, textFontSize, iconFontSize) => {
    const height = (0, polished_1.rem)(`${rawHeight}px`);
    const padding = (0, polished_1.rem)(`${rawHeight * 0.5}px`);
    return {
        fontSize: textFontSize,
        height,
        p: `0 ${padding}`,
        i: {
            width: height,
            fontSize: iconFontSize,
            '&:first-child': {
                ml: `-${padding}`
            },
            '&:last-child': {
                mr: `-${padding}`
            }
        }
    };
};
exports.default = {
    small: buttonSize(24, typography_1.sizes.size2, typography_1.sizes.size1),
    medium: buttonSize(32, typography_1.sizes.size3, typography_1.sizes.size2),
    large: buttonSize(40, typography_1.sizes.size4, typography_1.sizes.size4),
    jumbo: buttonSize(48, typography_1.sizes.size4, typography_1.sizes.size5)
};
