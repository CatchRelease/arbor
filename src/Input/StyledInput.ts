import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { display, DisplayProps, maxWidth, MaxWidthProps } from 'styled-system';
import inputStyles, { InputStylesProps } from './inputStyles';

const largeStyles = ({ theme, large }: { theme: Theme; large?: boolean }) =>
  large &&
  css`
    padding: ${theme.space.small} ${theme.space.smaller};
  `;

export type Props = DisplayProps &
  InputStylesProps &
  MaxWidthProps & {
    large?: boolean;
  };

const StyledInput = styled.input<Props>`
  ${inputStyles};
  ${display};
  ${largeStyles};
  ${maxWidth};
`;

export default StyledInput;
