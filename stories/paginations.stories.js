import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import notes from './paginations.md';
import { Pagination, Flex } from '../src';

const stories = storiesOf('Pagination', module);

class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 11
    };
  }

  paginate = (newPage) => {
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

PaginationContainer.propTypes = {
  size: PropTypes.string
};

PaginationContainer.defaultProps = {
  size: undefined
};

stories.add(
  'default',
  () => (
    <Flex mt="100px" justifyContent="center">
      <PaginationContainer />
    </Flex>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'small',
  () => (
    <Flex mt="100px" justifyContent="center">
      <PaginationContainer size="small" />
    </Flex>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'medium',
  () => (
    <Flex mt="100px" justifyContent="center">
      <PaginationContainer size="medium" />
    </Flex>
  ),
  { notes: { markdown: notes } }
);
