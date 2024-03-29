import { matchers } from '@emotion/jest';

import createWithTheme from '../../../utils/createWithTheme';
import Paragraph from '../Paragraph';

expect.extend(matchers);

describe('<Paragraph />', () => {
  describe('props', () => {
    describe('variant', () => {
      (['ui', 'longForm', 'tiny'] as const).forEach((variant) => {
        it(`renders a ${variant} variant`, () => {
          const tree = createWithTheme(
            <Paragraph variant={variant}>Hello World</Paragraph>
          );

          expect(tree).toMatchSnapshot();
        });
      });
    });
  });

  describe('fontSize', () => {
    it('properly renders a paragraph with custom font preset size', () => {
      const paragraph = createWithTheme(
        <Paragraph fontSize="size6" variant="ui">
          This is a paragraph
        </Paragraph>
      );

      expect(paragraph).toMatchSnapshot();
    });

    it('properly renders a paragraph with custom pixel font size', () => {
      const paragraph = createWithTheme(
        <Paragraph fontSize="100" variant="ui">
          Size Button
        </Paragraph>
      );

      expect(paragraph).toMatchSnapshot();
    });
  });
});
