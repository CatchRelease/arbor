import React from 'react';

import Flex from './Flex';

const CardRow = ({ props, children }) => (
  <Flex
    px="regular"
    py="smallest"
    my="smaller"
    alignItems="center"
    justifyContent="space-between"
    {...props}
  >
    {children}
  </Flex>
);

export default CardRow;
