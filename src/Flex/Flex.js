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
  justifySelf
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
  ...justifySelf.propTypes
};

export default Flex;
