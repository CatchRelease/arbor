import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { placeholder, transparentize } from 'polished';

const baseStyles = ({ theme }) => css`
  border-radius: ${theme.borderRadius.small};
  border: ${theme.borderWidth.small} solid ${theme.colors.grey20};
  box-sizing: border-box;
  color: ${theme.colors.grey100};
  font-size: ${theme.fontSizes.size2};
  line-height: ${theme.lineHeights.small};
  margin: ${theme.space.smallest} 0;
  padding: ${theme.space.smaller};
  width: 100%;

  ${placeholder({ color: theme.colors.grey50 })};

  &:focus {
    border: ${theme.borderWidth.small} solid ${theme.colors.blueLight};
    box-shadow: 0 0 8px ${transparentize(0.9, theme.colors.blueLight)};
    outline: none;
  }

  &:disabled {
    background: ${theme.colors.white10};
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
`;

export default StyledInput;
