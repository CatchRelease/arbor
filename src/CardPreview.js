import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { ratio } from 'styled-system';

import Box from './Box';

const CardPreview = styled(Box.withComponent('div'))`
  background: url(${props => props.image}) center center no-repeat
    ${props => props.theme.colors.black};
  background-size: contain;
  ${ratio};
`;

CardPreview.propTypes = {
  image: PropTypes.string.isRequired,
  ...ratio.propType
};

CardPreview.defaultProps = {
  ratio: 9 / 16
};

export default CardPreview;
