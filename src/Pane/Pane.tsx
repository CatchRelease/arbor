import { FC, Ref } from 'react';

import Grid, { GridProps } from '../Grid';

export type Props = GridProps & {
  innerRef?: Ref<unknown>;
};

const Pane: FC<Props> = ({ innerRef, ...props }) => (
  <Grid ref={innerRef} {...props} />
);

Pane.defaultProps = {
  bg: 'background.white',
  boxShadow: 'elevation0',
  overflow: 'hidden',
  width: '100%'
};

export default Pane;
