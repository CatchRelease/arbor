import React from 'react';

import CardAlert from './CardAlert';

const ToastAlert = props => <CardAlert {...props} />;

ToastAlert.defaultProps = {
  boxShadow: 'elevation3'
};

export default ToastAlert;
