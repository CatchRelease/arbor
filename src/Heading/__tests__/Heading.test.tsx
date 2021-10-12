import createWithTheme from '../../../utils/createWithTheme';

import Heading from '../Heading';

describe('Heading', () => {
  (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] as const).forEach((variant) => {
    describe(`Heading.${variant}`, () => {
      it(`renders an ${variant}`, () => {
        const Variant = Heading[variant];
        const tree = createWithTheme(
          <Variant color="white">Hello World</Variant>
        );

        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('fontSize', () => {
    it('supports responsive values', () => {
      const tree = createWithTheme(
        <Heading fontSize={['size2', 'size1']}>Yo</Heading>
      );

      expect(tree).toMatchSnapshot();
    });

    it('renders properly with mb', () => {
      const tree = createWithTheme(
        <Heading fontSize={['size2', 'size1']} mb="small">
          Yo
        </Heading>
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
