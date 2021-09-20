import Masonry from '../Masonry';
import createWithTheme from '../../../utils/createWithTheme';

describe('<Masonry />', () => {
  it('renders properly', () => {
    const tree = createWithTheme(
      <Masonry
        columnCount={3}
        columnGap="regular"
        columnRuleColor="black"
        columnRuleStyle="solid"
        columnRuleWidth="1px"
        columnWidth="300px"
        rowGap="regular"
      >
        <div key="1">Masonry Item 1</div>
        <div key="2">Masonry Item 2</div>
        <div key="3">Masonry Item 3</div>
        <div key="4">Masonry Item 4</div>
        <div key="5">Masonry Item 5</div>
        <div key="6">Masonry Item 6</div>
        <div key="7">Masonry Item 7</div>
        <div key="8">Masonry Item 8</div>
        <div key="9">Masonry Item 9</div>
      </Masonry>
    );

    expect(tree).toMatchSnapshot();
  });
});
