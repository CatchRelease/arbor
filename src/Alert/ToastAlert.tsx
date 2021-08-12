import { FC } from 'react';

import CardAlert, { Props as CardAlertProps } from './CardAlert';

type Props = CardAlertProps;

const ToastAlert: FC<Props> = (props) => <CardAlert {...props} />;

ToastAlert.defaultProps = {
  boxShadow: 'elevation3'
};

export default ToastAlert;
