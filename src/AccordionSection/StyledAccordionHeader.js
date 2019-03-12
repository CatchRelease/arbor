import styled from '@emotion/styled';

import createWithComponent from '../utils/createWithComponent';
import Flex from '../Flex';

const StyledHeader = styled(createWithComponent(Flex, 'header'))`
  background: ${props => props.theme.colors.background.default};

  section:last-child & {
    border-bottom: none;
  }

  .button--minimal:last-of-type {
    margin-right: -${props => props.theme.space.smallest};

    + :not(object) {
      margin-left: ${props => props.theme.space.smallest};
    }
  }

  button + .button--secondary,
  button + .button--primary {
    margin-left: ${props => props.theme.space.smaller};
  }
`;

export default StyledHeader;
