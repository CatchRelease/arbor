import React from 'react';
import createWithTheme from '../utils/createWithTheme';

import { Link } from '../src';

describe('<Link />', () => {
  describe('Variants', () => {
    ['default', 'muted'].forEach(variant => {
      it(`properly renders a ${variant} Link`, () => {
        const link = createWithTheme(
          <Link href="#test" variant={variant}>
            Link
          </Link>
        );

        expect(link).toMatchSnapshot();
      });
    });
  });
});
