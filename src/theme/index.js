import { rem, transparentize } from 'polished';
import {
  background,
  border,
  brand,
  icon,
  intent,
  monochrome,
  palette,
  primary,
  secondary,
  text
} from './colors';

import {
  brandFont,
  fontWeights,
  fonts,
  sizes as fontSizes
} from './typography';
import { fontSizes as avatarFontSizes, sizes as avatarSizes } from './avatars';

export const breakpointsMap = {
  sm: '512px',
  md: '768px',
  lg: '1024px',
  xl: '1600px'
};

export const breakpoints = Object.values(breakpointsMap);

export const blues = {
  blueLighter: '#6688FF',
  blueLight: '#5577FF',
  blue: '#4466EE',
  blueDark: '#4455CC',
  blueDarkest: '#2E374E'
};

export const greys = {
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

export const whites = {
  white: '#FFFFFF'
};

export const reds = {
  redLighter: '#FF6655',
  redLight: '#FF4444',
  red: '#EE2200',
  redDark: '#DD1100'
};

export const greens = {
  greenLighter: '#00CC66',
  greenLight: '#00BB44',
  green: '#00AA44',
  greenDark: '#008833'
};

export const black = '#000000';

export const bronzes = {
  bronzeLight: '#CC9900',
  bronze: '#CC7700',
  bronzeDark: '#AA5500'
};

export const colors = {
  /* START: deprecated -- Color definition and variables are being revamped */
  black,
  ...blues,
  ...greys,
  ...whites,
  ...greens,
  ...reds,
  ...bronzes,
  /* END: deprecated */
  background,
  border,
  brand,
  icon,
  intent,
  monochrome,
  palette,
  primary,
  secondary,
  text
};

export const icons = {
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

export const lineHeights = {
  small: 1.25,
  regular: 1,
  large: 1.5
};

export const spacings = {
  smallest: rem('4px'),
  smaller: rem('8px'),
  small: rem('12px'),
  regular: rem('16px'),
  large: rem('24px'),
  larger: rem('32px'),
  largest: rem('64px')
};

export const borderRadius = {
  small: '3px',
  large: '6px',
  larger: '12px'
};

export const borderWidth = {
  small: '1px',
  medium: '2px',
  large: '4px'
};

const borders = {
  default: `${borderWidth.small} solid ${colors.border.default}`
};

const blurryShadowColor = transparentize(0.7, colors.monochrome.grey90);
const borderShadowColor = transparentize(0.53, colors.monochrome.grey90);
export const boxShadows = {
  elevation0: `0 0 1px ${borderShadowColor}`,
  elevation1: `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
  elevation2: `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
  elevation3: `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
  elevation4: `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
};

export default {
  avatarSizes,
  avatarFontSizes,
  borderWidth,
  borders,
  brandFont,
  breakpoints,
  breakpointsMap,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  icons,
  iconFontPrefix: 'ar',
  lineHeights,
  radii: borderRadius,
  shadows: boxShadows,
  space: spacings
};
