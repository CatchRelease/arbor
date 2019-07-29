import React from 'react';
import mountWithTheme from '../../../utils/mountWithTheme';

import Spinner from '../Spinner';

describe('<Spinner />', () => {
  context('spinner is spinning', () => {
    it(`properly renders a spinner`, () => {
      const spinner = mountWithTheme(<Spinner spin />);

      expect(spinner).toMatchSnapshot();
    });

    context('theme color is provided', () => {
      it(`properly renders a spinner`, () => {
        const spinner = mountWithTheme(
          <Spinner color="palette.blue.default" spin />
        );

        expect(spinner).toMatchSnapshot();
      });
    });
  });

  context('spinner is not spinning', () => {
    it(`properly renders a spinner`, () => {
      const spinner = mountWithTheme(<Spinner spin={false} />);

      expect(spinner).toMatchSnapshot();
    });
  });
});
