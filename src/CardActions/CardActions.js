import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Grid from '../Grid';

const gridStyles = ({ children }) => css`
  grid-template-columns: repeat(${children.length}, 1fr);
`;

const CardActions = styled(Grid.withComponent('div'))`
  ${gridStyles};
`;

CardActions.defaultProps = {
  gridGap: 'smaller'
};

export default CardActions;
