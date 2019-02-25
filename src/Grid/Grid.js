import styled from '@emotion/styled';
import {
  alignItems,
  gridGap,
  gridTemplateColumns,
  justifyItems
} from 'styled-system';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const Grid = styled(createWithComponent(Box, 'div'))`
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
