import styled from 'react-emotion';
import {
  alignItems,
  gridGap,
  gridTemplateColumns,
  justifyItems
} from 'styled-system';

import Box from './Box';

const Grid = styled(Box.withComponent('div'))`
  display: grid;
  ${alignItems};
  ${gridGap};
  ${gridTemplateColumns};
  ${justifyItems};
`;

Grid.propTypes = {
  ...gridGap,
  ...gridTemplateColumns,
  ...justifyItems
};

export default Grid;
