import styled from 'react-emotion';
import {
  alignSelf,
  alignItems,
  justifyContent,
  flexDirection,
  flex
} from 'styled-system';

import Box from './Box';

const Flex = styled(Box)`
  display: flex;
  ${alignSelf};
  ${alignItems};
  ${justifyContent};
  ${flexDirection};
  ${flex};
`;

Flex.propTypes = {
  ...alignSelf.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexDirection.propTypes,
  ...flex.propTypes
};

export default Flex;
