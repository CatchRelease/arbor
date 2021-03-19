import { Component } from 'react';
import PropTypes from 'prop-types';

import notes from './paginations.md';
import { Pagination, Flex } from '../src';

class PaginationContainer extends Component {
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

export default {
  title: 'Pagination'
};

export const Default = () => (
  <Flex mt="100px" justifyContent="center">
    <PaginationContainer />
  </Flex>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};

export const Small = () => (
  <Flex mt="100px" justifyContent="center">
    <PaginationContainer size="small" />
  </Flex>
);

Small.story = {
  name: 'small',
  parameters: { notes: { markdown: notes } }
};

export const Medium = () => (
  <Flex mt="100px" justifyContent="center">
    <PaginationContainer size="medium" />
  </Flex>
);

Medium.story = {
  name: 'medium',
  parameters: { notes: { markdown: notes } }
};
