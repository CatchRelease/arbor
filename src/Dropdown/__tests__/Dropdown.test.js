import React from 'react';
import { shallow } from 'enzyme';
import mountWithTheme from '../../../tests/utils/mountWithTheme';

import Button from '../../Button';
import Dropdown from '..';
import Menu from '../../Menu';
import Popover from '../../Popover';
import { ARROW_DOWN } from '../../constants';

describe('<Dropdown />', () => {
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

  function mountWithProps(additionalProps = {}) {
    const props = Object.assign({}, baseProps, additionalProps);

    return mountWithTheme(<Dropdown {...{ ...props }}>Click Me</Dropdown>);
  }

  describe('children', () => {
    it('renders a Popover', () => {
      const dropdown = mountWithProps();
      const popover = dropdown.find(Popover);

      expect(popover).toExist();
    });

    describe('Menu', () => {
      it('renders a Menu', () => {
        const dropdown = mountWithProps();
        const instance = dropdown.instance();
        const popover = dropdown.find(Popover);
        const menu = shallow(<div>{popover.props().content}</div>).find(Menu);

        expect(menu).toExist();
        expect(menu).toHaveProp({
          menuItems: baseProps.menuItems,
          onChange: instance.onChange,
          selected: undefined
        });
      });

      it('sets initial selected item', () => {
        const dropdown = mountWithProps({ selected: 'ready_to_clear' });
        const popover = dropdown.find(Popover);
        const menu = shallow(<div>{popover.props().content}</div>).find(Menu);

        expect(menu).toHaveProp({
          selected: 'ready_to_clear'
        });
      });
    });

    it('renders a trigger', () => {
      const dropdown = mountWithProps();

      expect(dropdown.find(Button)).toExist();
      expect(dropdown).toHaveProp({
        children: dropdown.props().children
      });
    });
  });

  describe('onChange', () => {
    it('calls the onChange callback', () => {
      const onChange = jest.fn();
      const dropdown = mountWithProps({ onChange });

      dropdown.instance().onChange('ready_to_clear');

      expect(onChange).toHaveBeenCalledWith('ready_to_clear');
    });

    it('closes the popover', () => {
      const dropdown = mountWithProps();
      const instance = dropdown.instance();
      const popoverCloseSpy = jest.spyOn(instance.popover.current, 'close');

      instance.onChange('ready_to_clear');

      expect(popoverCloseSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onOpen', () => {
    it('focus the first item', () => {
      const dropdown = mountWithProps();
      const instance = dropdown.instance();

      // open the popover to render the menu
      instance.popover.current.open();

      const focusMenuItemSpy = jest.spyOn(
        instance.menu.current,
        'focusMenuItem'
      );

      instance.onOpen();

      expect(focusMenuItemSpy).toHaveBeenCalledTimes(1);
      expect(focusMenuItemSpy).toHaveBeenLastCalledWith(0);
    });
  });

  describe('onKeyDown', () => {
    context('arrow down', () => {
      let activeElementSpy;
      let dropdown;

      beforeEach(() => {
        dropdown = mountWithProps();
        activeElementSpy = jest.spyOn(document, 'activeElement', 'get');
      });

      context('button trigger not focused', () => {
        beforeEach(() => {
          activeElementSpy.mockReturnValue(null);
        });

        it('does not open popover', () => {
          const instance = dropdown.instance();

          const popoverOpenSpy = jest.spyOn(instance.popover.current, 'open');
          instance.onKeyDown({ key: ARROW_DOWN, preventDefault: () => null });

          expect(popoverOpenSpy).not.toHaveBeenCalled();
        });
      });

      context('button trigger focused', () => {
        beforeEach(() => {
          const buttonDOMNode = dropdown.find('button').getDOMNode();
          activeElementSpy.mockReturnValue(buttonDOMNode);
        });

        it('opens popover', () => {
          const instance = dropdown.instance();

          const popoverOpenSpy = jest.spyOn(instance.popover.current, 'open');
          instance.onKeyDown({ key: ARROW_DOWN, preventDefault: () => null });

          expect(popoverOpenSpy).toHaveBeenCalledTimes(1);
          expect(popoverOpenSpy).toHaveBeenLastCalledWith(instance.onOpen);
        });
      });
    });
  });
});
