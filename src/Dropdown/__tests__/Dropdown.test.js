import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import mountWithTheme from '../../../utils/mountWithTheme';

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
        value: 'ready_to_clear'
      }
    ],
    name: 'clearance_state'
  };

  function mountWithProps(additionalProps = {}) {
    const props = { ...baseProps, ...additionalProps };

    return mountWithTheme(<Dropdown {...{ ...props }}>Click Me</Dropdown>);
  }

  describe('children', () => {
    describe('Popover', () => {
      it('renders properly', () => {
        const dropdown = mountWithProps();
        const popover = dropdown.find(Popover);

        expect(popover).toExist();
      });

      it('receives popoverProps as props', () => {
        const dropdown = mountWithProps({ popoverProps: { foo: 'bar' } });

        expect(dropdown.find(Popover)).toHaveProp({
          foo: 'bar'
        });
      });
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

          instance.onKeyDown({ key: ARROW_DOWN, preventDefault: () => null });

          expect(dropdown).toHaveState({ isOpen: false });
        });
      });

      context('button trigger focused', () => {
        beforeEach(() => {
          const buttonDOMNode = dropdown.find('button').getDOMNode();
          activeElementSpy.mockReturnValue(buttonDOMNode);
        });

        it('opens popover', async () => {
          const instance = dropdown.instance();

          act(() => {
            instance.onKeyDown({ key: ARROW_DOWN, preventDefault: () => null });
          });

          expect(dropdown).toHaveState({ isOpen: true });
        });
      });
    });
  });
});
