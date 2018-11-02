import React from 'react';
import { create } from 'react-test-renderer';

import { Link, theme } from '../src';

describe('<Link />', () => {
  describe('Variants', () => {
    ['default', 'muted'].forEach(variant => {
      it(`properly renders a ${variant} Link`, () => {
        const link = create(
          <Link theme={theme} href="#test" variant={variant}>
            Link
          </Link>
        );

        expect(link).toMatchSnapshot();
      });
    });
  });
});
