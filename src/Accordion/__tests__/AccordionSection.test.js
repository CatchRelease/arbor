import React from 'react';
import { shallow } from 'enzyme';

import createWithTheme from '../../../tests/utils/createWithTheme';
import AccordionSection from '../AccordionSection';

describe('<AccordionSection />', () => {
  const baseProps = {
    children: <p>Hello World</p>,
    header: 'My Accordion',
    panelId: 'my-accordion-1'
  };

  const controlledProps = {
    isOpen: false,
    ...baseProps
  };

  const renderControlled = additionalProps => {
    const props = Object.assign({}, controlledProps, additionalProps);
    return shallow(<AccordionSection {...{ ...props }} />);
  };

  const renderWithState = (...args) => {
    const props =
      args.length === 1 ? baseProps : Object.assign({}, baseProps, args[0]);
    const state = args.length === 1 ? args[0] : args[1];

    const rendered = shallow(<AccordionSection {...{ ...props }} />);
    rendered.setState(state);

    return rendered;
  };

  describe('render', () => {
    const createTree = (additionalProps = {}) =>
      createWithTheme(
        <AccordionSection {...{ ...baseProps, ...additionalProps }} />
      );

    context('accordion is open', () => {
      it('renders with the panel visible', () => {
        const tree = createTree({
          isOpen: true
        });

        expect(tree).toMatchSnapshot();
      });
    });

    context('accordion is closed', () => {
      it('renders with the panel hidden', () => {
        const tree = createTree({
          isOpen: false
        });

        expect(tree).toMatchSnapshot();
      });
    });
  });

  it('has a default state', () => {
    const section = renderControlled();

    expect(section).toHaveState({ isOpen: false });
  });

  describe('Children', () => {
    describe('AccordionHeader', () => {
      it('renders an AccordionHeader', () => {
        const section = renderControlled();

        expect(section.find('AccordionHeader')).toExist();
      });

      it('passes a note to the accordion header', () => {
        const headerNote = 'cordions are fun';
        const section = renderControlled({ headerNote });

        expect(section.find('AccordionHeader')).toHaveProp({
          note: headerNote
        });
      });

      it('passes a header to the accordion header', () => {
        const header = 'Accordion header';
        const section = renderControlled({ header });

        expect(section.find('AccordionHeader')).toHaveProp({ text: header });
      });
    });

    context('Controlled accordion', () => {
      context('accordion is open', () => {
        it('opens the accordion', () => {
          const section = renderControlled({ isOpen: true });

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: true });
        });
      });

      context('accordion is closed', () => {
        it('does not render the accordion body', () => {
          const section = renderControlled({ isOpen: false });

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: false });
        });
      });
    });

    context('Uncontrolled accordion', () => {
      context('accordion is open', () => {
        it('renders the accordion body', () => {
          const section = renderWithState({ isOpen: true });

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: true });
        });
      });

      context('accordion is closed', () => {
        it('does not render the accordion body', () => {
          const section = renderWithState({ isOpen: false });

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: false });
        });
      });
    });
  });

  describe('event handlers', () => {
    describe('accordion header onClick', () => {
      context('uncontrolled accordion', () => {
        context('accordion is closed', () => {
          it('opens the accordion', () => {
            const section = renderWithState({ isOpen: false });

            section.find('AccordionHeader').simulate('click');

            expect(section).toHaveState({ isOpen: true });
          });
        });

        context('accordion is open', () => {
          it('closes the accordion', () => {
            const section = renderWithState({ isOpen: true });

            section.find('AccordionHeader').simulate('click');

            expect(section).toHaveState({ isOpen: false });
          });
        });
      });

      context('controlled accordion', () => {
        it('does not change the accordion state', () => {
          const section = renderWithState({ isOpen: false }, { isOpen: true });

          section.find('AccordionHeader').simulate('click');

          expect(section).toHaveState({ isOpen: true });
        });

        it('calls the onHeaderClick prop', () => {
          const onHeaderClick = jest.fn();
          const section = renderWithState(
            { isOpen: false, onHeaderClick },
            { isOpen: true }
          );

          section.find('AccordionHeader').simulate('click');

          expect(onHeaderClick).toHaveBeenCalled();
        });
      });
    });
  });
});
