import PropTypes from 'prop-types';

import MasonryContainer from './MasonryContainer';
import MasonryItem from './MasonryItem';

const Masonry = ({ children, rowGap, ...props }) => (
  <MasonryContainer {...props}>
    {[].concat(children).map((child) => (
      <MasonryItem key={child.key} mb={rowGap}>
        {child}
      </MasonryItem>
    ))}
  </MasonryContainer>
);

Masonry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  rowGap: PropTypes.string
};

Masonry.defaultProps = {
  rowGap: undefined
};

export default Masonry;
