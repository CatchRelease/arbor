import { css } from '@emotion/react';
import { shade, tint } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import { Intent } from '../theme/colors/intent';
import { Variant } from './variants';
import { PaletteColor } from '../theme/colors/palette';

const variants = ({
  intent,
  variant,
  paletteColor,
  ...props
}: {
  intent?: Intent;
  variant?: Variant;
  paletteColor?: PaletteColor;
}) => {
  const colorIntent = themeGet(`colors.intent.${intent}.default`)(props);
  const colorWhite = themeGet('colors.monochrome.white')(props);
  const colorGrey = themeGet(`colors.monochrome.grey10`)(props);
  const color = () => {
    if (paletteColor) {
      return themeGet(`colors.palette.${paletteColor}.default`)(props);
    }
    if (variant === 'primary') {
      return intent === 'brand'
        ? themeGet(`colors.intent.${intent}.lighter`)(props)
        : colorWhite;
    }
    return colorIntent;
  };

  const colorActive = shade(0.16, colorIntent);
  const colorFocus = themeGet(`colors.intent.${intent}.light`)(props);
  const colorHover = tint(0.16, colorIntent);
  const colorIcon = () => {
    if (paletteColor) {
      return themeGet(`colors.palette.${paletteColor}.default`)(props);
    }

    if (variant !== 'primary' && intent === 'brand') {
      return themeGet(`colors.icon.default`)(props);
    }

    return 'inherit';
  };

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
      color: ${colorIcon()};
    }
  `;

  switch (variant) {
    case 'primary':
      return css`
        background-color: ${colorIntent};
        color: ${color()};

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
        color: ${color()};

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
              color: ${color()};
            }
          }
        }

        ${common};
      `;
    case 'minimal':
      return css`
        background-color: transparent;
        border: 1px solid transparent;
        color: ${color()};

        &:disabled {
          background-color: transparent;
          color: ${themeGet(`colors.text.disabled`)(props)};

          /* quiet an invalid lint error - button cannot be disabled and enabled at the same time */
          /* stylelint-disable-next-line no-descending-specificity */
          i {
            color: ${themeGet(`colors.icon.disabled`)(props)};
          }
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
              color: ${color()};
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
