import { Children, FC } from 'react';

import StyledHeader from './StyledHeader';

type Children = ReturnType<typeof Children.toArray>;

const getColumns = (children: Children = []) => {
  const forHeading = 'minmax(auto, 100%)';

  if (!children.length) return forHeading;

  return `${forHeading} repeat(${children.length}, auto)`;
};

const Header: FC = ({ children, ...props }) => {
  const [headingText, ...remainingChildren] = Children.toArray(children);

  return (
    <StyledHeader
      alignItems="end"
      gridGap="small"
      gridTemplateColumns={getColumns(remainingChildren)}
      {...props}
    >
      {headingText}
      {remainingChildren}
    </StyledHeader>
  );
};

export default Header;
