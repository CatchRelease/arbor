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

const Grid = styled(Box)`
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

Grid.propTypes = {
  ...alignContent.propTypes,
  ...gridColumnGap.propTypes,
  ...gridGap.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridRowGap.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes
};

export default Grid;
