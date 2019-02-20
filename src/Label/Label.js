import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  color: ${props => props.theme.colors.text.muted};
  display: block;
  font-family: ${props => props.theme.brandFont};
  font-size: ${props => props.theme.fontSizes.size4};
  line-height: ${props => props.theme.lineHeights.large};
`;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;
