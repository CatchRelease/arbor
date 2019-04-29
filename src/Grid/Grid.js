import styled from '@emotion/styled';
import {
  alignContent,
  alignItems,
  gridAutoFlow,
  gridColumnGap,
  gridGap,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  justifyContent,
  justifyItems
} from 'styled-system';

import Box from '../Box';

const Grid = styled(Box)`
  ${alignContent};
  ${alignItems};
  ${gridAutoFlow};
  ${gridColumnGap};
  ${gridGap};
  ${gridRowGap};
  ${gridTemplateAreas};
  ${gridTemplateColumns};
  ${gridTemplateRows};
  ${justifyContent};
  ${justifyItems};
`;

Grid.propTypes = {
  ...alignContent.propTypes,
  ...gridAutoFlow.propTypes,
  ...gridColumnGap.propTypes,
  ...gridGap.propTypes,
  ...gridTemplateAreas.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
  ...gridRowGap.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes
};

Grid.defaultProps = {
  display: 'grid'
};

export default Grid;
