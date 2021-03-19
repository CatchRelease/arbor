import { Component } from 'react';
import PropTypes from 'prop-types';

import notes from './dropdowns.md';
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

class DropdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'clearance_cancelled'
    };
  }

  onChange = (value) => {
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

export default {
  title: 'Dropdown'
};

export const Default = () => (
  <Box as="section" p="regular">
    <Heading.H1 mb="regular">Dropdown</Heading.H1>
    <DropdownContainer>select an item</DropdownContainer>
  </Box>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};

export const CustomTrigger = () => (
  <Box as="section" p="regular">
    <Heading.H1 mb="regular">Dropdown</Heading.H1>
    <DropdownContainer
      MenuItemComponent={CustomMenuItem}
      TriggerComponent={Avatar}
      name="Bruce Wayne"
    />
  </Box>
);

CustomTrigger.story = {
  name: 'custom trigger',
  parameters: { notes: { markdown: notes } }
};
