import styled from '@emotion/styled';

import Flex from '../Flex';

export const StyledButton = styled(Flex)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
`;

StyledButton.defaultProps = {
  as: 'button'
};

export default StyledButton;
