import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  minWidth,
  overflow,
  space,
  textAlign
} from 'styled-system';

import textTransform from '../utils/textTransform';
import textOverflow from '../utils/textOverflow';
import whiteSpace from '../utils/whiteSpace';

const baseStyles = ({ theme }: { theme: Theme }) => css`
  font-family: ${theme.brandFont};
`;

type Props = {
  fontSize?: string;
  lineHeight?: string;
};

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
