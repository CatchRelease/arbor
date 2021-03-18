import PropTypes from 'prop-types';

import Flex from '../Flex';

const StyledAutoCompletePlaceholder = ({ cx, children, ...props }) => (
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
