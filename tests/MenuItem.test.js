import React from 'react';
import mountWithTheme from '../utils/mountWithTheme';
import createWithTheme from '../utils/createWithTheme';

import MenuItem from '../src/Menu/MenuItem';

describe('<MenuItem />', () => {
  const baseProps = {
    label: 'Ready to Clear',
    baseColor: 'grey',
    name: 'clearance_state',
    value: 'ready_to_clear'
  };

  function createWithProps(additionalProps) {
    const props = Object.assign({}, baseProps, additionalProps);
    return createWithTheme(<MenuItem {...{ ...props }} />);
  }

  function mountWithProps(additionalProps) {
    const props = Object.assign({}, baseProps, additionalProps);
    return mountWithTheme(<MenuItem {...{ ...props }} />);
  }

  it('renders a MenuItem properly', () => {
    const menuItem = createWithProps();

    expect(menuItem).toMatchSnapshot();
  });

  it('renders a selected MenuItem properly', () => {
    const menuItem = createWithProps({ selected: true });

    expect(menuItem).toMatchSnapshot();
  });

  describe('input onChange', () => {
    it('calls the onSelect callback with the value', () => {
      const onSelect = jest.fn();
      const value = 'ready_to_clear';
      const menuItem = mountWithProps({ onSelect, value });

      menuItem.find('input').simulate('change');

      expect(onSelect).toHaveBeenCalledWith(value);
    });
  });
});
