import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  maxWidth,
  MaxWidthProps,
  minWidth,
  MinWidthProps,
  overflow,
  OverflowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps
} from 'styled-system';

import textOverflow, { TextOverflowProps } from '../utils/textOverflow';
import textTransform, { TextTransformProps } from '../utils/textTransform';
import whiteSpace, { WhitespaceProps } from '../utils/whiteSpace';

const baseStyles = ({ theme }: { theme: Theme }) => css`
  font-family: ${theme.brandFont};
`;

export type Props = ColorProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  MaxWidthProps &
  MinWidthProps &
  OverflowProps &
  SpaceProps &
  TextAlignProps &
  TextTransformProps &
  TextOverflowProps &
  WhitespaceProps;

const Text = styled.p<Props>`
  ${baseStyles};

  ${color};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${maxWidth};
  ${minWidth};
  ${overflow};
  ${space};
  ${textAlign};
  ${textTransform};
  ${textOverflow};
  ${whiteSpace};
`;

Text.defaultProps = {
  color: 'text.default',
  fontSize: 'size4',
  lineHeight: 'small'
};

export default Text;
