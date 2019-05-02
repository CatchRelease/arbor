import React from 'react';
import { storiesOf } from '@storybook/react';

import { Dropdown, Flex } from '../src';

const stories = storiesOf('Dropdown', module);

const menuItems = [
  {
    baseColor: 'grey',
    label: 'Ready to Clear',
    value: 'ready_to_clear'
  },
  {
    baseColor: 'blue',
    label: 'Clearance Requested',
    value: 'clearance_requested'
  },
  {
    baseColor: 'blue',
    label: 'Clearance Negotiation',
    value: 'clearance_negotation'
  },
  {
    baseColor: 'blue',
    label: 'Copyright Approval',
    value: 'copyright_approval'
  },
  {
    baseColor: 'green',
    label: 'Ready to License',
    value: 'ready_to_license'
  },
  {
    baseColor: 'green',
    label: 'License Requested',
    value: 'license_requested'
  },
  {
    baseColor: 'green',
    label: 'License Acquisition',
    value: 'license_acquisition'
  },
  {
    baseColor: 'green',
    label: 'License Acquired',
    value: 'license_acquired'
  },
  {
    baseColor: 'bronze',
    label: 'At Risk',
    value: 'at_risk'
  },
  {
    baseColor: 'red',
    label: 'Clearance Cancelled',
    value: 'clearance_cancelled'
  },
  {
    baseColor: 'red',
    label: 'Cannot License',
    value: 'cannot_license'
  }
];

class DropdownContainer extends React.Component {
  state = {
    selected: 'clearance_cancelled'
  };

  onChange = value => {
    this.setState({ selected: value });
  };

  render() {
    const { selected } = this.state;

    return (
      <Dropdown
        menuItems={menuItems}
        name="clearance_state"
        selected={selected}
        variant="minimal"
        onChange={this.onChange}
      >
        Clearance Status
      </Dropdown>
    );
  }
}

stories.add('default', () => (
  <Flex mt="100px" justifyContent="center">
    <DropdownContainer />
  </Flex>
));
