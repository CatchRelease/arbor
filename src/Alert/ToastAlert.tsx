import { FC } from 'react';

import CardAlert, { Props as CardAlertProps } from './CardAlert';

type Props = CardAlertProps;

const ToastAlert: FC<Props> = ({ boxShadow = 'elevation3', ...props }) => (
  <CardAlert {...{ boxShadow, ...props }} />
);

export default ToastAlert;
