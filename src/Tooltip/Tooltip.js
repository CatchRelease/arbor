/** @jsx jsx */
import { useState } from 'react'; /* eslint-disable-line no-unused-vars */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { animateFill, sticky } from 'tippy.js';
import styled from '@emotion/styled';

const StyledTippy = styled(Tippy)`
  background: none;
  padding: 0;

  &[data-placement^='top'] > .tippy-arrow::before {
    border-top-color: ${(props) => props.theme.colors.monochrome.grey90};
  }

  &[data-placement^='bottom'] > .tippy-arrow::before {
    border-bottom-color: ${(props) => props.theme.colors.monochrome.grey90};
  }

  &[data-placement^='left'] > .tippy-arrow::before {
    border-left-color: ${(props) => props.theme.colors.monochrome.grey90};
  }

  &[data-placement^='right'] > .tippy-arrow::before {
    border-right-color: ${(props) => props.theme.colors.monochrome.grey90};
  }

  .tippy-content {
    background: ${(props) => props.theme.colors.monochrome.grey90};
    border-radius: ${(props) => props.theme.space.small};
    color: ${(props) => props.theme.colors.monochrome.white};
    font-size: ${(props) => props.theme.fontSizes.size4};
    padding: ${(props) => props.theme.space.smaller};
    font-family: ${(props) => props.theme.brandFont};
    line-height: ${(props) => props.theme.space.small};
  }
`;

const Tooltip = ({ content, children, render, ...props }) => {
  const [mounted, setMounted] = useState(false);

  const lazyPlugin = {
    fn: () => ({
      onShow: () => setMounted(true),
      onHidden: () => setMounted(false)
    })
  };

  const renderProps = {};

  if (render) {
    renderProps.render = (...args) => (mounted ? render(...args) : '');
  } else {
    renderProps.content = mounted ? content : '';
  }

  return (
    <StyledTippy
      {...{
        arrow: true,
        duration: 300,
        animation: 'fade',
        inertia: true,
        plugins: [animateFill, sticky, lazyPlugin],
        ...props,
        ...renderProps
      }}
    >
      {children}
    </StyledTippy>
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
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Render function for rendering tippy element from scratch
   */
  render: PropTypes.func
};

Tooltip.defaultProps = {
  content: null,
  render: null
};

export default Tooltip;
