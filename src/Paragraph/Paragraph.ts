import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import type { LiteralUnion } from 'type-fest';

import Text from '../Text';
import { FontSize, fontSizeKeys } from '../theme/typography';

const VARIANT_MAPPING = {
  ui: 'size4',
  longForm: 'size5',
  tiny: 'size3'
} as const;

type Variant = 'ui' | 'longForm' | 'tiny';

const isFontSize = (value: string): value is FontSize =>
  fontSizeKeys.includes(value);

const variantStyles = ({
  theme,
  variant,
  fontSize
}: {
  theme: Theme;
  variant: Variant;
  fontSize?: LiteralUnion<FontSize, string>;
}) => {
  const fontSizeOverride =
    fontSize && isFontSize(fontSize) && theme.fontSizes[fontSize]
      ? theme.fontSizes[fontSize]
      : fontSize;

  return css`
    font-size: ${fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]]};
  `;
};

type Props = {
  fontSize?: LiteralUnion<FontSize, string>;
  variant: Variant;
};

const Paragraph = styled(Text)<Props>`
  ${variantStyles};
`;

Paragraph.defaultProps = {
  lineHeight: 'large'
};

export default Paragraph;
