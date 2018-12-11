import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../src/Menu';

describe('<Menu />', () => {
  const baseProps = {
    menuItems: [
      {
        baseColor: 'grey',
        label: 'Ready to Clear',
        name: 'clearance_state',
        value: 'ready_to_clear'
      }
    ]
  };

  function shallowWithProps(additionalProps = {}) {
    const props = Object.assign({}, baseProps, additionalProps);

    return shallow(<Menu {...{ ...props }} />);
  }

  describe('children', () => {
    it('renders each menuItem as a MenuItem', () => {
      const menuItems = [
        {
          baseColor: 'grey',
          label: 'Ready to Clear',
          name: 'clearance_state',
          value: 'ready_to_clear'
        },
        {
          baseColor: 'green',
          label: 'License Acquired',
          name: 'clearance_state',
          value: 'license_acquired'
        }
      ];
      const menu = shallowWithProps({ menuItems });

      expect(
        menu.find('MenuItem').map(menuItem => menuItem.props().label)
      ).toEqual(['Ready to Clear', 'License Acquired']);
    });

    it('properly sets a MenuItem as selected', () => {
      const menuItems = [
        {
          baseColor: 'grey',
          label: 'Ready to Clear',
          name: 'clearance_state',
          value: 'ready_to_clear'
        }
      ];
      const menu = shallowWithProps({ menuItems, selected: 'ready_to_clear' });

      expect(menu.find('MenuItem').props().selected).toBe(true);
    });

    it('properly sets other MenuItems as not selected', () => {
      const menuItems = [
        {
          baseColor: 'green',
          label: 'License Acquired',
          name: 'clearance_state',
          value: 'license_acquired'
        }
      ];
      const menu = shallowWithProps({ menuItems, selected: 'ready_to_clear' });

      expect(menu.find('MenuItem').props().selected).toBe(false);
    });
  });

  describe('onMenuItemSelect', () => {
    it('updates selected state', () => {
      const menu = shallowWithProps();

      menu.instance().onMenuItemSelect('ready_to_clear');

      expect(menu.state().selected).toEqual('ready_to_clear');
    });

    it('calls the onChange callback', () => {
      const onChange = jest.fn();
      const menu = shallowWithProps({ onChange });

      menu.instance().onMenuItemSelect('ready_to_clear');

      expect(onChange).toHaveBeenCalledWith('ready_to_clear');
    });
  });

  describe('initial state', () => {
    it('sets selected to null by default', () => {
      const menu = shallowWithProps();

      expect(menu.state().selected).toBe(undefined);
    });

    it('sets initial selected item if specified', () => {
      const menu = shallowWithProps({ selected: 'ready_to_clear' });

      expect(menu.state().selected).toEqual('ready_to_clear');
    });
  });
});
