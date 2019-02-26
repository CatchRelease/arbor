import styled from '@emotion/styled';
import {
  alignItems,
  gridGap,
  gridTemplateColumns,
  justifyItems
} from 'styled-system';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const Grid = styled(
  createWithComponent(Box, 'div', {
    propTypes: {
      ...gridGap.propTypes,
      ...gridTemplateColumns.propTypes,
      ...justifyItems.propTypes
    }
  })
)`
  display: grid;
  ${alignItems};
  ${gridGap};
  ${gridTemplateColumns};
  ${justifyItems};
`;

export default Grid;
