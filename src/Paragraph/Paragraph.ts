import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Text from '../Text';
import { FontSize } from '../theme/typography';

const VARIANT_MAPPING = {
  ui: 'size4',
  longForm: 'size5',
  tiny: 'size3'
} as const;

type Variant = 'ui' | 'longForm' | 'tiny';

const variantStyles = ({
  theme,
  variant,
  fontSize
}: {
  theme: Theme;
  variant: Variant;
  fontSize?: FontSize;
}) => {
  const fontSizeOverride =
    fontSize && theme.fontSizes[fontSize]
      ? theme.fontSizes[fontSize]
      : fontSize;

  return css`
    font-size: ${fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]]};
  `;
};

type Props = {
  fontSize?: FontSize;
  variant: Variant;
};

const Paragraph = styled(Text)<Props>`
  ${variantStyles};
`;

Paragraph.defaultProps = {
  lineHeight: 'large'
};

export default Paragraph;
