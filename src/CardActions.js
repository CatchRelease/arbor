import styled, { css } from 'react-emotion';

import Grid from './Grid';

const gridStyles = ({ children }) => css`
  grid-template-columns: repeat(${children.length}, 1fr);
`;

const CardActions = styled(Grid.withComponent('div'))`
  ${gridStyles};
`;

CardActions.defaultProps = {
  gridGap: 'small'
};

export default CardActions;
