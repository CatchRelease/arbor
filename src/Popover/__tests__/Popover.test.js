import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import mountWithTheme from '../../../utils/mountWithTheme';
import Card from '../../Card';
import Popover from '../Popover';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

const mount = (element) => {
  // This is required to clean up after the mountNode, if this doesn't happen
  // subsequent calls to rendering the body will fail.
  ReactDOM.unmountComponentAtNode(mountNode);

  return mountWithTheme(element, { attachTo: mountNode });
};

const simulateClick = (node) => {
  const clickEvent = new window.MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  node.dispatchEvent(clickEvent);
};

describe('<Popover />', () => {
  const baseProps = {
    content: 'Hello World'
  };

  const renderPopover = (props) =>
    shallow(
      <Popover {...{ ...baseProps, ...props }}>
        <button type="button">Trigger</button>
      </Popover>
    );

  it('is closed by default', () => {
    const popover = renderPopover();

    expect(popover.state().isOpen).toBe(false);
  });

  it('passes props to ReactPopover', () => {
    const popover = renderPopover({ foo: 'bar' });

    expect(popover).toHaveProp({
      foo: 'bar'
    });
  });

  describe('content', () => {
    const renderPopoverContent = (props) => {
      const popover = renderPopover(props);
      const body = popover.prop('body');
      return mount(body).find(Card);
    };

    it('defaults to overflow: hidden', () => {
      const content = renderPopoverContent();

      expect(content).toHaveProp({ overflow: 'hidden' });
    });

    it('supports passing explicit overflow', () => {
      const content = renderPopoverContent({
        contentProps: { overflow: 'visible' }
      });

      expect(content).toHaveProp({ overflow: 'visible' });
    });
  });

  describe('outside clicks', () => {
    describe('clicking outisde of the popover', () => {
      it('closes the popover', () => {
        const popover = renderPopover();
        popover.setState({ isOpen: true });

        const wrapper = mount(
          <div>
            <div id="outside">Outside of the popover</div>
            {popover}
          </div>
        );

        const outsideNode = wrapper.find('#outside').getDOMNode();
        simulateClick(outsideNode);

        expect(popover.state().isOpen).toBe(false);
      });
    });

    describe('clicking inside the popover', () => {
      it('does not cloes the popover', () => {
        const popover = renderPopover({
          content: <button type="submit">Inside the popover</button>
        });
        popover.setState({ isOpen: true });

        const wrapper = mount(
          <div>
            <div id="outside">Outside of the popover</div>
            {popover}
          </div>
        );

        const node = wrapper
          .find('button')
          .filterWhere(
            (button) => button.props().children === 'Inside the popover'
          )
          .getDOMNode();
        simulateClick(node);

        expect(popover.state().isOpen).toBe(true);
      });
    });
  });

  describe('pressing escape', () => {
    it('closes the popover', () => {
      const popover = renderPopover({
        content: <button type="submit">Inside the popover</button>
      });
      popover.setState({ isOpen: true });

      const wrapper = mount(
        <div>
          <div id="outside">Outside of the popover</div>
          {popover}
        </div>
      );

      const node = wrapper
        .find('button')
        .filterWhere(
          (button) => button.props().children === 'Inside the popover'
        )
        .getDOMNode();

      const event = new window.KeyboardEvent('keypress', {
        key: 'Escape'
      });
      node.dispatchEvent(event);

      expect(popover.state().isOpen).toBe(false);
    });
  });

  describe('Trigger', () => {
    describe('onClick', () => {
      context('popover is closed', () => {
        it('opens the popover', () => {
          const popover = shallow(
            <Popover content="Hello World">
              <button type="button">Popover</button>
            </Popover>
          );

          popover.find('button').simulate('click');

          expect(popover.state().isOpen).toBe(true);
        });
      });

      context('popover is open', () => {
        it('closes the popover', () => {
          const popover = shallow(
            <Popover content="Hello World">
              <button type="button">Popover</button>
            </Popover>
          );
          popover.setState({ isOpen: true });

          popover.find('button').simulate('click');

          expect(popover.state().isOpen).toBe(false);
        });
      });
    });
  });

  describe('open', () => {
    let onOpenSpy;
    let popover;

    beforeEach(() => {
      onOpenSpy = jest.fn();
      popover = shallow(
        <Popover content="Hello World" onOpen={onOpenSpy}>
          <button type="button">Popover</button>
        </Popover>
      );
    });

    context('not yet opened', () => {
      beforeEach(() => {
        popover.setState({ isOpen: false });
      });

      it('opens the popover', () => {
        popover.instance().open();
        expect(popover).toHaveState('isOpen', true);
      });

      it('calls the onOpen prop', () => {
        popover.instance().open();
        expect(onOpenSpy).toHaveBeenCalledTimes(1);
      });

      it('calls the provided callback', () => {
        const callbackSpy = jest.fn();

        popover.instance().open(callbackSpy);
        expect(callbackSpy).toHaveBeenCalledTimes(1);
      });
    });

    context('already opened', () => {
      beforeEach(() => {
        popover.setState({ isOpen: true });
      });

      it('does not call the onOpen prop', () => {
        popover.instance().open();
        expect(onOpenSpy).not.toHaveBeenCalled();
      });

      it('does not call the provided callback', () => {
        const callbackSpy = jest.fn();

        popover.instance().open(callbackSpy);
        expect(callbackSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('close', () => {
    it('calls the onClose callback if provided', () => {
      const onCloseSpy = jest.fn();
      const popover = shallow(
        <Popover content="Hello World" onClose={onCloseSpy}>
          <button type="button">Popover</button>
        </Popover>
      );
      popover.setState({ isOpen: true });

      popover.instance().close();

      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});
