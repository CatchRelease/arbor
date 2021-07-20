import { css, Theme } from '@emotion/react';
import { transparentize } from 'polished';

const disabledStyles = (theme: Theme) => css`
  background: ${theme.colors.background.default};
`;

const focusedStyles = (theme: Theme) => css`
  border: ${theme.borderWidth.small} solid ${theme.colors.intent.brand.dark};
  box-shadow: 0 0 8px ${transparentize(0.9, theme.colors.intent.brand.light)};
  outline: none;
`;

const invalidStyles = (theme: Theme) => css`
  border: ${theme.borderWidth.small} solid ${theme.colors.palette.red.default};
  background: ${theme.colors.palette.red.lighter};
`;

/* stylelint-disable property-no-vendor-prefix */
const hideArrowsStyles = css`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
/* stylelint-enable property-no-vendor-prefix */

export type InputStylesProps = {
  hideArrows?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  isInvalid?: boolean;
};

const inputStyles = ({
  hideArrows,
  isDisabled,
  isFocused,
  isInvalid,
  theme
}: InputStylesProps & {
  theme: Theme;
}) => css`
  border-radius: ${theme.radii.small};
  border: ${theme.borderWidth.small} solid ${theme.colors.border.default};
  box-sizing: border-box;
  color: ${theme.colors.text.default};
  font-family: ${theme.brandFont};
  font-size: ${theme.fontSizes.input.default};
  line-height: ${theme.lineHeights.small};
  margin: ${theme.space.smallest} 0;
  padding: ${theme.space.smaller};
  width: 100%;

  @media (max-width: ${theme.breakpointsMap.md}) {
    font-size: ${theme.fontSizes.input.mobile};
  }

  ::placeholder {
    color: ${theme.colors.text.placeholder};
  }
  ${isDisabled ? disabledStyles(theme) : ''};
  ${isFocused ? focusedStyles(theme) : ''};
  ${isInvalid ? invalidStyles(theme) : ''};

  &:focus {
    ${focusedStyles(theme)};
  }

  &:disabled {
    ${disabledStyles(theme)};
  }

  &:required {
    box-shadow: none;
  }

  ${hideArrows ? hideArrowsStyles : ''}
`;

export default inputStyles;
