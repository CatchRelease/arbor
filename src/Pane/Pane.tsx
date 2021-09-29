import { FC, Ref } from 'react';

import Grid, { GridProps } from '../Grid';

export type Props = GridProps & {
  innerRef?: Ref<unknown>;
};

const Pane: FC<Props> = ({
  bg = 'background.white',
  boxShadow = 'elevation0',
  innerRef,
  overflow = 'hidden',
  width = '100%',
  ...props
}) => <Grid ref={innerRef} {...{ bg, boxShadow, overflow, width, ...props }} />;

export default Pane;
