import { FC } from 'react';
import { IconProps } from '../Icon';
declare type Props = Omit<IconProps, 'name'> & {
    isOpen: boolean | undefined;
};
declare const AccordionHeaderIcon: FC<Props>;
export default AccordionHeaderIcon;
