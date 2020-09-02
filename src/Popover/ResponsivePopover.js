import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Popover from './Popover';
import MobilePopover from './MobilePopover';

const ResponivePopover = React.forwardRef(
  ({ isMobileFullScreen, ...props }, ref) => {
    const mobileRef = useRef(null);
    const desktopRef = useRef(null);
    const display = isMobileFullScreen ? ['none', 'block'] : undefined;

    useEffect(() => {
      if (!ref) {
        return;
      }

      // eslint-disable-next-line no-param-reassign
      ref.current = {
        close: () => {
          desktopRef.current.close();
          if (mobileRef && mobileRef.current) {
            mobileRef.current.close();
          }
        },
        open: () => {
          desktopRef.current.open();
          if (mobileRef && mobileRef.current) {
            mobileRef.current.open();
          }
        }
      };
    }, []);

    return (
      <>
        <Box display={display}>
          <Popover ref={desktopRef} {...props} />
        </Box>
        {isMobileFullScreen && (
          <Box display={['block', 'none']}>
            <MobilePopover ref={mobileRef} {...props} />
          </Box>
        )}
      </>
    );
  }
);

ResponivePopover.propTypes = {
  isMobileFullScreen: PropTypes.bool
};

ResponivePopover.defaultProps = {
  isMobileFullScreen: false
};

export default ResponivePopover;
