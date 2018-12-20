import React from 'react';
import mountWithTheme from './utils/mountWithTheme';
import createWithTheme from './utils/createWithTheme';

import { ENTER_KEY, SPACEBAR } from '../src/constants';
import MenuItem from '../src/Menu/MenuItem';

describe('<MenuItem />', () => {
  const noop = () => null;
  const baseProps = {
    label: 'Ready to Clear',
    baseColor: 'grey',
    name: 'clearance_state',
    value: 'ready_to_clear',
    id: 'menu-item_clearance_state_ready_to_clear'
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

  describe('onClick', () => {
    it('calls the onSelect callback with the value', () => {
      const onSelect = jest.fn();
      const value = 'ready_to_clear';
      const menuItem = mountWithProps({ onSelect, value });

      menuItem.simulate('click');

      expect(onSelect).toHaveBeenCalledWith(value);
    });
  });

  describe('keydown', () => {
    const value = 'ready_to_clear';

    const behavesLikeKeyboardSelector = key => {
      context('menu item is focused', () => {
        it('calls the onSelect callback', () => {
          const onSelect = jest.fn();
          const menu = mountWithProps({ onSelect, value, focused: true });

          menu.instance().onKeyDown({ key, preventDefault: noop });

          expect(onSelect).toHaveBeenCalledWith(value);
        });

        it('prevents the default keydown event', () => {
          const menu = mountWithProps({ focused: true });
          const preventDefault = jest.fn();

          menu.instance().onKeyDown({ key, preventDefault });

          expect(preventDefault).toHaveBeenCalled();
        });
      });

      context('menu item is not focused', () => {
        it('does not call the onSelect callback', () => {
          const onSelect = jest.fn();
          const menu = mountWithProps({ onSelect, value, focused: false });

          menu.instance().onKeyDown({ key });

          expect(onSelect).not.toHaveBeenCalled();
        });
      });
    };

    context('Enter key', () => {
      behavesLikeKeyboardSelector(ENTER_KEY);
    });

    context('Spacebar', () => {
      behavesLikeKeyboardSelector(SPACEBAR);
    });

    context('Other key than Enter or space', () => {
      context('menu item is focused', () => {
        it('does not call the onSelect callback', () => {
          const onSelect = jest.fn();
          const menu = mountWithProps({ onSelect, value, focused: true });

          menu.instance().onKeyDown({ key: 'ArrowDown' });

          expect(onSelect).not.toHaveBeenCalled();
        });
      });
    });
  });
});
