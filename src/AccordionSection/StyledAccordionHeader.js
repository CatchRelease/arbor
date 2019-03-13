import styled from '@emotion/styled';

import Flex from '../Flex';

const StyledHeader = styled(Flex)`
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

StyledHeader.defaultProps = {
  as: 'header'
};

export default StyledHeader;
