import { rem, transparentize } from 'polished';

export const breakpoints = ['512px', '768px', '1024px', '1600px'];

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

export const backgroundColors = {
  muted: greys.grey10,
  default: greys.grey20
};

export const borderColors = {
  muted: greys.grey30,
  default: greys.grey40
};

export const brandColors = {
  get light() {
    return transparentize(0.91, this.dark);
  },
  default: '#007558',
  dark: '#00533E',
  darkest: '#001C15'
};

export const iconColors = {
  disabled: transparentize(0.3, greys.grey50),
  default: greys.grey60
};

export const textColors = {
  disabled: transparentize(0.3, greys.grey70),
  muted: greys.grey80,
  default: greys.grey90,
  dark: greys.grey100
};

export const colors = {
  black,
  ...blues,
  ...greys,
  ...whites,
  ...greens,
  ...reds,
  ...bronzes,
  background: { ...backgroundColors },
  brand: { ...brandColors },
  border: { ...borderColors },
  icon: { ...iconColors },
  text: { ...textColors }
};

export const fontSizes = {
  size1: rem('11px'),
  size2: rem('12px'),
  size3: rem('13px'),
  size4: rem('14px'),
  size5: rem('16px'),
  size6: rem('20px'),
  size7: rem('24px'),
  size8: rem('28px'),
  size9: rem('34px')
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
};

export const lineHeights = {
  small: 1.25,
  large: 1.5
};

export const typography = {
  text: {
    ui: {
      fontSize: fontSizes.size4
    },
    longForm: {
      fontSize: fontSizes.size5
    },
    tiny: {
      fontSize: fontSizes.size2
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

const blurryShadowColor = transparentize(0.7, greys.grey90);
const borderShadowColor = transparentize(0.53, greys.grey90);
export const boxShadows = {
  elevation0: `0 0 1px ${borderShadowColor}`,
  elevation1: `0 0 1px ${borderShadowColor}, 0 2px 4px -2px ${blurryShadowColor}`,
  elevation2: `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
  elevation3: `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
  elevation4: `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`
};

export default {
  backgroundColors,
  borderColors,
  borderRadius,
  borderWidth,
  brandColors,
  brandFont,
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  iconColors,
  iconFontPrefix: 'ar',
  lineHeights,
  shadows: boxShadows,
  space: spacings,
  textColors,
  typography
};
