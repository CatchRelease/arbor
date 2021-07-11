import PropTypes from 'prop-types';

import Text from '../Text';

const StyledAutoCompleteNoOptionsMessage = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cx,
  innerRef,
  innerProps,
  children,
  ...props
}) => (
  <Text
    p="small"
    textAlign="center"
    ref={innerRef}
    {...{ ...innerProps, ...props }}
  >
    {children}
  </Text>
);

StyledAutoCompleteNoOptionsMessage.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func
};

StyledAutoCompleteNoOptionsMessage.defaultProps = {
  innerProps: {},
  innerRef: undefined
};

export default StyledAutoCompleteNoOptionsMessage;
