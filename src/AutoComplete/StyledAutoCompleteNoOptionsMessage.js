import PropTypes from 'prop-types';

import Text from '../Text';

const StyledAutoCompleteNoOption = ({
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

StyledAutoCompleteNoOption.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func.isRequired
};

export default StyledAutoCompleteNoOption;
