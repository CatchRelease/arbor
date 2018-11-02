import { rem } from 'polished';

export const breakpoints = ['768px'];

export const blues = {
  blueLighter: '#6688FF',
  blueLight: '#5577FF',
  blue: '#4466EE',
  blueDark: '#4455CC',
  blueDarkest: '#2E374E'
};

export const greys = {
  grey10: '#EEEEEE',
  grey20: '#DDDDDD',
  grey30: '#CCCCCC',
  grey40: '#BBBBBB',
  grey50: '#AAAAAA',
  grey60: '#999999',
  grey70: '#888888',
  grey80: '#666666',
  grey90: '#444444',
  grey100: '#222222'
};

export const whites = {
  white: '#FFFFFF',
  white10: '#FAFAFA'
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

export const colors = {
  black,
  ...blues,
  ...greys,
  ...whites,
  ...greens,
  ...reds
};

export const fontSizes = {
  size1: rem('12px'),
  size2: rem('14px'),
  size3: rem('16px'),
  size4: rem('18px'),
  size5: rem('22px'),
  size6: rem('28px'),
  size7: rem('34px')
};

export const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 700
};

export const lineHeights = {
  small: 1.25,
  large: 1.5
};

export const typography = {
  text: {
    ui: {
      fontSize: fontSizes.size2,
      color: colors.grey100
    },
    longForm: {
      fontSize: fontSizes.size3,
      color: colors.grey100
    },
    tiny: {
      fontSize: fontSizes.size1,
      color: colors.grey80
    }
  }
};

export const brandFont = 'Motiva Sans';

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
  large: '6px'
};

export const borderWidth = {
  small: '1px',
  medium: '2px',
  large: '4px'
};

export default {
  borderRadius,
  borderWidth,
  brandFont,
  breakpoints,
  colors,
  fontWeights,
  fontSizes,
  iconFontPrefix: 'fa',
  lineHeights,
  space: spacings,
  typography
};
