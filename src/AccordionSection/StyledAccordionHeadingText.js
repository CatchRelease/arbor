import styled from '@emotion/styled';

import Flex from '../Flex';

export const StyledText = styled(Flex)`
  background: none;
  border: none;
  font-size: inherit;
  font-weight: normal;
  padding: 0;
`;

StyledText.defaultProps = {
  as: 'span'
};

export default StyledText;
