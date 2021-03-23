import { createRef, Component } from 'react';

import notes from './popovers.md';
import { Button, Flex, Heading, Link, Popover } from '../src';

class ExamplePopover extends Component {
  constructor(props) {
    super(props);
    this.popover = createRef();
  }

  closePopover = (e) => {
    e.preventDefault();
    this.popover.current.close();
  };

  render() {
    const popoverContent = (
      <div>
        <Heading.H2>Popover Content</Heading.H2>
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

export default {
  title: 'Popover'
};

export const Default = () => (
  <Flex m="regular">
    <ExamplePopover />
  </Flex>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
