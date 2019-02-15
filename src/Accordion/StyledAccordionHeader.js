import styled from '@emotion/styled';

import Flex from '../Flex';

const StyledHeader = styled(Flex.withComponent('header'))`
  background: ${props => props.theme.colors.background.default};
  border-bottom: 1px solid ${props => props.theme.borderColors.default};

  section:last-child & {
    border-bottom: none;
  }
`;

export default StyledHeader;
