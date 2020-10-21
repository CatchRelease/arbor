import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import notes from './menu.md';
import { Box, Grid, Heading, Icon, Menu, MenuItem, Text } from '../src';

const stories = storiesOf('Menu', module);

const menuItems = [
  {
    label: 'Ready to Clear (no status dot)',
    name: 'clearance_state',
    value: 'ready_to_clear'
  },
  {
    baseColor: 'grey',
    iconName: 'symbol-circle',
    label: 'Clearance Requested',
    name: 'clearance_state',
    value: 'clearance_requested'
  },
  {
    baseColor: 'blue',
    iconName: 'symbol-circle',
    label: 'Clearance Negotiation',
    name: 'clearance_state',
    value: 'clearance_negotation'
  },
  {
    baseColor: 'blue',
    iconName: 'symbol-circle',
    label: 'Copyright Approval',
    name: 'clearance_state',
    value: 'copyright_approval'
  },
  {
    baseColor: 'green',
    iconName: 'symbol-circle',
    label: 'Ready to License',
    name: 'clearance_state',
    value: 'ready_to_license'
  },
  {
    baseColor: 'green',
    iconName: 'symbol-circle',
    label: 'License Requested',
    name: 'clearance_state',
    value: 'license_requested'
  },
  {
    baseColor: 'green',
    iconName: 'symbol-circle',
    label: 'License Acquisition',
    name: 'clearance_state',
    value: 'license_acquisition'
  },
  {
    baseColor: 'green',
    iconName: 'symbol-circle',
    label: 'License Acquired',
    name: 'clearance_state',
    value: 'license_acquired'
  },
  {
    baseColor: 'bronze',
    iconName: 'symbol-circle',
    label: 'At Risk',
    name: 'clearance_state',
    value: 'at_risk'
  },
  {
    baseColor: 'red',
    iconName: 'symbol-circle',
    label: 'Clearance Cancelled',
    name: 'clearance_state',
    value: 'clearance_cancelled'
  },
  {
    baseColor: 'red',
    iconName: 'symbol-circle',
    label: 'Cannot License',
    name: 'clearance_state',
    value: 'cannot_license'
  },
  {
    baseColor: 'grey',
    iconName: 'symbol-circle',
    label: 'Primary Label',
    secondaryLabel: 'Secondary Label',
    name: 'menu_item',
    value: 'with_secondary_label'
  },
  {
    baseColor: 'grey',
    iconName: 'symbol-circle',
    label:
      'Looooooooooooooooooooooooooooooooooooooooooong Primary Label Without Secondary Label',
    name: 'menu_item',
    value: 'with_long_label_without_secondary_label'
  },
  {
    baseColor: 'grey',
    iconName: 'symbol-circle',
    label: 'Looooooooooooooooooooooooooooooooooooooooooong Primary Label',
    secondaryLabel: 'Secondary Label',
    name: 'menu_item',
    value: 'with_long_label_with_secondary_label'
  },
  {
    baseColor: 'grey',
    iconName: 'symbol-circle',
    label: 'Primary Label',
    secondaryLabel:
      'Looooooooooooooooooooooooooooooooooooooooooooooooooong Secondary Label',
    name: 'menu_item',
    value: 'with_long_secondary_label'
  },
  {
    baseColor: 'grey',
    iconName: 'symbol-circle',
    label: 'Loooooooooooooooooooooooooooooooooooooooooooooooong Primary Label',
    secondaryLabel:
      'Loooooooooooooooooooooooooooooooooooooooooooooooong Secondary Label',
    name: 'menu_item',
    value: 'with_long_label_with_long_secondary_label'
  }
];

const CustomMenuItemComponent = ({ label, secondaryLabel, ...props }) => (
  <MenuItem {...{ label, secondaryLabel, ...props }}>
    <Grid alignItems="center" gridGap="smaller" gridTemplateColumns="0fr 1fr">
      <Icon name="cr-logo" />
      <Box>
        <Text color="inherit">{label}</Text>
        <Text color="text.muted">{secondaryLabel}</Text>
      </Box>
    </Grid>
  </MenuItem>
);

CustomMenuItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string
};

CustomMenuItemComponent.defaultProps = {
  secondaryLabel: undefined
};

stories.add(
  'default',
  () => (
    <Box as="section" p="regular">
      <Heading.H1 mb="regular">Standard Menu</Heading.H1>
      <Menu name="Standard Menu" menuItems={menuItems} />
    </Box>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'custom menu items',
  () => (
    <Box as="section" p="regular">
      <Heading.H1 mb="regular">Menu with Custom Menu Item</Heading.H1>
      <Menu
        name="Custom Menu"
        menuItems={menuItems}
        MenuItemComponent={CustomMenuItemComponent}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);
