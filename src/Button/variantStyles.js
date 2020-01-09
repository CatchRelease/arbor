import { css } from '@emotion/core';
import { darken, lighten } from 'polished';
import { themeGet } from '@styled-system/theme-get';

const variants = ({ intent, variant, ...props }) => {
  const color = themeGet(`colors.intent.${intent}.default`)(props);
  const colorWhite = themeGet('colors.monochrome.white')(props);
  const colorGrey = themeGet(`colors.monochrome.grey10`)(props);

  const colorLighter =
    intent === 'brand'
      ? themeGet(`colors.intent.${intent}.lighter`)(props)
      : colorWhite;

  const colorIcon =
    variant !== 'primary' && intent === 'brand'
      ? themeGet(`colors.icon.default`)(props)
      : 'inherit';

  const colorActive = lighten(0.1, color);
  const colorFocus = darken(0.2, color);
  const colorHover = lighten(0.1, color);

  const common = css`
    &::-moz-focus-inner {
      border: 0;
    }

    &:focus {
      border: 1px solid transparent;
    }

    &:focus:hover {
      border: 1px solid transparent;
    }

    i {
      color: ${colorIcon};
    }
  `;

  switch (variant) {
    case 'primary':
      return css`
        background-color: ${color};
        color: ${colorLighter};

        &:enabled {
          &:active {
            background-color: ${colorActive};
          }

          &:focus {
            box-shadow: 0 0 0 1px ${colorWhite}, 0 0 0 2px ${colorFocus};
          }

          &:hover {
            background-color: ${colorHover};
          }
        }

        ${common};
      `;
    case 'secondary':
      return css`
        background-color: ${colorWhite};
        color: ${color};

        &:enabled {
          border: 1px solid ${themeGet(`colors.border.default`)(props)};

          &:active {
            color: ${colorActive};
            background-color: ${colorGrey};
          }

          &:focus {
            box-shadow: 0 0 0 1px ${colorWhite}, 0 0 0 2px ${colorFocus};
            color: ${colorFocus};
          }

          &:hover {
            border: 1px solid ${colorHover};
            color: ${colorHover};
          }
        }

        ${common};
      `;
    case 'minimal':
      return css`
        background-color: transparent;
        border: 1px solid transparent;
        color: ${color};

        &:disabled {
          background-color: transparent;
          color: ${themeGet(`colors.text.disabled`)(props)};
        }

        &:enabled {
          &:active {
            background-color: ${colorGrey};
            color: ${colorActive};
          }

          &:focus {
            box-shadow: 0 0 0 1px ${colorWhite}, 0 0 0 2px ${colorFocus};
            color: ${colorFocus};
          }

          &:hover {
            color: ${colorHover};
          }
        }

        ${common};
      `;
    default:
      return '';
  }
};

export default variants;
