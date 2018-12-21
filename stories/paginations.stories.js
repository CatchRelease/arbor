import React from 'react';
import { storiesOf } from '@storybook/react';

import { Pagination, Flex } from '../src';

const stories = storiesOf('Pagination', module);

stories.add('default', () => (
  <Flex mt="100px" justifyContent="center">
    <Pagination currentPage={1} totalPages={10} />
  </Flex>
));

stories.add('small', () => (
  <Flex mt="100px" justifyContent="center">
    <Pagination size="small" currentPage={1} totalPages={10} />
  </Flex>
));

stories.add('medium', () => (
  <Flex mt="100px" justifyContent="center">
    <Pagination size="medium" currentPage={1} totalPages={10} />
  </Flex>
));
