import styled from 'react-emotion';
import PropTypes from 'prop-types';

import Heading from './Heading';
import { fontWeights } from './theme';

const Label = styled(Heading.h6.withComponent('label'))`
  display: block;
  font-weight: ${fontWeights.regular};
`;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;
