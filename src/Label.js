import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Label = styled.label`
  color: ${props => props.theme.colors.grey80};
  display: block;
  font-family: ${props => props.theme.brandFont};
  font-size: ${props => props.theme.fontSizes.size2};
  line-height: ${props => props.theme.lineHeights.large};
`;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;
