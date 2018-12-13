import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const InputContainer = styled.div`
  margin-bottom: ${props =>
    props.caption ? props.theme.space.smaller : props.theme.space.regular};
`;

InputContainer.propTypes = {
  caption: PropTypes.string
};

InputContainer.defaultProps = {
  caption: ''
};

export default InputContainer;
