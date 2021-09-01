"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxShadows = exports.borderWidth = exports.borderRadius = exports.spacings = exports.lineHeights = exports.icons = exports.colors = exports.bronzes = exports.black = exports.greens = exports.reds = exports.whites = exports.greys = exports.blues = exports.breakpoints = exports.breakpointsMap = void 0;
const polished_1 = require("polished");
const colors_1 = require("./colors");
const typography_1 = require("./typography");
const avatars_1 = require("./avatars");
const buttons_1 = require("./buttons");
exports.breakpointsMap = {
    sm: '512px',
    md: '768px',
    lg: '1024px',
    xl: '1600px'
};
// Styled-System breakpoints
exports.breakpoints = Object.values(exports.breakpointsMap);
exports.breakpoints.sm = exports.breakpointsMap.sm;
exports.breakpoints.md = exports.breakpointsMap.md;
exports.breakpoints.lg = exports.breakpointsMap.lg;
exports.breakpoints.xl = exports.breakpointsMap.xl;
exports.blues = {
    blueLighter: '#6688FF',
    blueLight: '#5577FF',
    blue: '#4466EE',
    blueDark: '#4455CC',
    blueDarkest: '#2E374E'
};
exports.greys = {
    grey10: '#F8F9F9',
    grey20: '#F2F2F2',
    grey30: '#EBECEC',
    grey40: '#E0E1E2',
    grey50: '#BEBEC0',
    grey60: '#989A9C',
    grey70: '#78797D',
    grey80: '#5B5D61',
    grey90: '#25272D',
    grey100: '#0F0F10'
};
exports.whites = {
    white: '#FFFFFF'
};
exports.reds = {
    redLighter: '#FF6655',
    redLight: '#FF4444',
    red: '#EE2200',
    redDark: '#DD1100'
};
exports.greens = {
    greenLighter: '#00CC66',
    greenLight: '#00BB44',
    green: '#00AA44',
    greenDark: '#008833'
};
exports.black = '#000000';
exports.bronzes = {
    bronzeLight: '#CC9900',
    bronze: '#CC7700',
    bronzeDark: '#AA5500'
};
exports.colors = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 
    /* START: deprecated -- Color definition and variables are being revamped */
    black: exports.black }, exports.blues), exports.greys), exports.whites), exports.greens), exports.reds), exports.bronzes), { 
    /* END: deprecated */
    background: colors_1.background,
    border: colors_1.border,
    brand: colors_1.brand,
    icon: colors_1.icon,
    intent: colors_1.intent,
    monochrome: colors_1.monochrome,
    palette: colors_1.palette,
    primary: colors_1.primary,
    secondary: colors_1.secondary,
    shadow: colors_1.shadow,
    text: colors_1.text });
exports.icons = {
    annotation: '\f039',
    calendar: '\f035',
    caret: '\f037',
    chatBubbleOutline: '\f003',
    checkboxChecked: '\f030',
    checkboxIndeterminate: '\f02f',
    checkboxMarkedCircleOutline: '\f000',
    chevron: '\f03a',
    crLogo: '\f02e',
    cross: '\f03b',
    download: '\f004',
    swap: '\f038',
    symbolCircle: '\f034',
    thumbDownOutline: '\f001',
    thumbUpOutline: '\f002',
    trash: '\f036'
};
exports.lineHeights = {
    small: 1.25,
    regular: 1,
    large: 1.5
};
exports.spacings = {
    smallest: (0, polished_1.rem)('4px'),
    smaller: (0, polished_1.rem)('8px'),
    small: (0, polished_1.rem)('12px'),
    regular: (0, polished_1.rem)('16px'),
    large: (0, polished_1.rem)('24px'),
    larger: (0, polished_1.rem)('32px'),
    largest: (0, polished_1.rem)('64px')
};
exports.borderRadius = {
    small: '3px',
    large: '6px',
    larger: '12px'
};
exports.borderWidth = {
    small: '1px',
    medium: '2px',
    large: '4px'
};
const borders = {
    default: `${exports.borderWidth.small} solid ${exports.colors.border.default}`
};
exports.boxShadows = {
    elevation0: `0 0 1px ${exports.colors.shadow.border}`,
    elevation1: `0 0 1px ${exports.colors.shadow.border}, 0 2px 4px -2px ${exports.colors.shadow.blurry}`,
    elevation2: `0 0 1px ${exports.colors.shadow.border}, 0 5px 8px -4px ${exports.colors.shadow.blurry}`,
    elevation3: `0 0 1px ${exports.colors.shadow.border}, 0 8px 10px -4px ${exports.colors.shadow.blurry}`,
    elevation4: `0 0 1px ${exports.colors.shadow.border}, 0 16px 24px -8px ${exports.colors.shadow.blurry}`
};
const buttons = {
    sizes: buttons_1.sizes
};
exports.default = {
    avatarSizes: avatars_1.sizes,
    avatarFontSizes: avatars_1.fontSizes,
    borderWidth: exports.borderWidth,
    borders,
    brandFont: typography_1.brandFont,
    breakpoints: exports.breakpoints,
    breakpointsMap: exports.breakpointsMap,
    buttons,
    colors: exports.colors,
    fonts: typography_1.fonts,
    fontSizes: typography_1.sizes,
    fontWeights: typography_1.fontWeights,
    icons: exports.icons,
    iconFontPrefix: 'ar',
    lineHeights: exports.lineHeights,
    radii: exports.borderRadius,
    shadows: exports.boxShadows,
    space: exports.spacings
};
