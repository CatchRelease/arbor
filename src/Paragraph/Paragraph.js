import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Text from '../Text';

const variantStyles = ({ theme, variant }) => css`
  font-size: ${theme.typography.text[variant].fontSize};
`;

const Paragraph = styled(Text)`
  line-height: ${props => props.theme.lineHeights.small};
  ${variantStyles};
`;

Paragraph.propTypes = {
  /**
   * Style variant. See storybook for examples.
   */
  variant: PropTypes.oneOf(['ui', 'longForm', 'tiny']).isRequired
};

export default Paragraph;
