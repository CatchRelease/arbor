import PropTypes from 'prop-types';

import Flex from '../Flex';

const StyledAutoCompletePlaceholder = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cx,
  children,
  ...props
}) => (
  <Flex
    alignSelf="center"
    color="text.placeholder"
    position="absolute"
    {...props}
  >
    {children}
  </Flex>
);

StyledAutoCompletePlaceholder.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default StyledAutoCompletePlaceholder;
