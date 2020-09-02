import React, { useEffect, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Box from '../Box';

const ContentContainer = styled(Box)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const MobilePopover = forwardRef(
  ({ children, content, onOpen, onClose }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
      setIsOpen(true);
    };

    const close = () => {
      setIsOpen(false);
    };

    useEffect(() => {
      // eslint-disable-next-line no-param-reassign
      ref.current = { open, close };
    }, []);

    useEffect(() => {
      if (isOpen) {
        onOpen();
      } else {
        onClose();
      }
    }, [isOpen, onOpen, onClose]);

    const trigger = React.cloneElement(children, {
      onClick: open
    });

    return (
      <>
        {trigger}
        {isOpen && <ContentContainer bg="white">{content}</ContentContainer>}
      </>
    );
  }
);

MobilePopover.propTypes = {
  /**
   * Content to display within the Popover
   */
  content: PropTypes.node.isRequired,
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
  onClose: PropTypes.func
};

MobilePopover.defaultProps = {
  onOpen: () => null,
  onClose: () => null
};

export default MobilePopover;
