import { FC, ReactNode } from 'react';
import { BoxShadowProps } from 'styled-system';

import AlertContent, { Props as AlertContentProps } from './AlertContent';
import Card from '../Card';
import borderStyles from './borderStyles';

const conditionalProps = (details: ReactNode) => {
  const props = !details
    ? {
        textAlign: 'center' as const
      }
    : {};

  return props;
};

export type Props = AlertContentProps & BoxShadowProps;

const CardAlert: FC<Props> = ({ boxShadow, details, intent, ...props }) => (
  <Card
    boxShadow={boxShadow}
    {...borderStyles(intent)}
    {...conditionalProps(details)}
  >
    <AlertContent {...{ details, intent, ...props }} />
  </Card>
);

CardAlert.defaultProps = {
  boxShadow: 'elevation1'
};

export default CardAlert;
