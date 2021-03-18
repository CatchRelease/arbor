import { useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { sticky } from 'tippy.js';
import { motion } from 'framer-motion';

import Box from '../Box';
import Card from '../Card';
import Grid from '../Grid';
import Heading from '../Heading';
import Text from '../Text';

const Tooltip = ({ title, content, children, render, ...props }) => {
  const [mounted, setMounted] = useState(false);

  const lazyPlugin = {
    fn: () => ({
      onMount: () => setMounted(true),
      onHide: () => setMounted(false)
    })
  };
  const springConfig = {
    type: 'spring',
    damping: 24,
    stiffness: 480,
    restSpeed: 0.1,
    restDelta: 0.6
  };

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 }
  };

  const renderTooltip = (attrs) => (
    <Box
      as={motion.div}
      initial="hidden"
      variants={variants}
      animate={mounted ? 'visible' : 'hidden'}
      transition={springConfig}
      {...attrs}
    >
      <Card
        bg="monochrome.grey90"
        borderRadius="small"
        boxShadow="elevation1"
        color="monochrome.white"
        gridGap="smallest"
        fontSize="size3"
        maxWidth="200px"
        p="smaller"
        css={css`
          word-break: break-word;
        `}
        {...props}
      >
        {title && (
          <Heading.H3
            mb="0"
            fontSize="inherit"
            color="inherit"
            textAlign="inherit"
          >
            {title}
          </Heading.H3>
        )}
        {content && (
          <Text
            as={Grid}
            fontSize="inherit"
            color="inherit"
            textAlign="inherit"
          >
            {content}
          </Text>
        )}
      </Card>
    </Box>
  );

  return (
    <Tippy
      render={(attrs) => (mounted ? renderTooltip(attrs) : '')}
      offset={[0, 4]}
      plugins={[sticky, lazyPlugin]}
      popperOptions={{
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              padding: 4
            }
          }
        ]
      }}
    >
      {children}
    </Tippy>
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
   * Title to display above the tooltip content
   * */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Render function for rendering tippy element from scratch
   */
  render: PropTypes.func
};

Tooltip.defaultProps = {
  content: null,
  title: null,
  render: null
};

export default Tooltip;
