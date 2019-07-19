/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import 'react-tippy/dist/tippy.css';
import { Tooltip as TippyTooltip } from 'react-tippy';

import Text from '../Text';

const globalTippyStyles = theme => css`
  .tippy-tooltip.arbor-theme {
    border-radius: ${theme.radii.small};
    padding: 0;
  }
`;

const Tooltip = ({ text, children, theme, ...props }) => {
  const tooltipText = (
    <Text
      {...{
        px: 'smaller',
        py: 'smaller',
        fontSize: 'size4',
        color: 'white',
        theme
      }}
    >
      {text}
    </Text>
  );

  return (
    <Fragment>
      <Global styles={globalTippyStyles} />

      <TippyTooltip
        {...{
          ...props,
          theme: 'arbor',
          arrow: true,
          html: tooltipText,
          distance: 8,
          duration: 300,
          updateDuration: 0,
          arrowSize: 'medium',
          animation: 'fade',
          inertia: true,
          animateFill: false
        }}
      >
        {children}
      </TippyTooltip>
    </Fragment>
  );
};

Tooltip.propTypes = {
  /**
   * Node which will trigger the tooltip. This should be either an Icon, Button,
   * or Link.
   * */
  children: PropTypes.element.isRequired,

  /**
   * Text to display within the tooltip when it is displayed
   * */
  text: PropTypes.string.isRequired,

  /**
   * Theme used for styling the Tooltip.
   */
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withTheme(Tooltip);
