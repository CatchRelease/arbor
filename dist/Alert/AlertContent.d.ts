import { FC, MouseEventHandler, ReactNode } from 'react';
import { Props as StyledAlertContentProps } from './StyledAlertContent';
export declare type Props = StyledAlertContentProps & {
    details?: ReactNode;
    message: ReactNode;
    oneLine?: boolean;
    onClose?: MouseEventHandler<HTMLButtonElement>;
};
declare const AlertContent: FC<Props>;
export default AlertContent;
