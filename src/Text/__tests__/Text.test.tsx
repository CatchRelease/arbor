import createWithTheme from '../../../utils/createWithTheme';
import Text from '../Text';

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
});
