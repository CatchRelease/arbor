import styled from '@emotion/styled';
import {
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexDirection,
  flexWrap,
  gridGap,
  justifyContent,
  justifyItems,
  justifySelf,
  order
} from 'styled-system';

import Box from '../Box';

const Flex = styled(Box)`
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

Flex.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...flex.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...gridGap.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...order.propTypes
};

export default Flex;
