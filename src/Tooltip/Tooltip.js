/** @jsx jsx */
import React from 'react'; /* eslint-disable-line no-unused-vars */
import { Global, css, jsx } from '@emotion/core';
import { ThemeProvider, withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { animateFill, sticky } from 'tippy.js';

import StyledTooltipContent from './StyledTooltipContent';

const globalTippyStyles = (theme) => {
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

const Tooltip = ({ content, children, theme, position, ...props }) => {
  const tooltipContent = (
    <ThemeProvider theme={theme}>
      <StyledTooltipContent>{content}</StyledTooltipContent>
    </ThemeProvider>
  );

  return (
    <>
      <Global styles={globalTippyStyles} />

      <Tippy
        {...{
          theme: 'arbor',
          arrow: true,
          content: tooltipContent,
          duration: 300,
          animation: 'fade',
          inertia: true,
          plugins: [animateFill, sticky],
          placement: position,
          ...props
        }}
      >
        {children}
      </Tippy>
    </>
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
   * Position for the tooltip (deprecated, use placement instead)
   * */
  position: PropTypes.string,

  /**
   * Theme used for styling the Tooltip.
   */
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

Tooltip.defaultProps = {
  position: 'top'
};

export default withTheme(Tooltip);
