import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import notes from './popovers.md';
import { Button, Flex, Heading, Link, Popover } from '../src';

const stories = storiesOf('Popover', module);

const ExamplePopover = () => {
  const ref = useRef(null);

  const closePopover = (e) => {
    e.preventDefault();
    ref.current.close();
  };

  const popoverContent = (
    <div>
      <Heading.h2>Popover Content</Heading.h2>
      <Link href="#click" onClick={closePopover}>
        Click me to close
      </Link>
    </div>
  );

  return (
    <Popover
      ref={ref}
      content={popoverContent}
      isMobileFullScreen={boolean('isMobileFullScreen', false)}
    >
      <Button variant="secondary">Popover</Button>
    </Popover>
  );
};

stories.addDecorator(withKnobs);
stories.add(
  'default',
  () => (
    <Flex m="regular">
      <ExamplePopover />
    </Flex>
  ),
  { notes: { markdown: notes } }
);
