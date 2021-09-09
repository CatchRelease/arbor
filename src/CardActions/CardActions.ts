import { ReactElement } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Grid from '../Grid';

type Children = ReactElement | ReactElement[];

const length = (children: Children) =>
  'length' in children ? children.length : 1;

const gridStyles = ({ children }: { children: Children }) => css`
  grid-template-columns: repeat(${length(children)}, 1fr);
`;

const CardActions = styled(Grid)`
  ${gridStyles};
`;

CardActions.defaultProps = {
  gridGap: 'smaller'
};

export default CardActions;
