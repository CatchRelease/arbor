import { rem } from 'polished';

const fontSizes = {
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

export type FontSize = keyof typeof fontSizes;

const inputSizes = {
  default: fontSizes.size4,
  mobile: fontSizes.size5
};

export default {
  ...fontSizes,
  input: { ...inputSizes }
};
