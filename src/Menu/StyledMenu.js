import styled from '@emotion/styled';

import Flex from '../Flex';

const StyledMenu = styled(Flex)`
  outline: none;
`;

StyledMenu.defaultProps = {
  pb: 'smallest',
  pt: 'smallest'
};

export default StyledMenu;
