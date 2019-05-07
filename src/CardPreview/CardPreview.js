import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ratio } from 'styled-system';

import Box from '../Box';

const CardPreview = styled(Box)`
  background: url(${props => props.image}) center center no-repeat
    ${props => props.theme.colors.black};
  background-size: contain;
  ${ratio};
`;

CardPreview.propTypes = {
  /**
   * Image to be rendered as the background of the CardPreview
   */
  image: PropTypes.string.isRequired,
  ...ratio.propTypes
};

CardPreview.defaultProps = {
  ratio: 9 / 16
};

export default CardPreview;
