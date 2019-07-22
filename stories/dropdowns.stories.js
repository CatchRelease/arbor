import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import {
  Avatar,
  Box,
  Dropdown,
  Grid,
  Heading,
  Icon,
  MenuItem,
  Text
} from '../src';

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
    const { children, ...props } = this.props;

    return (
      <Dropdown
        menuItems={menuItems}
        name="clearance_state"
        selected={selected}
        onChange={this.onChange}
        {...props}
      >
        {children}
      </Dropdown>
    );
  }
}

DropdownContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

const CustomMenuItem = ({ label, secondaryLabel, ...props }) => (
  <MenuItem as="a" href={`#${label}`} {...{ label, secondaryLabel, ...props }}>
    <Grid alignItems="center" gridGap="smaller" gridTemplateColumns="0fr 1fr">
      <Icon name="cr-logo" />
      <Box>
        <Text color="inherit">{label}</Text>
        <Text color="text.muted">{secondaryLabel}</Text>
      </Box>
    </Grid>
  </MenuItem>
);

CustomMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string
};

CustomMenuItem.defaultProps = {
  secondaryLabel: undefined
};

stories.add('default', () => (
  <Box as="section" p="regular">
    <Heading.h1 mb="regular">Dropdown</Heading.h1>
    <DropdownContainer>select an item</DropdownContainer>
  </Box>
));

stories.add('custom trigger', () => (
  <Box as="section" p="regular">
    <Heading.h1 mb="regular">Dropdown</Heading.h1>
    <DropdownContainer
      MenuItemComponent={CustomMenuItem}
      TriggerComponent={Avatar}
      name="Bruce Wayne"
    />
  </Box>
));
