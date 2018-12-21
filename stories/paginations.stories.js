import React from 'react';
import { storiesOf } from '@storybook/react';

import { Pagination, Flex } from '../src';

const stories = storiesOf('Pagination', module);

class PaginationContainer extends React.Component {
  state = {
    currentPage: 1,
    totalPages: 10
  };

  paginate = newPage => {
    this.setState({ currentPage: newPage });
  };

  render() {
    const { currentPage, totalPages } = this.state;

    return (
      <Pagination {...{ currentPage, totalPages }} paginate={this.paginate} />
    );
  }
}

stories.add('default', () => (
  <Flex mt="100px" justifyContent="center">
    <PaginationContainer />
  </Flex>
));

stories.add('small', () => (
  <Flex mt="100px" justifyContent="center">
    <PaginationContainer />
  </Flex>
));

stories.add('medium', () => (
  <Flex mt="100px" justifyContent="center">
    <PaginationContainer />
  </Flex>
));
