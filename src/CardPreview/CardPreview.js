import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ratio } from 'styled-system';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const CardPreview = styled(
  createWithComponent(Box, 'div', {
    defaultProps: {
      ratio: 9 / 16
    },
    propTypes: {
      image: PropTypes.string.isRequired,
      ...ratio.propTypes
    }
  })
)`
  background: url(${props => props.image}) center center no-repeat
    ${props => props.theme.colors.black};
  background-size: contain;
  ${ratio};
`;

export default CardPreview;
