import styled from '@emotion/styled';
import propTypes from '@styled-system/prop-types';
import {
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  grid
} from 'styled-system';

import Box from '../Box';

const Grid = styled(Box)`
  ${alignContent};
  ${alignItems};
  ${grid};
  ${justifyContent};
  ${justifyItems};
`;

Grid.propTypes = {
  ...alignContent.propTypes,
  ...propTypes.grid,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes
};

Grid.defaultProps = {
  display: 'grid'
};

export default Grid;
