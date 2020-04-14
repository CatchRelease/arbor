/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ReactPopover from 'react-popover';
import PropTypes from 'prop-types';

import PopoverContent from './PopoverContent';

class Popover extends React.Component {
  state = {
    isOpen: false
  };

  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
    document.addEventListener('keypress', this.handleKeyboard, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
    document.removeEventListener('keypress', this.handleKeyboard, true);
  }

  handleOutsideClick = e => {
    const { isOpen } = this.state;

    if (!isOpen) {
      return;
    }

    const currentRef = this.node.current;

    if (
      !currentRef.containerEl.contains(e.target) &&
      !currentRef.targetEl.contains(e.target)
    ) {
      this.close();
    }
  };

  handleKeyboard = e => {
    if (e.key === 'Escape') {
      this.close();
    }
  };

  open(callback) {
    const { onOpen } = this.props;
    const { isOpen } = this.state;

    if (isOpen) {
      return;
    }

    this.setState({ isOpen: true }, () => {
      if (callback) {
        callback();
      }

      onOpen();
    });
  }

  close() {
    const { onClose } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) {
      return;
    }

    this.setState({ isOpen: false }, onClose);
  }

  toggle = () => {
    const { isOpen } = this.state;

    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  render() {
    const {
      children,
      content,
      contentProps,
      preferPlace,
      place,
      ...popoverProps
    } = this.props;
    const { isOpen } = this.state;

    const styledContent = (
      <PopoverContent {...contentProps}>{content}</PopoverContent>
    );

    const trigger = React.cloneElement(children, {
      onClick: this.toggle
    });

    return (
      <ReactPopover
        ref={this.node}
        isOpen={isOpen}
        body={styledContent}
        preferPlace={preferPlace}
        place={place}
        tipSize={0.01}
        enterExitTransitionDurationMs={0}
        {...popoverProps}
      >
        {trigger}
      </ReactPopover>
    );
  }
}

Popover.propTypes = {
  /**
   * Content to display within the Popover
   */
  content: PropTypes.node.isRequired,

  /**
   * Props to be passed to the PopoverContent component
   */
  contentProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /**
   * The trigger which will open the popover when it is clicked. By default,
   * the child will be cloned and an onClick handler will be attached to open
   * the popover when it is clicked.
   */
  children: PropTypes.node.isRequired,

  /**
   * Optional callback that will be fired once the Popover's state is set to opened
   */
  onOpen: PropTypes.func,

  /**
   * Optional callback that will be fired once the Popover's state is set to closed
   */
  onClose: PropTypes.func,

  /**
   * Preferred location to place the popover when it's opened in the event that
   * there are multiple available areas where the popover would fit. This list
   * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#preferplace--enum-string--null)
   */
  preferPlace: PropTypes.oneOf([
    'above',
    'right',
    'below',
    'left',
    'row',
    'column',
    'start',
    'end'
  ]),

  /**
   * Required location or scope to place the popover when it's opened in the event that
   * there are multiple available areas where the popover would fit. This list
   * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#code-place-string-null-code)
   */
  place: PropTypes.oneOf([
    'above',
    'right',
    'below',
    'left',
    'row',
    'column',
    'start',
    'end'
  ])
};

Popover.defaultProps = {
  contentProps: {},
  preferPlace: 'below',
  place: 'column',
  onOpen: () => null,
  onClose: () => null
};

export default Popover;
