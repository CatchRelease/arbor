import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledFormField = styled.div`
  margin-bottom: ${props =>
    props.caption ? props.theme.space.smaller : props.theme.space.regular};
`;

StyledFormField.propTypes = {
  caption: PropTypes.string
};

StyledFormField.defaultProps = {
  caption: ''
};

export default StyledFormField;
