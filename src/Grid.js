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
  ...gridGap.propTypes,
  ...gridTemplateColumns.propTypes,
  ...justifyItems.propTypes
};

export default Grid;
