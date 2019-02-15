import { rem } from 'polished';

const calculatePadding = ({ xDefault, iconStart, iconEnd, theme, text }) => {
  if (text === undefined || (iconStart && iconEnd)) {
    return `0 ${theme.space.smallest}`;
  }

  if (iconStart) {
    return `0 ${xDefault} 0 ${theme.space.smallest}`;
  }

  if (iconEnd) {
    return `0 ${theme.space.smallest} 0 ${xDefault}`;
  }

  return `0 ${xDefault}`;
};

const buttonSizes = ({ theme, iconStart, iconEnd, size, text }) => {
  const sizeMap = {
    small: {
      padding: (() => {
        if (text === undefined || (iconEnd && iconStart)) {
          return 0;
        }

        if (iconStart) {
          return `0 ${theme.space.smaller} 0 0`;
        }

        if (iconEnd) {
          return `0 0 0 ${theme.space.smaller}`;
        }

        return `0 ${theme.space.smaller}`;
      })(),
      height: rem('24px'),
      fontSize: theme.fontSizes.size1,
      i: {
        fontSize: rem('22px')
      }
    },
    medium: {
      padding: calculatePadding({
        iconStart,
        iconEnd,
        text,
        theme,
        xDefault: theme.space.smaller
      }),
      height: rem('32px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('24px')
      }
    },
    large: {
      padding: calculatePadding({
        iconStart,
        iconEnd,
        text,
        theme,
        xDefault: theme.space.regular
      }),
      height: rem('40px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('32px')
      }
    },
    jumbo: {
      padding: (() => {
        if (text === undefined) {
          return theme.space.smaller;
        }

        if (iconStart && iconEnd) {
          return `0 ${theme.space.smallest}`;
        }

        if (iconStart) {
          return `0 ${theme.space.regular} 0 ${theme.space.smallest}`;
        }

        if (iconEnd) {
          return `0 ${theme.space.smallest} 0 ${theme.space.regular}`;
        }

        return `${theme.space.smaller} ${theme.space.regular}`;
      })(),
      height: rem('48px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('32px')
      }
    }
  };

  return sizeMap[size];
};

export default buttonSizes;
