import StyledInput from '../Input/StyledInput';

const StyledTextarea = (props) => <StyledInput {...props} />;

StyledTextarea.defaultProps = {
  as: 'textarea'
};

export default StyledTextarea;
