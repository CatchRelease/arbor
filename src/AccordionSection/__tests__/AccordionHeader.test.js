import createWithTheme from '../../../utils/createWithTheme';
import AccordionHeader from '../AccordionHeader';

describe('<AccordionHeader />', () => {
  const baseProps = {
    variant: 'default',
    isOpen: false,
    panelId: 'my-accordion-1',
    text: 'My Heading'
  };

  const createTree = (additionalProps = {}) =>
    createWithTheme(
      <AccordionHeader {...{ ...baseProps, ...additionalProps }} />
    );

  it('properly renders an accordion header', () => {
    const tree = createTree();

    expect(tree).toMatchSnapshot();
  });

  it('renders with a note', () => {
    const tree = createTree({
      note: 'My Accordion Section Note'
    });

    expect(tree).toMatchSnapshot();
  });

  it('renders with the panel visible', () => {
    const tree = createTree({ isOpen: true });

    expect(tree).toMatchSnapshot();
  });

  it('renders with an on click', () => {
    const tree = createTree({ onClick: jest.fn() });

    expect(tree).toMatchSnapshot();
  });

  it('renders with chevron postion', () => {
    const tree = createTree({ chevronRight: true });

    expect(tree).toMatchSnapshot();
  });
});
