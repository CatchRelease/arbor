import styled from '@emotion/styled';
import {
  alignContent,
  alignItems,
  gridColumnGap,
  gridGap,
  gridRowGap,
  gridTemplateColumns,
  justifyContent,
  justifyItems
} from 'styled-system';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const Grid = styled(
  createWithComponent(Box, 'div', {
    propTypes: {
      ...alignContent.propTypes,
      ...gridColumnGap.propTypes,
      ...gridGap.propTypes,
      ...gridTemplateColumns.propTypes,
      ...gridRowGap.propTypes,
      ...justifyContent.propTypes,
      ...justifyItems.propTypes
    }
  })
)`
  display: grid;
  ${alignContent};
  ${alignItems};
  ${gridColumnGap};
  ${gridGap};
  ${gridRowGap};
  ${gridTemplateColumns};
  ${justifyContent};
  ${justifyItems};
`;

export default Grid;
