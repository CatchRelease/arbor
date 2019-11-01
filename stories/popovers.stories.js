import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './popovers.md';
import { Button, Flex, Heading, Link, Popover } from '../src';

const stories = storiesOf('Popover', module);

class ExamplePopover extends React.Component {
  constructor(props) {
    super(props);
    this.popover = React.createRef();
  }

  closePopover = e => {
    e.preventDefault();
    this.popover.current.close();
  };

  render() {
    const popoverContent = (
      <div>
        <Heading.h2>Popover Content</Heading.h2>
        <Link href="#click" onClick={this.closePopover}>
          Click me to close
        </Link>
      </div>
    );

    return (
      <Popover ref={this.popover} content={popoverContent}>
        <Button variant="secondary">Popover</Button>
      </Popover>
    );
  }
}

stories.add(
  'default',
  () => (
    <Flex m="regular">
      <ExamplePopover />
    </Flex>
  ),
  { notes: { markdown: notes } }
);
