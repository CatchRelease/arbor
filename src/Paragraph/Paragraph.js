import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Text from '../Text';

const VARIANT_MAPPING = {
  ui: 'size4',
  longForm: 'size5',
  tiny: 'size3'
};

const variantStyles = ({ theme, variant, fontSize }) => {
  const fontSizeOverride = theme.fontSizes[fontSize]
    ? theme.fontSizes[fontSize]
    : fontSize;

  return css`
    font-size: ${fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]]};
  `;
};

const Paragraph = styled(Text)`
  ${variantStyles};
`;

Paragraph.propTypes = {
  /**
   * Style variant. See storybook for examples.
   */
  variant: PropTypes.oneOf(['ui', 'longForm', 'tiny']).isRequired
};

Paragraph.defaultProps = {
  lineHeight: 'large'
};

export default Paragraph;
