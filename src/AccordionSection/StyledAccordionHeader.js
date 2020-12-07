import styled from '@emotion/styled';

import { themeGet } from '@styled-system/theme-get';
import { css } from '@emotion/react';
import Flex from '../Flex';

const variantStyles = ({ variant, ...props }) => {
  const borderColor = themeGet('borders.default')(props);
  const backgroundColor = themeGet('colors.background.default')(props);

  switch (variant) {
    case 'default':
      return css`
        background: ${backgroundColor};

        border-bottom: ${borderColor};

        section:last-child & {
          border-bottom: none;
        }
      `;

    case 'minimal':
      return '';
    default:
      return '';
  }
};

const StyledHeader = styled(Flex)`
  .button--minimal:last-of-type {
    margin-right: -${(props) => props.theme.space.smallest};

    + :not(object) {
      margin-left: ${(props) => props.theme.space.smallest};
    }
  }

  button + .button--secondary,
  button + .button--primary {
    margin-left: ${(props) => props.theme.space.smaller};
  }

  cursor: pointer;

  ${variantStyles};
`;

StyledHeader.defaultProps = {
  as: 'header'
};

export default StyledHeader;
