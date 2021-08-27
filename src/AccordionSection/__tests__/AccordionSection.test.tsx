import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import AccordionSection, { Props } from '../AccordionSection';

describe('<AccordionSection />', () => {
  const baseProps = {
    children: <p>Hello World</p>,
    header: 'My Accordion',
    panelId: 'my-accordion-1'
  };

  const render = (additionalProps?: Partial<Props>) => {
    const props = { ...baseProps, ...additionalProps };
    return shallow(<AccordionSection {...props} />);
  };

  describe('Variants', () => {
    (['default', 'minimal'] as const).forEach((variant) => {
      it(`properly renders a ${variant} accordion`, () => {
        const accordion = createWithTheme(
          <AccordionSection {...{ ...baseProps, variant }} />
        );

        expect(accordion).toMatchSnapshot();
      });
    });
  });

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

  describe('Children', () => {
    describe('AccordionHeader', () => {
      it('renders an AccordionHeader', () => {
        const section = render();

        expect(section.find('AccordionHeader')).toExist();
      });

      it('passes a note to the accordion header', () => {
        const headerNote = 'cordions are fun';
        const section = render({ headerNote });

        expect(section.find('AccordionHeader')).toHaveProp({
          note: headerNote
        });
      });

      it('passes a header to the accordion header', () => {
        const header = 'Accordion header';
        const section = render({ header });

        expect(section.find('AccordionHeader')).toHaveProp({ text: header });
      });
    });

    context('Controlled accordion', () => {
      context('accordion is open', () => {
        it('opens the accordion', () => {
          const section = render({ isOpen: true });

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: true });
        });
      });

      context('accordion is closed', () => {
        it('does not render the accordion body', () => {
          const section = render({ isOpen: false });

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: false });
        });
      });
    });

    context('Uncontrolled accordion', () => {
      it('does not render the accordion body', () => {
        const section = render();

        expect(section.find('AccordionPanel')).toHaveProp({ isOpen: false });
      });
    });
  });

  describe('event handlers', () => {
    describe('accordion header onClick', () => {
      context('uncontrolled accordion', () => {
        it('opens and closes the accordion', () => {
          const section = render();

          section.find('AccordionHeader').simulate('click');

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: true });

          section.find('AccordionHeader').simulate('click');

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: false });
        });
      });

      context('controlled accordion', () => {
        it('does not change the accordion state', () => {
          const section = render({ isOpen: false });

          section.find('AccordionHeader').simulate('click');

          expect(section.find('AccordionPanel')).toHaveProp({ isOpen: false });
        });

        it('calls the onHeaderClick prop', () => {
          const onHeaderClick = jest.fn();

          const section = render({ isOpen: false, onHeaderClick });

          section.find('AccordionHeader').simulate('click');

          expect(onHeaderClick).toHaveBeenCalled();
        });
      });
    });
  });
});
