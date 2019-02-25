import { css } from '@emotion/core';
import styled from '@emotion/styled';

import createWithComponent from '../utils/createWithComponent';
import Grid from '../Grid';

const gridStyles = ({ children }) => css`
  grid-template-columns: repeat(${children.length}, 1fr);
`;

const CardActions = styled(
  createWithComponent(Grid, 'div', {
    gridGap: 'smaller'
  })
)`
  ${gridStyles};
`;

export default CardActions;
