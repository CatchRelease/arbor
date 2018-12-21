import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import { Pagination, Flex } from '../src';

const stories = storiesOf('Pagination', module);

class PaginationContainer extends React.Component {
  static propTypes = {
    size: PropTypes.string
  };

  static defaultProps = {
    size: undefined
  };

  state = {
    currentPage: 1,
    totalPages: 11
  };

  paginate = newPage => {
    this.setState({ currentPage: newPage });
  };

  render() {
    const { size } = this.props;
    const { currentPage, totalPages } = this.state;

    return (
      <Pagination
        {...{ currentPage, totalPages, size }}
        paginate={this.paginate}
      />
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
    <PaginationContainer size="small" />
  </Flex>
));

stories.add('medium', () => (
  <Flex mt="100px" justifyContent="center">
    <PaginationContainer size="medium" />
  </Flex>
));
