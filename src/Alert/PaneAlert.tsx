import { FC } from 'react';
import { BoxShadowProps } from 'styled-system';

import AlertContent, { Props as AlertContentProps } from './AlertContent';
import Pane from '../Pane';
import borderStyles from './borderStyles';

type Props = AlertContentProps & BoxShadowProps;

const PaneAlert: FC<Props> = ({ boxShadow, intent, ...props }) => (
  <Pane boxShadow={boxShadow} {...borderStyles(intent)}>
    <AlertContent {...{ intent, ...props }} />
  </Pane>
);

PaneAlert.defaultProps = {
  boxShadow: 'elevation0'
};

export default PaneAlert;
