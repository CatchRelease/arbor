import { FC, Ref } from 'react';

import StyledMenuItem from './StyledMenuItem';

type Props = {
  innerRef?: Ref<unknown>;
};

const MenuItem: FC<Props> = ({ innerRef, children, ...props }) => (
  <StyledMenuItem ref={innerRef} {...props}>
    {children}
  </StyledMenuItem>
);

export default MenuItem;
