import React from 'react';
import { shallow } from 'enzyme';

import { ARROW_DOWN, ARROW_UP, HOME_KEY, END_KEY } from '../../constants';
import Menu from '../Menu';

describe('<Menu />', () => {
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
          value: 'ready_to_clear'
        },
        {
          baseColor: 'green',
          label: 'License Acquired',
          value: 'license_acquired'
        }
      ];
      const menu = shallowWithProps({ menuItems });

      expect(
        menu.find('MenuItem').map(menuItem => menuItem.props().label)
      ).toEqual(['Ready to Clear', 'License Acquired']);
    });

    it('generates an id for menu item', () => {
      const menuItems = [
        {
          baseColor: 'grey',
          label: 'Ready to Clear',
          value: 'ready_to_clear'
        }
      ];
      const menu = shallowWithProps({ menuItems });

      expect(
        menu
          .find('MenuItem')
          .first()
          .props().id
      ).toEqual('menu-item_clearance_state_ready_to_clear');
    });

    it('properly sets a MenuItem as selected', () => {
      const menuItems = [
        {
          baseColor: 'grey',
          label: 'Ready to Clear',
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
          value: 'license_acquired'
        }
      ];
      const menu = shallowWithProps({ menuItems, selected: 'ready_to_clear' });

      expect(menu.find('MenuItem').props().selected).toBe(false);
    });

    it('sets aria-activedescendant to focused menu item id', () => {
      const menuItems = [
        {
          baseColor: 'grey',
          label: 'Ready to Clear',
          value: 'ready_to_clear'
        },
        {
          baseColor: 'green',
          label: 'License Acquired',
          value: 'license_acquired'
        }
      ];
      const menu = shallowWithProps({ menuItems });
      menu.setState({ currentlyFocused: 1 });

      expect(menu.props()['aria-activedescendant']).toEqual(
        'menu-item_clearance_state_license_acquired'
      );
    });

    it('properly flags the focused menu item', () => {
      const menuItems = [
        {
          baseColor: 'grey',
          label: 'Ready to Clear',
          value: 'ready_to_clear'
        }
      ];
      const menu = shallowWithProps({ menuItems });
      menu.setState({ currentlyFocused: 0 });

      expect(menu.find('MenuItem').props().focused).toBe(true);
    });

    it('does not flag unfocused menu items as focused', () => {
      const menuItems = [
        {
          baseColor: 'grey',
          label: 'Ready to Clear',
          value: 'ready_to_clear'
        }
      ];
      const menu = shallowWithProps({ menuItems });
      menu.setState({ currentlyFocused: 1 });

      expect(menu.find('MenuItem').props().focused).toBe(false);
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

  describe('componentDidMount', () => {
    it('attaches an event listener for keydown events', () => {
      document.addEventListener = jest.fn();
      const menu = shallowWithProps();

      menu.instance().componentDidMount();

      expect(document.addEventListener).toHaveBeenCalledWith(
        'keydown',
        menu.instance().onKeyDown,
        true
      );
    });

    describe('componentWillUnmount', () => {
      document.removeEventListener = jest.fn();
      const menu = shallowWithProps();

      menu.instance().componentWillUnmount();

      expect(document.removeEventListener).toHaveBeenCalledWith(
        'keydown',
        menu.instance().onKeyDown,
        true
      );
    });
  });

  describe('onKeyDown', () => {
    context('arrow down', () => {
      context('nothing is focused', () => {
        it('focuses the first menu item', () => {
          const menuItems = [
            {
              baseColor: 'grey',
              label: 'Ready to Clear',
              value: 'ready_to_clear'
            }
          ];
          const menu = shallowWithProps({ menuItems });

          menu.instance().onKeyDown({ key: ARROW_DOWN });

          expect(menu.state().currentlyFocused).toBe(0);
        });
      });

      context('an item is already focused', () => {
        context('a next item exists', () => {
          it('focuses the next item', () => {
            const menuItems = [
              {
                baseColor: 'grey',
                label: 'Ready to Clear',
                value: 'ready_to_clear'
              },
              {
                baseColor: 'green',
                label: 'License Acquired',
                value: 'license_acquired'
              }
            ];
            const menu = shallowWithProps({ menuItems });
            menu.setState({ currentlyFocused: 0 });

            menu.instance().onKeyDown({ key: ARROW_DOWN });

            expect(menu.state().currentlyFocused).toBe(1);
          });
        });

        context('focused item is last menu item', () => {
          it('does not change the focused menu item', () => {
            const menuItems = [
              {
                baseColor: 'grey',
                label: 'Ready to Clear',
                value: 'ready_to_clear'
              }
            ];
            const menu = shallowWithProps({ menuItems });
            menu.setState({ currentlyFocused: 0 });

            menu.instance().onKeyDown({ key: ARROW_DOWN });

            expect(menu.state().currentlyFocused).toBe(0);
          });
        });
      });
    });

    describe('arrow up', () => {
      context('nothing is focused', () => {
        it('focuses the first menu item', () => {
          const menuItems = [
            {
              baseColor: 'grey',
              label: 'Ready to Clear',
              value: 'ready_to_clear'
            }
          ];
          const menu = shallowWithProps({ menuItems });

          menu.instance().onKeyDown({ key: ARROW_UP });

          expect(menu.state().currentlyFocused).toBe(0);
        });
      });

      context('already focusing first item', () => {
        it('does not change the focus', () => {
          const menuItems = [
            {
              baseColor: 'grey',
              label: 'Ready to Clear',
              value: 'ready_to_clear'
            }
          ];
          const menu = shallowWithProps({ menuItems });
          menu.setState({ currentlyFocused: 0 });

          menu.instance().onKeyDown({ key: ARROW_UP });

          expect(menu.state().currentlyFocused).toBe(0);
        });
      });

      context('previous item exists to focus', () => {
        it('focuses the previous item', () => {
          const menuItems = [
            {
              baseColor: 'grey',
              label: 'Ready to Clear',
              value: 'ready_to_clear'
            },
            {
              baseColor: 'green',
              label: 'License Acquired',
              value: 'license_acquired'
            }
          ];
          const menu = shallowWithProps({ menuItems });
          menu.setState({ currentlyFocused: 1 });

          menu.instance().onKeyDown({ key: ARROW_UP });

          expect(menu.state().currentlyFocused).toBe(0);
        });
      });
    });

    describe('Home key', () => {
      it('focuses the first item', () => {
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
            baseColor: 'green',
            label: 'License Acquired',
            value: 'license_acquired'
          }
        ];
        const menu = shallowWithProps({ menuItems });
        menu.setState({ currentlyFocused: 2 });

        menu.instance().onKeyDown({ key: HOME_KEY });

        expect(menu.state().currentlyFocused).toBe(0);
      });
    });

    describe('End key', () => {
      it('focuses the first item', () => {
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
            baseColor: 'green',
            label: 'License Acquired',
            value: 'license_acquired'
          }
        ];
        const menu = shallowWithProps({ menuItems });
        menu.setState({ currentlyFocused: 0 });

        menu.instance().onKeyDown({ key: END_KEY });

        expect(menu.state().currentlyFocused).toBe(2);
      });
    });
  });
});
