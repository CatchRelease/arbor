import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Box from '../Box';

const backgroundStyles = ({ isDisabled, isFocused, theme }) => {
  if (isDisabled) {
    return css`
      background: ${theme.colors.monochrome.default};
    `;
  }

  return css`
    background: ${isFocused
      ? theme.colors.background.muted
      : theme.colors.monochrome.default};
  `;
};

const cursorStyles = ({ isDisabled }) => css`
  &:hover {
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
  }
`;

const textStyles = ({ isDisabled, theme }) => css`
  color: ${isDisabled ? theme.colors.text.disabled : theme.colors.text.default};
`;

const StyledMenuItem = styled(Box)`
  ${backgroundStyles};
  ${cursorStyles};
  ${textStyles};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.background.muted};
  }
`;

StyledMenuItem.propTypes = {
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool
};

StyledMenuItem.defaultProps = {
  p: 'small',
  isDisabled: false,
  isFocused: false
};

export default StyledMenuItem;
