import { ComponentProps, ReactNode, useState, VFC } from 'react';
import { css } from '@emotion/react';
import Tippy from '@tippyjs/react/headless';
import { sticky } from 'tippy.js';
import { motion } from 'framer-motion';

import Box from '../Box';
import Card from '../Card';
import Grid from '../Grid';
import Heading from '../Heading';
import Text from '../Text';

type TippyProps = ComponentProps<typeof Tippy>;

type Props = {
  children: TippyProps['children'];
  content?: ReactNode;
  title?: ReactNode;
};

type TippyRenderAttributes = Parameters<
  Exclude<TippyProps['render'], undefined>
>[0];

const Tooltip: VFC<Props> = ({ children, content, title, ...props }) => {
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

  const renderTooltip = (attrs: TippyRenderAttributes) => (
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
          <Heading.H3 color="inherit" mb="0">
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

export default Tooltip;
