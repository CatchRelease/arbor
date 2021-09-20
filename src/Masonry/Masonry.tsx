import { ReactElement } from 'react';
import PropTypes from 'prop-types';

import MasonryContainer, {
  Props as MasonryContainerProps
} from './MasonryContainer';
import MasonryItem from './MasonryItem';

type Props = MasonryContainerProps & {
  children: ReactElement[];
  rowGap?: string;
};

const Masonry = ({ children, rowGap, ...props }: Props) => (
  <MasonryContainer {...props}>
    {children.map((child) => (
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

export default Masonry;
