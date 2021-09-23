import { rem } from 'polished';
import { sizes as fontSizes } from '../typography';

const buttonSize = (
  rawHeight: number,
  textFontSize: string,
  iconFontSize: string
) => {
  const height = rem(`${rawHeight}px`);
  const padding = rem(`${rawHeight * 0.5}px`);

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

export default {
  small: buttonSize(24, fontSizes.size2, fontSizes.size1),
  medium: buttonSize(32, fontSizes.size3, fontSizes.size2),
  large: buttonSize(40, fontSizes.size4, fontSizes.size4),
  jumbo: buttonSize(48, fontSizes.size4, fontSizes.size5)
};
