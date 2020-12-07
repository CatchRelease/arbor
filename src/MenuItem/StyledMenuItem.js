import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Box from '../Box';

const disabledStyles = ({ isDisabled, theme }) => {
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

const focusedStyles = ({ isFocused, theme }) => {
  if (!isFocused) return '';

  return css`
    background: ${theme.colors.background.muted};
  `;
};

const selectedStyles = ({ isSelected, theme }) => {
  if (!isSelected) return '';

  return css`
    font-weight: ${theme.fontWeights.medium};
  `;
};

const StyledMenuItem = styled(Box)`
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
