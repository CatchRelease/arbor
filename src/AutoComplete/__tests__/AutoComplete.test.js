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
    ['async', 'asyncCreatable', 'creatable', 'default'].forEach((variant) => {
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

  describe('hideDropdownIndicator', () => {
    context('false', () => {
      it('renders the auto complete with a dropdown indicator', () => {
        const autoComplete = createWithTheme(
          <AutoComplete
            caption="Test the auto complete input"
            hideDropdownIndicator={false}
            id="auto-complete"
            label="AutoComplete Input"
            options={options}
          />
        );

        expect(autoComplete).toMatchSnapshot();
      });
    });

    context('true', () => {
      it('renders the auto complete without a dropdown indicator', () => {
        const autoComplete = createWithTheme(
          <AutoComplete
            caption="Test the auto complete input"
            hideDropdownIndicator
            id="auto-complete"
            label="AutoComplete Input"
            options={options}
          />
        );

        expect(autoComplete).toMatchSnapshot();
      });
    });
  });
});
