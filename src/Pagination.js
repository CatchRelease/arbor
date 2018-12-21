import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '.';

const DELTA = 2;
const ELLIPSIS = '...';

class Pagination extends React.Component {
  static propTypes = {
    currentPage: PropTypes.number,
    nextText: PropTypes.string,
    paginate: PropTypes.func.isRequired,
    previousText: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
    totalPages: PropTypes.number
  };

  static defaultProps = {
    currentPage: 0,
    nextText: 'next',
    previousText: 'previous',
    size: 'small',
    totalPages: 0
  };

  getPaginationOptions = () => {
    const { currentPage, totalPages } = this.props;

    const left = currentPage <= 1 + DELTA * 2 ? 1 : currentPage - DELTA;
    const right =
      currentPage >= totalPages - DELTA * 2
        ? totalPages
        : currentPage + DELTA + 1;
    const items = [];

    for (let i = 1; i <= totalPages; i += 1) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        items.push(i);
      } else if (items[items.length - 1] !== ELLIPSIS) {
        items.push(ELLIPSIS);
      }
    }

    return items;
  };

  paginate = newPage => {
    const { paginate } = this.props;

    paginate(newPage);
  };

  renderPaginationItem = (item, index) => {
    const { currentPage, size } = this.props;
    let paginationItem;

    if (item === ELLIPSIS) {
      paginationItem = (
        <Button
          {...{ size }}
          variant="minimal"
          mx="smallest"
          key={`${item}-${index}`}
          disabled
        >
          {item}
        </Button>
      );
    } else {
      const variant = currentPage === item ? 'primary' : 'minimal';

      paginationItem = (
        <Button
          {...{ size, variant }}
          mx="smallest"
          key={item}
          onClick={() => this.paginate(item)}
        >
          {item}
        </Button>
      );
    }

    return paginationItem;
  };

  renderPreviousItem = () => {
    const { currentPage, previousText, size } = this.props;
    const previousDisabled = currentPage === 1;

    return (
      <Button
        {...{ size }}
        variant="minimal"
        mr="small"
        disabled={previousDisabled}
        onClick={() => this.paginate(currentPage - 1)}
      >
        {previousText}
      </Button>
    );
  };

  renderNextItem = () => {
    const { currentPage, totalPages, nextText, size } = this.props;
    const nextDisabled = currentPage === totalPages;

    return (
      <Button
        {...{ size }}
        variant="minimal"
        ml="small"
        disabled={nextDisabled}
        onClick={() => this.paginate(currentPage + 1)}
      >
        {nextText}
      </Button>
    );
  };

  render() {
    const { currentPage, totalPages } = this.props;

    if (!currentPage || !totalPages || totalPages <= 1) {
      return null;
    }

    return (
      <div>
        {this.renderPreviousItem()}
        {this.getPaginationOptions().map(this.renderPaginationItem)}
        {this.renderNextItem()}
      </div>
    );
  }
}

export default Pagination;
