import { HTMLAttributes } from 'react';
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

import { WithColorPropFix } from '../colorPropFix';
import textDecoration, { TextDecorationProps } from '../utils/textDecoration';
import textOverflow, { TextOverflowProps } from '../utils/textOverflow';
import textTransform, { TextTransformProps } from '../utils/textTransform';
import whiteSpace, { WhitespaceProps } from '../utils/whiteSpace';

const baseStyles = ({ theme }: { theme: Theme }) => css`
  font-family: ${theme.brandFont};
`;

export type Props = Omit<HTMLAttributes<HTMLElement>, 'color'> &
  ColorProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  MaxWidthProps &
  MinWidthProps &
  OverflowProps &
  SpaceProps &
  TextAlignProps &
  TextDecorationProps &
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
  ${textDecoration};
  ${textTransform};
  ${textOverflow};
  ${whiteSpace};
`;

Text.defaultProps = {
  color: 'text.default',
  fontSize: 'size4',
  lineHeight: 'small'
};

const TextWithColorPropFix: WithColorPropFix<typeof Text> = Text;

export default TextWithColorPropFix;
