import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Flex from '../Flex';

const FOCUSED_BACKGROUND = 'muted';

const darker = (theme, base) => {
  const darkerColor = `${base}Dark`;
  return theme.colors[darkerColor];
};

const baseStyles = ({ theme, baseColor }) => css`
  color: ${theme.colors.text.default};
  padding: 0 ${theme.space.regular};

  :hover {
    color: ${theme.colors[baseColor]};
    background: ${theme.colors.background.muted};
  }

  :active {
    background: ${theme.colors.background.default};
    color: ${darker(theme, baseColor)};
  }

  :focus {
    background: ${theme.colors.background[FOCUSED_BACKGROUND]};
  }
`;

const selectedStyles = ({ selected, theme }) =>
  selected &&
  css`
    color: ${theme.colors.text.dark};
    font-weight: ${theme.fontWeights.bold};
    padding-right: ${theme.space.smaller};
  `;

const focusedStyles = ({ theme, focused }) =>
  focused &&
  css`
    background: ${theme.colors.background[FOCUSED_BACKGROUND]};
  `;

const StyledMenuItem = styled(Flex)`
  ${baseStyles};
  ${selectedStyles};
  ${focusedStyles};
`;

export default StyledMenuItem;
