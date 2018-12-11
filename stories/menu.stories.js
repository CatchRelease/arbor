import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Menu, Popover, Flex } from '../src';

const stories = storiesOf('Menu', module);

const menuItems = [
  {
    baseColor: 'grey',
    label: 'Ready to Clear',
    name: 'clearance_state',
    value: 'ready_to_clear'
  },
  {
    baseColor: 'blue',
    label: 'Clearance Requested',
    name: 'clearance_state',
    value: 'clearance_requested'
  },
  {
    baseColor: 'blue',
    label: 'Clearance Negotiation',
    name: 'clearance_state',
    value: 'clearance_negotation'
  },
  {
    baseColor: 'blue',
    label: 'Copyright Approval',
    name: 'clearance_state',
    value: 'copyright_approval'
  },
  {
    baseColor: 'green',
    label: 'Ready to License',
    name: 'clearance_state',
    value: 'ready_to_license'
  },
  {
    baseColor: 'green',
    label: 'License Requested',
    name: 'clearance_state',
    value: 'license_requested'
  },
  {
    baseColor: 'green',
    label: 'License Acquisition',
    name: 'clearance_state',
    value: 'license_acquisition'
  },
  {
    baseColor: 'green',
    label: 'License Acquired',
    name: 'clearance_state',
    value: 'license_acquired'
  },
  {
    baseColor: 'bronze',
    label: 'At Risk',
    name: 'clearance_state',
    value: 'at_risk'
  },
  {
    baseColor: 'red',
    label: 'Clearance Cancelled',
    name: 'clearance_state',
    value: 'clearance_cancelled'
  },
  {
    baseColor: 'red',
    label: 'Cannot License',
    name: 'clearance_state',
    value: 'cannot_license'
  }
];

const menu = <Menu menuItems={menuItems} />;

stories.add('default', () => (
  <Flex mt="100px" justifyContent="center">
    <Popover content={menu}>
      <Button variant="minimal">Clearance Status</Button>
    </Popover>
  </Flex>
));
