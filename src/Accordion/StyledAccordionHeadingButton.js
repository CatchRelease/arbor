import styled from '@emotion/styled';

import Flex from '../Flex';

export const StyledButton = styled(Flex.withComponent('button'))`
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
`;

export default StyledButton;
