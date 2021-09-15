import { FC } from 'react';
import Pane, { PaneProps } from '../Pane';

export type Props = PaneProps;

const Card: FC<Props> = (props) => <Pane {...props} />;

Card.defaultProps = {
  borderRadius: 'large'
};

export default Card;
