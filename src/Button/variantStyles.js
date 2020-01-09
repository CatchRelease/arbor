import { css } from '@emotion/core';
import { shade, tint } from 'polished';
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

  const colorActive = shade(0.16, color);
  const colorFocus = themeGet(`colors.intent.${intent}.light`)(props);
  const colorHover = tint(0.16, color);

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
            box-shadow: 0 0 0 3px ${colorFocus};
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
            box-shadow: 0 0 0 3px ${colorFocus};
          }

          &:hover {
            border: 1px solid ${colorHover};

            i {
              color: ${color};
            }
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
            box-shadow: 0 0 0 3px ${colorFocus};
          }

          &:hover {
            background-color: ${colorGrey};

            i {
              color: ${color};
            }
          }
        }

        ${common};
      `;
    default:
      return '';
  }
};

export default variants;
