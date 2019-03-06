import styled from '@emotion/styled';

import createWithComponent from '../utils/createWithComponent';
import Flex from '../Flex';

export const StyledButton = styled(createWithComponent(Flex, 'button'))`
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
`;

export default StyledButton;
