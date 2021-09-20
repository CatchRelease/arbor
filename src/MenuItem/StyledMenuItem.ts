import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import Box from '../Box';

const disabledStyles = ({
  isDisabled,
  theme
}: {
  isDisabled?: boolean;
  theme: Theme;
}) => {
  if (!isDisabled) return '';

  return css`
    background: ${theme.colors.monochrome.white};
    color: ${theme.colors.text.disabled};

    &:hover {
      background: ${theme.colors.monochrome.white};
      cursor: not-allowed;
    }
  `;
};

const focusedStyles = ({
  isFocused,
  theme
}: {
  isFocused?: boolean;
  theme: Theme;
}) => {
  if (!isFocused) return '';

  return css`
    background: ${theme.colors.background.muted};
  `;
};

const selectedStyles = ({
  isSelected,
  theme
}: {
  isSelected?: boolean;
  theme: Theme;
}) => {
  if (!isSelected) return '';

  return css`
    font-weight: ${theme.fontWeights.medium};
  `;
};

type Props = {
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
};

const StyledMenuItem = styled(Box)<Props>`
  background: ${({ theme }) => theme.colors.monochrome.white};
  color: ${({ theme }) => theme.colors.text.default};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.background.muted};
  }

  ${focusedStyles};
  ${selectedStyles};
  ${disabledStyles};
`;

StyledMenuItem.propTypes = {
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool
};

StyledMenuItem.defaultProps = {
  fontSize: 'size4',
  isDisabled: false,
  isFocused: false,
  isSelected: false,
  p: 'small'
};

export default StyledMenuItem;
