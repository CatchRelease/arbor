import { rem } from 'polished';

const buttonSizes = ({ theme, iconStart, iconEnd, size, text }) => {
  const sizeMap = {
    small: {
      padding: (() => {
        if (text === undefined || (iconEnd && iconStart)) {
          return `0 ${theme.space.smallest}`;
        }

        if (iconStart) {
          return `0 ${theme.space.smaller} 0 ${theme.space.smallest}`;
        }

        if (iconEnd) {
          return `0 ${theme.space.smallest} 0 ${theme.space.smaller}`;
        }

        return `0 ${theme.space.smaller}`;
      })(),
      height: rem('24px'),
      fontSize: theme.fontSizes.size2
    },
    medium: {
      padding: `0 ${theme.space.smaller}`,
      height: rem('32px'),
      fontSize: theme.fontSizes.size4
    },
    large: {
      padding: (() => {
        if (text === undefined) {
          return `0 ${theme.space.small}`;
        }

        if (iconStart && iconEnd) {
          return `0 ${theme.space.small} 0 ${theme.space.smaller}`;
        }

        if (iconStart) {
          return `0 ${theme.space.regular} 0 ${theme.space.smaller}`;
        }

        if (iconEnd) {
          return `0 ${theme.space.small} 0 ${theme.space.regular}`;
        }

        return `0 ${theme.space.smaller}`;
      })(),
      height: rem('40px'),
      fontSize: theme.fontSizes.size4
    },
    jumbo: {
      padding: (() => {
        if (text === undefined) {
          return `0 ${theme.space.regular}`;
        }

        if (iconStart && iconEnd) {
          return `0 ${theme.space.small} 0 ${theme.space.smaller}`;
        }

        if (iconStart) {
          return `0 ${theme.space.regular} 0 ${theme.space.smaller}`;
        }

        if (iconEnd) {
          return `0 ${theme.space.small} 0 ${theme.space.regular}`;
        }

        return `${theme.space.smaller} ${theme.space.regular}`;
      })(),
      height: rem('48px'),
      fontSize: theme.fontSizes.size4
    }
  };

  return sizeMap[size];
};

export default buttonSizes;
