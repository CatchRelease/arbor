import { FC } from 'react';

import Icon, { IconProps } from '../Icon';

type Props = Omit<IconProps, 'name'> & {
  isOpen: boolean | undefined;
};

const AccordionHeaderIcon: FC<Props> = ({ isOpen, ...props }) => (
  <Icon mr="small" name="chevron" rotation={isOpen ? null : '270'} {...props} />
);

export default AccordionHeaderIcon;
