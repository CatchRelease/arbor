import createWithTheme from '../../../utils/createWithTheme';
import Text, { Props as TextProps } from '../Text';

describe('<Text />', () => {
  it('properly renders a Text component', () => {
    const tree = createWithTheme(
      <Text>The quick brown fox jumps over the lazy dog</Text>
    );

    expect(tree).toMatchSnapshot();
  });

  it('supports textDecoration prop', () => {
    const tree = createWithTheme(
      <Text textDecoration="line-through">
        The quick brown fox jumps over the lazy dog
      </Text>
    );

    expect(tree).toMatchSnapshot();
  });

  it('exports props compatible with itself', () => {
    // This verifies that our Text component and TextProps are compatible after
    // all our color-prop shenanigans.
    const props: TextProps = { color: 'gray' };

    const tree = createWithTheme(
      <Text {...props}>The quick brown fox jumps over the lazy dog</Text>
    );

    expect(tree).toMatchSnapshot();
  });
});
