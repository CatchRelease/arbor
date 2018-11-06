import React from 'react';
import { injectGlobal } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import 'react-tippy/dist/tippy.css';
import { Tooltip as TippyTooltip } from 'react-tippy';

import Paragraph from './Paragraph';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .tippy-tooltip.arbor-theme {
    padding: 0;
  }
`;

export const Tooltip = ({ text, theme, children, ...props }) => {
  const tooltipText = (
    <Paragraph
      px="smaller"
      py="smallest"
      theme={theme}
      variant="tiny"
      color="white"
    >
      {text}
    </Paragraph>
  );

  return (
    <TippyTooltip
      {...{
        ...props,
        theme: 'arbor',
        arrow: true,
        html: tooltipText
      }}
    >
      {children}
    </TippyTooltip>
  );
};

Tooltip.propTypes = {
  /**
   * Text to display within the tooltip when it is displayed
   * */
  text: PropTypes.string.isRequired,

  /**
   * Node which will trigger the tooltip. This should be either an Icon, Button,
   * or Link.
   * */
  children: PropTypes.element.isRequired
};

export default withTheme(Tooltip);
