import React from 'react';

import AutoComplete from '../AutoComplete';
import createWithTheme from '../../../utils/createWithTheme';

const options = [
  {
    label: 'Apples',
    value: 1
  },
  {
    label: 'Pears',
    value: 2
  },
  {
    label: 'Bananas',
    value: 3
  },
  {
    label: 'Mangos',
    value: 4
  },
  {
    label: 'Lemons',
    value: 5
  },
  {
    label: 'Apricots',
    value: 6
  }
];

describe('<AutoComplete />', () => {
  describe('Variants', () => {
    ['async', 'creatable', 'default'].forEach(variant => {
      it(`properly renders a ${variant} auto complete`, () => {
        const autoComplete = createWithTheme(
          <AutoComplete
            caption="Test the auto complete input"
            id={`auto-complete-${variant}`}
            label="AutoComplete Input"
            options={options}
            variant={variant}
          />
        );

        expect(autoComplete).toMatchSnapshot();
      });
    });
  });
});
