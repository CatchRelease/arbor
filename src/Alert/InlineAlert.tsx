import { FC } from 'react';
import AlertContent, { Props as AlertContentProps } from './AlertContent';

type Props = AlertContentProps;

const InlineAlert: FC<Props> = ({ oneLine = true, ...props }) => (
  <AlertContent p="0" {...{ oneLine, ...props }} />
);

export default InlineAlert;
