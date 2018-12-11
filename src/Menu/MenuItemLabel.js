import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Flex from '../Flex';

const darker = (theme, base) => {
  const darkerColor = `${base}Dark`;
  return theme.colors[darkerColor];
};

const baseStyles = ({ theme, baseColor }) => css`
  color: ${theme.colors.grey80};
  padding: 0 ${theme.space.regular};

  :hover {
    color: ${theme.colors[baseColor]};
    background: ${theme.colors.white10};
  }

  :active {
    background: ${theme.colors.grey10};
    color: ${darker(theme, baseColor)};
  }

  :focus {
    background: ${theme.colors.white10};
  }
`;

const selectedStyles = ({ selected, theme }) =>
  selected &&
  css`
    color: ${theme.colors.grey100};
    font-weight: ${theme.fontWeights.bold};
    padding-right: ${theme.space.smaller};
  `;

const Label = styled(Flex.withComponent('label'))`
  ${baseStyles};
  ${selectedStyles};
`;

export default Label;
