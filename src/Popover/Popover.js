/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useRef, useEffect, useState, forwardRef } from 'react';
import ReactPopover from 'react-popover';
import PropTypes from 'prop-types';
import { useKeyPress } from 'react-use';
import PopoverContent from './PopoverContent';

const Popover = forwardRef(
  (
    {
      children,
      content,
      contentProps,
      preferPlace,
      place,
      onOpen,
      onClose,
      ...popoverProps
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverEl = useRef(null);
    const isEscapePressed = useKeyPress('Escape');
    const isFirstRun = useRef(true);

    useEffect(() => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }

      if (isOpen) {
        onOpen();
      } else {
        onClose();
      }
    }, [isOpen]);

    const open = () => {
      setIsOpen(true);
    };

    const close = () => {
      setIsOpen(false);
    };

    const handleOutsideClick = (e) => {
      const currentRef = popoverEl.current;

      if (
        currentRef.containerEl &&
        !currentRef.containerEl.contains(e.target) &&
        currentRef.targetEl &&
        !currentRef.targetEl.contains(e.target)
      ) {
        close();
      }
    };

    useEffect(() => {
      if (ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = { open, close };
      }
    }, []);

    useEffect(() => {
      if (isEscapePressed) {
        close();
      }
    }, [isEscapePressed]);

    useEffect(() => {
      document.addEventListener('click', handleOutsideClick, true);

      return () => {
        document.removeEventListener('click', handleOutsideClick, true);
      };
    }, []);

    const toggle = () => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    };

    const styledContent = (
      <PopoverContent {...contentProps}>{content}</PopoverContent>
    );

    const trigger = React.cloneElement(children, {
      onClick: toggle
    });

    return (
      <ReactPopover
        ref={popoverEl}
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
);

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
