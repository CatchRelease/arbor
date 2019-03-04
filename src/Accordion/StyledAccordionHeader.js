import styled from '@emotion/styled';

import createWithComponent from '../utils/createWithComponent';
import Flex from '../Flex';

const StyledHeader = styled(createWithComponent(Flex, 'header'))`
  background: ${props => props.theme.colors.background.default};
  border-bottom: 1px solid ${props => props.theme.borderColors.default};

  section:last-child & {
    border-bottom: none;
  }

  .button--minimal:last-child {
    margin-right: -${props => props.theme.space.small};
  }
`;

export default StyledHeader;
