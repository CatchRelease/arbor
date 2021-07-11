import styled from '@emotion/styled';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  flex,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  gridGap,
  GridGapProps,
  justifyContent,
  JustifyContentProps,
  justifyItems,
  JustifyItemsProps,
  justifySelf,
  JustifySelfProps,
  order,
  OrderProps
} from 'styled-system';

import Box from '../Box';

export type Props = AlignContentProps &
  AlignItemsProps &
  AlignSelfProps &
  FlexProps &
  FlexDirectionProps &
  FlexWrapProps &
  GridGapProps &
  JustifyContentProps &
  JustifyItemsProps &
  JustifySelfProps &
  OrderProps;

const Flex = styled(Box)<Props>`
  display: flex;
  ${alignContent};
  ${alignItems};
  ${alignSelf};
  ${flex};
  ${flexDirection};
  ${flexWrap};
  ${gridGap};
  ${justifyContent};
  ${justifyItems};
  ${justifySelf};
  ${order};
`;

export default Flex;
