import PropTypes from 'prop-types';

import Flex from '../Flex';

const StyledAutoCompleteValueContainer = ({
  cx,
  innerProps,
  children,
  ...props
}) => (
  <Flex
    flex="1"
    flexWrap="wrap"
    gridGap="smallest"
    {...{ ...innerProps, ...props }}
  >
    {children}
  </Flex>
);

StyledAutoCompleteValueContainer.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

StyledAutoCompleteValueContainer.defaultProps = {
  innerProps: {}
};

export default StyledAutoCompleteValueContainer;
