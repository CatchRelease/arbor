/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import { ThemeProvider, withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import 'react-tippy/dist/tippy.css';
import { Tooltip as TippyTooltip } from 'react-tippy';

import StyledTooltipContent from './StyledTooltipContent';

const globalTippyStyles = theme => {
  const arrowColor = theme.colors.monochrome.grey90;

  return css`
    .tippy-popper {
      .tippy-tooltip.arbor-theme {
        background: none;
        padding: 0;
      }
    }

    .tippy-popper[x-placement='bottom'] .tippy-tooltip.arbor-theme [x-arrow] {
      border-bottom-color: ${arrowColor};
    }

    .tippy-popper[x-placement='top'] .tippy-tooltip.arbor-theme [x-arrow] {
      border-top-color: ${arrowColor};
    }

    .tippy-popper[x-placement='left'] .tippy-tooltip.arbor-theme [x-arrow] {
      border-left-color: ${arrowColor};
    }

    .tippy-popper[x-placement='right'] .tippy-tooltip.arbor-theme [x-arrow] {
      border-right-color: ${arrowColor};
    }
  `;
};

const Tooltip = ({ content, children, theme, ...props }) => {
  const tooltipContent = (
    <ThemeProvider theme={theme}>
      <StyledTooltipContent>{content}</StyledTooltipContent>
    </ThemeProvider>
  );

  return (
    <Fragment>
      <Global styles={globalTippyStyles} />

      <TippyTooltip
        {...{
          ...props,
          theme: 'arbor',
          arrow: true,
          html: tooltipContent,
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
   * Content to display within the tooltip when it is displayed
   * */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Theme used for styling the Tooltip.
   */
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withTheme(Tooltip);
