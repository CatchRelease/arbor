import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grid, Icon, MenuItem, Text } from '../src';

const stories = storiesOf('MenuItem', module);

const menuItems = [
  {
    label: 'Ready to Clear (no status dot)',
    name: 'clearance_state',
    value: 'ready_to_clear'
  },
  {
    color: 'grey',
    iconName: 'symbol-circle',
    label: 'Clearance Requested',
    name: 'clearance_state',
    value: 'clearance_requested'
  },
  {
    color: 'blue',
    iconName: 'symbol-circle',
    label: 'Clearance Negotiation',
    name: 'clearance_state',
    value: 'clearance_negotation'
  },
  {
    color: 'blue',
    iconName: 'symbol-circle',
    label: 'Copyright Approval',
    name: 'clearance_state',
    value: 'copyright_approval'
  },
  {
    color: 'green',
    iconName: 'symbol-circle',
    label: 'Ready to License',
    name: 'clearance_state',
    value: 'ready_to_license'
  },
  {
    color: 'green',
    iconName: 'symbol-circle',
    label: 'License Requested',
    name: 'clearance_state',
    value: 'license_requested'
  },
  {
    color: 'green',
    iconName: 'symbol-circle',
    label: 'License Acquisition',
    name: 'clearance_state',
    value: 'license_acquisition'
  },
  {
    color: 'green',
    iconName: 'symbol-circle',
    label: 'License Acquired',
    name: 'clearance_state',
    value: 'license_acquired'
  },
  {
    color: 'bronze',
    iconName: 'symbol-circle',
    label: 'At Risk',
    name: 'clearance_state',
    value: 'at_risk'
  },
  {
    color: 'red',
    iconName: 'symbol-circle',
    label: 'Clearance Cancelled',
    name: 'clearance_state',
    value: 'clearance_cancelled'
  },
  {
    color: 'red',
    iconName: 'symbol-circle',
    label: 'Cannot License',
    name: 'clearance_state',
    value: 'cannot_license'
  },
  {
    color: 'grey',
    iconName: 'symbol-circle',
    label: 'Primary Label',
    secondaryLabel: 'Secondary Label',
    name: 'menu_item',
    value: 'with_secondary_label'
  },
  {
    color: 'grey',
    iconName: 'symbol-circle',
    label:
      'Looooooooooooooooooooooooooooooooooooooooooong Primary Label Without Secondary Label',
    name: 'menu_item',
    value: 'with_long_label_without_secondary_label'
  },
  {
    color: 'grey',
    iconName: 'symbol-circle',
    label: 'Looooooooooooooooooooooooooooooooooooooooooong Primary Label',
    secondaryLabel: 'Secondary Label',
    name: 'menu_item',
    value: 'with_long_label_with_secondary_label'
  },
  {
    color: 'grey',
    iconName: 'symbol-circle',
    label: 'Primary Label',
    secondaryLabel:
      'Looooooooooooooooooooooooooooooooooooooooooooooooooong Secondary Label',
    name: 'menu_item',
    value: 'with_long_secondary_label'
  },
  {
    color: 'grey',
    iconName: 'symbol-circle',
    label: 'Loooooooooooooooooooooooooooooooooooooooooooooooong Primary Label',
    secondaryLabel:
      'Loooooooooooooooooooooooooooooooooooooooooooooooong Secondary Label',
    name: 'menu_item',
    value: 'with_long_label_with_long_secondary_label'
  }
];

stories.add('default', () => (
  <Box>
    {menuItems.map(item => (
      <MenuItem
        onClick={() => alert(item.value)} // eslint-disable-line no-alert, no-undef
      >
        <Grid gridTemplateColumns="0fr 1fr" gridGap="small">
          <Icon name={item.iconName} color={item.color} />
          <Text>{item.label}</Text>
        </Grid>
      </MenuItem>
    ))}
  </Box>
));
