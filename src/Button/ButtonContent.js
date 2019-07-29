import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Box from '../Box';

const ButtonContent = styled(Box)`
  visibility: ${props => (props.spin ? 'hidden' : 'visible')};
`;

ButtonContent.propTypes = {
  spin: PropTypes.bool.isRequired
};

export default ButtonContent;
