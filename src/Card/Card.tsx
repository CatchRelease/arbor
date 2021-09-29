import { FC } from 'react';
import Pane, { PaneProps } from '../Pane';

export type Props = PaneProps;

const Card: FC<Props> = ({ borderRadius = 'large', ...props }) => (
  <Pane {...{ borderRadius, ...props }} />
);

export default Card;
