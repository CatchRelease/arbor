import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { placeholder, transparentize } from 'polished';

const baseStyles = ({ theme }) => css`
  border-radius: ${theme.radii.small};
  border: ${theme.borderWidth.small} solid ${theme.colors.border.default};
  box-sizing: border-box;
  color: ${theme.colors.text.default};
  font-size: ${theme.fontSizes.size4};
  line-height: ${theme.lineHeights.small};
  margin: ${theme.space.smallest} 0;
  padding: ${theme.space.smaller};
  width: 100%;

  ${placeholder({ color: theme.colors.grey60 })};

  &:focus {
    border: ${theme.borderWidth.small} solid ${theme.colors.blueLight};
    box-shadow: 0 0 8px ${transparentize(0.9, theme.colors.blueLight)};
    outline: none;
  }

  &:disabled {
    background: ${theme.colors.background.default};
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
