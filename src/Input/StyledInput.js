import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { placeholder, transparentize } from 'polished';
import { maxWidth } from 'styled-system';

const baseStyles = ({ theme }) => css`
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

  ${placeholder({ color: theme.colors.grey60 })};

  &:focus {
    border: ${theme.borderWidth.small} solid ${theme.colors.brand.dark};
    box-shadow: 0 0 8px ${transparentize(0.9, theme.colors.brand.light)};
    outline: none;
  }

  &:disabled {
    background: ${theme.colors.background.default};
  }

  &:required {
    box-shadow: none;
  }
`;

const largeStyles = ({ theme, large }) =>
  large &&
  css`
    padding: ${theme.space.small} ${theme.space.smaller};
  `;

const StyledInput = styled.input`
  ${baseStyles};
  ${largeStyles};
  ${maxWidth};
`;

StyledInput.propTypes = {
  large: PropTypes.bool,
  ...maxWidth.propTypes
};

StyledInput.defaultProps = {
  as: 'input',
  large: false
};

export default StyledInput;
