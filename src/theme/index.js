import { rem, transparentize } from 'polished';
import { intent, monochrome, palette, primary, secondary } from './colors';

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

export const backgroundColors = {
  muted: greys.grey10,
  default: greys.grey20,
  white: whites.white
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
  /* START: deprecated -- Color definition and variables are being revamped */
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
  text: { ...textColors },
  /* END: deprecated */
  intent,
  monochrome,
  palette,
  primary,
  secondary
};

export const brandFont = 'Motiva Sans';

export const fonts = {
  default: brandFont,
  icon: 'Arbor'
};

const sizes = {
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

const inputSizes = {
  default: sizes.size4,
  mobile: sizes.size5
};

export const fontSizes = {
  ...sizes,
  input: { ...inputSizes }
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
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
  default: `${borderWidth.small} solid ${borderColors.default}`
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

export const avatarSizes = {
  default: '24px'
};

export default {
  avatarSizes,
  backgroundColors,
  borderColors,
  borderWidth,
  borders,
  brandColors,
  brandFont,
  breakpoints,
  breakpointsMap,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  icons,
  iconColors,
  iconFontPrefix: 'ar',
  lineHeights,
  radii: borderRadius,
  shadows: boxShadows,
  space: spacings,
  textColors,
  typography
};
