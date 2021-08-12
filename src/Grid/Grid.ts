import styled from '@emotion/styled';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  grid,
  GridProps,
  justifyContent,
  JustifyContentProps,
  justifyItems,
  JustifyItemsProps
} from 'styled-system';

import Box, { BoxProps } from '../Box';

export type Props = BoxProps &
  AlignContentProps &
  AlignItemsProps &
  GridProps &
  JustifyContentProps &
  JustifyItemsProps;

const Grid = styled(Box)<Props>`
  ${alignContent};
  ${alignItems};
  ${grid};
  ${justifyContent};
  ${justifyItems};
`;

Grid.defaultProps = {
  display: 'grid'
};

export default Grid;
