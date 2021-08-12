import { FC } from 'react';
import { BoxShadowProps } from 'styled-system';
import { Props as AlertContentProps } from './AlertContent';
declare type Props = AlertContentProps & BoxShadowProps;
declare const PaneAlert: FC<Props>;
export default PaneAlert;
